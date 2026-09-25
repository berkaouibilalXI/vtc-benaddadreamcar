import {X, MessageCircle} from "lucide-react"
export default function MenuMobile({ isOpen, onClose, navLinks }) {
  return (
    <div
      className={`fixed inset-0 z-[60] flex flex-col bg-white p-6 transition-transform duration-300 lg:hidden ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex h-14 items-center justify-between">
        <a
          href="#hero"
          onClick={onClose}
          className="font-display text-[1.05rem] font-extrabold leading-none tracking-[0.02em]"
        >
          BENADDA
          <span className="mt-0.5 block text-[0.6rem] font-bold tracking-[0.25em] text-red">
            DREAMCAR
          </span>
        </a>

        <button
          type="button"
          onClick={onClose}
          className="flex border-0 bg-transparent p-1.5"
          aria-label="Close menu"
        >
          <X />
        </button>
      </div>

      <div className="mt-12 flex flex-col gap-8">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="font-display text-2xl font-bold"
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="mt-auto">
        <a
          href="#"
          onClick={onClose}
          className="btn btn-primary btn-block"
        >
          <MessageCircle />
          RÉSERVER SUR WHATSAPP
        </a>
      </div>
    </div>
  );
}