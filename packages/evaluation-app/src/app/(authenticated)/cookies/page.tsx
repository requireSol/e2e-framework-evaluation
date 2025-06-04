"use client";

import React, { useEffect, useState } from "react";

export default function Page() {
  const [text, setText] = useState<string>("");

  // Funktion zum Lesen eines Cookies
  const getCookie = (key: string): string => {
    const cookies = document.cookie
      .split("; ")
      .find((row) => row.startsWith(`${key}=`));

    return cookies ? decodeURIComponent(cookies.split("=")[1]!) : ""; // Rückgabe eines leeren Strings, falls der Cookie fehlt
  };

  // Funktion zum Setzen des Cookies
  const handleSetCookie = () => {
    if (text.trim()) {
      document.cookie = `user_cookie=${encodeURIComponent(
        text,
      )}; path=/; max-age=86400;`; // Gültig für 1 Tag (86400 Sekunden)
      alert("Cookie gesetzt!");
    } else {
      alert("Bitte geben Sie einen Text ein.");
    }
  };

  // Funktion zum Löschen des Cookies
  const handleDeleteCookie = () => {
    document.cookie = "user_cookie=; path=/; max-age=0;";
    setText(""); // Eingabefeld zurücksetzen
    alert("Cookie gelöscht!");
  };

  // Lade den Cookie-Wert beim Start
  useEffect(() => {
    const existingCookie = getCookie("user_cookie") ?? ""; // Fallback zu leerem String
    setText(existingCookie);
  }, []);

  return (
    <div className="p-8">
      <h1 className="mb-4 text-2xl font-bold dark:text-white">
        Cookie Handling
      </h1>

      {/* TODO missing label, anyway need to refactor with one Custom input */}
      <input
        type="text"
        placeholder="Geben Sie einen Text ein..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="mb-4 w-full rounded border px-4 py-2 text-black dark:text-white"
      />

      {/* Buttons */}
      <div className="flex gap-4">
        <button
          onClick={handleSetCookie}
          className="rounded bg-blue-500 px-6 py-2 text-white"
        >
          Set Cookie
        </button>
        <button
          onClick={handleDeleteCookie}
          className="rounded bg-red-500 px-6 py-2 text-white"
        >
          Delete Cookie
        </button>
      </div>
    </div>
  );
}
