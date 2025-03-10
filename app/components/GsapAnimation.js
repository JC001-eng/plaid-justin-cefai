"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GsapAnimation() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const container = containerRef.current;
    if (!container) return;

    function splitTextIntoSpans(selector) {
      document.querySelectorAll(selector).forEach((el) => {
        const text = el.textContent.trim();
        el.innerHTML = "";
        text.split("").forEach((letter) => {
          const span = document.createElement("span");
          span.textContent = letter;
          span.classList.add("letter");
          el.appendChild(span);
        });
      });
    }

    splitTextIntoSpans(".front, .back, .first, .second");

    const elements = document.querySelectorAll(
      ".front span, .back span, .first span, .second span"
    );

    if (elements.length === 0) {
      console.warn("GSAP elements not found:", elements);
      return;
    }

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#backend",
          start: "top 50%",
          toggleActions: "play none none reverse",
        },
      })
      .to(
        ".front span",
        {
          yPercent: -102,
          duration: 1,
          stagger: 0.1,
          ease: "expo.inOut",
        },
        0
      )
      .to(
        ".first span",
        {
          yPercent: -102,
          duration: 1,
          stagger: 0.1,
          ease: "expo.inOut",
        },
        0
      )
      .to(
        ".back span",
        {
          yPercent: -102,
          duration: 1,
          stagger: 0.1,
          ease: "expo.inOut",
        },
        0
      )
      .to(
        ".second span",
        {
          yPercent: -102,
          duration: 1,
          stagger: 0.1,
          ease: "expo.inOut",
        },
        0
      );
  }, []);

  return <div ref={containerRef} />;
}
