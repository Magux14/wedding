import './wedding.scss';
import { Portrait } from '../../components/portrait/Portrait';
import { Gifts } from '../../components/gifts/Gifts';
import { SalonMap } from '../../components/salon-map/SalonMap';
import { MessageFromBride } from '../../components/message-from-bride/MessageFromBride';
import { Parents } from '../../components/parents/Parents';
import { DressCode } from '../../components/dress-code/DressCode';
import { Invitation } from '../../components/invitation/Invitation';
import { DateTimerCountdown } from '../../components/date-timer-countdown/DateTimerCountDown';
import { Photos } from '../../components/photos/Photos';
import { Envelope } from '../../components/envelope/Envelope';
import { useState } from 'react';
import { LastMessage } from '../../components/last-message/LastMessage';
import { PhotoVideo } from '../../components/photo-video/PhotoVideo';

export const WeddingPage = () => {

  const [canScroll, setCanScroll] = useState(false);
  const [hasSound, setHasSound] = useState(true);

  return (
    <div className={`wedding container ${canScroll ? '' : 'wedding__not-scroll'}`}>
      <Envelope setCanScroll={setCanScroll} hasSound={hasSound} />
      <Portrait />
      <MessageFromBride />
      <DateTimerCountdown inputDate={new Date(2026, 0, 23, 17, 30, 0)} />
      <Invitation />
      <Photos />
      <Parents />
      <PhotoVideo />
      <SalonMap />
      <DressCode />
      <Gifts />
      <LastMessage />

      <div className="wedding__sound-container" onClick={() => setHasSound(prev => !prev)}>
        {
          hasSound &&
          <img src="./icons/volume-on.webp" width={50} height={50} alt="on" />
        }
        {
          !hasSound &&
          <img src="./icons/volume-off.webp" width={50} height={50} alt="off" />
        }
      </div>
    </div>
  )
}
