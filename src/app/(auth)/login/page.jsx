"use client";

import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import Link from "next/link";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isShowPassword, setIsShowPassword] = useState(false);
  const [loading, setLoading] = useState(false); 

  const handleLogin = async (data) => {
    setLoading(true); 

    const { email, password } = data;

    const { data: res, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });

    setLoading(false); 

    if (error) {
      toast.error(error.message);
      return;
    }

    if (res) {
      toast.success("Login successful 🎉");
    }
  };

  return (
    <div className="min-h-[70vh] flex justify-center items-center bg-slate-100">
      <div className="p-6 rounded-2xl shadow-lg bg-white w-full max-w-md">
        <h2 className="font-bold text-3xl text-center mb-4">
          Login to your account
        </h2>

        <form onSubmit={handleSubmit(handleLogin)} className="space-y-3">
          {/* Email */}
          <fieldset>
            <label className="font-medium">Email</label>
            <input
              type="email"
              className="input input-bordered w-full"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
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
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
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
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Register Link */}
        <p className="mt-2 text-center">
          Do not have an account?{" "}
          <Link href="/register" className="text-red-500">
            Register
          </Link>
        </p>

        {/* Divider */}
        <div className="divider">OR</div>

        {/* Google Login */}
        <button
          onClick={() =>
            authClient.signIn.social({ provider: "google" })
          }
          className="btn w-full"
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;