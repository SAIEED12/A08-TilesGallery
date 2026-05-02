"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";

const UpdateProfilePage = () => {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;

    const toastId = toast.loading("Updating profile...");
    try {
      await authClient.updateUser({ name, image });
      toast.success("Profile updated!", { id: toastId });
      router.push("/my-profile");
    } catch (err) {
      toast.error("Update failed. Try again.", { id: toastId });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0b] flex items-center justify-center px-4">
      <div className="w-full max-w-md">

        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-[#e09f2d] mb-3">✦ My Profile</p>
          <h1 className="text-4xl font-semibold text-white">Update Information</h1>
          <p className="text-gray-500 text-sm mt-3">Change your name or profile picture</p>
        </div>
        <div className="bg-[#111113] border border-white/10 rounded-xl p-8 space-y-6">
          <form onSubmit={onSubmit} className="flex flex-col gap-5">

            <div className="flex flex-col gap-1.5">
              <label className="text-xs uppercase tracking-widest text-gray-400">
                Full Name
              </label>
              <input
                name="name"
                type="text"
                placeholder="John Doe"
                required
                className="w-full bg-[#1a1a1c] border border-white/10 rounded-lg px-4 py-3
                           text-white placeholder:text-gray-600 text-sm
                           focus:outline-none focus:border-[#e09f2d]/50 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs uppercase tracking-widest text-gray-400">
                Profile Image URL
              </label>
              <input
                name="image"
                type="url"
                placeholder="https://example.com/avatar.jpg"
                required
                className="w-full bg-[#1a1a1c] border border-white/10 rounded-lg px-4 py-3
                           text-white placeholder:text-gray-600 text-sm
                           focus:outline-none focus:border-[#e09f2d]/50 transition-colors"
              />
            </div>

            <div className="h-px bg-white/10" />
            <div className="flex gap-3">
              <Link
                href="/my-profile"
                className="flex-1 py-3 border border-white/10 text-gray-400 text-sm text-center
                           rounded-sm hover:border-white/20 hover:text-white transition-colors"
              >
                Cancel
              </Link>
              <button
                type="submit"
                className="flex-1 py-3 bg-[#e09f2d] text-black font-semibold text-sm
                           rounded-sm hover:bg-[#d18706] transition-colors"
              >
                Update Information
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
};

export default UpdateProfilePage;