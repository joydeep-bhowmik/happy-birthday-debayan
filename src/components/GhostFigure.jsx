import { useEffect } from 'react';
import { motion } from 'framer-motion';
import GhostFigureImg from '../assets/img/figure.png';
import { lastCandleAudio } from '../assets/sounds/index.js';

export function GhostFigure() {
    useEffect(() => {
        lastCandleAudio.play();
    }, []);

    return (
        <motion.img
            src={GhostFigureImg}
            alt="Ghost Figure"
            style={{ height: 'auto', width: '100%' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
        />
    );
}