import { unstable_noStore } from "next/cache";
import React from "react";

export default async function page() {
  unstable_noStore();
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <>
      <div className="mb-12">
        <h1>One block suspense/loading</h1>
        <p>This is most people set up their nextjs projects.</p>
        <p>
          They kept putting all async operations all in one page (and yes,
          static values such as text are included), which is why its blocking
          the whole page and then reduce the LCP :(
        </p>
      </div>
      <div>
        <h2>This is a product</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid
          ipsum placeat sint nihil reprehenderit, officia consequatur quis
          quaerat nostrum facilis sed! Voluptas, vero facilis inventore
          architecto enim a rem perferendis! Rerum odit delectus recusandae.
          Reiciendis dolorum facere quae ipsum velit impedit, iste vitae
          adipisci, ad ratione repellat delectus quis!
        </p>
      </div>
    </>
  );
}
