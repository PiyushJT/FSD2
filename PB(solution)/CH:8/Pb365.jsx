// Write a ReactJS script to create a digital clock running continuously.
// (useEffect)
import { useState, useEffect } from 'react';
function Pb365() {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);
    return (
        <div>
            <h1 style={{ color: 'blue' }}>pb365</h1>
            <h2>Current Time: {time.toLocaleTimeString()}</h2>
        </div>
    );
}
export default Pb365;