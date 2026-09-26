export const container = 'mx-auto max-w-[1160px] px-6';
export const section = 'py-16';
export const sectionHead = 'mb-8 max-w-[46ch]';
export const eyebrowRule = 'my-4 h-[3px] w-10 rounded bg-red';
export const sectionTitle = 'text-[clamp(24px,4.5vw,34px)] font-display font-extrabold leading-[1.15] tracking-[-0.01em]';
export const sectionSub = 'mt-4 max-w-[32ch] text-[clamp(14px,1.6vw,16px)] text-grey-text';

const btnBase =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-transparent ' +
  'px-7 py-[15px] font-display text-[0.95rem] font-bold transition-[transform,background-color,color,border-color] ' +
  'duration-150 ease-out active:scale-[0.97]';

export const btnPrimary = `${btnBase} bg-red text-white hover:bg-red-dark`;
export const btnDark = `${btnBase} bg-ink text-white hover:bg-black`;
export const btnOutline = `${btnBase} border-ink bg-transparent text-ink hover:bg-ink hover:text-white`;
export const btnOutlineLight = `${btnBase} border-white/40 bg-transparent text-white hover:bg-white/10`;
export const btnSm = 'px-[18px] py-[10px] text-[0.85rem]';
export const btnBlock = 'w-full';
export const btnIcon = 'w-[18px] h-[18px] shrink-0';

export const linkCta = 'group inline-flex items-center gap-1.5 font-display text-[0.9rem] font-bold text-red';
export const linkCtaIcon = 'h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-[3px]';

export const iconDefault =
  'w-6 h-6 shrink-0 stroke-current fill-none stroke-[1.6] [stroke-linecap:round] [stroke-linejoin:round]';

export const card = 'rounded-card border border-line bg-white shadow-card';
