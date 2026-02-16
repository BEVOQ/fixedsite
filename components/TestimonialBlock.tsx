type TestimonialBlockProps = {
  quote: string;
  author: string;
  location: string;
};

export function TestimonialBlock({ quote, author, location }: TestimonialBlockProps) {
  return (
    <figure className="card p-7">
      <blockquote className="text-lg leading-relaxed">“{quote}”</blockquote>
      <figcaption className="mt-4 text-sm text-muted">
        {author} • {location}
      </figcaption>
    </figure>
  );
}
