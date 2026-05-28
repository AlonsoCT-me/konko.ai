//BodyClassManager.tsx
"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function BodyClassManager() {
  const pathname = usePathname();

  useEffect(() => {
    const segment =
      pathname === "/"
        ? "home"
        : pathname.replace(/^\//, "").replace(/\//g, "-");
    const cls = `page-${segment}`;

    document.body.classList.add(cls);

    return () => {
      document.body.classList.remove(cls);
    };
  }, [pathname]);

  return null;
}
