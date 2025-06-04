import { UserDetails } from "@evaluation-app/app/components/user-details";
import { CodeSwitcher } from "@evaluation-app/app/components/code-switcher";

export default async function Page() {

  return (
    <>
    {/* User Details */}
  <UserDetails />
  {/* Code Switcher */}
  <CodeSwitcher />
    </>
  );
}
