"use client";
import { authClient } from "@/lib/auth-client";
import { FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast, Bounce } from "react-toastify";
import { GrGoogle } from "react-icons/gr";

export default function RegistrationPage() {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
      image,
    });

    console.log({ data, error });
    if (!error) {
      router.push("/");
    } else {
      toast.error(`${error.message}`, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
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
          <p className="text-md uppercase tracking-[0.3em] text-[#e09f2d] mb-3">
            ✦ Join the Atelier
          </p>
          <h1 className="text-5xl font-semibold text-white">Create Account</h1>
          <p className="text-white/50 text-md mt-3">
            Begin your curated tile journey
          </p>
        </div>
        <div className="bg-[#111113] border border-white/10 rounded-xl p-8 space-y-5">
          <Form className="flex flex-col gap-5" onSubmit={onSubmit}>
            <TextField
              isRequired
              name="name"
              type="text"
              className="flex flex-col gap-1.5"
            >
              <Label className="text-md uppercase tracking-widest text-white">
                Full Name
              </Label>
              <Input
                placeholder="John Doe"
                className="w-full bg-[#1a1a1c] border border-white/10 rounded-lg px-4 py-3
                           text-white placeholder:text-white/50 text-md
                           focus:outline-none focus:border-[#e09f2d]/50 transition-colors"
              />
              <FieldError className="text-red-400 text-md" />
            </TextField>

            <TextField
              isRequired
              name="image"
              type="text"
              className="flex flex-col gap-1.5"
            >
              <Label className="text-md uppercase tracking-widest text-white">
                Profile Image URL
              </Label>
              <Input
                placeholder="https://example.com/avatar.jpg"
                className="w-full bg-[#1a1a1c] border border-white/10 rounded-lg px-4 py-3
                           text-white placeholder:text-white/50 text-md
                           focus:outline-none focus:border-[#e09f2d]/50 transition-colors"
              />
              <FieldError className="text-red-400 text-md" />
            </TextField>
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
              <Label className="text-md uppercase tracking-widest text-white">
                Email
              </Label>
              <Input
                placeholder="Enter your email"
                className="w-full bg-[#1a1a1c] border border-white/10 rounded-lg px-4 py-3
                           text-white placeholder:text-white/50 text-sm
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
                if (!/[A-Z]/.test(value))
                  return "Must contain one uppercase letter";
                if (!/[0-9]/.test(value)) return "Must contain one number";
                return null;
              }}
            >
              <Label className="text-md uppercase text-white tracking-widest">
                Password
              </Label>
              <Input
                placeholder="Enter your password"
                className="w-full bg-[#1a1a1c] border border-white/10 rounded-lg px-4 py-3
                           text-white placeholder:text-white/50 text-md
                           focus:outline-none focus:border-[#e09f2d]/50 transition-colors"
              />
              <p className="text-sm text-white/80 mt-1 tracking-wide">
                Min 8 characters · 1 uppercase · 1 number
              </p>
              <FieldError className="text-red-400 text-md" />
            </TextField>
            <button
              type="submit"
              className="w-full bg-[#e09f2d] text-black font-semibold text-md 
                         py-3 rounded-sm hover:bg-[#d18706] mt-2 cursor-pointer"
            >
              Register
            </button>
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
          </Form>
        </div>
        
        <p className="text-center text-md text-white/50 mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-[#e09f2d] hover:underline">
            Sign In
          </Link>
        </p>

      </div>
    </div>
  );
}
