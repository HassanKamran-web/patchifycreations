"use client";

import { usePathname, useRouter } from "next/navigation";
import { prefersReducedMotion, scrollToElement } from "./smooth-scroll";

export function useAnchorNavigation() {
  const pathname = usePathname();
  const router = useRouter();

  return (href: string) => {
    const [path, hash] = href.split("#");
    const isCurrentPage =
      (path === "" && pathname === "/") ||
      (path === "/" && pathname === "/") ||
      (path !== "" && path === pathname);

    if (isCurrentPage) {
      const el = hash ? document.getElementById(hash) : null;
      if (el) {
        scrollToElement(el);
      } else if (prefersReducedMotion()) {
        window.scrollTo({ top: 0, behavior: "auto" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      router.push(href);
    }
  };
}
