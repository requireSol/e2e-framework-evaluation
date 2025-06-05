"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import { Footer } from "@evaluation-app/app/components/footer";
import { TabMenuButton } from "@evaluation-app/app/components/tabMenuButton";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { Logos } from "@evaluation-app/app/components/logos";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import DarkModeToggle from "@evaluation-app/app/components/toogle-darkmode";
import { testId } from "@lib-common/E2ETestIds";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { user } = useUser();
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    if (!user?.id) {
      redirect("/");
    }
    setIsLoading(false);
  }, [user]);

  if (isLoading)
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="h-16 w-16 animate-spin rounded-full border-t-4 border-blue-500"></div>
      </div>
    );

  return (
    <div className="flex h-screen flex-col bg-white dark:bg-gray-900">
      {/* Sticky Header */}
      <header className="sticky top-0 z-10 flex h-16 w-full items-center justify-between border-b border-gray-300 bg-white px-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
        <div className="flex items-center gap-4">
          <button
            className="text-gray-800 lg:hidden dark:text-gray-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <Logos />
        </div>

        <div className="flex items-center gap-6">
          <DarkModeToggle />
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                userButtonAvatarBox: "size-6",
              },
            }}
          />
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <AnimatePresence>
          {(isMenuOpen || window.innerWidth >= 1024) && (
            <motion.aside
              initial={{ x: -250, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -250, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute top-16 left-0 z-20 flex h-[calc(100vh-4rem)] w-64 flex-col justify-between bg-white p-4 shadow-md lg:relative lg:top-0 lg:flex lg:w-64 lg:flex-col lg:justify-between lg:space-y-6 lg:border-r lg:border-gray-300 dark:bg-gray-800 dark:lg:border-gray-700"
            >
              <nav className="flex flex-grow flex-col space-y-2">
                <TabMenuButton
                  testId={testId("tabmenu_home")}
                  titel="Home"
                  path="/dashboard"
                  onClickAction={() => setIsMenuOpen(false)}
                />
                <TabMenuButton
                  testId={testId("tabmenu_session")}
                  titel="Session"
                  path="/session"
                  onClickAction={() => setIsMenuOpen(false)}
                />
                <TabMenuButton
                  testId={testId("tabmenu_canvas")}
                  titel="Canvas"
                  path="/canvas"
                  onClickAction={() => setIsMenuOpen(false)}
                />
                <TabMenuButton
                  testId={testId("tabmenu_cookies")}
                  titel="Cookies"
                  path="/cookies"
                  onClickAction={() => setIsMenuOpen(false)}
                />
                <TabMenuButton
                  testId={testId("tabmenu_actions")}
                  titel="Actions"
                  path="/actions"
                  onClickAction={() => setIsMenuOpen(false)}
                />
                <TabMenuButton
                  testId={testId("tabmenu_email")}
                  titel="Email"
                  path="/email"
                  onClickAction={() => setIsMenuOpen(false)}
                />
                <TabMenuButton
                  testId={testId("tabmenu_timestamp")}
                  titel="TIMESTAMP"
                  path="/timestamp"
                  onClickAction={() => setIsMenuOpen(false)}
                />
                <TabMenuButton
                  testId={testId("tabmenu_trpc")}
                  titel="Trpc"
                  path="/trpc"
                  onClickAction={() => setIsMenuOpen(false)}
                />
              </nav>
              <div className="mt-auto border-t border-gray-300 pt-4">
                <nav className="flex flex-col space-y-2 pb-4">
                  <a
                    href="https://github.com/requireSol"
                    target="_blank"
                    className="rounded px-4 py-2 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-700"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://twitter.com/requireSol"
                    target="_blank"
                    className="rounded px-4 py-2 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-700"
                  >
                    Twitter
                  </a>
                </nav>
                <Footer />
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        <div className="flex flex-1 flex-col overflow-y-auto px-4 py-4 lg:px-8 lg:py-8">
          <main className="flex-1">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
