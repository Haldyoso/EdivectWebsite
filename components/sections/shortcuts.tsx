import { Reveal } from "@/components/motion/reveal";
import { KbdCombo } from "@/components/ui/kbd";
import type { HeadingCopy, Shortcut } from "@/types";

interface ShortcutsProps {
  heading: HeadingCopy;
  shortcuts: Shortcut[];
}

/** The app's default bindings as a two-ended list: what it does, which keys. */
export function Shortcuts({ heading, shortcuts }: ShortcutsProps) {
  return (
    <section id="shortcuts" aria-labelledby="shortcuts-title" className="section wrap">
      <Reveal>
        <h2 id="shortcuts-title" className="h-section">
          {heading.title}
        </h2>
        {heading.subtitle && <p className="lede">{heading.subtitle}</p>}
      </Reveal>

      <Reveal>
        <ul className="keys">
          {shortcuts.map((shortcut) => (
            <li key={shortcut.label}>
              <span>{shortcut.label}</span>
              <KbdCombo keys={shortcut.keys} />
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
