"use client";

import React, { useState } from "react";
import { Spinner } from "@evaluation-app/app/components/spinner";
import { api } from "@evaluation-app/trpc/react";
export const dynamic = "force-dynamic";
export default function EmailForm() {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");
  const [status, setStatus] = useState("");
  const sendEmail = api.email.sendEmail.useMutation({
    onSuccess: async () => {
      setText("");
      setSubject("");
      setTo("");
      setStatus("Email sent successfully!");
    },
  });


  return (
    <div className="mx-auto max-w-md space-y-6 p-8">
      <h1 className="text-center text-2xl font-bold dark:text-white">
        Send an Email with Resend
      </h1>
      <label htmlFor="to" className="mb-1 block font-medium dark:text-white">
        From:
      </label>
      <input
        id="from"
        type="email"
        disabled={true}
        value={"user@evaluation-app.solaimani.de"}
        className="w-full rounded border px-4 py-2 text-black dark:text-white"
      />

      <form onSubmit={(e) => {
        e.preventDefault()
      sendEmail.mutate({
        to: to,
        subject: subject,
        text: text
      })}} className="space-y-4">
        <div>
          <label
            htmlFor="to"
            className="mb-1 block font-medium dark:text-white"
          >
            To:
          </label>
          <input
            id="to"
            type="email"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            placeholder="Recipient's email address"
            className="w-full rounded border px-4 py-2 text-black dark:text-white"
            required
          />
        </div>

        <div>
          <label
            htmlFor="subject"
            className="mb-1 block font-medium dark:text-white"
          >
            Subject:
          </label>
          <input
            id="subject"
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Email subject"
            className="w-full rounded border px-4 py-2 text-black dark:text-white"
            required
          />
        </div>

        <div>
          <label
            htmlFor="text"
            className="mb-1 block font-medium dark:text-white"
          >
            Message:
          </label>
          <textarea
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write your message here"
            className="w-full rounded border px-4 py-2 text-black dark:text-white"
            required
          />
        </div>
        <button
          type="submit"
          className="flex w-full items-center justify-center rounded bg-blue-500 px-6 py-2 text-white hover:bg-blue-600"
          disabled={sendEmail.isPending}
        >
          {sendEmail.isPending ? <Spinner /> : "Send Email"}
        </button>
      </form>

      {status && (
        <p className="mt-4 text-center text-lg dark:text-white">{status}</p>
      )}
    </div>
  );
}
