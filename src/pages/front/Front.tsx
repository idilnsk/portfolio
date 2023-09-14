import { useState, useEffect } from 'react';

interface SpotlightOverlayProps {
    onNavigate: () => void;
}

const SpotlightOverlay: React.FC<SpotlightOverlayProps> = ({ onNavigate }) => {
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

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
            <div className="background-image"></div>
            <div 
                className="spotlight-overlay" 
                style={{
                    clipPath: `circle(50px at ${cursorPos.x}px ${cursorPos.y}px)`
                }}
            ></div>

            <div className="content-container">
                <div className="intro-text"  style={{ color: "white" }}>
                    Hey, I&apos;m Idil. <br />
                    I&apos;m a full stack web developer.
                </div>
                <button 
                    onClick={onNavigate} 
                    className="arrow-button font-mukta" 
                    style={{ fontSize: "20px", color: "white" }}
                >
                    View my Webpage 
                </button>
            </div>
        </div>
    );
};

export default SpotlightOverlay;
