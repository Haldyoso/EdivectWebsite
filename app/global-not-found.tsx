import type { Metadata } from "next";

import { Logo } from "@/components/layout/logo";
import { PageBackdrop } from "@/components/layout/page-backdrop";
import { basePath, site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  title: `Page not found · ${site.name}`,
  description: "The requested Edivect page could not be found.",
};

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body>
        <div className="relative flex min-h-screen items-center overflow-x-hidden">
          <PageBackdrop />
          <main className="relative z-1 mx-auto w-full max-w-[820px] px-4 py-20 md:px-6">
            <a
              href={`${basePath}/`}
              aria-label="Edivect home page"
              className="inline-flex rounded-md"
            >
              <Logo glow />
            </a>
            <p className="mt-14 font-mono text-sm font-semibold tracking-[0.16em] text-accent">
              404
            </p>
            <h1 className="mt-4 text-[clamp(38px,8vw,64px)] font-bold tracking-[-1.5px]">
              Page not found
            </h1>
            <p className="mt-5 max-w-[620px] text-lg leading-7 text-fg-muted">
              The address may be outdated or mistyped. The Edivect home page is still available.
            </p>
            <a
              href={`${basePath}/`}
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-action px-6 text-base font-semibold text-white shadow-glow transition-colors hover:bg-action-hover active:bg-action-pressed"
            >
              Go to the home page
            </a>
          </main>
        </div>
      </body>
    </html>
  );
}

