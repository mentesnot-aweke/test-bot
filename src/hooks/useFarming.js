import { useState, useEffect } from "react";

const useFarming = (durationInSeconds) => {
  const [isFarming, setIsFarming] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);

  const startFarming = () => {
    setIsFarming(true);
    setTimeLeft(durationInSeconds);
  };

  useEffect(() => {
    let timer = null;

    if (isFarming && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    }

    if (timeLeft === 0 && isFarming) {
      clearInterval(timer);
      setIsFarming(false);
    }

    return () => clearInterval(timer);
  }, [isFarming, timeLeft]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(secs).padStart(2, "0")}`;
  };

  return { isFarming, timeLeft, startFarming, formatTime };
};

export default useFarming;
