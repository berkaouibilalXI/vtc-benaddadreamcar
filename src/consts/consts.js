import airportImage from "../assets/service-airport.webp";
import hotelImage from "../assets/service-hotel.webp";
import businessImage from "../assets/service-business.webp";
import chauffeurImage from "../assets/service-chauffeur.webp";
import outsideImage from "../assets/service-outside.webp";

import {
  Plane,
  Building2,
  BriefcaseBusiness,
  CarFront,
  Route,
  Clock3,
  ShieldCheck,
  Sparkles,
  MapPinned
} from "lucide-react";

export const services = [
  {
    title: "Transfert aéroport",
    subtitle: "Aéroport d'Oran ↔ votre destination",
    description:
      "Accueil, suivi du vol et transfert direct vers votre hôtel, domicile ou lieu de rendez-vous.",
    image: airportImage,
    icon: Plane,
    action: "Réserver"
  },
  {
    title: "Transfert hôtel",
    subtitle: "Votre trajet, sans attente",
    description:
      "Déplacements entre hôtels, aéroport, restaurants, centres d'affaires et principaux lieux d'Oran.",
    image: hotelImage,
    icon: Building2,
    action: "Réserver"
  },
  {
    title: "Déplacements professionnels",
    subtitle: "Un service pensé pour les professionnels",
    description:
      "Déplacements de dirigeants, délégations, rendez-vous d'affaires et événements.",
    image: businessImage,
    icon: BriefcaseBusiness,
    action: "Nous contacter"
  },
  {
    title: "Chauffeur à disposition",
    subtitle: "À l'heure, à la journée ou selon vos besoins",
    description:
      "Un chauffeur disponible pour vous accompagner pendant vos déplacements à Oran et au-delà.",
    image: chauffeurImage,
    icon: CarFront,
    action: "Demander un devis"
  },
  {
    title: "Courses hors wilaya",
    description: "Déplacements vers d'autres villes en tout confort.",
    image: outsideImage,
    icon: Route,
    action: "Demander un devis"
  }
];

export const advantages = [
  {
    icon: Clock3,
    title: "Ponctualité",
    description:
      "Nous anticipons vos horaires pour vous garantir des déplacements sans stress."
  },
  {
    icon: ShieldCheck,
    title: "Sérénité",
    description:
      "Un service fiable, discret et professionnel pour chacun de vos trajets."
  },
  {
    icon: Sparkles,
    title: "Confort",
    description:
      "Des véhicules entretenus et un accompagnement pensé pour votre confort."
  },
  {
    icon: MapPinned,
    title: "Connaissance d'Oran",
    description:
      "Une parfaite connaissance de la ville et de ses principaux itinéraires."
  }
];