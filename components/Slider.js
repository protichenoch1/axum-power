"use client";
import { useState, useEffect, useRef } from "react";

export default function Slider() {
  const images = [
    "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
    "https://images.unsplash.com/photo-1466611653911-95081537e5b7",
    "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa"
  ];

  const [index, setIndex] = useState(0);
  const startX = useRef(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Swipe start
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  // Swipe end
  const handleTouchEnd = (e) => {
    const diff = startX.current - e.changedTouches[0].clientX;

    if (diff > 50) {
      setIndex((prev) => (prev + 1) % images.length);
    } else if (diff < -50) {
      setIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  return (
    <div
      className="slider"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="slides"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((img, i) => (
          <img key={i} src={img} alt="" />
        ))}
      </div>

      <div className="dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={i === index ? "dot active" : "dot"}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
