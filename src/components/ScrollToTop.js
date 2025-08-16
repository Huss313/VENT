import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { animateScroll as scroll } from 'react-scroll';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    // Show button after a certain scroll position
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollTop = () => {
    scroll.scrollToTop({ smooth: true, duration: 500 });
  };

  return (
    <Button
      id="scroll-to-top"
      onClick={scrollTop}
      className={showScroll ? 'show' : ''}
      variant="primary"
    >
      <FaArrowUp />
    </Button>
  );
};

export default ScrollToTop;