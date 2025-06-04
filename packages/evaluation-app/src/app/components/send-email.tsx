"use client";

import { useState } from "react";
import { api } from "@evaluation-app/trpc/react";
import { useUser } from "@clerk/nextjs";
import type { Post } from "@prisma/client";

export function LatestPost() {
  const [allPosts] = api.post.getAll.useSuspenseQuery();
  const { user } = useUser();

  const utils = api.useUtils();
  const [text, setText] = useState("");
  const createPost = api.post.create.useMutation({
    onSuccess: async () => {
      await utils.post.invalidate();
      setText("");
    },
  });

  return (
    <div className="mx-auto max-w-md space-y-6 p-8">
      <h1 className="text-center text-2xl font-bold dark:text-white">Post</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (user?.username)
            createPost.mutate({ text, userName: user.username });
        }}
        className="space-y-4"
      >
        <div>
          <input
            id="postName"
            type="text"
            placeholder="Enter post title"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full rounded-lg border px-4 py-2 text-black focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className={`w-full rounded-lg px-6 py-2 font-semibold text-white transition ${
            createPost.isPending
              ? "cursor-not-allowed bg-gray-400"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
          disabled={createPost.isPending}
        >
          {createPost.isPending ? "Submitting..." : "Submit"}
        </button>
      </form>

      <h1 className="text-center text-2xl font-bold dark:text-white">Post</h1>

      {allPosts && allPosts.length > 0 ? (
        <div className="space-y-4">
          {allPosts.map((post: Post) => (
            <div
              key={post.id}
              className="flex items-center gap-4 border-b pb-4 dark:text-white"
            >
              {post.userName}:
              <div>
                <p className="text-sm text-gray-500">{post.text}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-lg text-gray-700">
          No posts available yet.
        </p>
      )}
    </div>
  );
}
