"use client";

import React, { useState } from "react";

export default function Page() {
  const [clickedButton, setClickedButton] = useState<number | null>(null); // Nummer des geklickten Buttons
  const [timestamp, setTimestamp] = useState<string | null>(null); // Timestamp des Klicks

  const handleClick = (buttonNumber: number) => {
    const time = new Date().toLocaleTimeString();
    setClickedButton(buttonNumber);
    setTimestamp(time);
    console.log(`Button ${buttonNumber} clicked at ${time}`);
  };

  return (
    <div className="space-y-4 p-8">
      <h1 className="text-center text-2xl font-bold dark:text-white">
        Timestamp Tester
      </h1>

      <div className="grid grid-cols-5 gap-4">
        {Array.from({ length: 50 }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handleClick(index + 1)}
            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-300"
          >
            {index + 1}
          </button>
        ))}
      </div>

      {clickedButton !== null && (
        <div className="mt-4 text-center">
          <p className="text-lg">
            Button <span className="font-bold">{clickedButton}</span> clicked at{" "}
            <span className="font-bold">{timestamp}</span>
          </p>
        </div>
      )}
    </div>
  );
}
