import { api, HydrateClient } from "@evaluation-app/trpc/server";
import { LatestPost } from "@evaluation-app/app/components/post";

//https://github.com/vercel/next.js/discussions/59088
//annoying error
export const dynamic = "force-dynamic";

export default async function Page() {
  //TODO this need to long to load it may be used wrong after connecting with clerk
  await api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main>
        <LatestPost />
      </main>
    </HydrateClient>
  );
}
