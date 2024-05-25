import { Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import "@acab/reset.css";
import "./styles/global.css";

export function HydrateFallback() {
  return (
    <>
      <p>Loading...</p>
      <Scripts />
    </>
  );
}

export default function App() {
  return (
    <>
      <Outlet />
      <ScrollRestoration />
      <Scripts />
    </>
  );
}
