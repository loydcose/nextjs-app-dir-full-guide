"use client";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [state, setState] = useState("");

  useEffect(() => {
    const getData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setState("Hello world!");
    };

    getData();
  }, []);

  return (
    <>
      <div className="mb-12">
        <h1>Now, this is the old way how we set up and handle async.</h1>
        <p>Of course using hooks such as state and effects</p>
        <p>
          One main problem on this approach, is we tend to run this page in
          client mode. That means we don&apos;t take much advantage about nextjs
          server side rendering.
        </p>
        <p>SSR will have several approash such as SEO and performance.</p>
      </div>

      <p>
        Data result here: <span>{state}</span>
      </p>
    </>
  );
}
