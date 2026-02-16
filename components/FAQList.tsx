import { FaqItem } from "@/content/services";

export function FAQList({ items }: { items: FaqItem[] }) {
  return (
    <div className="mt-8 space-y-3">
      {items.map((item) => (
        <details key={item.q} className="group rounded-xl border border-black/10 bg-white/70 p-4 open:bg-white">
          <summary className="cursor-pointer list-none font-medium flex items-center justify-between gap-3">
            {item.q}
            <span className="text-muted transition-transform group-open:rotate-45">+</span>
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
