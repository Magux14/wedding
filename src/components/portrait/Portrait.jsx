import React from 'react';
import { DateTimerCountdown } from '../date-timer-countdown/DateTimerCountDown';
import { useSearchParams } from 'react-router-dom';
import './portrait.scss';

export const Portrait = () => {
    const [searchParams] = useSearchParams();
    const invitationText = searchParams.get("inv")
    return (
        <div className="portrait portrait__container">
        <div className="portrait__black-fade">
            <div className="portrait__content">

                <div className="portrait__title">
                    NUESTRA BODA
                </div>

                <div className="portrait__names">
                    Iztel y Jesús
                </div>

                <div className="portrait__invitation-text">
                    Invitado(s):
                    <br/>
                    {invitationText}
                </div>

                <DateTimerCountdown inputDate={new Date(2026, 0, 23, 11, 0, 0)} />
            </div>
        </div>
        </div>
    )
}
