import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './envelope.scss';

export const Envelope = () => {
  const [opened, setOpened] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [searchParams] = useSearchParams();
  const invitationText = searchParams.get("inv") || '-';
  const ticketsNum = searchParams.get("t") || 0;

  const playEnvelope = () => {
    const audio = new Audio('./sounds/opening-envelope.mp4');
    audio.play();
  }

  const playSong = () => {
    const audio = new Audio('./sounds/background.mp3');
    audio.volume = 0.2;
    audio.loop = true;
    audio.play();
  }

  const handleClick = () => {
    setOpened(true);
    playEnvelope();
    setTimeout(() => {
      playSong();
    }, 1_000);
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
        <img src="./img/envelope.webp" alt="envelope" />
        {/* <div className="envelope__base"></div>
        <div className="envelope__flap"></div> */}
        {/* <div className={`envelope__seal ${opened ? 'envelope__seal--broken' : ''}`}></div> */}

        <div className="envelope__invitation-container">
          <div>
            Invitado(s):
          </div>
          <div>
            {invitationText}
          </div>
          <div>
            Boletos:
          </div>
          <div>
            {ticketsNum}
          </div>
        </div>
      </div>

    </div>
  );
};
