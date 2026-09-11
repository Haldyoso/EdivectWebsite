import { ArrowLeftRight, Check, Minus } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { compareColumns } from "@/lib/content/shared";
import { cn } from "@/lib/utils";
import type { CompareCell, CompareRow, Copy } from "@/types";

interface CellProps {
  value: CompareCell;
  qualifiers: Copy["compare"]["qualifiers"];
  yes: string;
  no: string;
}

/** Status is never conveyed by color alone — every mark carries a text label. */
function Cell({ value, qualifiers, yes, no }: CellProps) {
  if (value === true) {
    return (
      <>
        <Check
          aria-hidden="true"
          strokeWidth={3}
          className="mx-auto size-[18px] text-success"
        />
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

  return <span className="text-[13px] text-fg-muted">{qualifiers[value.note]}</span>;
}

interface ComparisonTableProps {
  copy: Copy;
  rows: CompareRow[];
}

export function ComparisonTable({ copy, rows }: ComparisonTableProps) {
  const { compare, ui } = copy;

  return (
    <section id="compare" className="scroll-mt-16 border-t border-divider bg-code-bg">
      <div className="mx-auto max-w-[1200px] px-4 py-24 md:px-6">
        <SectionHeading {...compare.heading} className="mb-12" />

        <Reveal>
          <p className="mb-3 flex items-center gap-2 text-sm text-fg-muted min-[840px]:hidden">
            <ArrowLeftRight aria-hidden="true" className="size-4 shrink-0 text-accent" />
            {compare.scrollHint}
          </p>
          {/* Focusable so the scrollable table is reachable by keyboard (WCAG 2.2). */}
          <div
            role="region"
            aria-label={compare.regionLabel}
            tabIndex={0}
            className="overflow-x-auto rounded-lg border border-border"
          >
            {/* Widened for the fifth data column; the wrapper scrolls it. */}
            <table className="w-full min-w-[780px] border-collapse text-sm">
              <caption className="sr-only">{compare.caption}</caption>
              <thead>
                <tr className="bg-surface">
                  <th
                    scope="col"
                    className="border-b border-border px-[18px] py-4 text-left font-semibold text-fg-muted"
                  >
                    {compare.capability}
                  </th>
                  <th
                    scope="col"
                    className="border-b border-border bg-accent/10 px-3.5 py-4 text-center font-bold text-fg"
                  >
                    Edivect
                  </th>
                  {compareColumns.map((column) => (
                    <th
                      key={column.key}
                      scope="col"
                      className="border-b border-border px-3.5 py-4 text-center font-semibold whitespace-nowrap text-fg-muted"
                    >
                      {column.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.label}>
                    <th
                      scope="row"
                      className="border-b border-divider px-[18px] py-3.5 text-left font-normal text-fg"
                    >
                      {row.label}
                    </th>
                    <td
                      className={cn(
                        "border-b border-divider bg-accent/6 px-3.5 py-3.5 text-center",
                      )}
                    >
                      <Cell
                        value={row.edivect}
                        qualifiers={compare.qualifiers}
                        yes={ui.yes}
                        no={ui.no}
                      />
                    </td>
                    {compareColumns.map((column) => (
                      <td
                        key={column.key}
                        className="border-b border-divider px-3.5 py-3.5 text-center"
                      >
                        <Cell
                          value={row[column.key]}
                          qualifiers={compare.qualifiers}
                          yes={ui.yes}
                          no={ui.no}
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
