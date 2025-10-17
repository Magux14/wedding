import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './envelope.scss';

export const Envelope = ({ setCanScroll }) => {
  const [opened, setOpened] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [searchParams] = useSearchParams();
  const invitationText = searchParams.get("inv") || '-';
  const ticketsNum = searchParams.get("t") || 0;

  const loadAudioEnvelope = () => {
    const audio = new Audio('./sounds/opening-envelope.mp4');
    audio.preload = 'auto';
    return audio;
  }

  const playEnvelope = () => {
    audioEnvelope.play();
  }

  const loadAudioBackground = () => {
    const audio = new Audio('./sounds/background.mp3');
    audio.preload = 'auto';
    audio.volume = 0.2;
    audio.loop = true;
    return audio;
  }

  const playBackground = () => {
    // audioBackground.play();
  }

  let audioEnvelope = loadAudioEnvelope();
  let audioBackground = loadAudioBackground();

  const handleClick = () => {
    if (opened) {
      return;
    }
    setOpened(true);
    playEnvelope();
    setCanScroll(true);
    setTimeout(() => {
      playBackground();
    }, 1_000);
    setTimeout(() => {
      setHidden(true);
    }, 2000);
  };

  if (hidden) return null;

  return (
    <div className={`envelope__overlay ${opened ? 'envelope__overlay--fade envelope--opened' : ''}`} onClick={handleClick}>
      <div
        className={`envelope__container ${opened ? 'envelope--opened' : ''}`}
      >
        <img src="./img/envelope.webp" alt="envelope" />
        {/* <div className="envelope__base"></div>
        <div className="envelope__flap"></div> */}
        {/* <div className={`envelope__seal ${opened ? 'envelope__seal--broken' : ''}`}></div> */}

        <div className="envelope__invitation-container">
          <div className="subtitle">
            Invitado(s):
          </div>
          <div className="subtitle">
            {invitationText}
          </div>
          <div className="subtitle">
            Boletos:
          </div>
          <div className="subtitle">
            {ticketsNum}
          </div>
        </div>
      </div>

    </div>
  );
};
