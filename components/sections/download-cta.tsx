import { Download } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { WindowsIcon } from "@/components/ui/github-icon";
import { type Lang } from "@/lib/i18n";
import { hasRealRelease, site } from "@/lib/site";
import type { Copy } from "@/types";
import { licensing } from "@/lib/licensing";
import { termsPath } from "@/lib/i18n";
import { distributionCopy } from "@/lib/distribution";

export function DownloadCta({ copy, lang }: { copy: Copy; lang: Lang }) {
  const {
    version,
    size,
    sha256,
    downloadUrl,
  } = site.release;
  const cta = copy.downloadCta;
  const licence = licensing[lang];
  const distribution = distributionCopy[lang];
  const storeRelease = site.distribution.microsoftStore;

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

            <div className="mx-auto mt-8 grid max-w-[960px] gap-5 md:grid-cols-2">
              <div className="flex flex-col rounded-lg border border-border bg-surface p-6" aria-labelledby="store-heading">
                <h3 id="store-heading" className="text-xl font-semibold">Microsoft Store</h3>
                <p className="mt-3 text-sm leading-relaxed text-fg-muted">{distribution.storeDescription}</p>
                <div className="mt-6">
                  {storeRelease ? (
                    <Button asChild size="lg"><a href={storeRelease.url}><WindowsIcon aria-hidden="true" className="size-5" />{distribution.store}</a></Button>
                  ) : (
                    <Button size="lg" disabled aria-describedby="store-pending"><WindowsIcon aria-hidden="true" className="size-5" />{distribution.store}</Button>
                  )}
                </div>
                <p className="mt-4 text-sm text-fg-subtle" id={!storeRelease ? "store-pending" : undefined}>
                  {storeRelease ? `${cta.versionLabel} ${storeRelease.productVersion}` : distribution.pending}
                </p>
              </div>
              <div className="flex flex-col rounded-lg border border-border bg-surface p-6" aria-labelledby="portable-heading">
                <h3 id="portable-heading" className="text-xl font-semibold">Portable EXE</h3>
                <p className="mt-3 text-sm leading-relaxed text-fg-muted">{distribution.portableDescription}</p>
                <div className="mt-6">
                  <Button asChild size="lg"><a href={downloadUrl} download><Download aria-hidden="true" className="size-5" />{distribution.portable}</a></Button>
                </div>
                <p className="mt-4 text-sm text-fg-subtle">{cta.versionLabel} {version} · {size}</p>
                <p className="mt-3 max-w-full break-all font-mono text-xs text-fg-subtle">
                  {hasRealRelease ? `${cta.checksumLabel}: ${sha256}` : cta.checksumPending}
                </p>
              </div>
            </div>
            <p className="mx-auto mt-6 max-w-[760px] text-sm leading-relaxed text-fg-muted">{licence.shared}</p>
            <div className="mt-4 text-sm underline underline-offset-4">
              <Link href={termsPath(lang)}>{licence.terms}</Link>
            </div>

          </div>
        </div>
      </Reveal>
    </section>
  );
}
