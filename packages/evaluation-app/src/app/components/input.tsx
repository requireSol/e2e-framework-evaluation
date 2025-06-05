"use client";

import React from "react";
import { testId } from "@lib-common/E2ETestIds";

export function CustomInput({
  value,
  onChangeAction,
}: {
  path: string;
  value: string;
  onChangeAction: (value: string) => void;
}) {
  return (
    <input
      data-testid={testId("input_type")}
      type="text"
      value={value}
      onChange={(e) => onChangeAction(e.target.value)}
      className="rounded border px-4 py-2 text-black dark:text-white"
    />
  );
}
