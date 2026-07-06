import React from "react";
import { CalendarDays } from "lucide-react";

function BookConsultationButton({
  children = "Book Consultation",
  className = "",
  showIcon = false,
  onClick,
  ...props
}) {
  const handleClick = (event) => {
    onClick?.(event);
    if (event.defaultPrevented) return;
    window.dispatchEvent(new CustomEvent("manovaidya:open-consultation"));
  };

  return (
    <button type="button" className={className} onClick={handleClick} {...props}>
      {showIcon ? <CalendarDays className="h-4 w-4" /> : null}
      {children}
    </button>
  );
}

export default BookConsultationButton;
