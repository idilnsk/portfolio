import React from 'react';
import Lottie from 'lottie-react';
import animationData from "./assests/animations/animation_lmgarh7s.json";

const LottieBackground = () => {
  return (
    <div className="lottie-background">
      <Lottie 
        animationData={animationData} 
        style={{ width: '100%', height: '100%' }} 
        autoplay 
        loop 
        rendererSettings={{
          preserveAspectRatio: "xMidYMid slice"
        }}
      />
    </div>
  );
}
export default LottieBackground;