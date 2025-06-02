import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20">
      {/* Background Video - Hidden on mobile */}
      <div className="absolute inset-0 hidden lg:block">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          src="https://framerusercontent.com/assets/6A4Gc4xE7koOyVvBo1V2xt94aso.mp4"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Product Hunt Badge */}
        <div className="mb-8">
          <a 
            href="https://www.producthunt.com/posts/readdy" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=810871&theme=light&period=weekly"
              alt="Readdy - Websites that stand out, built and published in minutes | Product Hunt"
              width="250"
              height="54"
              className="mx-auto"
            />
          </a>
        </div>

        {/* Main Headlines */}
        <div className="space-y-4 mb-8">
          <h1 className="font-sansita text-6xl lg:text-7xl font-bold text-[rgb(36,31,38)] leading-tight">
            <span className="gradient-text">Websites that Stand Out</span>
          </h1>
          <h1 className="font-sansita text-6xl lg:text-7xl font-bold text-[rgb(36,31,38)] leading-tight">
            <span className="gradient-text">Built and Published in Minutes</span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className="max-w-2xl mx-auto mb-12">
          <p className="font-satoshi text-xl font-light italic text-[rgb(102,102,102)] leading-relaxed mb-2">
            <strong>Build your dream websites by talking with AI, no Drag-and-Drop needed</strong>
          </p>
          <p className="font-satoshi text-xl font-light italic text-[rgb(102,102,102)] leading-relaxed">
            <strong>Publish instantly or Export as Code or Figma</strong>
          </p>
        </div>

        {/* CTA Button */}
        <div className="mb-16">
          <Button
            className="hero-button w-auto px-8 py-4 h-auto rounded-[28px] bg-black text-white font-manrope font-extrabold text-lg border-2 border-gray-400 hover:bg-gray-900 transition-all duration-300"
          >
            Get Started
          </Button>
        </div>

        {/* Video Embed */}
        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
          <div className="relative aspect-video bg-black">
            <iframe
              src="https://www.youtube.com/embed/UexDNB7tzEE?autoplay=1&mute=1&loop=1&playlist=UexDNB7tzEE"
              title="Meet Readdy - AI that designs BEAUTIFUL websites and apps"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}