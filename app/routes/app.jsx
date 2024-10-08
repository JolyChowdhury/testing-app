import { json } from "@remix-run/node";
import { Link, Outlet, useLoaderData, useRouteError } from "@remix-run/react";
import { boundary } from "@shopify/shopify-app-remix/server";
import { AppProvider } from "@shopify/shopify-app-remix/react";
import { NavMenu } from "@shopify/app-bridge-react";
import polarisStyles from "@shopify/polaris/build/esm/styles.css?url";
import { authenticate } from "../shopify.server";

export const links = () => [{ rel: "stylesheet", href: polarisStyles }];

export const loader = async ({ request }) => {
  await authenticate.admin(request);

  return json({ apiKey: process.env.SHOPIFY_API_KEY || "" });
};

export default function App() {
  const { apiKey } = useLoaderData();

  return (
    <AppProvider isEmbeddedApp apiKey={apiKey}>
      <NavMenu>
        <Link to="/app" rel="home">
          Home
        </Link>
        <Link to="/app/reward">Reward Program</Link>
        <Link to="/app/customer">Customer</Link>
        <Link to="/app/customer_email">Customer Email</Link>
        <Link to="/app/onboarding_process">Onboarding Process</Link>
        <Link to="/app/branding">Branding</Link>
        <Link to="/app/design">Design</Link>
        <Link to="/app/create-dashboard">Create dashboard</Link>
        <Link to="/app/VIP">VIP</Link>
        <Link to="/app/billing">Billing</Link>
        <Link to="/app/zigslide">Slide</Link>
        <Link to="/app/testing">Testing</Link>

        <Link to="/app/slide_settings">Settings page one</Link>
        <Link to="/app/slide">Slide</Link>
        <Link to="/app/create-survey">survey</Link>
        <Link to="/app/create-dashboard">Create dashboard</Link>
        <Link to="/app/create-settings">Create settings</Link>
        <Link to="/app/design">Create design</Link>
        <Link to="/app/zigpoll_settings">Zigpoll design</Link>
      </NavMenu>
      <Outlet />
    </AppProvider>
  );
}

// Shopify needs Remix to catch some thrown responses, so that their headers are included in the response.
export function ErrorBoundary() {
  return boundary.error(useRouteError());
}

export const headers = (headersArgs) => {
  return boundary.headers(headersArgs);
};
