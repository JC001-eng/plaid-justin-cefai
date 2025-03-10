"use client";

import { useEffect } from "react";

export default function Accordion() {
  useEffect(() => {
    const accordion = document.querySelector(".menu-wrapper");

    if (!accordion) return;

    function handleClick(event) {
      const button = event.target.closest(".accordion-header");

      if (!button) return;

      const item = button.parentElement;
      const content = item.querySelector(".accordion-content");
      const expanded = button.getAttribute("aria-expanded") === "true";

      if (!expanded) {
        item.classList.add("open");
        button.setAttribute("aria-expanded", "true");
        content.setAttribute("aria-hidden", "false");

        setTimeout(() => {
          const rect = item.getBoundingClientRect();
          const contentHeight = content.scrollHeight;
          const viewportHeight = window.innerHeight;
          const bottomPadding = 50;

          const overflowAmount =
            rect.bottom + contentHeight - viewportHeight + bottomPadding;

          if (overflowAmount > 0) {
            window.scrollBy({ top: overflowAmount, behavior: "smooth" });
          }
        }, 200);
      } else {
        item.classList.remove("open");
        button.setAttribute("aria-expanded", "false");
        content.setAttribute("aria-hidden", "true");
      }
    }

    accordion.addEventListener("click", handleClick);

    return () => {
      accordion.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}
