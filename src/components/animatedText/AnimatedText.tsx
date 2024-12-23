import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const AnimatedText: React.FC = () => {
  const el = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (el.current) {
      const options = {
        strings: [
          "and Scale Up",
          "And unlock your potential ",
          "And transform your future",
        ],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 1500, // Time to wait before starting to delete
        startDelay: 500, // Delay before typing starts
        loop: true,
        showCursor: false,
      };

      // Initialize the Typed.js instance
      const typed = new Typed(el.current, options);

      // Cleanup Typed.js instance when component unmounts
      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <div
      ref={el}
      className="font-Lexend text-[22px] font-bold lg:text-[40px] xl:text-[40px] leading-[1] lg:tracking-[-4px] text-red-500 xxs:my-4 sm:my-2 text-center md:text-left"
    />
  );
};

export default AnimatedText;
