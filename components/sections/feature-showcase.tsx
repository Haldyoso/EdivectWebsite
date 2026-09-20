import { SectionHeading } from "@/components/ui/section-heading";
import { showcaseIcons } from "@/lib/content/shared";
import type { HeadingCopy, ShowcaseFeature } from "@/types";

export function FeatureShowcase({ heading, features }: { heading: HeadingCopy; features: ShowcaseFeature[] }) {
  return (
    <section id="features" className="mx-auto max-w-[1200px] scroll-mt-20 px-4 py-16 md:px-6">
      <SectionHeading {...heading} className="mb-12" />
      <ul className="grid gap-5 md:grid-cols-2">
        {features.map((feature) => {
          const Icon = showcaseIcons[feature.id];
          return (
            <li key={feature.id} className="rounded-xl border border-border bg-card p-6">
              <Icon aria-hidden="true" className="mb-4 size-6 text-accent" />
              <h3 className="text-xl font-semibold">{feature.name}</h3>
              <p className="mt-3 leading-relaxed text-fg-muted">{feature.description}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
