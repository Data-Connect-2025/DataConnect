"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Skipertimer from "@/components/ui/skipertimer";
import { Spotlight } from "@/components/ui/Spotlight";

export function SpotlightPreview() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black/[0.96] px-6 py-16 text-white antialiased md:px-12">
      {/* animated grid + spotlight background */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
        )}
      />
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="orange"
      />

      {/* content */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-16">
        {/* LEFT – heading + copy + CTA */}
        <div className="flex flex-col gap-5">
          <h1 className="bg-gradient-to-br from-white to-neutral-400 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl lg:text-6xl">
            Data Connect
          </h1>

          <p className="max-w-lg text-base text-neutral-300 sm:text-lg">
            Join the biggest data-science gathering of the year. Two power-days
            of talks, workshops and networking with industry leaders — all
            designed to level-up your data game.
          </p>

          <button className="mt-3 w-fit rounded-lg bg-orange-500 px-6 py-3 font-semibold text-black shadow-lg transition hover:bg-orange-400">
            Register for the event
          </button>
        </div>

        {/* RIGHT – large countdown */}
        <div className="flex justify-end">
          <Skipertimer />
        </div>
      </div>
    </section>
  );
}
