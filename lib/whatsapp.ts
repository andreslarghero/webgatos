// Reemplazar WHATSAPP_NUMBER por el número real del café.
export const WHATSAPP_NUMBER = "59800000000";

export function buildWhatsAppUrl(message: string): string {
  const cleanMessage = message.replace(/\s+/g, " ").trim();
  const encodedMessage = encodeURIComponent(cleanMessage);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}
