"use client";

import React, { Suspense } from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
// import dynamic from "next/dynamic";
import Modal from "./modal";

// const Modal = dynamic(() => import("./modal"), {
//   loading: () => (
//     <div className="h-20 rounded-lg w-full bg-zinc-200 animate-pulse"></div>
//   ),
// });

export default function OpenModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="absolute bottom-20 right-20 bg-black text-white px-4 py-2 text-sm rounded-lg"
        >
          Open the modal
        </button>
      </DialogTrigger>
      <DialogContent>
        <Modal />
      </DialogContent>
    </Dialog>
  );
}
