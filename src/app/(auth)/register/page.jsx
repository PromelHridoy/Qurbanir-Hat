"use client";

import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [isShowPassword, setIsShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRegister = async (data) => {
    setLoading(true);
    console.log(data);
    
    const { email, name, photo, password } = data;
    console.log(email,name);
    

    const { data: res, error } = await authClient.signUp.email({
      name,
      email,
      password,
      image: photo,
      callbackURL: "/",
    });

    setLoading(false);

    if (error) {
      toast.error(error.message);
      return;
    }

    if (res) {
      toast.success("Account created successfully 🎉");
      reset();
    }
  };

  const handleGoogleSignin = async () => {
        const data = await authClient.signIn.social({
    provider: "google",
     });
     console.log(data);
     
    }

  return (
    <div className="container mx-auto min-h-[90vh] flex justify-center items-center bg-slate-100">
      <div className="p-6 rounded-2xl shadow-lg bg-white w-full max-w-md">
        <h2 className="font-bold text-3xl text-center mb-4">
              Register your account
        </h2>

        <form
          className="space-y-3"
          onSubmit={handleSubmit(handleRegister)}
        >
          {/* Name */}
          <fieldset>
            <label className="font-medium">Name</label>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Enter your name"
              {...register("name", {
                required: "Name is required",
              })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">
                {errors.name.message}
              </p>
            )}
          </fieldset>

          {/* Photo */}
          <fieldset>
            <label className="font-medium">Photo URL</label>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Enter image URL"
              {...register("photo", {
                required: "Photo URL is required",
              })}
            />
            {errors.photo && (
              <p className="text-red-500 text-sm">
                {errors.photo.message}
              </p>
            )}
          </fieldset>

          {/* Email */}
          <fieldset>
            <label className="font-medium">Email</label>
            <input
              type="email"
              className="input input-bordered w-full"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email format",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">
                {errors.email.message}
              </p>
            )}
          </fieldset>

          {/* Password */}
          <fieldset className="relative">
            <label className="font-medium">Password</label>
            <input
              type={isShowPassword ? "text" : "password"}
              className="input input-bordered w-full"
              placeholder="Enter password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters required",
                },
              })}
            />
            <span
              className="absolute right-3 top-[38px] cursor-pointer"
              onClick={() => setIsShowPassword(!isShowPassword)}
            >
              {isShowPassword ? <FaEye /> : <FaEyeSlash />}
            </span>

            {errors.password && (
              <p className="text-red-500 text-sm">
                {errors.password.message}
              </p>
            )}
          </fieldset>

          {/* Button */}
          <button
            disabled={loading}
            className="btn w-full bg-slate-900 text-white"
          >
            {loading ? "Creating..." : "Register"}
          </button>
        </form>

        {/* Divider */}
        <div className="divider">OR</div>

        {/* Google Login */}
        <button
          onClick={handleGoogleSignin}
          className="btn w-full"
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default RegisterPage;