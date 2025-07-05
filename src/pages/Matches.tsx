import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import type { Dispatch, SetStateAction } from "react";

type UserType = {
  _id: string;
  name: string;
  email: string;
  profileImageUrl: string;
  gender: string;
  dateOfBirth: string;
  phoneNumber: string;
  profession: string;
  salaryPerMonth: string;
};

function Matches({
  userData,
  handleOpenModel,
  setUserData,
}: {
  userData: UserType;
  handleOpenModel: (type: "signin" | "signup") => void;
  setUserData: Dispatch<SetStateAction<any>>;
}) {
  const [matches, setMatches] = useState<UserType[]>([]);

  async function handleFetch() {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/user`);
      const responseData = await res.json();
      console.log("✅ Full API Response:", responseData);

      const userArray = responseData.users;

      if (responseData.success && Array.isArray(userArray)) {
        const filtered = userArray.filter(
          (u: UserType) => u._id !== userData?._id
        );
        setMatches(filtered);
      } else {
        console.error("❌ Unexpected structure in response:", responseData);
      }
    } catch (err) {
      console.error("❌ Fetching users failed:", err);
    }
  }

  useEffect(() => {
    if (userData?._id) {
      handleFetch();
    }
  }, [userData]);

  return (
    <div>
      <Header
        handleOpenModel={handleOpenModel}
        setUserData={setUserData}
        userData={userData}
      />
      {!userData?._id ? (
        <div className="flex items-center justify-center h-[60vh] text-center">
          <div className="bg-white p-6 rounded-md shadow-md max-w-md w-full">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Please log in to view your matches
            </h2>
            <p className="text-gray-500 mb-4">
              Sign in or register to discover people that match your profile.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => handleOpenModel("signin")}
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Sign In
              </button>
              <button
                onClick={() => handleOpenModel("signup")}
                className="bg-gray-300 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-400 transition"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-[90%] mx-auto grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
          {matches.length === 0 ? (
            <p className="text-center text-gray-600 col-span-full">
              No matches found
            </p>
          ) : (
            matches.map((user) => <Card key={user._id} user={user} />)
          )}
        </div>
      )}
      <Footer />;
    </div>
  );
}

export default Matches;
