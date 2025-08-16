import React, { useEffect, useState } from 'react';

/**
 * A component that animates its children as they scroll into view.
 * It uses the Intersection Observer API to detect when the element is visible.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children The content to be animated.
 * @returns {React.ReactNode} The animated content wrapped in a div.
 */
const RevealOnScroll = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, setRef] = useState(null);

  useEffect(() => {
    // Check if the IntersectionObserver API is available in the browser
    if (!('IntersectionObserver' in window)) {
        setIsVisible(true); // If not available, just show the content
        return;
    }

    // Create a new Intersection Observer instance
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If the element is intersecting the viewport, set isVisible to true
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Stop observing once it has been revealed
            observer.disconnect();
          }
        });
      },
      {
        // The threshold is the percentage of the target's visibility
        // at which the observer's callback should be executed.
        threshold: 0.1
      }
    );

    if (ref) {
      // Start observing the element
      observer.observe(ref);
    }

    // Cleanup function to unobserve the element when the component unmounts
    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ref]); // Re-run effect if the ref changes

  return (
    // Add a class that triggers the fade-in animation
    <div ref={setRef} className={`fade-in ${isVisible ? 'visible' : ''}`}>
      {children}
    </div>
  );
};

export default RevealOnScroll;