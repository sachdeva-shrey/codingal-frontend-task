import React, { useState, useEffect } from "react";

import "./timer.css";

interface TimerProps {
  initialMinute: number;
  initialSeconds: number;
  key: number;
}

const Timer = (props: TimerProps) => {
  const { initialMinute, initialSeconds } = props;
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <>
      {minutes === 0 && seconds === 0 ? (
        <p className="timer">Time up</p>
      ) : (
        <p className="timer">
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </p>
      )}
    </>
  );
};

export default Timer;
