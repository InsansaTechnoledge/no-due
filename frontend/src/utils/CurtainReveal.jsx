import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function CurtainReveal({
  duration = 0.8,
  delay = 0,
  gapGloss = true,     // keep subtle center line; set false to remove
  onComplete,
}) {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useLayoutEffect(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduce) { onComplete?.(); return; }

    const tl = gsap.timeline({
      delay,
      defaults: { ease: "power4.inOut" },
      onComplete: () => onComplete?.(),
    });

    gsap.set([leftRef.current, rightRef.current], { xPercent: 0 });
    tl.to(leftRef.current,  { xPercent: -100, duration }, 0)
      .to(rightRef.current, { xPercent:  100, duration }, 0);

    return () => tl.kill();
  }, [delay, duration, onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Left panel (black) */}
      <div ref={leftRef} className="absolute top-0 left-0 h-full w-1/2 bg-teal-900" />
      {/* Right panel (black) */}
      <div ref={rightRef} className="absolute top-0 right-0 h-full w-1/2 bg-teal-900" />

      {gapGloss && (
        <>
          {/* subtle center seam */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-px bg-white/15 mix-blend-overlay" />
          {/* soft top vignette (still black) */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/40 to-transparent" />
        </>
      )}
    </div>
  );
}
