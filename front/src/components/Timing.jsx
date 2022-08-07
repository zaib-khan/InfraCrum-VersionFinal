import { useEffect, useState } from 'react';

const Timing = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((second) => second + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="app flex mb-4 items-center justify-center">
      <div className="time text-amber-400 text-3xl px-4 mx-2  text-center">
        {seconds}s
      </div>
      <div className="row">
        <button
          type="button"
          className="button bg-amber-400 px-4 rounded-xl"
          onClick={toggle}>
          {isActive ? 'Pause' : 'Start'}
        </button>
      </div>
    </div>
  );
};

export default Timing;
