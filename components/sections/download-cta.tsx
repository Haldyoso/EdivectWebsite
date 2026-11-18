import { Building2, Download, Mail, ShieldCheck } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { LinkedInIcon, WindowsIcon } from "@/components/ui/github-icon";
import { distributionCopy } from "@/lib/distribution";
import { termsPath, type Lang } from "@/lib/i18n";
import { licensing } from "@/lib/licensing";
import { basePath, hasRealRelease, site, virusTotalUrl } from "@/lib/site";
import type { Copy } from "@/types";

/**
 * Two channels on two equal sheets with the same button, then the two licence
 * modes. Release facts come only from lib/site.ts and lib/distribution.ts.
 */
export function DownloadCta({ copy, lang }: { copy: Copy; lang: Lang }) {
  const { version, size, sha256, downloadUrl } = site.release;
  const cta = copy.downloadCta;
  const licence = licensing[lang];
  const distribution = distributionCopy[lang];
  const storeRelease = site.distribution.microsoftStore;
  const company = licence.company;
  const maker = copy.maker;
  const companyMail = `mailto:${site.contact.licensing}?subject=${encodeURIComponent(company.subject)}&body=${encodeURIComponent(company.body)}`;

  return (
    <section id="download" aria-labelledby="download-title" className="section wrap">
      <Reveal className="dl-head">
        <h2 id="download-title" className="h-section">
          {cta.title}
        </h2>
        <p className="lede">{cta.subtitle}</p>
        <p className="dl-platform">{cta.platform}</p>
      </Reveal>

      <div className="channels">
        <Reveal className="channel sheet paper">
          <h3 id="store-heading">Microsoft Store</h3>
          <p>{distribution.storeDescription}</p>
          <p className="meta" id={!storeRelease ? "store-pending" : undefined}>
            {storeRelease ? `${cta.versionLabel} ${storeRelease.productVersion}` : distribution.pending}
          </p>
          {storeRelease ? (
            <a className="btn" href={storeRelease.url}>
              <WindowsIcon aria-hidden="true" />
              {distribution.store}
            </a>
          ) : (
            <button type="button" className="btn" disabled aria-describedby="store-pending">
              <WindowsIcon aria-hidden="true" />
              {distribution.store}
            </button>
          )}
        </Reveal>

        <Reveal index={1} className="channel sheet paper">
          <h3 id="portable-heading">Portable EXE</h3>
          <p>{distribution.portableDescription}</p>
          <p className="meta">
            {cta.versionLabel} {version} · {size}
          </p>
          <a className="btn" href={downloadUrl} download>
            <Download aria-hidden="true" />
            {distribution.portable}
          </a>
          {hasRealRelease ? (
            <>
              <p className="mt-2 text-[14px]">
                {cta.checksumLabel}
                <code>{sha256}</code>
              </p>
              <p className="dl-scan">
                <ShieldCheck aria-hidden="true" />
                <a className="link" href={virusTotalUrl} target="_blank" rel="noopener noreferrer">
                  {cta.scanReport}
                </a>
              </p>
            </>
          ) : (
            <p className="mt-2 text-[14px]">{cta.checksumPending}</p>
          )}
        </Reveal>
      </div>

      <div className="licences">
        <Reveal>
          <h3 className="h-statement">{licence.heading}</h3>
        </Reveal>
        <Reveal className="licence-body">
          <div className="licence-modes">
            <div>
              <h4>Personal</h4>
              <p>{licence.personal}</p>
            </div>
            <div>
              <h4>Commercial Trial</h4>
              <p>{licence.trial}</p>
            </div>
          </div>
          <div className="licence-notes mt-8">
            <p>{licence.shared}</p>
            <p>{licence.expiry}</p>
            <p>
              <Link className="link" href={termsPath(lang)}>
                {licence.terms}
              </Link>
            </p>
          </div>
          <div className="licence-company mt-8">
            <Building2 aria-hidden="true" className="licence-company-icon" />
            <div className="licence-company-text">
              <h4>{company.title}</h4>
              <p>{company.text}</p>
              <p className="licence-company-mail">{site.contact.licensing}</p>
            </div>
            <a className="btn" href={companyMail}>
              <Mail aria-hidden="true" />
              {company.button}
            </a>
          </div>
          <figure className="maker mt-8" aria-labelledby="maker-name">
            {/* Plain <img> with basePath: images are unoptimized, see components/ui/screenshot.tsx. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="maker-photo"
              src={`${basePath}/images/maker.jpg`}
              alt={maker.photoAlt}
              width={112}
              height={112}
              loading="lazy"
            />
            <div className="maker-text">
              <p className="maker-label">{maker.label}</p>
              <p id="maker-name" className="maker-name">
                {site.legal.owner}
              </p>
              <p className="maker-role">{maker.role}</p>
              <blockquote className="maker-quote">{maker.quote}</blockquote>
              <div className="maker-links">
                <a className="btn" href={site.social.linkedin} target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon />
                  {maker.linkedin}
                </a>
                <a className="link" href={`mailto:${site.contact.general}`}>
                  {site.contact.general}
                </a>
              </div>
            </div>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
