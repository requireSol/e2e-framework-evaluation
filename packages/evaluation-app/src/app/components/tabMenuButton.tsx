"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Spinner } from "@evaluation-app/app/components/spinner";

export function TabMenuButton({
  testId,
  path,
  titel,
  onClickAction,
}: {
  testId: string;
  path: string;
  titel: string;
  onClickAction: () => void;
}) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isLoading && pathname === path) {
      setIsLoading(false);
      onClickAction();
    }
  }, [pathname, isLoading, path, onClickAction]);

  const handleClick = () => {
    if (pathname !== path) {
      setIsLoading(true);
    }
  };

  return (
    <Link
      data-testid={testId}
      href={path}
      onClick={handleClick}
      className={`flex items-center rounded px-4 py-2 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-700 ${
        pathname === path ? "bg-[#333] text-white dark:bg-gray-900" : ""
      }`}
    >
      <span>{titel}</span>
      {isLoading && pathname !== path && <Spinner />}
    </Link>
  );
}
