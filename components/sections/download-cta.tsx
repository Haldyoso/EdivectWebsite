import { Download } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { WindowsIcon } from "@/components/ui/github-icon";
import { changelogPath, type Lang } from "@/lib/i18n";
import { hasRealRelease, site } from "@/lib/site";
import type { Copy } from "@/types";
import { licensing } from "@/lib/licensing";
import { termsPath } from "@/lib/i18n";

export function DownloadCta({ copy, lang }: { copy: Copy; lang: Lang }) {
  const {
    version,
    size,
    sha256,
    downloadUrl,
  } = site.release;
  const cta = copy.downloadCta;
  const licence = licensing[lang];

  return (
    <section
      id="download"
      className="mx-auto max-w-[1200px] scroll-mt-16 px-4 pt-16 pb-24 md:px-6"
    >
      <Reveal>
        <div className="relative overflow-hidden rounded-xl border border-border bg-surface px-5 py-14 text-center sm:px-8">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(600px_300px_at_50%_-20%,rgb(45_125_246/0.22),transparent_60%)]"
          />

          <div className="relative">
            <Badge variant="plain" className="mb-6">
              <WindowsIcon className="size-[15px] text-accent" />
              {cta.platform}
            </Badge>

            <h2 className="mx-auto max-w-[640px] text-[clamp(28px,4.5vw,38px)] font-bold tracking-[-0.5px]">
              {cta.title}
            </h2>
            <p className="mx-auto mt-4 max-w-[560px] text-lg leading-[1.55] text-fg-muted">
              {cta.subtitle}
            </p>

            <h3 className="mt-10 text-2xl font-semibold">{licence.heading}</h3>
            <div className="mt-6 grid gap-5 text-left md:grid-cols-2">
              {[
                { title: "Edivect Personal", text: licence.personal, button: licence.personalButton },
                { title: "Edivect Commercial Trial", text: licence.trial, button: licence.trialButton },
              ].map((plan) => (
                <div key={plan.title} className="flex flex-col rounded-xl border border-border bg-surface p-6">
                  <h4 className="text-xl font-semibold">{plan.title}</h4>
                  <p className="mt-3 mb-6 flex-1 leading-relaxed text-fg-muted">{plan.text}</p>
                  <Button asChild size="lg"><a href={downloadUrl} download><Download aria-hidden="true" className="size-5" />{plan.button}</a></Button>
                </div>
              ))}
            </div>
            <p className="mx-auto mt-6 max-w-[760px] text-sm leading-relaxed text-fg-muted">{licence.shared}</p>
            <p className="mx-auto mt-4 max-w-[760px] text-sm leading-relaxed text-fg-muted">{licence.expiry}</p>
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm underline underline-offset-4">
              <a href={`${site.issuesUrl}?title=Commercial%20Trial%20extension`}>{licence.contact}</a>
              <Link href={termsPath(lang)}>{licence.terms}</Link>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-3.5">
              <Button asChild size="lg" variant="elevated">
                <Link href={changelogPath(lang)}>
                  {cta.olderVersions}
                </Link>
              </Button>
            </div>


            <p className="mt-7 flex flex-wrap justify-center gap-5 text-[13px] text-fg-subtle">
              <span>
                {cta.versionLabel} {version}
              </span>
              <span aria-hidden="true">·</span>
              <span>{size}</span>
              <span aria-hidden="true">·</span>
              <span className="max-w-full break-all font-mono">
                {hasRealRelease
                  ? `${cta.checksumLabel}: ${sha256}`
                  : cta.checksumPending}
              </span>
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
