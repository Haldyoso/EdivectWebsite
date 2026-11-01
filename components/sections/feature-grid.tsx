import { Reveal } from "@/components/motion/reveal";
import type { GridFeature, HeadingCopy } from "@/types";

interface FeatureGridProps {
  heading: HeadingCopy;
  features: GridFeature[];
}

/** The full toolkit on one sheet of paper that spans the page. */
export function FeatureGrid({ heading, features }: FeatureGridProps) {
  return (
    <section aria-labelledby="toolkit-title" className="field paper">
      <Reveal>
        <h2 id="toolkit-title" className="h-section">
          {heading.title}
        </h2>
      </Reveal>

      <ul className="toolkit">
        {features.map(({ title, description }, index) => (
          <Reveal as="li" key={title} index={index % 3}>
            <h3>{title}</h3>
            <p>{description}</p>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
