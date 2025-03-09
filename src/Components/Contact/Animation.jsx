import React, { useState } from 'react';
import { animated, useSpring } from '@react-spring/web';

const Animation = () => {
  const [isVisible, setIsVisible] = useState(false);  // state to toggle visibility

  const FadeIn = ({ isVisible, children }) => {
    const styles = useSpring({
      opacity: isVisible ? 1 : 0,  // opacity fades in or out
      y: isVisible ? 0 : 24,       // element moves up or down
    });

    return <animated.div style={styles}>{children}</animated.div>;
  };

  return (
    <div>
      {/* Button to toggle visibility */}
      <button onClick={() => setIsVisible(!isVisible)}>
        Toggle Fade In
      </button>

      {/* Example usage of FadeIn */}
      <FadeIn isVisible={isVisible}>
        <div style={{ backgroundColor: 'lightblue', padding: '20px' }}>
          This content will fade in and move up.
        </div>
      </FadeIn>
    </div>
  );
};

export default Animation;
