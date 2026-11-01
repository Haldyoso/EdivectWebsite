import { Fragment } from "@/components/demo/fragments";
import { Reveal } from "@/components/motion/reveal";
import type { HeadingCopy, ShowcaseFeature, ShowcaseId } from "@/types";

/** Fragment widths vary so the column never reads as a row of equal blocks. */
const shape: Partial<Record<ShowcaseId, string>> = {
  "cad-measurement": "is-wide",
  "freeze-boards": "is-narrow",
};

/**
 * Each capability is a statement beside a synthetic, still piece of a marked-up
 * screen. The figure is where a real capture goes once one exists; until then
 * it is labelled as a sample and hidden from assistive tech, because the text
 * beside it already says everything it shows.
 */
export function FeatureShowcase({
  heading,
  features,
  lang,
  sampleLabel,
}: {
  heading: HeadingCopy;
  features: ShowcaseFeature[];
  lang: string;
  sampleLabel: string;
}) {
  return (
    <section id="features" aria-labelledby="features-title" className="section wrap">
      <Reveal>
        <h2 id="features-title" className="h-section">
          {heading.title}
        </h2>
        {heading.subtitle && <p className="lede">{heading.subtitle}</p>}
      </Reveal>

      <div className="features-list">
        {features.map((feature) => (
          <article key={feature.id} className={`feature ${shape[feature.id] ?? ""}`}>
            <Reveal className="feature-text">
              <h3>{feature.name}</h3>
              <p className="feature-short">{feature.short}</p>
              <p>{feature.description}</p>
            </Reveal>
            <Reveal
              index={1}
              className={`fragment ${feature.id === "freeze-boards" ? "fragment-board" : ""}`}
            >
              <Fragment id={feature.id} lang={lang} />
              <span className="fragment-label" aria-hidden="true">
                {sampleLabel}
              </span>
            </Reveal>
          </article>
        ))}
      </div>
    </section>
  );
}
