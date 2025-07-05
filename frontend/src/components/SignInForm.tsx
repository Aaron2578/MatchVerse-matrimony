import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";

const signInSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type SignInData = z.infer<typeof signInSchema>;

const SignInForm = ({
  onClose,
  setUserData,
}: {
  onClose: () => void;
  setUserData: Dispatch<SetStateAction<any>>;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInData>({
    resolver: zodResolver(signInSchema),
  });

  const navigate = useNavigate();
  const [serverError, setServerError] = useState("");

  const onSubmit: SubmitHandler<SignInData> = async (formData) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log("Response:", data);

      if (data.success) {
        localStorage.setItem("userData", JSON.stringify(data.data));
        setUserData(data.data);
        onClose();
        navigate("/matches");
      } else {
        setServerError("Wrong email or password");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setServerError("Something went wrong. Please try again later.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 p-6 bg-white rounded-md"
    >
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-700">
        Sign In
      </h2>

      {serverError && (
        <div className="text-red-600 bg-red-100 px-3 py-2 rounded text-center">
          {serverError}
        </div>
      )}

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
          Sign In
        </button>
      </div>
    </form>
  );
};

export default SignInForm;
