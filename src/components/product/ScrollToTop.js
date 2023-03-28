import React, { useEffect, useState } from "react";
import { SlArrowUp } from "react-icons/sl";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="top-to-btn">
      {showTopBtn && (
        <SlArrowUp onClick={goToTop} className="icon-position icon-style" />
      )}
    </div>
  );
};

export default ScrollToTop;
