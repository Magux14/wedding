import { useEffect, useState, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import './envelope.scss';
import { Flower } from '../flower/Flower';

export const Envelope = ({ setCanScroll, hasSound }) => {
  const [opened, setOpened] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [searchParams] = useSearchParams();
  const invitationText = searchParams.get("inv") || '-';
  const ticketsNum = searchParams.get("t") || 0;

  // Refs para los audios
  const audioEnvelopeRef = useRef(null);
  const audioBackgroundRef = useRef(null);

  // Cargar audios una sola vez
  useEffect(() => {
    audioEnvelopeRef.current = new Audio('./sounds/opening-envelope.mp4');
    audioEnvelopeRef.current.preload = 'auto';

    audioBackgroundRef.current = new Audio('./sounds/background.mp3');
    audioBackgroundRef.current.preload = 'auto';
    audioBackgroundRef.current.volume = hasSound ? 0.2 : 0;
    audioBackgroundRef.current.loop = true;
  }, []); // se ejecuta solo al montar

  // Ajustar volumen según hasSound
  useEffect(() => {
    if (!audioBackgroundRef.current) return;

    // Safari requiere que el volumen se asigne justo antes de play()
    audioBackgroundRef.current.volume = hasSound ? 0.2 : 0;
  }, [hasSound]);

  const handleClick = async () => {
    if (opened) return;
    setOpened(true);

    setCanScroll(true);

    // reproducir el sonido del sobre
    if (audioEnvelopeRef.current) {
      try {
        await audioEnvelopeRef.current.play();
      } catch (e) {
        console.log('No se pudo reproducir el audio del sobre:', e);
      }
    }

    // reproducir audio de fondo después de 1 segundo
    setTimeout(async () => {
      if (audioBackgroundRef.current) {
        try {
          await audioBackgroundRef.current.play();
        } catch (e) {
          console.log('No se pudo reproducir el audio de fondo:', e);
        }
      }
    }, 1000);

    // ocultar overlay después de 2 segundos
    setTimeout(() => setHidden(true), 2000);
  };

  if (hidden) return null;

  return (
    <div
      className={`envelope envelope__overlay ${opened ? 'envelope__overlay--fade envelope--opened' : ''}`}
      onClick={handleClick}
    >
      <div className="envelope__relative-container">
        <Flower position={'left'} type={3} />
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
        <Flower position={'right'} type={3} />
      </div>
    </div>
  );
};
