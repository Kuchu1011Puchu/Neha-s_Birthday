import React, { useState, useEffect } from "react";

const Countdown = () => {
  const birthday = new Date("2026-01-11T00:00:00"); // replace with Neha's birthday

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
  }, []); // removed birthdayReached

  return (
    <div className="countdown">
      {days}d {hours}h {minutes}m {seconds}s
    </div>
  );
};

export default Countdown;
