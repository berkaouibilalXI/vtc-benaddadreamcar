import { useState } from 'react';

/**
 * Wraps an <img> so that if it 404s, we fall back to a soft gradient
 * placeholder instead of a broken-image icon (mirrors the original
 * `[data-media] img` onerror handling).
 */
export default function MediaSlot({ src, alt, className = '', optional = false, loading = 'lazy' }) {
  const [broken, setBroken] = useState(false);

  if (optional && broken) return null;

  return (
    <div className={['media-slot', className, broken ? 'media-empty' : ''].filter(Boolean).join(' ')}>
      <img src={src} alt={alt} loading={loading} onError={() => setBroken(true)} />
    </div>
  );
}
