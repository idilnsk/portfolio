import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

interface SpotlightOverlayProps {
    onNavigate: () => void;
  }
  
  const SpotlightOverlay: React.FC<SpotlightOverlayProps> = ({ onNavigate }) => {    const router = useRouter();
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [showAboutMe, setShowAboutMe] = useState(false);
  

  useEffect(() => {
    const updateCursorPos = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', updateCursorPos);
    return () => {
      document.removeEventListener('mousemove', updateCursorPos);
    };
  }, []);
  


  return (
    <div className="entry-page">
      <div className={`background-image ${showAboutMe ? 'fading-out' : ''}`}></div>
      <div 
        className={`spotlight-overlay ${showAboutMe ? 'fading-out' : ''}`} 
        style={{
          clipPath: `circle(50px at ${cursorPos.x}px ${cursorPos.y}px)`
        }}
      ></div>

      <div className={`content-container ${showAboutMe ? 'fading-in' : ''}`}>
        <div className="intro-text">
            Hey, I&apos;m Idil. <br />
            I&apos;m a full stack web developer.
        </div>
        <button onClick={onNavigate} className="arrow-button font-mukta" style={{ fontSize: "20px", color: "#FF6B6B" }}>
            View my Webpage ↓
        </button>
           </div>
    </div>
  );
};

export default SpotlightOverlay;