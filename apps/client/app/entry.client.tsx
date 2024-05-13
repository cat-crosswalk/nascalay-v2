import { RemixBrowser } from "@remix-run/react";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";

startTransition(() => {
  const appElement = document.querySelector("#app");
  if (appElement) {
    hydrateRoot(
      appElement,
      <StrictMode>
        <RemixBrowser />
      </StrictMode>
    );
  }
});
