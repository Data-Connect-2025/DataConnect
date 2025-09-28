"use client"; // ← only if you are in the App Router

import React, { useEffect, useState } from "react";

const TARGET = new Date("2025-12-31T00:00:00");

const Skipertimer = () => {
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    setMounted(true); // now we are on the client
    const id = setInterval(() => {
      const diff = Math.max(0, +TARGET - Date.now());
      setTime({
        d: Math.floor(diff / 86_400_000),
        h: Math.floor((diff / 3_600_000) % 24),
        m: Math.floor((diff / 60_000) % 60),
        s: Math.floor((diff / 1_000) % 60),
      });
      if (diff === 0) clearInterval(id);
    }, 1_000);
    return () => clearInterval(id);
  }, []);

  // --- server / first client render ---
  if (!mounted) {
    return (
      <div className="flex gap-5">
        <Unit value="–" label="days" />
        <Unit value="–" label="hours" />
        <Unit value="–" label="min" />
        <Unit value="–" label="sec" />
      </div>
    );
  }

  // --- hydrated, dynamic ---
  return (
    <div className="flex gap-5 ">
      <Unit value={time.d} label="days" />
      <Unit value={time.h} label="hours" />
      <Unit value={time.m} label="min" />
      <Unit value={time.s} label="sec" />
    </div>
  );
};

type UnitProps = { value: string | number; label: string };
const Unit = ({ value, label }: UnitProps) => (
  <div>
    <span className="countdown font-mono  text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8x">
      <span
        style={{ "--value": value } as React.CSSProperties}
        aria-live="polite"
      >
        {String(value).padStart(2, "0")}
      </span>
    </span>
    {label}
  </div>
);

export default Skipertimer;
