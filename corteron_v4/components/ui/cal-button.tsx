"use client";

import { useEffect } from "react";

interface CalButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  calLink?: string;
  children: React.ReactNode;
}

export function CalButton({
  calLink = "corteron/corteron-strategy-call",
  children,
  className,
  ...props
}: CalButtonProps) {
  useEffect(() => {
    (function (C: any, A: string, L: string) {
      let p = function (a: any, ar: any) { a.q.push(ar); };
      let d = C.document;
      C.Cal = C.Cal || function () {
        let cal = C.Cal;
        let ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api = function () { p(api, arguments); };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    const brandColor =
      getComputedStyle(document.documentElement)
        .getPropertyValue("--primary")
        .trim() || "#4F46E5";

    (window as any).Cal("init", { origin: "https://app.cal.com" });
    (window as any).Cal("ui", {
      styles: { branding: { brandColor } },
      hideEventTypeDetails: false,
    });
  }, []);

  const handleClick = () => {
    (window as any).Cal("modal", { calLink });
  };

  return (
    <button onClick={handleClick} className={className} {...props}>
      {children}
    </button>
  );
}
