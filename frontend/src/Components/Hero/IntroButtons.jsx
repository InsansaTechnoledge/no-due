import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

const IntroButtons = () => {
  const primaryBtnRef = useRef(null);
  const secondaryBtnRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current.children,
      {
        opacity: 0,
        y: 30,
        scale: 0.9
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'back.out(1.7)'
      }
    );

  }, []);

  // IntroButtons.jsx
return (
  <div
    ref={containerRef}
    className="flex gap-6 md:mr-5 items-center font-[font5] relative cursor-pointer pointer-events-auto"
  >
    <button
      ref={primaryBtnRef}
      type="button"
      className="relative  px-8 py-4 text-lg font-semibold text-white rounded-2xl overflow-hidden transition-all primary-button-gradient"
    >
      <span className="relative z-10">Start Free Trial</span>
    </button>

    <div
      ref={secondaryBtnRef}
      className="inline-flex rounded-2xl p-[2px] transition-all relative z-20 pointer-events-auto"
      style={{ background: 'linear-gradient(135deg, #93c5fd 0%, #5eead4 100%)' }}
    >
      <Link
        to="/contact"
        onClick={e => e.stopPropagation()}  // shields from parent handlers
        className="rounded-[calc(1rem-2px)] bg-white px-8 py-4 text-lg font-semibold transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
        style={{ color: '#14b8a6' }}
      >
        Book Demo
      </Link>
    </div>
  </div>
);

};

export default IntroButtons;