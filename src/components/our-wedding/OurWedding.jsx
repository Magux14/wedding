import React from 'react';
import { DateTimerCountdown } from '../date-timer-countdown/DateTimerCountDown';
import './our-wedding.scss';

export const OurWedding = () => {
    return (
        <div className="our-wedding our-wedding__container">


            <div className="our-wedding__content">


                <div className="our-wedding__names">
                    Nuestra
                    <br />
                    boda
                </div>


                <div className="our-wedding__timer-container">
                    <DateTimerCountdown inputDate={new Date(2026, 0, 23, 11, 0, 0)} />
                </div>

            </div>
        </div>
    )
}
