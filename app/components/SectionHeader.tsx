export default function SectionHeader({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
}) {
  return (
    <div data-reveal className="section-heading mx-auto max-w-2xl text-center">
      <p aria-hidden className="section-eyebrow font-hand text-2xl text-rose-deep">
        {eyebrow}
      </p>
      <h2 className="section-title mt-1 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {sub && (
        <p className="section-description mt-3 leading-relaxed text-ink-soft">
          {sub}
        </p>
      )}
    </div>
  );
}
