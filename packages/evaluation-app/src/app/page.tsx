"use client";

import { SignedOut, SignInButton, useUser } from "@clerk/nextjs";
import { LearnMore } from "./components/learn-more";
import cypressDashbaord from "./images/cypress-dashboard.png";
import cypressCloud from "./images/cypress-cloud.png";
import playwrightDashboard from "./images/playwright-dashboard.png";
import playwrightTestrun from "./images/playwright-testrun.png";
import "./home.css";
import Image from "next/image";
import { motion } from "framer-motion";

import { CARDS } from "./consts/cards";
import { Logos } from "@evaluation-app/app/components/logos";
import { FooterPublic } from "@evaluation-app/app/components/footer-public";
import React, { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import ToogleDarkmode from "./components/toogle-darkmode";
import Link from "next/link";

export default function Home() {
  const { user } = useUser();
  const [isLoading, setIsLoading] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    console.log(document.cookie);
    const consentGiven = document.cookie.includes("cookieConsent=true");
    if (!consentGiven) {
      setVisible(true);
    }
  }, []);

  const handleAllow = () => {
    document.cookie = "cookieConsent=true; path=/; max-age=31536000"; // 1 year expiration
    setVisible(false);
  };

  useEffect(() => {
    setIsLoading(true);
    if (user?.id) {
      redirect("/dashboard");
    }
    setIsLoading(false);
  }, [user]);

  if (isLoading)
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-black">
        <div className="h-16 w-16 animate-spin rounded-full border-t-4 border-blue-500"></div>
      </div>
    );

  return (
    <div>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed -inset-x-3/4 bottom-4 z-40 mx-auto max-h-fit max-w-lg items-center justify-center rounded-2xl bg-gray-900 p-4 text-white shadow-lg dark:bg-gray-100 dark:text-gray-900"
        >
          <div className="w-full rounded-2xl bg-gray-900 p-4 text-center shadow-lg dark:bg-gray-100">
            <p className="text-sm text-gray-300 dark:text-gray-700">
              This website uses cookies to ensure you get the best experience.
              By continuing to use this site, you agree to the use of cookies.
            </p>
            <button
              onClick={handleAllow}
              className="mt-3 w-full rounded-lg bg-white px-4 py-2 font-semibold text-gray-900 transition hover:bg-gray-300 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-600"
            >
              Allow
            </button>
          </div>
        </motion.div>
      )}
      {!user?.id ? (
        <main className="relative px-4 md:px-12">
          <div className="row-span-3 mx-auto flex w-full max-w-[75rem] flex-col border-r border-l border-[#F2F2F2] bg-white dark:border-gray-700 dark:bg-gray-800">
            <div className="border-b border-[#F2F2F4] px-4 py-16 md:px-12 dark:border-gray-700">
              <div className="flex w-full items-center justify-between">
                <div className="inline-flex gap-4 rounded-full bg-[#F4F4F5] px-4 py-3 dark:bg-gray-700">
                  <div
                    aria-hidden
                    className="h-6 w-px bg-[#C7C7C8] dark:bg-gray-500"
                  />
                  <Logos />
                </div>
                <ToogleDarkmode />
              </div>
            </div>

            <div className="border-b border-[#F2F2F2] p-6 text-center md:p-10 md:text-left dark:border-gray-700">
              <h1 className="relative text-3xl font-bold tracking-tight text-[#131316] md:text-5xl dark:text-gray-300">
                Evaluation App
              </h1>
              <h1 className="relative text-3xl font-bold tracking-tight text-[#131316] md:text-5xl dark:text-gray-300">
                for E2E Frameworks
              </h1>
              <p className="relative max-w-full pt-3 pb-6 text-[1rem] text-[#5E5F6E] md:max-w-[30rem] md:text-[1.0625rem] dark:text-gray-300">
                A modified Next.js template featuring authentication and user
                management powered by Clerk. This website serves as an
                evaluation app for E2E frameworks and has additional features.
                Sign in to discover the Features.
              </p>
              <div className="relative flex justify-center gap-3 md:justify-start">
                <SignedOut>
                  <SignInButton>
                    <button className="rounded-full bg-[#131316] px-4 py-2 text-sm font-semibold text-white dark:bg-gray-300 dark:text-black">
                      Sign in
                    </button>
                  </SignInButton>
                </SignedOut>
                <Link href={"/survey"}>
                  <button className="rounded-full bg-[#131316] px-4 py-2 text-sm font-semibold text-white dark:bg-gray-300 dark:text-black">
                    Umfrage
                  </button>
                </Link>
              </div>
            </div>

            <div className="hidden h-[18.25rem] w-full scale-[1.03] gap-8 md:flex">
              <div className="translate-y-12 space-y-8">
                <Image
                  alt="Device"
                  src={playwrightTestrun}
                  unoptimized
                  className="flex-none rounded-xl bg-white shadow-md dark:bg-gray-700 dark:opacity-50"
                />
              </div>
              <div className="-translate-y-4 space-y-8">
                <Image
                  alt="Device"
                  src={cypressDashbaord}
                  unoptimized
                  className="flex-none rounded-xl bg-white shadow-md dark:bg-gray-700 dark:opacity-50"
                />
              </div>
              <div className="-translate-y-[22.5rem] space-y-8">
                <Image
                  alt="Device"
                  src={playwrightDashboard}
                  unoptimized
                  className="flex-none rounded-xl bg-white shadow-md dark:bg-gray-700 dark:opacity-50"
                />
                <Image
                  alt="Device"
                  src={cypressCloud}
                  unoptimized
                  className="flex-none rounded-xl bg-white shadow-md dark:bg-gray-700 dark:opacity-50"
                />
              </div>
            </div>
          </div>
          <div className="absolute right-0 bottom-0 left-0 hidden h-[18.75rem] bg-gradient-to-t from-white md:flex dark:from-gray-900" />
        </main>
      ) : (
        redirect("/dashboard")
      )}
      <LearnMore cards={CARDS} />
      <FooterPublic />
    </div>
  );
}
