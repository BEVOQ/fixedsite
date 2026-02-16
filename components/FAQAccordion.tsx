type FAQAccordionProps = {
  items: { question: string; answer: string }[];
};

export function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <details key={item.question} className="card p-5">
          <summary className="cursor-pointer list-none font-medium focus-ring">{item.question}</summary>
          <p className="mt-3 text-sm leading-relaxed text-muted">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
