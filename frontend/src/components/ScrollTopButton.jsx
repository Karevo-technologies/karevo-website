import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const ScrollTopButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 300);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onClick = () => {
    // Ensure it works right after a mobile navigation/rerender.
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, 0);
  };

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={onClick}
      className={
        "fixed right-4 bottom-5 z-[60] p-0.5 rounded-full " +
        "transition-all duration-300 ease-out " +
        (show
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-2 pointer-events-none") +
        " bg-primary hover:bg-primary-bright"
      }
      style={{
        width: 44,
        height: 44,
      }}
    >
      <span className="inline-flex w-full h-full items-center justify-center">
        <ArrowUp size={20} className="text-white" />
      </span>
    </button>
  );
};

export default ScrollTopButton;
