import Layout from "@evaluation-app/app/(authenticated)/layout";
import { E2ETestIds } from "@lib-common/E2ETestIds";

export default function Page() {
  return (
    <div>
      <h1
        data-testid={E2ETestIds.text_dashboard}
        className="text-3xl font-bold dark:text-white"
      >
        Dashboard
      </h1>
      <p className="mt-4 dark:text-white">
        This website serves as an evaluation app for E2E frameworks.
      </p>
    </div>
  );
}

Page.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};
