import { useEffect, useState } from "react";
import DashboardCard from "../components/DashboardCard";

import user from "../assets/user.svg";
import success from "../assets/success.svg";
import unsuccess from "../assets/unsuccess.svg";
import feedback from "../assets/feedback.svg";

const AdminDashboard = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/users`);
        const data = await res.json();

        if (data.success) {
          setUsers(data.users);
        } else {
          console.error("Failed to fetch users");
        }
      } catch (err) {
        console.error("Error fetching users:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Gender count
  const total = users.length;
  const male = users.filter((u) => u.gender === "Male").length;
  const female = users.filter((u) => u.gender === "Female").length;

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center text-blue-800">
          Admin Dashboard 👩‍💼
        </h2>

        {loading ? (
          <p className="text-center text-gray-600 text-lg animate-pulse">
            Loading users...
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            <DashboardCard total={total} title={"Total Users"} img={user} />
            <DashboardCard total={male} title={"Male Users"} img={user} />
            <DashboardCard total={female} title={"Female Users"} img={user} />
            <DashboardCard total={25} title={"Success Matches"} img={success} />
            <DashboardCard
              total={35}
              title={"Pending Matches"}
              img={unsuccess}
            />
            <DashboardCard total={20} title={"Feedbacks"} img={feedback} />
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
