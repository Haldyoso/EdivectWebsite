"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";

import { Reveal } from "@/components/motion/reveal";
import type { Faq as FaqItem, HeadingCopy } from "@/types";

interface FaqProps {
  heading: HeadingCopy;
  faqs: FaqItem[];
}

/**
 * Questions as filled tiles; the open one turns to paper. Answers stay in the
 * server HTML so they match the FAQPage JSON-LD word for word.
 */
export function Faq({ heading, faqs }: FaqProps) {
  return (
    <section id="faq" aria-labelledby="faq-title" className="section wrap">
      <div className="faq">
        <header>
          <Reveal>
            <h2 id="faq-title" className="h-section">
              {heading.title}
            </h2>
          </Reveal>
        </header>

        <AccordionPrimitive.Root type="single" collapsible defaultValue="faq-0" className="faq-list">
          {faqs.map((faq, index) => (
            <AccordionPrimitive.Item key={faq.question} value={`faq-${index}`} className="faq-item">
              <AccordionPrimitive.Header asChild>
                <h3>
                  <AccordionPrimitive.Trigger className="faq-trigger">
                    {faq.question}
                    <span className="faq-sign" aria-hidden="true" />
                  </AccordionPrimitive.Trigger>
                </h3>
              </AccordionPrimitive.Header>
              <AccordionPrimitive.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                <p className="faq-answer">{faq.answer}</p>
              </AccordionPrimitive.Content>
            </AccordionPrimitive.Item>
          ))}
        </AccordionPrimitive.Root>
      </div>
    </section>
  );
}
