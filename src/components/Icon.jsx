import {
  Armchair,
  AtSign,
  Briefcase,
  Building2,
  CalendarClock,
  CarFront,
  Check,
  ChevronRight,
  Clock,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Plane,
  Route,
  ShieldCheck,
  X,
} from 'lucide-react';

/**
 * Registre des icônes du site (lucide-react).
 * Les données (Partners, WhyChooseUs…) référencent les icônes par nom : <Icon name="plane" />.
 *
 * Lucide ne fournit pas de logos de marque : WhatsApp -> MessageCircle,
 * Instagram -> AtSign (l'identifiant @benaddadreamcar).
 */
const ICONS = {
  plane: Plane,
  building: Building2,
  briefcase: Briefcase,
  steering: CarFront,
  route: Route,
  clock: Clock,
  badge247: CalendarClock,
  shield: ShieldCheck,
  seat: Armchair,
  chevron: ChevronRight,
  check: Check,
  pin: MapPin,
  mail: Mail,
  phone: Phone,
  insta: AtSign,
  whatsapp: MessageCircle,
  menu: Menu,
  close: X,
};

// Icônes « directionnelles » : on les inverse en lecture droite-à-gauche (arabe).
const DIRECTIONAL = new Set(['chevron']);

export function Icon({ name, className = 'h-6 w-6 shrink-0', strokeWidth = 1.6 }) {
  const Cmp = ICONS[name];
  if (!Cmp) return null;
  const rtl = DIRECTIONAL.has(name) ? ' rtl:rotate-180' : '';
  return <Cmp className={className + rtl} strokeWidth={strokeWidth} aria-hidden="true" focusable="false" />;
}

export default Icon;
