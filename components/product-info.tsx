import React from "react";

export default async function ProductInfo() {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const { body, email } = await fetch(
    `https://jsonplaceholder.typicode.com/comments/${randomNumber}`,
    { cache: "no-store" }
  ).then((res) => res.json());

  return (
    <div>
      <h2>{email}</h2>
      <p>{body}</p>
    </div>
  );
}
