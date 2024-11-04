import React, { useState, useEffect } from 'react';

const DigitalClock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="clock">
            <div className="time">{time.toLocaleTimeString()}</div>
            <div className="date">{time.toLocaleDateString()}</div>
        </div>
    );
};

export default DigitalClock;
