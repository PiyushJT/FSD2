// Create a React app:
// • Add Start and Stop buttons
// • When Start is clicked, counter increments every second
// • When Stop is clicked, counter stops
// • Use useEffect with cleanup
import { useState, useEffect } from 'react';
function Pb385() {
    const [counter, setCounter] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    useEffect(() => {
        let intervalId;
        if (isRunning) {
            intervalId = setInterval(() => {
                setCounter(counter => counter + 1);
            }, 1000);   
        }
        return () => {
            clearInterval(intervalId);
        };
    }, [isRunning]);
    const handleStart = () => {
        setIsRunning(true);
    }
    const handleStop = () => {
        setIsRunning(false);
    }   
    return (
        <div>
            <h1 style={{ color: 'blue' }}>pb385</h1>
            <h2>Counter: {counter}</h2>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    );
}
export default Pb385;