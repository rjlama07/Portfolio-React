import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const renderText = (text, className, baseWeight) => {
  return [...text].map((e, i) => {
    return (
      <span
        key={i}
        className={className}
        style={{ fontVariationSettings: `'wght' ${baseWeight}` }}
      >
        {e === " " ? "\u00A0" : e}
      </span>
    );
  });
};

const FONT_WEIGHT = {
  subTitle: { min: 100, max: 400, default: 100 },
  title: { min: 400, max: 900, default: 400 },
};

const hoverTextOver = (container, type) => {
  if (!container) {
    return;
  }
  const letters = container.querySelectorAll("span");
  const { min, max, default: defaultWeight } = FONT_WEIGHT[type];

  const animateLetter = (letter, weight, duration = 0.25) => {
    return gsap.to(letter, {
      duration,
      ease: "power2.out",
      fontVariationSettings: `'wght' ${weight}`,
    });
  };

  const handleMouseMove = (e) => {
    const { left } = container.getBoundingClientRect();
    const mouseX = e.clientX - left;

    letters.forEach((letter) => {
      const { left: l, width: w } = letter.getBoundingClientRect();
      const letterCenter = l - left + w / 2;
      const distance = Math.abs(mouseX - letterCenter);
      const intensity = Math.exp(-(distance * distance) / 2000);
      const weight = min + (max - min) * intensity;
      animateLetter(letter, weight);
    });
  };

  const handleMouseLeave = () => {
    letters.forEach((letter) => {
      animateLetter(letter, defaultWeight, 0.5);
    });
  };

  container.addEventListener("mousemove", handleMouseMove);
  container.addEventListener("mouseleave", handleMouseLeave);

  // Return cleanup function
  return () => {
    container.removeEventListener("mousemove", handleMouseMove);
    container.removeEventListener("mouseleave", handleMouseLeave);
  };
};

export const Welcome = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useGSAP(() => {
    const cleanupTitle = hoverTextOver(titleRef.current, "title");
    const cleanupSubtitle = hoverTextOver(subtitleRef.current, "subTitle");

    // Cleanup on unmount
    return () => {
      if (cleanupTitle) cleanupTitle();
      if (cleanupSubtitle) cleanupSubtitle();
    };
  }, []);

  return (
    <section id="welcome">
      <p ref={subtitleRef}>
        {renderText(
          "Hey, I am Ritesh! Welcome to my",
          "text-2xl font-georama",
          100
        )}
      </p>
      <h1 className="mt-7" ref={titleRef}>
        {renderText("Portfolio", "text-8xl italic font-georama", 400)}
      </h1>
      <div className="small-screen">
        <p>This portfolio is designed for Laptop and desktop only</p>
      </div>
    </section>
  );
};
