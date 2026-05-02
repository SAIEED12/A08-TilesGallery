"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { BiEdit, BiUser } from "react-icons/bi";

export function UpdateUserModal() {
  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;

    await authClient.updateUser({ name, image });
  };

  return (
    <Modal>
      <Button variant="secondary" className="flex items-center gap-2 px-5 py-2.5 border border-[#e09f2d]/40 
                   text-[#e09f2d] text-sm font-medium tracking-wide rounded-sm
                   bg-transparent hover:bg-[#e09f2d]/10 transition-colors">
        <BiEdit className="text-base" />
        Update Profile
      </Button>

      <Modal.Backdrop className="bg-black/70 backdrop-blur-sm">
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md bg-[#111113] border border-white/10 rounded-xl shadow-2xl p-8">
            <Modal.CloseTrigger className="text-gray-500 hover:text-white transition-colors" />

            <Modal.Header className="flex items-center gap-3 mb-8">
              <Modal.Icon className="w-10 h-10 rounded-full bg-[#e09f2d]/10 border border-[#e09f2d]/20 flex items-center justify-center">
                <BiUser className="text-[#e09f2d] text-lg" />
              </Modal.Icon>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-[#e09f2d]">✦ Profile</p>
                <Modal.Heading className="text-xl font-semibold text-white">Update User</Modal.Heading>
              </div>
            </Modal.Header>

            <Modal.Body className="p-0">
              <Surface variant="default" className="bg-transparent">
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

                  <Modal.Footer className="flex items-center gap-3 p-0">
                    <Button
                      slot="close"
                      variant="secondary"
                      className="flex-1 py-3 border border-white/10 text-gray-400 text-sm
                                 rounded-sm hover:border-white/20 hover:text-white transition-colors bg-transparent"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      slot="close"
                      className="flex-1 py-3 bg-[#e09f2d] text-black font-semibold text-sm
                                 rounded-sm hover:bg-[#d18706] transition-colors border-none"
                    >
                      Update Information
                    </Button>
                  </Modal.Footer>

                </form>
              </Surface>
            </Modal.Body>

          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}