import React, { useState, useEffect, useRef } from 'react';

export default function TypingEffect({ text = "", speed = 70, onDone, onStart }) {
    const [displayed, setDisplayed] = useState("");
    const timeoutRef = useRef(null);

    useEffect(() => {
        // Clear any existing timeouts
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        setDisplayed("");
        onStart?.();

        if (!text) {
            onDone?.();
            return;
        }

        let index = 0;
        const typeNext = () => {
            if (index < text.length) {
                setDisplayed(text.substring(0, index + 1));
                index++;
                timeoutRef.current = setTimeout(typeNext, speed);
            } else {
                onDone?.();
            }
        };

        // Start typing
        timeoutRef.current = setTimeout(typeNext, speed);

        // Cleanup function
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [text, speed]);

    return <span>{displayed}</span>;
}