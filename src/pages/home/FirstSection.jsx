import React, { useEffect, useState } from "react";
import AnimatedMouseIcon from "../../components/home/AnimatedMouseIcon";
import { useSelector } from "react-redux";

function FirstSection() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [opacity, setOpacity] = useState(1);
  const scrollPosition = useSelector((state) => state.scroll.scrollPosition);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const windowHeight = window.innerHeight;

    const maxScroll = windowHeight * 0.5;

    if (scrollPosition <= maxScroll) {
      const newOpacity = 1 - scrollPosition / maxScroll;
      setOpacity(newOpacity);
    } else {
      setOpacity(0);
    }
  }, [scrollPosition]);

  return (
    <div className="h-screen flex flex-col justify-center items-center ">
      {isMobile ? (
        <img
          src="images/logo.png"
          alt="LV"
          className="text-white font-72 mb-16"
          width="128px"
          height="128px"
        />
      ) : (
        <img
          src="images/logo_text.png"
          alt="LOUIS VUITTUN"
          className="text-white font-72 mb-16"
        />
      )}
      <p className="text-white font-24 font-light">L'âme du voyage</p>
      <div className="absolute bottom-7" style={{ opacity }}>
        <AnimatedMouseIcon />
      </div>
    </div>
  );
}

export default FirstSection;
