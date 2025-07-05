import { Link } from "react-router-dom";
import BannerImage from "../assets/BannerImage";
import Button from "../components/Button";
import Header from "../components/Header";
import Footer from "../components/Footer";
import type { Dispatch, SetStateAction } from "react";

function Home({
  handleOpenModel,
  userData,
  setUserData,
}: {
  handleOpenModel: (type: "signin" | "signup") => void;
  userData: any;
  setUserData: Dispatch<SetStateAction<any>>;
}) {
  return (
    <>
      <Header
        setUserData={setUserData}
        userData={userData}
        handleOpenModel={handleOpenModel}
      />
      {/* Hero Section */}
      <div className="w-[90%] m-auto flex flex-col-reverse sm:flex-row items-center">
        {/* Text Content */}
        <div className="font-medium sm:w-[60%] sm:font-sans sm:text-4xl sm:leading-loose text-center sm:text-left">
          <span className="block font-[cursive] sm:text-2xl mt-5">
            Find your 💍forever, today
          </span>
          <span className="sm:mb-20">
            💞Because every love story deserves a
            <span className="block text-purple-500 font-bold sm:text-6xl">
              Beautiful Beginning
            </span>
          </span>
          <div className="flex gap-4 mt-8 justify-center sm:justify-start">
            {userData ? (
              <Link to={"/matches"}>
                <Button content={"Find Matches"} />
              </Link>
            ) : (
              <>
                <Button
                  handleClick={() => handleOpenModel("signup")}
                  content={"Register"}
                />
                <Button
                  handleClick={() => handleOpenModel("signin")}
                  content={"Login"}
                  color={"pink_out"}
                  fontColor={"blue"}
                />
              </>
            )}
          </div>
        </div>

        {/* Image */}
        <div className="w-full sm:w-[40%]">
          <BannerImage />
        </div>
      </div>
      {/* How It Works Section */}
      <section className="bg-gray-50 py-12 mt-12">
        <div className="w-[90%] mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            How It Works
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            <div>
              <div className="text-5xl text-purple-500 mb-3">📝</div>
              <h3 className="font-semibold text-xl mb-2">Create Profile</h3>
              <p className="text-gray-600">
                Sign up and set up your personal and professional details.
              </p>
            </div>
            <div>
              <div className="text-5xl text-pink-400 mb-3">🔍</div>
              <h3 className="font-semibold text-xl mb-2">Find Matches</h3>
              <p className="text-gray-600">
                Explore users that match your preferences and interests.
              </p>
            </div>
            <div>
              <div className="text-5xl text-blue-500 mb-3">💬</div>
              <h3 className="font-semibold text-xl mb-2">Connect</h3>
              <p className="text-gray-600">
                Start conversations and build meaningful relationships.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us Section */}
      <section className="py-12">
        <div className="w-[90%] mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Why Choose Us?
          </h2>
          <div className="grid sm:grid-cols-3 gap-8 text-left">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <h4 className="font-semibold text-lg mb-2 text-blue-700">
                Verified Profiles
              </h4>
              <p className="text-gray-600">
                We ensure all users are real, authentic, and looking for
                meaningful relationships.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <h4 className="font-semibold text-lg mb-2 text-purple-700">
                Smart Matchmaking
              </h4>
              <p className="text-gray-600">
                Advanced algorithms bring the best matches based on your
                preferences.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <h4 className="font-semibold text-lg mb-2 text-pink-700">
                Privacy Focused
              </h4>
              <p className="text-gray-600">
                Your personal data and conversations are safe and secure with
                us.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* More Testimonials with Photos */}
      <section className="bg-white py-12">
        <div className="w-[90%] mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            More Happy Couples
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg shadow hover:shadow-lg transition-all p-5">
              <img
                src={`https://faithfullyplanted.com/wp-content/uploads/2018/10/MarriedCoupleLove.jpg`}
                alt="Ayesha & Rohit"
                className="rounded-md w-full h-56 object-cover mb-4"
              />
              <p className="text-gray-600 italic">
                "It’s not just a site, it’s a journey of emotions. Grateful for
                the match I found here!"
              </p>
              <p className="mt-3 font-semibold text-gray-900">
                — Ayesha & Rohit
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg shadow hover:shadow-lg transition-all p-5">
              <img
                src={`https://res.chinachristiandaily.com/data/images/20231027/cwiu7b9vxuetemqcx7.png?w=690`}
                alt="Neha & Varun"
                className="rounded-md w-full h-56 object-cover mb-4"
              />
              <p className="text-gray-600 italic">
                "Thanks to this site, I got engaged to the most amazing person
                I've ever met."
              </p>
              <p className="mt-3 font-semibold text-gray-900">— Neha & Varun</p>
            </div>
            <div className="bg-gray-50 rounded-lg shadow hover:shadow-lg transition-all p-5">
              <img
                src={`https://rejoiceministries.org/wp-content/uploads/2022/12/144_Brad-Anne_wide-768x432.jpg`}
                alt="Deepa & Kunal"
                className="rounded-md w-full h-56 object-cover mb-4"
              />
              <p className="text-gray-600 italic">
                "The journey was smooth, exciting, and beautiful. I recommend
                this to all my friends!"
              </p>
              <p className="mt-3 font-semibold text-gray-900">
                — Deepa & Kunal
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
