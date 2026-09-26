import { useState } from 'react';

/**
 * Wraps an <img> so that if it 404s, we fall back to a soft gradient
 * placeholder instead of a broken-image icon (mirrors the original
 * `[data-media] img` onerror handling).
 */
export default function MediaSlot({ src, alt, className = '', optional = false, loading = 'lazy' }) {
  const [broken, setBroken] = useState(false);

  if (optional && broken) return null;

  const base = 'relative overflow-hidden bg-grey-light';
  const empty = broken ? 'bg-gradient-to-br from-[#EFEEEA] to-[#E7E5E1]' : '';

  return (
    <div className={[base, empty, className].filter(Boolean).join(' ')}>
      <img
        src={src}
        alt={alt}
        loading={loading}
        onError={() => setBroken(true)}
        className={`h-full w-full object-cover ${broken ? 'hidden' : 'block'}`}
      />
    </div>
  );
}
