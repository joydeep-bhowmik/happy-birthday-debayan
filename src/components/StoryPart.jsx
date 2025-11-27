import Ghost from './Ghost.jsx';
import Bat from './Bat.jsx';
import Spider from './Spider.jsx';
import Skull from './Skull.jsx';
import BloodDrips from './BloodDrops.jsx';
import TypingEffect from './TypingEffect.jsx';
import parts from '../utils/parts.js';
import { useEffect, useState } from 'react';
import { GhostFigure } from './GhostFigure.jsx';
import JumpScare from './JumpScare.jsx'

const StoryPart = ({ part, onTypingStart, onTypingDone }) => {
    const [typingDone, setTypingDone] = useState(false);
    const [showGhostFigure, setShowGhostFigure] = useState(false);
    const current = parts[part];

    useEffect(() => {

        current.audios.forEach(audio => {
            audio.currentTime = 0;
            audio.play();
        });

        return () => {
            current.audios.forEach(audio => {
                audio.pause();
                audio.currentTime = 0;
            });
        };
    }, [part]);

    useEffect(() => {
        if (typingDone && current.outro?.includes('lastcandle')) {
            const timeout = setTimeout(() => {
                setShowGhostFigure(true);
            }, 1500);
            return () => {
                setShowGhostFigure(false); clearTimeout(timeout);

            }
        }




    }, [typingDone, current]);

    return (
        <div className="story-part active" id={`part${current.id}`}>

            <div className="story-text">
                <TypingEffect
                    text={current.content}
                    onStart={onTypingStart}
                    pauseBeforeEnd={1200}
                    onDone={() => {
                        onTypingDone();
                        setTypingDone(true);
                    }}
                />
            </div>

            {showGhostFigure ? (
                <GhostFigure />
            ) : ''}

            {current.elements.includes('ghost') && <Ghost />}
            {current.elements.includes('bat') && <Bat />}
            {current.elements.includes('spider') && <Spider />}
            {current.elements.includes('skull') && <Skull />}
            {current.elements.includes('jumpscare') && <JumpScare />}

            <BloodDrips />
        </div>
    );
};

export default StoryPart;