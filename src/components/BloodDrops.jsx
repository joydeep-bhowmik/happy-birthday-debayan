import React, { useState, useEffect } from 'react';
const BloodDrips = () => {
    const [drips, setDrips] = useState([]);

    useEffect(() => {
        const newDrips = Array.from({ length: 5 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            delay: Math.random() * 1,
            duration: Math.random() * 3 + 2
        }));
        setDrips(newDrips);

        const timer = setTimeout(() => {
            setDrips([]);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {drips.map(drip => (
                <div
                    key={drip.id}
                    className="blood-drip"
                    style={{
                        left: `${drip.left}%`,
                        animation: `drip ${drip.duration}s ease-in-out`,
                        animationDelay: `${drip.delay}s`
                    }}
                ></div>
            ))}
        </>
    );
};

export default BloodDrips;