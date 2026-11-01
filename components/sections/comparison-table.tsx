import { Check, Minus } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { compareColumns } from "@/lib/content/shared";
import type { CompareCell, CompareRow, Copy } from "@/types";

interface CellProps {
  value: CompareCell;
  qualifiers: Copy["compare"]["qualifiers"];
  yes: string;
  no: string;
}

/** Status is never conveyed by colour alone: every mark carries a text label. */
function Cell({ value, qualifiers, yes, no }: CellProps) {
  if (value === true) {
    return (
      <>
        <Check aria-hidden="true" strokeWidth={3} className="yes mx-auto size-[18px]" />
        <span className="sr-only">{yes}</span>
      </>
    );
  }

  if (value === false) {
    return (
      <>
        <Minus aria-hidden="true" className="mx-auto size-[18px] text-fg-subtle" />
        <span className="sr-only">{no}</span>
      </>
    );
  }

  return <span className="text-[14px] text-fg-muted">{qualifiers[value.note]}</span>;
}

interface ComparisonTableProps {
  copy: Copy;
  rows: CompareRow[];
}

export function ComparisonTable({ copy, rows }: ComparisonTableProps) {
  const { compare, ui } = copy;

  return (
    <section id="compare" aria-labelledby="compare-title" className="section wrap">
      <Reveal>
        <h2 id="compare-title" className="h-section">
          {compare.heading.title}
        </h2>
        {compare.heading.subtitle && <p className="lede">{compare.heading.subtitle}</p>}
      </Reveal>

      <p className="compare-hint">{compare.scrollHint}</p>
      <Reveal>
        {/* Focusable so the scrollable table is reachable by keyboard. */}
        <div role="region" aria-label={compare.regionLabel} tabIndex={0} className="compare-table">
          <table>
            <caption className="sr-only">{compare.caption}</caption>
            <thead>
              <tr>
                <th scope="col" className="text-left!">
                  {compare.capability}
                </th>
                <th scope="col" className="us">
                  Edivect
                </th>
                {compareColumns.map((column) => (
                  <th key={column.key} scope="col">
                    {column.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label}>
                  <th scope="row">{row.label}</th>
                  <td className="us">
                    <Cell value={row.edivect} qualifiers={compare.qualifiers} yes={ui.yes} no={ui.no} />
                  </td>
                  {compareColumns.map((column) => (
                    <td key={column.key}>
                      <Cell value={row[column.key]} qualifiers={compare.qualifiers} yes={ui.yes} no={ui.no} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </section>
  );
}
