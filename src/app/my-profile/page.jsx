"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";
import Link from "next/link";
import { BiEdit } from "react-icons/bi";
const MyProfilePage = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  return (
    <div>
      <Card className="max-w-96 mx-auto flex flex-col items-center gap-4 mt-20 p-10 bg-[#111113] border border-white/10">
        <Avatar className="h-20 w-20">
          <Avatar.Image
            alt={user?.name}
            src={user?.image}
            referrerPolicy="no-referrer"
          />
          <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
        </Avatar>
        <h2 className="text-2xl font-semibold text-white">{user?.name}</h2>
        <p className="text-gray-400 text-lg">{user?.email}</p>
        <Link
          href="/my-profile/update"
          className="flex items-center gap-2 px-5 py-2.5 border border-[#e09f2d]/40
             text-[#e09f2d] text-sm font-medium tracking-wide rounded-sm
             hover:bg-[#e09f2d]/10 transition-colors"
        >
          <BiEdit />
          Update Profile
        </Link>
      </Card>
    </div>
  );
};

export default MyProfilePage;
