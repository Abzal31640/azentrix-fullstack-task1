import { useEffect, useState } from "react";

function CursorGlow() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const move = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed pointer-events-none w-64 h-64 rounded-full blur-3xl bg-cyan-500/10 z-0"
      style={{
        left: position.x - 128,
        top: position.y - 128,
      }}
    />
  );
}

export default CursorGlow;