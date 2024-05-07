import Modal from "@/components/modal";
import OpenModal from "@/components/open-modal";
import ProductInfo from "@/components/product-info";
import React, { Suspense } from "react";

export default function page() {
  return (
    <>
      <div className="mb-12">
        <h1>Suspense blocks</h1>
        <p>
          Server components that has mutiple set of suspense and leaving all the
          static values up front.
        </p>
        <p>
          This is the best way how we can utilize and leverage nextjs true
          power.
        </p>
      </div>
      <Suspense
        fallback={
          <div className="flex flex-col gap-2">
            <div className="h-6 rounded-lg w-[80%] max-w-[300px] bg-zinc-200 animate-pulse"></div>
            <div className="h-20 rounded-lg w-full bg-zinc-200 animate-pulse"></div>
          </div>
        }
      >
        <ProductInfo />
      </Suspense>
      <OpenModal />
      {/* <Modal /> */}
    </>
  );
}
