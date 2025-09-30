import './wedding.scss';
import { Portrait } from '../../components/portrait/Portrait';
import { Gifts } from '../../components/gifts/Gifts';
import { SalonMap } from '../../components/salon-map/SalonMap';
import { OurWedding } from '../../components/our-wedding/OurWedding';
import { MessageFromBride } from '../../components/message-from-bride/MessageFromBride';
import { Parents } from '../../components/parents/Parents';
import { DressCode } from '../../components/dress-code/DressCode';
import { Invitation } from '../../components/invitation/Invitation';
import { Flower } from '../../components/flower/Flower';
import { DateTimerCountdown } from '../../components/date-timer-countdown/DateTimerCountDown';

export const WeddingPage = () => {
  return (
    <div className="wedding container">
      {/* <Envelope/> */}
      <Portrait />
      <MessageFromBride />
      <DateTimerCountdown inputDate={new Date(2026, 0, 23, 17, 30, 0)} />
      <Invitation />
      <OurWedding />
      <DressCode />
      <Parents />
      <SalonMap />
      <Gifts />

      <div className="wedding__last-message">
        <Flower position="right" />

        ¡Te esperamos!
      </div>
    </div>
  )
}
