import { useState } from "react";
import StoryPart from './StoryPart.jsx';
import parts from '../utils/parts.js';

const StorySection = ({ currentPart, onNext, onPrev }) => {

    const [disabled, setDisabled] = useState(true);

    return (
        <div id="storySection">
            <div>
                <div>Now, let the horror unfold...</div>
                <div>{currentPart + 1} / {parts.length}</div>
            </div>

            <div className="story-container active">
                <StoryPart
                    part={currentPart}
                    onTypingStart={() => setDisabled(true)}
                    onTypingDone={() => setDisabled(false)}
                />
            </div>

            <div className={`story-nav transition-button ${disabled ? "hidden-btn" : "visible-btn"}`}>
                <button
                    className={`btn transition-button ${disabled ? "hidden-btn" : "visible-btn"}`}
                    onClick={onPrev}
                    disabled={disabled || currentPart === 0}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" height={'10px'}>
                        <path stroke-linecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
                    </svg>
                    Previous
                </button>

                <button
                    className={`btn transition-button ${disabled ? "hidden-btn" : "visible-btn"}`}
                    onClick={onNext}
                    disabled={disabled}
                >
                    {currentPart < parts.length - 1 ? 'Continue the Horror ' : 'Take the Last Candle'}

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" height={'10px'}>
                        <path stroke-linecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                    </svg>

                </button>
            </div>

            <br />
            <br />
        </div>
    );
};

export default StorySection;
