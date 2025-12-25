import React, { useState, useEffect } from "react";
import "./Countdown.css";

const Countdown = () => {
  const birthday = new Date("2026-01-26T00:00:00"); // replace with Neha's birthday

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const diff = birthday.getTime() - now;

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);

      setDays(d > 0 ? d : 0);
      setHours(h > 0 ? h : 0);
      setMinutes(m > 0 ? m : 0);
      setSeconds(s > 0 ? s : 0);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  // helper to split digits for flipping effect
  const splitDigits = (num) => String(num).padStart(2, "0").split("");

  return (
    <div className="countdown">
      <div className="flip-timer">
        <div className="digit">
          {splitDigits(days).map((d, i) => (
            <div key={i} className="card">
              <div className="text">{d}</div>
            </div>
          ))}
          <div className="label">Days</div>
        </div>

        <div className="digit">
          {splitDigits(hours).map((h, i) => (
            <div key={i} className="card">
              <div className="text">{h}</div>
            </div>
          ))}
          <div className="label">Hours</div>
        </div>

        <div className="digit">
          {splitDigits(minutes).map((m, i) => (
            <div key={i} className="card">
              <div className="text">{m}</div>
            </div>
          ))}
          <div className="label">Minutes</div>
        </div>

        <div className="digit">
          {splitDigits(seconds).map((s, i) => (
            <div key={i} className="card">
              <div className="text">{s}</div>
            </div>
          ))}
          <div className="label">Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
