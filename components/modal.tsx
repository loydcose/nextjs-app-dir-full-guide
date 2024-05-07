import React, { Suspense } from "react";

export default function Modal() {
  return (
    <>
      <div>
        <h1>This is a modal</h1>
        <p>The content below is an async operation layout in a suspense.</p>
      </div>
      <div>
        <p>This is the content that has been generated.</p>
        <p>
          Also, this whole modal component were dynamically imported, that means
          this file wasn&apos;t available at first which reduces the LCP.
        </p>
      </div>
      <Suspense
        fallback={
          <div className="h-20 rounded-lg w-full bg-zinc-200 animate-pulse"></div>
        }
      >
        <ContentBelow />
      </Suspense>
    </>
  );
}

export async function ContentBelow() {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const { body, email } = await fetch(
    `https://jsonplaceholder.typicode.com/comments/${randomNumber}`
  ).then((res) => res.json());

  return (
    <div>
      <h2>{email}</h2>
      <p>{body}</p>
    </div>
  );
}
