import React, { useEffect, useState, useCallback } from "react";
import { FaArrowUp } from "react-icons/fa";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = useCallback(() => {
    const heightToHide = 20;
    const winScroll = window.scrollY;

    if (winScroll > heightToHide) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, [listenToScroll]);

  return (
    <div className="flex justify-center items-center relative">
      {isVisible && (
        <div
          className="top-btn text-white bg-blue-500 shadow rounded-full fixed bottom-5 right-5
                      md:right-0  w-16 h-16 flex justify-center items-center cursor-pointe z-50 hover:bg-red-600"
          onClick={goToTop}
        >
          <FaArrowUp className="top-btn--icon animate-gototop" />
        </div>
      )}
    </div>
  );
};

export default GoToTop;
