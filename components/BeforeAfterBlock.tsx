import Image from "next/image";

type BeforeAfterBlockProps = {
  beforeSrc: string;
  afterSrc: string;
};

export function BeforeAfterBlock({ beforeSrc, afterSrc }: BeforeAfterBlockProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <figure className="card overflow-hidden">
        <div className="relative h-64">
          <Image src={beforeSrc} alt="Before" fill className="object-cover" />
        </div>
        <figcaption className="p-4 text-sm text-muted">Before</figcaption>
      </figure>
      <figure className="card overflow-hidden">
        <div className="relative h-64">
          <Image src={afterSrc} alt="After" fill className="object-cover" />
        </div>
        <figcaption className="p-4 text-sm text-muted">After</figcaption>
      </figure>
    </div>
  );
}
