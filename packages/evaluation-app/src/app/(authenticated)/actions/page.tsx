"use client";

import { testId } from "@lib-common/E2ETestIds";
import React, { useState } from "react";

export default function Page() {
  const [blurText, setBlurText] = useState<string>("");
  const [typeText, setTypeText] = useState<string>("");
  const [clearText, setClearText] = useState<string>("");
  const [submitText, setSubmitText] = useState<string>("");
  const [clickText, setClickText] = useState<string>("");
  const [doubleClickText, setDoubleClickText] = useState<string>("");
  const [rightClickText, setRightClickText] = useState<string>("");
  const [checkText, setCheckText] = useState<string>("");
  const [selectText, setSelectText] = useState<string>("");
  const [triggerText, setTriggerText] = useState<string>("");
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollPosition(e.currentTarget.scrollTop); // Aktualisiere die Scroll-Position
  };
  return (
    <div className="space-y-8 p-8">
      {/* Type Function */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="typeInput"
          className="text-lg font-medium dark:text-white"
        >
          Type:
        </label>
        <div className="flex items-center gap-4">
          <input
            id="typeInput"
            data-testid={testId("input_type")}
            type="text"
            value={typeText}
            onChange={(e) => setTypeText(e.target.value)}
            className="rounded border px-4 py-2 text-black dark:text-white"
          />
          <span
            className="text-lg text-gray-700"
            data-testid={testId("text_type")}
          >
            {typeText || "..."}
          </span>
        </div>
      </div>

      {/* Blur Function */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="blurInput"
          className="text-lg font-medium dark:text-white"
        >
          Blur:
        </label>
        <div className="flex items-center gap-4">
          <input
            id="blurInput"
            data-testid={testId("input_blur")}
            type="text"
            onBlur={() => setBlurText("Blur")}
            className="rounded border px-4 py-2 text-black dark:text-white"
          />
          <span
            data-testid={testId("text_blur")}
            className="text-lg text-gray-500"
          >
            {blurText || "No Blur"}
          </span>
        </div>
      </div>

      {/* Clear Function */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="clearInput"
          className="text-lg font-medium dark:text-white"
        >
          Clear:
        </label>
        <div className="flex items-center gap-4">
          <input
            id="clearInput"
            data-testid={testId("input_clear")}
            type="text"
            value={clearText}
            onChange={(e) => setClearText(e.target.value)}
            className="rounded border px-4 py-2 text-black dark:text-white"
          />
          <span
            data-testid={testId("text_clear")}
            className="text-lg text-gray-500"
          >
            {clearText || "Field is empty"}
          </span>
        </div>
      </div>

      {/* Submit Function */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="submitInput"
          className="text-lg font-medium dark:text-white"
        >
          Submit:
        </label>
        <div className="flex items-center gap-4">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitText("Form sent");
            }}
          >
            <input
              id="submitInput"
              data-testid={testId("input_submit")}
              type="text"
              value={submitText}
              onChange={(e) => setSubmitText(e.target.value)}
              className="rounded border px-4 py-2 text-black dark:text-white"
            />
            <button
              data-testid={testId("input_submit")}
              type="submit"
              className="ml-4 rounded bg-blue-500 px-4 py-2 text-white"
            >
              Submit
            </button>
          </form>
          <span
            data-testid={testId("button_submit")}
            className="text-lg text-gray-500"
          >
            {submitText ? "Sent" : "No Submit"}
          </span>
        </div>
      </div>

      {/* Click Function */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="clickButton"
          className="text-lg font-medium dark:text-white"
        >
          Click:
        </label>
        <div className="flex items-center gap-4">
          <button
            id="clickButton"
            data-testid={testId("button_click")}
            onClick={() => setClickText("Button clicked")}
            className="rounded bg-green-500 px-4 py-2 text-white"
          >
            Click Me
          </button>
          <span
            data-testid={testId("text_click")}
            className="text-lg text-gray-500"
          >
            {clickText || "Button not clicked"}
          </span>
        </div>
      </div>

      {/* Double Click Function */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="doubleClickButton"
          className="text-lg font-medium dark:text-white"
        >
          Double Click:
        </label>
        <div className="flex items-center gap-4">
          <button
            id="doubleClickButton"
            data-testid={testId("button_doubleClick")}
            onDoubleClick={() => setDoubleClickText("Button double clicked")}
            className="rounded bg-purple-500 px-4 py-2 text-white"
          >
            Double Click Me
          </button>
          <span
            data-testid={testId("text_doubleClick")}
            className="text-lg text-gray-500"
          >
            {doubleClickText || "Button not double clicked"}
          </span>
        </div>
      </div>

      {/* Right Click Function */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="rightClickButton"
          className="text-lg font-medium dark:text-white"
        >
          Right Click:
        </label>
        <div className="flex items-center gap-4">
          <button
            id="rightClickButton"
            data-testid={testId("button_rightClick")}
            className="cursor-pointer rounded bg-gray-700 px-4 py-2 text-white"
            onContextMenu={(e) => {
              e.preventDefault(); // Verhindert das Standard-Kontextmenü
              setRightClickText("Button right clicked");
            }}
          >
            Rightclick Me
          </button>
          <span
            data-testid={testId("text_rightClick")}
            className="text-lg text-gray-500"
          >
            {rightClickText || "Button not right clicked"}
          </span>
        </div>
      </div>

      {/* Check/Uncheck Function */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="checkInput"
          className="text-lg font-medium dark:text-white"
        >
          Check/Uncheck:
        </label>
        <div className="flex items-center gap-4">
          <input
            id="checkInput"
            data-testid={testId("input_check")}
            type="checkbox"
            onChange={(e) =>
              setCheckText(e.target.checked ? "Checked" : "Unchecked")
            }
            className="h-5 w-5"
          />
          <span
            data-testid={testId("text_check")}
            className="text-lg text-gray-500"
          >
            {checkText || "No Status"}
          </span>
        </div>
      </div>

      {/* Select Function */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="selectInput"
          className="text-lg font-medium dark:text-white"
        >
          Select:
        </label>
        <div className="flex items-center gap-4">
          <select
            id="selectInput"
            data-testid={testId("input_select")}
            onChange={(e) => setSelectText(e.target.value)}
            className="rounded border px-4 py-2 text-black dark:text-white"
          >
            <option value="">Choose</option>
            <option className={"text-black"} value="Option 1">
              Option 1
            </option>
            <option className={"text-black"} value="Option 2">
              Option 2
            </option>
          </select>
          <span
            data-testid={testId("text_select")}
            className="text-lg text-gray-500"
          >
            {selectText || "Nohing selected"}
          </span>
        </div>
      </div>
      <br />
      {/* Scroll */}
      <div
        onScroll={handleScroll}
        data-testid={testId("div_scroll")}
        className="h-64 w-full overflow-y-scroll rounded border border-gray-300 dark:text-white"
        style={{ maxWidth: "500px" }}
      >
        {Array.from({ length: 50 }, (_, i) => (
          <p key={i} className="p-2">
            Row {i + 1}: This is a Text Row.
          </p>
        ))}
      </div>

      <div className="text-lg dark:text-white">
        Aktuelle Scroll-Position:{" "}
        <span
          data-testid={testId("text_scroll")}
          className="font-bold dark:text-white"
        >
          {scrollPosition}px
        </span>
      </div>

      {/* Slider Function */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="triggerSlider"
          className="text-lg font-medium dark:text-white"
        >
          Trigger (Range Slider):
        </label>
        <div className="flex items-center gap-4">
          <input
            style={{ maxWidth: "500px" }}
            id="triggerSlider"
            data-testid={testId("input_slider")}
            type="range"
            min={0}
            max={100}
            step={1}
            onChange={(e) => setTriggerText(e.target.value)}
            className="w-full"
          />
          <span
            data-testid={testId("text_slider")}
            className="text-lg text-gray-500"
          >
            {triggerText || "0"}
          </span>
        </div>
      </div>
    </div>
  );
}
