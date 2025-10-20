import { useEffect, useState, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import './envelope.scss';
import { Flower } from '../flower/Flower';

export const Envelope = ({ setCanScroll, hasSound }) => {
  const [opened, setOpened] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [searchParams] = useSearchParams();
  const ticketsNum = searchParams.get('t') || 0;

  const audioEnvelopeRef = useRef(null);
  const audioBackgroundRef = useRef(null);

  // No cargamos audio aún — Safari requiere interacción del usuario primero
  useEffect(() => {
    const env = new Audio('./sounds/opening-envelope.mp4');
    env.preload = 'auto';
    audioEnvelopeRef.current = env;

    const bg = new Audio('./sounds/background.mp3');
    bg.preload = 'auto';
    bg.loop = true;
    bg.volume = 0; // volumen inicial 0 para Safari
    audioBackgroundRef.current = bg;
  }, []);

  const handleClick = async () => {
    if (opened) return;
    setOpened(true);
    setCanScroll(true);

    // --- reproducir sonido del sobre ---
    if (audioEnvelopeRef.current) {
      try {
        audioEnvelopeRef.current.muted = !hasSound;
        audioEnvelopeRef.current.volume = hasSound ? 1 : 0;
        await audioEnvelopeRef.current.play();
      } catch (e) {
        console.log('No se pudo reproducir el audio del sobre:', e);
      }
    }

    // --- reproducir música de fondo ---
    setTimeout(async () => {
      if (audioBackgroundRef.current) {
        try {
          // Safari solo respeta el volumen/mute si se hace dentro del mismo click
          audioBackgroundRef.current.muted = !hasSound;
          audioBackgroundRef.current.volume = hasSound ? 0.2 : 0;
          await audioBackgroundRef.current.play();
        } catch (e) {
          console.log('No se pudo reproducir el audio de fondo:', e);
        }
      }
    }, 1000);

    setTimeout(() => setHidden(true), 2000);
  };

  // Si cambia hasSound, ajustar volumen solo si el audio ya fue reproducido
  useEffect(() => {
    if (audioBackgroundRef.current) {
      const bg = audioBackgroundRef.current;
      bg.muted = !hasSound;
      bg.volume = hasSound ? 0.2 : 0;
    }
  }, [hasSound]);

  if (hidden) return null;

  return (
    <div
      className={`envelope envelope__overlay ${opened ? 'envelope__overlay--fade envelope--opened' : ''}`}
      onClick={handleClick}
    >
      <div className="envelope__relative-container">
        <Flower position="left" type={3} />
        <div className={`envelope__container ${opened ? 'envelope--opened' : ''}`}>
          <div className="envelope__invitation-container">
            <div className="envelope__row">NUESTRA BODA</div>
            <div className="envelope__row envelope__names subtitle cursive">Itzel y Jesús</div>
            <div className="envelope__row">23-ENERO-2026</div>
          </div>

          <img src="./img/envelope.webp" alt="envelope" className="envelope__env-image" />

          <div className="envelope__invitation-container">
            <div className="envelope__row">CLICK PARA ABRIR LA INVITACIÓN</div>
            <div className="envelope__row">HEMOS RESERVADO</div>
            <div className="envelope__row subtitle">{ticketsNum}</div>
            <div className="envelope__row">LUGARES EN SU HONOR</div>
          </div>
        </div>
        <Flower position="right" type={3} />
      </div>
    </div>
  );
};
