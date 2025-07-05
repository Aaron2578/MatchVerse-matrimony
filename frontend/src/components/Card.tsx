type UserProps = {
  user: {
    name: string;
    profileImageUrl: string;
    gender: string;
    dateOfBirth: string;
    phoneNumber: string;
    profession: string;
    salaryPerMonth: string;
  };
};

const Card = ({ user }: UserProps) => {
  const formattedDOB = new Date(user.dateOfBirth).toISOString().split("T")[0];
  return (
    <div className="bg-white rounded-lg shadow-md p-4 text-center">
      <img
        src={user.profileImageUrl}
        alt={user.name}
        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
      />
      <h3 className="text-xl font-semibold">{user.name.toUpperCase()}</h3>
      <p className="mt-2">{user.gender}</p>
      <p>DOB: {formattedDOB}</p>
      <p>Phone: {user.phoneNumber}</p>
      <p>Profession: {user.profession}</p>
      <p>Salary: ₹{user.salaryPerMonth}</p>
    </div>
  );
};

export default Card;
