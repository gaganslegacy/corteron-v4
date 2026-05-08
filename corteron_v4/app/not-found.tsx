import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";

export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay flex flex-col">
      <Navigation />
      
      <div className="flex-1 flex items-center justify-center px-6 lg:px-12 py-32">
        <div className="text-center">
          <h1 className="text-9xl lg:text-[120px] font-display text-[#4F46E5] mb-6 leading-none">
            404
          </h1>
          <p className="text-3xl lg:text-5xl font-display text-white mb-8">
            This page does not exist.
          </p>
          <a
            href="/"
            className="inline-block px-8 py-4 bg-[#4F46E5] hover:bg-[#4F46E5]/90 text-white font-medium rounded-full transition-colors"
          >
            Go Home
          </a>
        </div>
      </div>

      <FooterSection />
    </main>
  );
}
