import { useEffect, useRef, useState } from "react";

function CustomCursor() {
  const dotRef   = useRef(null);
  const ringRef  = useRef(null);
  const pos      = useRef({ x: 0, y: 0 });
  const ring     = useRef({ x: 0, y: 0 });
  const raf      = useRef(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    /* Detect hovering over clickable elements */
    const onOver = (e) => {
      if (e.target.closest("a, button, [role='button'], input, textarea, select")) {
        setHovered(true);
      }
    };
    const onOut = (e) => {
      if (e.target.closest("a, button, [role='button'], input, textarea, select")) {
        setHovered(false);
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout",  onOut);

    /* Laggy ring follows with lerp */
    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.12;
      ring.current.y += (pos.current.y - ring.current.y) * 0.12;

      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate(${pos.current.x - 4}px, ${pos.current.y - 4}px)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform =
          `translate(${ring.current.x - 20}px, ${ring.current.y - 20}px)`;
      }

      raf.current = requestAnimationFrame(animate);
    };
    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout",  onOut);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      {/* Inner dot — snaps instantly */}
      <div
        ref={dotRef}
        className="hidden md:block fixed top-0 left-0 pointer-events-none z-[999] will-change-transform"
        style={{ width: 8, height: 8 }}
      >
        <div className={`
          w-full h-full rounded-full bg-cyan-400
          transition-transform duration-150
          ${hovered ? "scale-0" : "scale-100"}
        `} />
      </div>

      {/* Outer ring — lags behind smoothly */}
      <div
        ref={ringRef}
        className="hidden md:block fixed top-0 left-0 pointer-events-none z-[998] will-change-transform"
        style={{ width: 40, height: 40 }}
      >
        <div className={`
          w-full h-full rounded-full
          border border-cyan-400/60
          transition-all duration-200
          ${hovered ? "scale-150 border-cyan-400 bg-cyan-400/10" : "scale-100"}
        `} />
      </div>
    </>
  );
}

export default CustomCursor;