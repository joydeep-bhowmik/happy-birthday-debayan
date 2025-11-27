import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { bgAudio } from '../assets/sounds';
import { happyBirthdayAudio } from '../assets/sounds';

const WishSection = ({ onRestart }) => {
    const [credits, setCredits] = useState([]);
    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    const [showMessage, setShowMessage] = useState(true);
    const [showReadAgain, setShowReadAgain] = useState(false);

    const canvasRef = useRef(null);
    const confettiRef = useRef(null);
    const sequenceTimeoutRef = useRef(null);

    const creditLines = useRef([
        "Happy Birthday, Debayan.",
        "Another year completed",
        "From your friend, Joydeep.",
        "I saved your last candle for you.",
        "(It was me all along.)",
        "Thanks for being one of the closest people in my life.",
        "Stay alive. I'd rather not lose you.",
        "If friendship had boss fights, you'd probably still overthink the tutorial.",
        "Yet here you are, leveling up one more year.",
        "May this year bring you fewer decisions to regret — or at least better ones.",
        "I'm rooting for you.",
        "Happy Birthday again. Now blow the candle."
    ]);

    useEffect(() => {
        setCredits(creditLines.current.map((t, i) => ({ id: i, text: t })));
    }, []);

    // Create confetti ONCE
    useEffect(() => {
        if (!canvasRef.current) return;

        confettiRef.current = confetti.create(canvasRef.current, {
            resize: true,
            useWorker: true
        });
    }, []);

    const fireConfetti = useCallback(() => {
        if (!confettiRef.current) return;

        confettiRef.current({
            particleCount: 120,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#8b0000', '#dc143c', '#ff6b6b', '#ffd700']
        });
    }, []);

    // Play audio + confetti once
    useEffect(() => {

        bgAudio.pause();
        happyBirthdayAudio.loop = true;
        happyBirthdayAudio.play();
        fireConfetti();

        return () => {
            happyBirthdayAudio.pause();
            happyBirthdayAudio.currentTime = 0;
        };
    }, [fireConfetti]);

    // Smooth message sequence (NO nested laggy intervals)
    const startMessageSequence = useCallback(() => {
        if (sequenceTimeoutRef.current)
            clearTimeout(sequenceTimeoutRef.current);

        let index = 0;
        setCurrentLineIndex(0);
        setShowReadAgain(false);
        setShowMessage(true);

        const run = () => {
            setShowMessage(false);

            sequenceTimeoutRef.current = setTimeout(() => {
                index++;
                if (index < credits.length) {
                    setCurrentLineIndex(index);
                    setShowMessage(true);

                    sequenceTimeoutRef.current = setTimeout(run, 2600);
                } else {
                    setShowReadAgain(true);
                    setShowMessage(false);
                }
            }, 700);
        };

        // Start
        sequenceTimeoutRef.current = setTimeout(run, 2400);
    }, [credits.length]);

    useEffect(() => {

        window.dispatchEvent(new Event("scrollToTop"));

        if (!credits.length) return;

        const timer = setTimeout(() => {
            startMessageSequence();
        }, 300);

        return () => clearTimeout(timer);
    }, [credits, startMessageSequence]);

    const handleReadAgain = () => {
        startMessageSequence();
    };

    const handleRestart = () => {
        fireConfetti();
        setTimeout(() => {
            onRestart();
        }, 800);
    };

    const textVariants = {
        enter: { opacity: 0, y: 20 },
        center: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.4 } }
    };

    return (
        <motion.div
            id="wishSection"
            className="wish-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <canvas ref={canvasRef} className="confetti-canvas" />

            <motion.div className="birthday-wish font-creepster">
                Happy Birthday Debayan... From The Other Side
            </motion.div>

            <div className="message-container">
                <AnimatePresence mode="wait">
                    {showMessage && credits[currentLineIndex] && (
                        <motion.div
                            key={currentLineIndex}
                            variants={textVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            className="credit-line"
                        >
                            {credits[currentLineIndex].text}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className="button-container">
                <AnimatePresence>
                    {showReadAgain && (
                        <motion.button
                            className="read-again-btn"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={handleReadAgain}
                        >
                            Read the Wish Message Again
                        </motion.button>
                    )}
                </AnimatePresence>

                <button className="btn" onClick={handleRestart}>
                    Try to Escape
                </button>
            </div>


        </motion.div>
    );
};

export default WishSection;
