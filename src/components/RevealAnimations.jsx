"use client";

import { useEffect } from "react";

export default function RevealAnimations() {
  useEffect(() => {
    const revealSections = document.querySelectorAll(".reveal");
    const revealItems = document.querySelectorAll(".reveal-item");

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    });

    revealSections.forEach(section => observer.observe(section));
    revealItems.forEach(item => observer.observe(item));
  }, []);

  return null;
}
