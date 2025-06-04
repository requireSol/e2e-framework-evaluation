import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Script from "next/script";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { TRPCReactProvider } from "@evaluation-app/trpc/react";
import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "E2E Evaluation App",
  description:
    "A simple and powerful Next.js app with simple actions featuring authentication and user management powered by Clerk for E2E Testing Framework evaluation.",
};

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <ClerkProvider
        appearance={{
          variables: { colorPrimary: "#000000" },
          elements: {
            formButtonPrimary:
              "bg-black border border-black border-solid hover:bg-white hover:text-black",
            socialButtonsBlockButton:
              "bg-white border-gray-200 hover:bg-transparent hover:border-black text-gray-600 hover:text-black",
            socialButtonsBlockButtonText: "font-semibold",
            formButtonReset:
              "bg-white border border-solid border-gray-200 hover:bg-transparent hover:border-black text-gray-500 hover:text-black",
            membersPageInviteButton:
              "bg-black border border-black border-solid hover:bg-white hover:text-black",
            card: "bg-[#fafafa]",
          },
        }}
      >
        <body
          className={`flex min-h-screen flex-col bg-[#FAFAFA] antialiased dark:bg-gray-900`}
        >
          <TRPCReactProvider>{children}</TRPCReactProvider>
          <SpeedInsights />
          <Analytics />
        </body>
      </ClerkProvider>

      <Script src="https://cdn.jsdelivr.net/npm/prismjs@1/components/prism-core.min.js" />
      <Script src="https://cdn.jsdelivr.net/npm/prismjs@1/plugins/autoloader/prism-autoloader.min.js" />
    </html>
  );
}
