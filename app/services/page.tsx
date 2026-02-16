import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/content/site";

export default function Page() {
  return (
    <div className="mx-auto px-5 py-16" style={{ maxWidth: "var(--maxw)" }}>
      <SectionHeader eyebrow="Services" title="Services" subtitle="Replace this stub with your final layout + copy." />
      <div className="mt-8 rounded-2xl border border-black/10 bg-surface shadow-soft p-6">
        <p className="text-sm text-muted leading-relaxed">
          This is a placeholder. Use the agent tasks to generate final copy, sections, and components.
        </p>
        <p className="mt-4 text-sm">
          Brand: <span className="text-muted">{site.brand.name}</span>
        </p>
      </div>
    </div>
  );
}
