// PageChangeAnimation.jsx (your PageShell)
import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import CurtainReveal from "./CurtainReveal";

export default function PageShell({ children, keyId }) {
  const ref = useRef(null);
  const [showCurtain, setShowCurtain] = useState(true);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // After the curtain is gone, fade/slide content in
      gsap.fromTo(
        ref.current,
        { autoAlpha: 0, y: 12 },
        { autoAlpha: 1, y: 0, duration: 0.45, ease: "power2.out", delay: 0.05 }
      );
    }, ref);
    return () => ctx.revert();
  }, [keyId]);

  return (
    <>
      {showCurtain && (
        <CurtainReveal
          color="#065f46"      // emerald-800
          duration={0.45}
          double
          onComplete={() => setShowCurtain(false)}
        />
      )}
      <main ref={ref}>{children}</main>
    </>
  );
}
