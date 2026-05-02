"use client";
import { UpdateUserModal } from "@/components/UpdateUserModal";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";
import { UpdateProfile } from "../update-profile/page";
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
        <UpdateProfile></UpdateProfile>
      </Card>
    </div>
  );
};

export default MyProfilePage;
