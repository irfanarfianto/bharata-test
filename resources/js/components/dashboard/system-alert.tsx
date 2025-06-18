import { useState } from "react";

type SystemAlertProps = {
  message?: string;
  onClose?: () => void;
};

export default function SystemAlert({
  message = "System wide notification widget – please update this application, thank you.",
  onClose,
}: Readonly<SystemAlertProps>) {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    if (onClose) onClose();
  };

  if (!show) return null;

  return (
    <div className="w-full bg-transparent border border-primary/50 rounded-xl px-4 py-3 flex items-center gap-3 relative">
      {/* Icon bell di kiri */}
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-secondary flex-shrink-0" fill="none" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12 2a7 7 0 0 0-7 7v4.12l-1.29 2.58A1 1 0 0 0 4.62 18h14.76a1 1 0 0 0 .91-1.3L19 13.12V9a7 7 0 0 0-7-7Zm0 20a2 2 0 0 0 2-2H10a2 2 0 0 0 2 2Z"/>
      </svg>
      <span className="text-sm text-primary flex-1">
        {message}
      </span>
      {/* Tombol close di kanan */}
      <button
        onClick={handleClose}
        className="w-7 h-7 flex items-center justify-center rounded-full border border-[#2d2e33] hover:bg-[#232325] transition absolute right-3 top-1/2 -translate-y-1/2"
        aria-label="Close alert"
        type="button"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" className="text-[#484951]" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M11.25 6.75L6.75 11.25M6.75 6.75l4.5 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        </svg>
      </button>
    </div>
  );
}