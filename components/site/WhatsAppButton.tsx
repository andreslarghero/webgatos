import { buildWhatsAppUrl } from "@/lib/whatsapp";

type WhatsAppButtonProps = {
  label: string;
  message: string;
  className?: string;
};

export function WhatsAppButton({ label, message, className = "" }: WhatsAppButtonProps) {
  return (
    <a
      href={buildWhatsAppUrl(message)}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex min-h-11 items-center justify-center rounded-full bg-terracotta px-5 py-3 text-sm font-semibold text-white shadow-soft hover:-translate-y-0.5 hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cocoa ${className}`}
    >
      {label}
    </a>
  );
}
