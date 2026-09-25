import { advantages } from "../consts/consts.js";
export default function WhyUs() {
  return (
    <section className="section bg-surface" id="why-us">
      <div className="container-site">
        <div className="max-w-2xl">
          <div className="eyebrow-rule" />

          <h2 className="section-title">
            Pourquoi nous choisir ?
          </h2>

          <p className="section-sub">
            Un service de chauffeur privé conçu autour de vos besoins,
            avec une attention particulière portée au confort et à la
            ponctualité.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((advantage) => {
            const Icon = advantage.icon;

            return (
              <article key={advantage.title}>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-red shadow-card">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="font-display text-[18px] font-bold">
                  {advantage.title}
                </h3>

                <p className="mt-2 text-small">
                  {advantage.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}