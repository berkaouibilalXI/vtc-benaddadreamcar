import { ChevronRight, MessageCircle } from "lucide-react";
import { services } from "../consts/consts.js";

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container-site">
        <div className="mb-8">
          <div className="eyebrow-rule" />

          <h2 className="section-title">
            Nos services
          </h2>

          <p className="section-sub">
            Un service adapté à chacun de vos déplacements.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group flex items-center gap-6 rounded-card border border-line bg-white p-4 shadow-card transition-all duration-500 hover:-translate-y-0.5 hover:border-transparent hover:shadow-[0_8px_22px_rgba(17,17,17,0.08)] "
              >
                <div className="media-slot h-19 w-19 shrink-0 rounded-sm">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="min-w-0">
                  <div className="mb-2 flex items-center gap-2">
                    <Icon className="h-4 w-4 shrink-0 text-red" />

                    <h3 className="font-display text-h3 font-bold">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-small font-medium">
                    {service.subtitle}
                  </p>

                  <p className="mt-1 text-small">
                    {service.description}
                  </p>

                  <a
                    href="#contact"
                    className="mt-2 inline-flex items-center gap-1.5 font-display text-[0.9rem] font-bold text-red"
                  >
                    <MessageCircle className="h-3.5 w-3.5" />
                    {service.action}
                    <ChevronRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}