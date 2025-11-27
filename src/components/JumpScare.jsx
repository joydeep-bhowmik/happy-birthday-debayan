import { useEffect, useState, useRef } from "react";
import JumpscareImg from "../assets/img/jump-scare.jpg";
import { screamAudio } from "../assets/sounds";

export default function JumpScare() {
    const [active, setActive] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);
    const containerRef = useRef(null);
    const audioPlayedRef = useRef(false);

    // Preload resources
    useEffect(() => {
        const img = new Image();
        img.src = JumpscareImg;
        img.onload = () => setImageLoaded(true);

        screamAudio.load();

        return () => {
            screamAudio.pause();
            screamAudio.currentTime = 0;
        };
    }, []);

    useEffect(() => {
        if (!imageLoaded) return;

        let timeouts = [];

        const triggerJumpscare = () => {
            setActive(true);

            if (!audioPlayedRef.current) {
                screamAudio.play().catch(console.error);
                audioPlayedRef.current = true;
            }

            const hideTimeout = setTimeout(() => {
                setActive(false);
            }, 2000);

            timeouts.push(hideTimeout);
        };

        const startTimeout = setTimeout(triggerJumpscare, 50);
        timeouts.push(startTimeout);

        return () => timeouts.forEach(clearTimeout);
    }, [imageLoaded]);

    if (!active || !imageLoaded) return null;

    return (
        <div
            ref={containerRef}
            className="jumpscare-container"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'black',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 9999,
                opacity: 0,
                animation: 'fadeIn 0.05s linear forwards'
            }}
        >
            <img
                src={JumpscareImg}
                alt="jumpscare"
                className="jumpscare-image"
                style={{
                    width: '100%',
                    maxWidth: '600px',
                    transform: 'scale(0.8)',
                    animation: 'jumpscareScale 0.2s ease-out forwards',
                    imageRendering: 'crisp-edges',
                    backfaceVisibility: 'hidden',
                    transformStyle: 'preserve-3d'
                }}
                draggable={false}
            />

            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @keyframes jumpscareScale {
                    0% { 
                        transform: scale(0.8) rotate(-5deg); 
                    }
                    70% { 
                        transform: scale(1.4) rotate(2deg); 
                    }
                    100% { 
                        transform: scale(1.2) rotate(0deg); 
                    }
                }

                .jumpscare-container {
                    transform: translateZ(0);
                    will-change: opacity;
                }

                .jumpscare-image {
                    transform: translateZ(0);
                    will-change: transform;
                }
            `}</style>
        </div>
    );
}