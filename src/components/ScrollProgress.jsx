import { useEffect, useState } from "react";

function ScrollProgress() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress =
        (window.scrollY / totalHeight) * 100;

      setScroll(progress);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[9999]">
      <div
        className="h-full transition-all duration-150 ease-out"
        style={{
          width: `${scroll}%`,
          background:
            "linear-gradient(90deg, #22d3ee, #06b6d4, #a855f7)",
          boxShadow:
            "0 0 10px rgba(34,211,238,0.8), 0 0 20px rgba(168,85,247,0.4)",
        }}
      />
    </div>
  );
}

export default ScrollProgress;