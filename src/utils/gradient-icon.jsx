'use client';
import React from "react";

export default function GradientIcon({ children, isActive = false, ...props }) {
  const gradientId = React.useId();
  
  const isDark = document.documentElement.classList.contains('dark') ? true : false

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <svg width="0" height="0">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-gradientstart)" />
            <stop offset="100%" stopColor="var(--color-gradientend)" />
          </linearGradient>
        </defs>
      </svg>
      {React.cloneElement(children, {
        ...props,
        style: { 
          fill: isActive ? (isDark ? "#fff" : "#000") : `url(#${gradientId})`,
          ...props.style 
        }
      })}
    </div>
  );
}