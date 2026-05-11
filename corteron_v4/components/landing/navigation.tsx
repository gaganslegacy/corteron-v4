"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CalButton } from "@/components/ui/cal-button";

const desktopNavLinks = [
  { name: "How It Works", href: "/how-it-works" },
  { name: "The Businesses", href: "/businesses" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

const mobileNavLinks = [
  { name: "How It Works", href: "/how-it-works" },
  { name: "The Businesses", href: "/businesses" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Case Studies", href: "/case-studies" },
];

function HamburgerButton({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      className="md:hidden relative flex items-center justify-center outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] rounded-md"
      style={{ width: 44, height: 44, flexShrink: 0 }}
    >
      <span className="relative flex flex-col items-center justify-center" style={{ width: 20, height: 14 }}>
        {/* Top line */}
        <span
          style={{
            display: "block",
            position: "absolute",
            width: 20,
            height: 1.5,
            backgroundColor: "white",
            borderRadius: 9999,
            top: 0,
            transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1), opacity 0.3s cubic-bezier(0.4,0,0.2,1)",
            transform: isOpen ? "translateY(6.25px) rotate(45deg)" : "translateY(0) rotate(0deg)",
          }}
        />
        {/* Middle line */}
        <span
          style={{
            display: "block",
            position: "absolute",
            width: 20,
            height: 1.5,
            backgroundColor: "white",
            borderRadius: 9999,
            top: "50%",
            marginTop: -0.75,
            transition: "opacity 0.3s cubic-bezier(0.4,0,0.2,1)",
            opacity: isOpen ? 0 : 1,
          }}
        />
        {/* Bottom line */}
        <span
          style={{
            display: "block",
            position: "absolute",
            width: 20,
            height: 1.5,
            backgroundColor: "white",
            borderRadius: 9999,
            bottom: 0,
            transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1), opacity 0.3s cubic-bezier(0.4,0,0.2,1)",
            transform: isOpen ? "translateY(-6.25px) rotate(-45deg)" : "translateY(0) rotate(0deg)",
          }}
        />
      </span>
    </button>
  );
}

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed z-50 transition-all duration-500 ${
          isScrolled
            ? "top-4 left-4 right-4"
            : "top-0 left-0 right-0"
        }`}
      >
        <nav
          className={`mx-auto transition-all duration-500 ${
            isScrolled
              ? "bg-[#0A0A1A]/90 backdrop-blur-xl border border-white/5 rounded-2xl shadow-lg max-w-[1200px]"
              : "bg-transparent max-w-[1400px]"
          }`}
          style={{
            borderBottom: isScrolled ? undefined : "1px solid rgba(255,255,255,0.06)",
            borderBottomColor: isScrolled ? undefined : "transparent",
          }}
        >
          <div className="flex items-center justify-between transition-all duration-500 px-6 lg:px-8 h-[72px]">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050510] rounded-sm"
            >
              <Image
                src="/corteron-logo.png"
                alt="Corteron"
                width={48}
                height={48}
                className="object-contain w-11 h-11 transition-all duration-500"
              />
              <span className="font-bold text-white tracking-[0.2em] text-lg transition-all duration-500">
                CORTERON
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              {desktopNavLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-base transition-colors duration-300 relative group outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050510] rounded-sm ${
                      isActive ? "text-white" : "text-[#6B7280] hover:text-white"
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute -bottom-1 left-0 right-0 h-px bg-primary origin-left transition-transform duration-200 ${
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                );
              })}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center">
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 py-2.5 font-semibold btn-primary-glow transition-all duration-200"
                asChild
              >
                <CalButton>Book a Strategy Call</CalButton>
              </Button>
            </div>

            {/* Mobile Hamburger */}
            <HamburgerButton
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((v) => !v)}
            />
          </div>
        </nav>
      </header>

      {/* Mobile Full-Screen Overlay */}
      <div
        aria-hidden={!isMobileMenuOpen}
        className="md:hidden fixed inset-0 z-50"
        style={{
          transform: isMobileMenuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.4s cubic-bezier(0.4,0,0.2,1)",
          backgroundColor: "#050510",
          width: "100vw",
          height: "100vh",
        }}
      >
        {/* Top-right radial glow */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 360,
            height: 360,
            borderRadius: "50%",
            background: "radial-gradient(circle at top right, rgba(79,70,229,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* Overlay header: logo left, close button right */}
        <div className="relative flex items-center justify-between px-6 h-[72px]">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-2.5 outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] rounded-sm"
          >
            <Image
              src="/corteron-logo.png"
              alt="Corteron"
              width={44}
              height={44}
              className="object-contain w-10 h-10"
            />
            <span className="font-bold text-white tracking-[0.2em] text-lg">
              CORTERON
            </span>
          </Link>

          <HamburgerButton
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(false)}
          />
        </div>

        {/* Nav links */}
        <nav className="relative flex flex-col" style={{ paddingLeft: 40, paddingTop: 16 }}>
          {mobileNavLinks.map((link, i) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] rounded-sm"
                style={{
                  display: "flex",
                  alignItems: "center",
                  minHeight: 48,
                  paddingTop: 20,
                  paddingBottom: 20,
                  fontSize: 32,
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                  color: isActive ? "var(--primary)" : "white",
                  transition: "color 0.2s ease, transform 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.4s cubic-bezier(0.4,0,0.2,1)",
                  transform: isMobileMenuOpen ? "translateX(0)" : "translateX(40px)",
                  opacity: isMobileMenuOpen ? 1 : 0,
                  transitionDelay: isMobileMenuOpen ? `${0.1 + i * 0.06}s` : "0s",
                }}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Bottom CTA */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            left: 24,
            right: 24,
            transition: "opacity 0.4s cubic-bezier(0.4,0,0.2,1), transform 0.4s cubic-bezier(0.4,0,0.2,1)",
            opacity: isMobileMenuOpen ? 1 : 0,
            transform: isMobileMenuOpen ? "translateY(0)" : "translateY(16px)",
            transitionDelay: isMobileMenuOpen ? `${0.1 + mobileNavLinks.length * 0.06}s` : "0s",
          }}
        >
          <a
            href="https://cal.com/corteron"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              width: "100%",
              backgroundColor: "var(--primary)",
              color: "white",
              textAlign: "center",
              borderRadius: 12,
              paddingTop: 16,
              paddingBottom: 16,
              fontSize: 16,
              fontWeight: 600,
              boxShadow: "0 0 32px color-mix(in srgb, var(--primary) 40%, transparent)",
              transition: "opacity 0.2s ease",
            }}
          >
            Book a Strategy Call
          </a>
          <p
            style={{
              textAlign: "center",
              marginTop: 12,
              fontSize: 13,
              color: "#6B7280",
            }}
          >
            info@corteron.com
          </p>
        </div>
      </div>
    </>
  );
}
