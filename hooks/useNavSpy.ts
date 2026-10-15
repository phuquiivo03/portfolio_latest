"use client";

import { useEffect } from "react";

export function useNavSpy(navId = "nav") {
  useEffect(() => {
    const nav = document.getElementById(navId);
    if (!nav) return;
    const links = [...nav.querySelectorAll<HTMLAnchorElement>("a")];
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            const id = (en.target as HTMLElement).id;
            links.forEach((a) =>
              a.classList.toggle("active", a.getAttribute("href") === `#${id}`),
            );
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    document
      .querySelectorAll("main section[id]")
      .forEach((s) => spy.observe(s));
    return () => spy.disconnect();
  }, [navId]);
}
