import { useEffect, useState } from "react";

function useCountdown(hours = 3) {
    const targetTime = new Date().getTime() + hours * 60 * 60 * 1000;

    const calculateTime = () => {
        const now = new Date().getTime();
        const distance = targetTime - now;

        return {
            hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((distance / (1000 * 60)) % 60),
            seconds: Math.floor((distance / 1000) % 60)
        };
    };

    const [time, setTime] = useState(calculateTime());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(calculateTime());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return time;
}

export default useCountdown;