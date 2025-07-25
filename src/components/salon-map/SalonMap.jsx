import React from 'react';
import './salon-map.scss';

export const SalonMap = () => {

    const openGoogleMaps = (url) => {
        window.location.href = url
    }

    return (
        <div className="salon-map">
            <div className="salon-map__container">
                <br />
                <div className="salon-map__title">
                    Cuándo y dónde
                </div>
                <div className="salon-map__church-container">
                    <img src="./img/church.png" alt="church" />
                </div>
                <div className="salon-map__place-name">
                    Parroquia de San Cayetano
                </div>
                <div className="salon-map__desc">
                    Av. Montevideo 323, Lindavista, Gustavo A. Madero, 07300 Ciudad de México, CDMX
                    <br />
                    <strong>17:30 hrs</strong>

                    <button className="main-button" onClick={() => openGoogleMaps('https://maps.app.goo.gl/wZB8hWrR33CyfJdY6')}>VER UBICACIÓN</button>
                </div>
            </div>

            <div className="salon-map__container">
                <div className="salon-map__church-container">
                    <img src="./img/party.png" alt="party" />
                </div>
                <div className="salon-map__place-name">
                    Salón Royal Rizzo
                </div>
                <div className="salon-map__desc">
                    Av. Insurgentes Nte. 1970, Lindavista, Gustavo A. Madero, 07300 Ciudad de México, CDMX
                    <br />
                    <strong>19:15 hrs</strong>

                    <button className="main-button" onClick={() => openGoogleMaps('https://maps.app.goo.gl/wUgwgTUXvYNgE25M7')}>VER UBICACIÓN</button>
                </div>
            </div>
        </div>
    )
}
