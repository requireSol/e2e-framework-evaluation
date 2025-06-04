import { PlaywrightLogo } from "@evaluation-app/app/components/logos/playwright-logo";
import { NextLogo } from "@evaluation-app/app/components/logos/next-logo";
import { CypressLogo } from "@evaluation-app/app/components/logos/cypress-logo";
import { ClerkLogo } from "@evaluation-app/app/components/logos/clerk-logo";

export function Logos() {
  return (
    <>
      <NextLogo />
      <ClerkLogo />
      <CypressLogo />
      <PlaywrightLogo />
    </>
  );
}
