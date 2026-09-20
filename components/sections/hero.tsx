import { Download } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Copy } from "@/types";

interface HeroProps {
  copy: Copy;
  chips: string[];
}

export function Hero({ copy, chips }: HeroProps) {
  const { hero } = copy;

  return (
    <section className="mx-auto max-w-[1200px] px-4 pt-[118px] pb-16 text-center sm:pt-[150px] sm:pb-20 md:px-6">
      <Reveal>
        <Badge variant="status">
          <span className="size-[7px] rounded-full bg-success shadow-[0_0_8px_var(--color-success)]" />
          {hero.badge}
        </Badge>
      </Reveal>

      <h1 className="mx-auto mt-7 max-w-[900px] text-[clamp(36px,9.5vw,44px)] leading-[1.04] font-bold tracking-[-1.5px] sm:text-[clamp(44px,6vw,64px)]">
        {hero.titleLead}
        <br />
        <span className="text-gradient-accent">{hero.titleAccent}</span>
      </h1>

      <p className="mx-auto mt-6 max-w-[680px] text-[clamp(17px,2.2vw,20px)] leading-[1.55] text-fg-muted">
        {hero.description}
      </p>

      <div className="mt-9 flex flex-wrap justify-center gap-3.5">
        <Button asChild className="shadow-glow">
          <a href="#download">
            <Download aria-hidden="true" className="size-[18px]" />
            {hero.ctaPrimary}
          </a>
        </Button>
      </div>

      <Reveal>
        <ul className="mt-7 flex flex-wrap justify-center gap-2.5">
          {chips.map((chip, index) => (
            <li key={chip} className={index >= 3 ? "hidden sm:list-item" : undefined}>
              <Badge variant="chip">{chip}</Badge>
            </li>
          ))}
        </ul>
      </Reveal>

    </section>
  );
}
