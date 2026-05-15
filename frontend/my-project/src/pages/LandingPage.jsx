import React from "react";
import { Image, Sparkles, ArrowRight } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-blue-500/20 border border-blue-400/30">
            <Image className="w-6 h-6 text-blue-400" />
          </div>

          <h1 className="text-2xl font-bold">
            Caption<span className="text-blue-400">AI</span>
          </h1>
        </div>

        <button className="px-5 py-2 rounded-xl bg-blue-500 hover:bg-blue-600 transition-all">
          Get Started
        </button>
      </nav>

      {/* Hero */}
      <section className="grid lg:grid-cols-2 items-center px-8 lg:px-20 py-20 gap-16">
        {/* Left */}
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 mb-6">
            <Sparkles className="w-4 h-4" />
            AI Powered Image Captioning
          </div>

          <h2 className="text-5xl lg:text-6xl font-extrabold leading-tight">
            Generate Smart Captions
            <span className="block text-blue-400 mt-2">
              From Any Image
            </span>
          </h2>

          <p className="mt-6 text-gray-300 text-lg leading-relaxed">
            Upload images and instantly generate meaningful AI-powered
            captions, descriptions, and contextual insights using advanced
            vision models.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="px-6 py-3 rounded-2xl bg-blue-500 hover:bg-blue-600 transition-all font-semibold flex items-center gap-2">
              Start Free
              <ArrowRight className="w-4 h-4" />
            </button>

            <button className="px-6 py-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all">
              Live Demo
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="grid gap-5">
          {[
            "AI Generated Captions",
            "Fast Image Analysis",
            "Multi-language Support",
            "Accessibility Friendly",
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-400/40 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-blue-400" />

                <h3 className="text-xl font-semibold">{feature}</h3>
              </div>

              <p className="mt-3 text-gray-400">
                Powerful AI technology to make image understanding seamless.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}