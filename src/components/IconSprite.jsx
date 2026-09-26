// Inline sprite of every icon used across the site. Rendered once near the
// root; individual icons are then drawn with <Icon name="..." /> which emits
// an <svg><use href="#i-..."/></svg>.
export default function IconSprite() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <defs>
        <symbol id="i-plane" viewBox="0 0 24 24">
          <path d="M10.5 20.5l1.5-4.5 4-1.5M13.5 20.5L12 16l-4-1.5M2 12l20-8-8 20-3-8-8-3z" />
        </symbol>
        <symbol id="i-building" viewBox="0 0 24 24">
          <rect x="5" y="3" width="14" height="18" rx="1" />
          <path d="M9 8h1M14 8h1M9 12h1M14 12h1M9 16h1M14 16h1M10 21v-4h4v4" />
        </symbol>
        <symbol id="i-briefcase" viewBox="0 0 24 24">
          <rect x="3" y="8" width="18" height="12" rx="2" />
          <path d="M8 8V6a2 2 0 012-2h4a2 2 0 012 2v2M3 13h18" />
        </symbol>
        <symbol id="i-steering" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="2.2" />
          <path d="M12 5v5M6.5 16l4-2.5M17.5 16l-4-2.5" />
        </symbol>
        <symbol id="i-route" viewBox="0 0 24 24">
          <circle cx="6" cy="6" r="2.2" />
          <circle cx="18" cy="18" r="2.2" />
          <path d="M6 8.2V13a3 3 0 003 3h4a3 3 0 013 3v-.2" />
        </symbol>
        <symbol id="i-clock" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3.5 2" />
        </symbol>
        <symbol id="i-badge247" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" />
          <text
            x="12"
            y="15.5"
            fontSize="7"
            fontFamily="Plus Jakarta Sans, sans-serif"
            fontWeight="800"
            textAnchor="middle"
            stroke="none"
            fill="currentColor"
          >
            24/7
          </text>
        </symbol>
        <symbol id="i-shield" viewBox="0 0 24 24">
          <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
        </symbol>
        <symbol id="i-seat" viewBox="0 0 24 24">
          <path d="M7 4v9a3 3 0 003 3h4M7 13H5a2 2 0 00-2 2v3a2 2 0 002 2h1M17 16v4M7 20h14" />
          <circle cx="9" cy="4" r="1.4" stroke="none" fill="currentColor" />
        </symbol>
        <symbol id="i-chevron" viewBox="0 0 24 24">
          <path d="M9 6l6 6-6 6" />
        </symbol>
        <symbol id="i-check" viewBox="0 0 24 24">
          <path d="M5 12.5l4.5 4.5L19 7" />
        </symbol>
        <symbol id="i-pin" viewBox="0 0 24 24">
          <path d="M12 21s7-6.4 7-11.5A7 7 0 105 9.5C5 14.6 12 21 12 21z" />
          <circle cx="12" cy="9.5" r="2.3" />
        </symbol>
        <symbol id="i-mail" viewBox="0 0 24 24">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 6.5l9 6.5 9-6.5" />
        </symbol>
        <symbol id="i-phone" viewBox="0 0 24 24">
          <path d="M6.5 3h3l1.5 4.5-2.2 1.7a13 13 0 006.5 6.5l1.7-2.2 4.5 1.5v3a2 2 0 01-2.2 2A17 17 0 014.5 5.2 2 2 0 016.5 3z" />
        </symbol>
        <symbol id="i-insta" viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.2" cy="6.8" r="0.6" stroke="none" fill="currentColor" />
        </symbol>
        <symbol id="i-whatsapp" viewBox="0 0 24 24">
          <path
            stroke="none"
            fill="currentColor"
            d="M12 2a10 10 0 00-8.6 15L2 22l5.2-1.4A10 10 0 1012 2zm5.6 14.3c-.2.6-1.3 1.2-1.9 1.3-.5.1-1.1.1-3.5-.9-3-1.2-4.9-4.2-5-4.4-.2-.2-1.2-1.6-1.2-3.1s.8-2.2 1-2.5c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5.2.6.7 1.9.8 2 .1.2.1.4 0 .6-.1.2-.2.3-.3.5-.2.2-.3.3-.5.5-.2.2-.3.4-.1.7.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.7-.1.2-.2.7-.8.9-1.1.2-.3.4-.2.7-.1.3.1 1.7.8 2 .9.3.2.5.2.6.4.1.2.1.7-.1 1.3z"
          />
        </symbol>
        <symbol id="i-menu" viewBox="0 0 24 24">
          <path d="M4 7h16M4 12h16M4 17h16" />
        </symbol>
        <symbol id="i-close" viewBox="0 0 24 24">
          <path d="M6 6l12 12M18 6L6 18" />
        </symbol>
      </defs>
    </svg>
  );
}

import { iconDefault } from '../styles/ui';

export function Icon({ name, className = iconDefault, style, rotate }) {
  return (
    <svg className={className} style={style}>
      <use href={`#i-${name}`} transform={rotate ? `rotate(${rotate} 12 12)` : undefined} />
    </svg>
  );
}
