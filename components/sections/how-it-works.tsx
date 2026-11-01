import { Reveal } from "@/components/motion/reveal";
import type { HeadingCopy, Step } from "@/types";

interface HowItWorksProps {
  heading: HeadingCopy;
  steps: Step[];
}

/**
 * Three sheets stepping down the page, in reading order. The middle one, the
 * drawing step, is the dark slab: it is where the work happens.
 */
export function HowItWorks({ heading, steps }: HowItWorksProps) {
  return (
    <section id="how" aria-labelledby="how-title" className="section wrap">
      <Reveal>
        <h2 id="how-title" className="h-section">
          {heading.title}
        </h2>
      </Reveal>

      <ol className="steps">
        {steps.map((step, index) => (
          <Reveal
            as="li"
            key={step.title}
            index={index}
            className={`step sheet ${index === 1 ? "slab" : "paper"}`}
          >
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
