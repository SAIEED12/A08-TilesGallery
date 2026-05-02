"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, TextField } from "@heroui/react";
import { BiUser } from "react-icons/bi";

export function UpdateProfile() {
  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;

    await authClient.updateUser({ name, image });
  };

  return (
    <div className="bg-[#111113] border border-white/10 rounded-xl shadow-2xl p-8 sm:max-w-md w-full">

      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-full bg-[#e09f2d]/10 border border-[#e09f2d]/20 flex items-center justify-center">
          <BiUser className="text-[#e09f2d] text-lg" />
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-[#e09f2d]">✦ Profile</p>
          <h2 className="text-xl font-semibold text-white">Update Profile</h2>
        </div>
      </div>
      <form onSubmit={onSubmit} className="flex flex-col gap-5">

        <TextField className="flex flex-col gap-1.5 w-full" name="name" type="text">
          <Label className="text-md tracking-widest text-white font-semibold">Full Name</Label>
          <Input
            placeholder="Enter New Name"
            className="w-full bg-[#1a1a1c] border border-white/10 rounded-lg px-4 py-3
                       text-white placeholder:text-white/50 text-sm
                       focus:outline-none focus:border-[#e09f2d]/50 transition-colors"
          />
        </TextField>

        <TextField className="flex flex-col gap-1.5 w-full" name="image" type="url">
          <Label className="text-md font-semibold tracking-widest text-white">Profile Image URL</Label>
          <Input
            placeholder="https://example.com/avatar.jpg"
            className="w-full bg-[#1a1a1c] border border-white/10 rounded-lg px-4 py-3
                       text-white placeholder:text-white/50 text-sm
                       focus:outline-none focus:border-[#e09f2d]/50 transition-colors"
          />
        </TextField>

        <div className="h-px bg-white/10 my-1" />

        <Button
          type="submit"
          className="w-full py-3 bg-[#e09f2d] text-black font-semibold text-sm
                     rounded-sm hover:bg-[#d18706] transition-colors border-none"
        >
          Update Information
        </Button>

      </form>
    </div>
  );
}