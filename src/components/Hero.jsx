import { Plane, ArrowDown, MessageCircle } from "lucide-react";
import heroImage from "../assets/hero-chauffeur.png";

export default function Hero() {
  return (
    <section className="section pt-12 md:pt-16" id="hero">
      <div className="container-site md:grid md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-16">
        <div className="pb-8 md:pb-0">
          <h1 className="font-display text-[clamp(32px,7vw,48px)] font-extrabold leading-[1.15] tracking-[-0.01em]">
            Votre chauffeur privé à Oran
          </h1>

          <p className="mt-4 font-display text-[clamp(15px,2vw,18px)] font-bold text-red">
            Confort. Ponctualité. Sérénité.
          </p>

          <p className="mt-4 max-w-[46ch] text-body">
            Transferts aéroport, hôtels, déplacements professionnels et mise
            à disposition avec chauffeur.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#" className="btn btn-primary">
              <MessageCircle className="h-[18px] w-[18px]" />
              RÉSERVER SUR WHATSAPP
            </a>

            <a href="#services" className="btn btn-outline">
              Découvrir nos services
            </a>
          </div>

          <div className="mt-6 flex items-center gap-2 text-small text-text">
            <Plane className="h-4 w-4 shrink-0 text-red" />
            <span>
              Suivi de vol inclus pour les transferts aéroport.
            </span>
          </div>
        </div>

        <div className="media-slot mt-10 h-[360px] rounded-card border border-line sm:h-[440px] md:mt-0 md:h-[520px]">
          <img
            src={heroImage}
            alt="Chauffeur privé BENADDA DREAMCAR — véhicule premium"
            className="h-full w-full object-cover object-[center_65%]"
            loading="eager"
          />
        </div>
      </div>

      <div className="flex justify-center py-4 text-text">
        <a href="#services" aria-label="Scroll to services">
          <ArrowDown className="h-5 w-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}