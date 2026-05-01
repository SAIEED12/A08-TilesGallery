"use client";
import { authClient } from "@/lib/auth-client";
import { Button, Card, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { GrGoogle } from "react-icons/gr";
import Link from "next/link";
import { toast, Zoom } from "react-toastify";

export default function SignInPage() {
  const onSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });
    if (error) {
      toast.error(`${error.message}`, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      });
    }
  };


  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({ 
        provider: "google"
     });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0b] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <p className="text-md uppercase tracking-[0.3em] text-[#e09f2d] mb-3">✦ Welcome Back</p>
          <h1 className="text-5xl font-semibold text-white">Sign In</h1>
          <p className="text-white/50 text-md mt-3">
            Access your curated collection
          </p>
        </div>
        <div className="bg-[#111113] border border-white/10 rounded-xl p-8 space-y-6">

          <Form className="flex flex-col gap-5" onSubmit={onSubmit}>
            <TextField
              isRequired
              name="email"
              type="email"
              className="flex flex-col gap-1.5"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value))
                  return "Please enter a valid email address";
                return null;
              }}
            >
              <Label className="text-md uppercase tracking-widest text-white">Email</Label>
              <Input
                placeholder="john@example.com"
                className="w-full bg-[#1a1a1c] border border-white/10 rounded-lg px-4 py-3 
                           text-white placeholder:text-white/50 text-md
                           focus:outline-none focus:border-[#e09f2d]/50 transition-colors"
              />
              <FieldError className="text-red-400 text-md" />
            </TextField>
            <TextField
              isRequired
              name="password"
              type="password"
              className="flex flex-col gap-1.5"
              validate={(value) => {
                if (value.length < 8) return "Must be at least 8 characters";
                if (!/[A-Z]/.test(value)) return "Must contain one uppercase letter";
                if (!/[0-9]/.test(value)) return "Must contain one number";
                return null;
              }}
            >
              <Label className="text-md uppercase tracking-widest text-white">Password</Label>
              <Input
                placeholder="Enter your password"
                className="w-full bg-[#1a1a1c] border border-white/10 rounded-lg px-4 py-3 
                           text-white placeholder:text-white/50 text-md
                           focus:outline-none focus:border-[#e09f2d]/50 transition-colors"
              />
              <FieldError className="text-red-400 text-md" />
            </TextField>
            <button
              type="submit"
              className="w-full bg-[#e09f2d] text-black font-semibold text-md tracking-wide
                         py-3 rounded-sm hover:bg-[#d18706] transition-colors mt-2 cursor-pointer"
            >
              Sign In
            </button>

          </Form>
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-md text-white/50 uppercase tracking-widest">or</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>
          <button
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center gap-3 border border-white/10 
                       rounded-sm py-3 text-md text-white/50 hover:border-[#e09f2d]/40 
                       hover:text-white transition-colors bg-transparent cursor-pointer "
          >
            <GrGoogle className="text-[#e09f2d]" />
            Continue with Google
          </button>

        </div>

        <p className="text-center text-md text-white/50 mt-6">
          Don&apos;t have an account?{" "}
          <Link href="/registration" className="text-[#e09f2d] hover:underline">
           Register Now
          </Link>
        </p>

      </div>
    </div>
  );
}