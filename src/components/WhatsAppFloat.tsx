const PHONE = "923328414729";
const MSG = "Hello, I am interested in your products from ALOWA ENTERPRISES.";

export function WhatsAppFloat() {
  const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(MSG)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-elegant transition-transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-whatsapp/40"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-whatsapp opacity-30"></span>
      <svg viewBox="0 0 32 32" className="h-7 w-7 relative" fill="currentColor" aria-hidden="true">
        <path d="M19.11 17.39c-.27-.13-1.6-.79-1.85-.88-.25-.09-.43-.13-.61.13-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.13-1.14-.42-2.18-1.34-.81-.72-1.35-1.61-1.51-1.88-.16-.27-.02-.42.12-.55.12-.12.27-.32.4-.48.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.48-.07-.13-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27 0 1.34.97 2.63 1.11 2.81.13.18 1.91 2.92 4.62 4.09.65.28 1.15.45 1.55.58.65.21 1.24.18 1.71.11.52-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.31zM16.04 4C9.4 4 4 9.4 4 16.04c0 2.13.56 4.21 1.62 6.04L4 28l6.13-1.6c1.78.97 3.79 1.49 5.91 1.49 6.64 0 12.04-5.4 12.04-12.04S22.68 4 16.04 4z"/>
      </svg>
    </a>
  );
}
