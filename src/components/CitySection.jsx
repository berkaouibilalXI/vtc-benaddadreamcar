import {
  Plane,
  Building2,
  MapPin,
  CalendarDays,
  BriefcaseBusiness,
  Route
} from "lucide-react";

const categories = [
  {
    icon: Plane,
    label: "Aéroport"
  },
  {
    icon: Building2,
    label: "Hôtels"
  },
  {
    icon: MapPin,
    label: "Centre-ville"
  },
  {
    icon: CalendarDays,
    label: "Événements"
  },
  {
    icon: BriefcaseBusiness,
    label: "Affaires"
  },
  {
    icon: Route,
    label: "Tourisme"
  }
];

export default function CitySection() {
  return (
    <section className="relative overflow-hidden bg-black py-20 sm:py-24" id="city">
      <div className="absolute inset-0">
        <img
          src="/assets/oran-coast.webp"
          alt="Littoral d'Oran"
          className="h-full w-full object-cover opacity-35"
          loading="lazy"
        />
      </div>

      <div className="absolute inset-0 bg-black/65" />

      <div className="container-site relative z-10">
        <div className="max-w-3xl">
          <div className="eyebrow-rule" />

          <h2 className="font-display text-[clamp(28px,5vw,42px)] font-extrabold leading-[1.15] tracking-[-0.01em] text-white">
            Oran vous attend. Nous aussi.
          </h2>

          <p className="mt-5 max-w-[60ch] text-[15px] leading-[1.7] text-white/75">
            De l'aéroport Ahmed Ben Bella aux hôtels, centres d'affaires et
            principaux lieux d'Oran, nous vous accompagnons dans tous vos
            déplacements.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.label}
                className="flex flex-col items-center justify-center rounded-card border border-white/15 bg-white/5 px-3 py-5 text-center backdrop-blur-sm"
              >
                <Icon className="h-5 w-5 text-red" />

                <span className="mt-3 font-display text-sm font-bold text-white">
                  {category.label}
                </span>
              </div>
            );
          })}
        </div>

        <div className="mt-10">
          <a
            href="#contact"
            className="btn btn-primary"
          >
            PLANIFIER MON TRAJET
          </a>
        </div>
      </div>
    </section>
  );
}