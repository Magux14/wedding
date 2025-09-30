import React, { useEffect, useState } from 'react';
import './date-timer-countdown.scss';

export const DateTimerCountdown = ({ inputDate }) => {

  const [dateCountDown, setDateCountDown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const { days, minutes, hours, seconds } = dateCountDown;
  const friendlyDate = inputDate.toLocaleDateString('es-MX', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric'
  });

  const updateTime = () => {
    const getDaysToReachDate = (sourceDate, limitDate) => {
      const oneDay = 24 * 60 * 60 * 1000;
      const diffInMilliseconds = limitDate.getTime() - sourceDate.getTime();
      return diffInMilliseconds / oneDay;
    }

    const daysRaw = getDaysToReachDate(new Date(), inputDate);
    const days = daysRaw;
    const hours = (daysRaw % 1) * 24;
    const minutes = (hours % 1) * 60;
    const seconds = (minutes % 1) * 60;

    setDateCountDown({
      days: Math.floor(days),
      hours: Math.floor(hours),
      minutes: Math.floor(minutes),
      seconds: Math.floor(seconds),
    })
  }

  useEffect(() => {
    updateTime();

    setInterval(() => {
      updateTime();
    }, 1_000)
  }, [])

  return (
    <div className="date-timer-countdown date-timer-countdown__container">

      <div className="date-timer-countdown__date-text-container">
        <div className="date-timer-countdown__date-text-day-month-container">
          <div className="date-timer-countdown__date-margin">
            VIERNES
          </div>
          <div className="date-timer-countdown__date-number">
            23
          </div>
          <div className="date-timer-countdown__date-margin">
            ENERO
          </div>

        </div>
        <div className="date-timer-countdown__text-center">
          2026
        </div>
      </div>


      <div className="date-timer-countdown__text-center">
        Falta...
      </div>

      <div className="date-timer-countdown__remaining-time-container">

        {
          days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0 ?
            <div className="date-timer-countdown__block">
              ¡Es Hoy!
            </div>
            :
            <>
              <div className="date-timer-countdown__block">
                <span className="date-timer-countdown__block-number">
                  {days}
                </span>
                <span>
                  Días
                </span>
              </div>
              <div className="date-timer-countdown__separator">:</div>
              <div className="date-timer-countdown__block">
                <span className="date-timer-countdown__block-number">
                  {hours}
                </span>
                <span>
                  Horas
                </span>
              </div>
              <div className="date-timer-countdown__separator">:</div>
              <div className="date-timer-countdown__block">
                <span className="date-timer-countdown__block-number">
                  {minutes}
                </span>
                <span>
                  Minutos
                </span>
              </div>
              <div className="date-timer-countdown__separator">:</div>
              <div className="date-timer-countdown__block">
                <span className="date-timer-countdown__block-number">
                  {seconds}
                </span>
                <span>
                  Segundos
                </span>
              </div>
            </>
        }
      </div>

      {/* <div className="date-timer-countdown__remaining-time-container date-timer-countdown__text">
        PARA NUESTRO GRAN DÍA
      </div> */}
    </div>
  )
}
