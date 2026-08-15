"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    function move(e: MouseEvent) {
      setPos({ x: e.clientX, y: e.clientY });
    }
    function over(e: MouseEvent) {
      const target = e.target as HTMLElement;
      setActive(!!target.closest("a, button"));
    }
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed z-[999] hidden rounded-full border border-copper-light mix-blend-difference transition-all duration-150 ease-out md:block"
      style={{
        left: pos.x,
        top: pos.y,
        width: active ? 40 : 20,
        height: active ? 40 : 20,
        transform: "translate(-50%, -50%)",
      }}
    />
  );
}
