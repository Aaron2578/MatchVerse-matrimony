import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Gender options
const genderOptions = ["male", "female"];

// Zod schema
const registerSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  dateOfBirth: z.string().nonempty("Date of birth is required"),
  profileImageUrl: z.string().nonempty("Profile Image is required"),
  address: z.string().min(5, "Address is required"),
  phoneNumber: z
    .string()
    .regex(/^[0-9]{10}$/, "Phone number must be 10 digits"),
  salaryPerMonth: z.coerce.number().min(5000),
  profession: z.string().min(2, "Profession is required"),
  gender: z.enum(["male", "female"], {
    required_error: "Gender is required",
  }),
});

type SignUpFormData = z.infer<typeof registerSchema>;

export default function SignUpForm({
  onClose,
  setFormType,
}: {
  onClose: () => void;
  setFormType: (type: "signin" | "signup") => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (formData: SignUpFormData) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log("Response:", data);
      if (data.success) {
        alert("Registration successful!");
        onClose();
      }
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  };

  return (
    <div className="overflow-y-auto max-h-[80vh]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 p-6 bg-white rounded-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-700">
          Register
        </h2>

        <div>
          <label className="block font-medium text-gray-700">Name</label>
          <input
            {...register("name")}
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md"
          />
          <p className="text-red-500 text-sm">{errors.name?.message}</p>
        </div>

        <div>
          <label className="block font-medium text-gray-700">Email</label>
          <input
            {...register("email")}
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md"
          />
          <p className="text-red-500 text-sm">{errors.email?.message}</p>
        </div>

        <div>
          <label className="block font-medium text-gray-700">Password</label>
          <input
            type="password"
            {...register("password")}
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md"
          />
          <p className="text-red-500 text-sm">{errors.password?.message}</p>
        </div>

        <div>
          <label className="block font-medium text-gray-700">
            Date of Birth
          </label>
          <input
            type="date"
            {...register("dateOfBirth")}
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md"
          />
          <p className="text-red-500 text-sm">{errors.dateOfBirth?.message}</p>
        </div>

        <div>
          <label className="block font-medium text-gray-700">
            Profile Image URL
          </label>
          <input
            {...register("profileImageUrl")}
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md"
          />
          <p className="text-red-500 text-sm">
            {errors.profileImageUrl?.message}
          </p>
        </div>

        <div>
          <label className="block font-medium text-gray-700">Address</label>
          <textarea
            {...register("address")}
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md"
            rows={3}
          />
          <p className="text-red-500 text-sm">{errors.address?.message}</p>
        </div>

        <div>
          <label className="block font-medium text-gray-700">
            Phone Number
          </label>
          <input
            {...register("phoneNumber")}
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md"
          />
          <p className="text-red-500 text-sm">{errors.phoneNumber?.message}</p>
        </div>

        <div>
          <label className="block font-medium text-gray-700">
            Salary Per Month
          </label>
          <input
            {...register("salaryPerMonth")}
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md"
          />
          <p className="text-red-500 text-sm">
            {errors.salaryPerMonth?.message}
          </p>
        </div>

        <div>
          <label className="block font-medium text-gray-700">Profession</label>
          <input
            {...register("profession")}
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md"
          />
          <p className="text-red-500 text-sm">{errors.profession?.message}</p>
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">Gender</label>
          <div className="flex gap-4">
            {genderOptions.map((gender) => (
              <label key={gender} className="flex items-center gap-2">
                <input
                  type="radio"
                  value={gender}
                  {...register("gender")}
                  className="accent-blue-600"
                />
                {gender}
              </label>
            ))}
          </div>
          <p className="text-red-500 text-sm">{errors.gender?.message}</p>
        </div>

        <div className="flex gap-6 pt-4 justify-center">
          <button
            type="button"
            onClick={onClose}
            className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition"
          >
            Close
          </button>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </div>

        <div className="text-center pt-4">
          Already have an account?{" "}
          <span
            onClick={() => setFormType("signin")}
            className="text-blue-600 underline cursor-pointer"
          >
            Sign In
          </span>
        </div>
      </form>
    </div>
  );
}
