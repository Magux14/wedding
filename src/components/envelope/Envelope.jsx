import { useState } from 'react';
import './envelope.scss';

export const Envelope = () => {
  const [opened, setOpened] = useState(false);
  const [hidden, setHidden] = useState(false);

  const handleClick = () => {
    setOpened(true);
    setTimeout(() => {
      setHidden(true);
    }, 2000);
  };

  if (hidden) return null;

  return (
    <div className={`envelope__overlay ${opened ? 'envelope__overlay--fade' : ''}`}>
      <div
        className={`envelope__container ${opened ? 'envelope--opened' : ''}`}
        onClick={handleClick}
      >
        <div className="envelope__base"></div>
        <div className="envelope__flap"></div>
        {/* <div className={`envelope__seal ${opened ? 'envelope__seal--broken' : ''}`}></div> */}
      </div>
    </div>
  );
};
