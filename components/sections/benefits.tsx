import { Reveal } from "@/components/motion/reveal";
import type { Benefit } from "@/types";

interface BenefitsProps {
  benefits: Benefit[];
  label: string;
}

/** Four claims, each a large statement with its plain explanation beside it. */
export function Benefits({ benefits, label }: BenefitsProps) {
  return (
    <section aria-labelledby="benefits-title" className="section wrap">
      <div className="reasons-head">
        <Reveal>
          <h2 id="benefits-title" className="h-section">
            {label}
          </h2>
        </Reveal>
      </div>
      <ul className="reasons">
        {benefits.map(({ title, description }, index) => (
          <Reveal as="li" key={title} index={index % 2} className="reason">
            <h3 className="h-statement">{title}</h3>
            <p>{description}</p>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
