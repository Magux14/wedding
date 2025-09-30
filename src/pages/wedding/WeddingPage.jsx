import './wedding.scss';
import { Portrait } from '../../components/portrait/Portrait';
import { Gifts } from '../../components/gifts/Gifts';
import { SalonMap } from '../../components/salon-map/SalonMap';
import { MessageFromBride } from '../../components/message-from-bride/MessageFromBride';
import { Parents } from '../../components/parents/Parents';
import { DressCode } from '../../components/dress-code/DressCode';
import { Invitation } from '../../components/invitation/Invitation';
import { Flower } from '../../components/flower/Flower';
import { DateTimerCountdown } from '../../components/date-timer-countdown/DateTimerCountDown';
import { Photos } from '../../components/photos/Photos';
import { Envelope } from '../../components/envelope/Envelope';
import { useState } from 'react';

export const WeddingPage = () => {

  const [canScroll, setCanScroll] = useState(false);

  return (
    <div className={`wedding container ${canScroll ? '' : 'wedding__not-scroll'}`}>
      <Envelope setCanScroll={setCanScroll} />
      <Portrait />
      <MessageFromBride />
      <DateTimerCountdown inputDate={new Date(2026, 0, 23, 17, 30, 0)} />
      <Invitation />
      <Photos />
      <Parents />
      <SalonMap />
      <DressCode />
      <Gifts />

      <div className="wedding__last-message">
        <Flower position="left" />
        ¡Te esperamos!
      </div>
    </div>
  )
}
