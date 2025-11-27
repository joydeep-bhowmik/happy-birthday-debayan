import { useState } from 'react';
import Candle from './Candle.jsx';
import { matchLightAudio as audio } from '../assets/sounds/index.js';

const CandleSection = ({ callback }) => {
    const [candlesLit, setCandlesLit] = useState([false, false, false, false, false]);
    const allLit = candlesLit.every(Boolean);

    const onLightCandles = () => {
        candlesLit.forEach((_, i) => {
            const isLast = i === candlesLit.length - 1;

            setTimeout(() => {
                setCandlesLit(prev => {
                    const updated = [...prev];
                    updated[i] = true;
                    return updated;
                });

                audio.play();

                if (isLast && callback) {
                    callback(); // fires after final candle lights
                }
            }, i * 400);
        });
    };

    return (
        <div id="candleSection">
            <p>Light the black candles to summon the spirits...</p>

            <div className="candle-container">
                {candlesLit.map((lit, index) => (
                    <Candle key={index} index={index} lit={lit} />
                ))}
            </div>

            {!allLit && (
                <button className="btn" style={{ margin: 'auto' }} onClick={onLightCandles}>
                    Light the Candles
                </button>
            )}
        </div>
    );
};

export default CandleSection;
