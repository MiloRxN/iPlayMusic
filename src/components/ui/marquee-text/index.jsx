"use client";
import { useEffect, useRef, useState } from "react";

export default function MarqueeText({ name, className = "" }) {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [scrollNeeded, setScrollNeeded] = useState(false);

  useEffect(() => {
    const containerWidth = containerRef.current.offsetWidth;
    const textWidth = textRef.current.scrollWidth;
    setScrollNeeded(textWidth > containerWidth);
  }, [name]);

  return (
    <div
      ref={containerRef}
      className={"w-[250px] overflow-hidden whitespace-nowrap relative " + className}
    >
      <div
        ref={textRef}
        style={{
          display: "inline-flex",
          animation: scrollNeeded ? "scrollText 16s linear infinite" : "none",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <span>{name}</span>
          {scrollNeeded && <span style={{ margin: "0 25px", opacity: 0.6 }}>•</span>}
        </div>
        {scrollNeeded && (
          <div style={{ display: "flex", alignItems: "center" }}>
            <span>{name}</span>
            <span style={{ margin: "0 25px", opacity: 0.6 }}>•</span>
          </div>
        )}
      </div>

      <style jsx>{`
                @keyframes scrollText {
                    from {
                        transform: translateX(0);
                    }
                    to {
                        transform: translateX(-50%);
                    }
                }
            `}</style>
    </div>
  );
}