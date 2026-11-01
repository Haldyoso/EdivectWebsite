import { Download } from "lucide-react";
import type { CSSProperties } from "react";

import { AnnotationDemo } from "@/components/demo/annotation-demo";
import { WindowsIcon } from "@/components/ui/github-icon";
import { distributionCopy } from "@/lib/distribution";
import type { Lang } from "@/lib/i18n";
import { site } from "@/lib/site";
import type { Copy } from "@/types";

interface HeroProps {
  copy: Copy;
  lang: Lang;
  chips: string[];
}

/** Order of arrival for the load-time settle. */
const at = (i: number, tilt?: string) =>
  ({ "--i": i, ...(tilt ? { "--tilt": tilt } : {}) }) as CSSProperties;

/**
 * The first screen is the page's argument in one picture: the words are
 * objects on a work surface, the second line is selected the way the app
 * selects things, and beside them is a drawing surface where the visitor can
 * make and change marks of their own. The two download channels sit on equal
 * sheets with equal buttons.
 */
export function Hero({ copy, lang, chips }: HeroProps) {
  const { hero, demo, downloadCta } = copy;
  const distribution = distributionCopy[lang];
  const store = site.distribution.microsoftStore;
  const { version, size, downloadUrl } = site.release;

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <h1 id="hero-title">
          <span className="lead sheet paper settle" style={at(0)}>
            {hero.titleLead}
          </span>{" "}
          <span className="main sheet slab settle" style={at(1)}>
            {hero.titleAccent}
            <span className="sel" aria-hidden="true">
              <i />
              <i />
              <i className="on" />
              <i />
              <i />
              <i />
              <i />
              <i />
              <b />
            </span>
          </span>
        </h1>

        <p className="hero-lead sheet paper settle" style={at(2)}>
          {hero.description}
        </p>

      </div>

      <div className="tickets">
          {store && (
            <div className="ticket sheet paper settle" style={at(4)}>
              <p className="ticket-title">Microsoft Store</p>
              <p>{distribution.storeDescription}</p>
              <p className="tnum">
                {downloadCta.versionLabel} {store.productVersion}
              </p>
              <span className="spacer" />
              <a className="btn" href={store.url}>
                <WindowsIcon aria-hidden="true" />
                {distribution.store}
              </a>
            </div>
          )}
          <div className="ticket sheet paper settle" style={at(5)}>
            <p className="ticket-title">Portable EXE</p>
            <p>{distribution.portableDescription}</p>
            <p className="tnum">
              {downloadCta.versionLabel} {version} · {size}
            </p>
            <span className="spacer" />
            <a className="btn" href={downloadUrl} download>
              <Download aria-hidden="true" />
              {distribution.portable}
            </a>
          </div>
      </div>

      <div className="hero-demo">
        <section aria-label={demo.regionLabel} className="settle" style={at(3)}>
          <AnnotationDemo copy={demo} lang={lang} />
        </section>
        <div className="hero-notes">
          <p className="note sheet paper settle" style={at(6)}>
            {demo.note}
          </p>
          <ul className="facts sheet paper settle" style={at(7)}>
            {chips.map((chip) => (
              <li key={chip}>{chip}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
