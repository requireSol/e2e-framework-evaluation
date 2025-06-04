"use client";

import { useSession, useUser } from "@clerk/nextjs";
import Image from "next/image";

function Row({
  desc,
  value,
  children,
}: {
  desc: string;
  value: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative grid h-[2.125rem] grid-cols-2 items-center">
      <span className="block flex-shrink-0 text-xs font-semibold dark:text-gray-200">
        {desc}
      </span>
      <span className="relative block font-mono text-xs text-[#7D7D7E] dark:text-gray-400">
        <span className="block w-full truncate">{value}</span>
        {children}
      </span>
    </div>
  );
}

function PointerC({ label }: { label: string }) {
  return (
    <div className="absolute top-1/2 left-full flex w-fit -translate-y-1/2 items-center gap-5">
      <div className="relative">
        <div className="h-px w-[6.5rem] bg-[#BFBFC4] dark:bg-gray-600" />
        <div className="absolute top-1/2 right-0 size-1 -translate-y-1/2 rotate-45 bg-[#BFBFC4] dark:bg-gray-600" />
      </div>
      <div className="rounded-md bg-black px-1.5 py-1 font-mono text-xs text-white dark:bg-gray-700 dark:text-gray-300">
        {label}
      </div>
    </div>
  );
}

function formatDate(date: Date) {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function UserDetails() {
  const { user } = useUser();
  const { session } = useSession();

  if (!user || !session) return null;

  return (
    <div className="relative rounded-lg bg-[#F1F1F2] p-16 dark:bg-gray-900">
      <div className="max-w-[25rem] rounded-xl bg-white p-8 shadow-md ring-1 ring-gray-950/5 dark:bg-gray-800 dark:ring-gray-700">
        <div className="mb-6 flex flex-col items-center gap-2">
          <div className="relative flex w-full justify-center">
            <Image
              width={20}
              height={20}
              src={user.imageUrl}
              className="size-20 rounded-full"
              alt={""}
            />
          </div>
          {user.firstName && user.lastName ? (
            <h1 className="relative w-full text-center text-[1.0625rem] font-semibold dark:text-gray-200">
              {user.firstName} {user.lastName}
            </h1>
          ) : (
            <div className="h-4" />
          )}
        </div>

        <div className="divide-y divide-[#EEEEF0] rounded-lg bg-[#FAFAFB] px-2.5 dark:divide-gray-700 dark:bg-gray-800">
          <Row desc="Email" value={user.username!}>
            <PointerC label="user.emailAddresses[0].emailAddress" />
          </Row>
          <Row desc="Last signed in" value={formatDate(user.lastSignInAt!)}>
            <PointerC label="user.lastSignInAt" />
          </Row>
          <Row desc="Joined on" value={formatDate(user.createdAt!)}>
            <PointerC label="user.createdAt" />
          </Row>
          <Row desc="User ID" value={user.id}>
            <PointerC label="user.user.id" />
          </Row>
        </div>

        <h2 className="mt-6 mb-4 text-[0.9375rem] font-semibold dark:text-gray-200">
          Session details
        </h2>
        <div className="divide-y divide-[#EEEEF0] rounded-lg bg-[#FAFAFB] px-2.5 dark:divide-gray-700 dark:bg-gray-800">
          <Row desc="Session ID" value={session.id}>
            <PointerC label="session.id" />
          </Row>
          <Row desc="Status" value={session.status}>
            <PointerC label="session.status" />
          </Row>
        </div>
      </div>
    </div>
  );
}
