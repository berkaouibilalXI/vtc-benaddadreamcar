export default function TopoMotif({ className = 'topo' }) {
  return (
    <svg className={className} viewBox="0 0 400 300" preserveAspectRatio="none" aria-hidden="true">
      <path
        d="M-10 220 C 60 190, 90 240, 160 210 S 260 170, 320 205 S 410 230, 430 200"
        stroke="#FFFFFF"
        strokeWidth="1"
        fill="none"
        opacity="0.5"
      />
      <path
        d="M-10 245 C 70 215, 110 260, 180 235 S 270 195, 330 228 S 420 250, 440 222"
        stroke="#FFFFFF"
        strokeWidth="1"
        fill="none"
        opacity="0.35"
      />
      <path
        d="M-10 270 C 80 245, 130 285, 200 262 S 280 225, 340 255 S 420 272, 440 248"
        stroke="#FFFFFF"
        strokeWidth="1"
        fill="none"
        opacity="0.25"
      />
      <path
        d="M-10 195 C 50 165, 100 210, 150 185 S 240 150, 300 180 S 400 205, 430 178"
        stroke="#B51F2A"
        strokeWidth="1.2"
        fill="none"
        opacity="0.55"
      />
    </svg>
  );
}
