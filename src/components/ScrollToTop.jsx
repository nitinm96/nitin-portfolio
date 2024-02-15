import { ArrowUpward } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  animateScroll,
} from "react-scroll";
import MediaQuery from "react-responsive";

function ToTopButton() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      // Get the current scroll position
      const scrollY = window.scrollY;

      // Define the amount you want to trigger the change
      const scrollThreshold = 200; // Adjust this value as needed

      // Check if the scroll position is more than the threshold
      if (scrollY > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    // Attach the event listener to the scroll event
    window.addEventListener("scroll", handleScroll);

    // Cleanup: Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  const scrollToTop = () => {
    animateScroll.scrollToTop({
      duration: 500,
      smooth: "easeInOutQuad",
    });
  };

  return (
    <div>
      <MediaQuery minWidth={700}>
        <div
          className={
            isScrolled
              ? "fixed bottom-6 right-6 rounded-full p-3 bg-orange-400 cursor-pointer z-50 ease-in duration-150 hover:scale-125 hover:transition-all"
              : "fixed -top-full rounded-full p-2 bg-orange-400 ease-out duration-150 z-50"
          }
          onClick={scrollToTop}
        >
          <ArrowUpward htmlColor="white" fontSize="medium" />
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={700}>
        <div
          className={
            isScrolled
              ? "fixed bottom-3 right-3 rounded-full p-2 bg-orange-400 cursor-pointer z-50 ease-in duration-150 "
              : "fixed -top-full rounded-full p-2 bg-orange-400 ease-out duration-150 z-50"
          }
          onClick={scrollToTop}
        >
          <ArrowUpward htmlColor="white" fontSize="medium" />
        </div>
      </MediaQuery>
    </div>
  );
}

export default ToTopButton;
