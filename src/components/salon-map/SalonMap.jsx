import React from 'react';
import './salon-map.scss';

export const SalonMap = () => {

    const openGoogleMaps = (url) => {
        window.location.href = url
    }

    return (
        <div className="salon-map salon-map__container">
            <div className="salon-map__title">
                ¿Dónde Y Cuando?
            </div>
            <div className="salon-map__sub-title">
                Recepción
            </div>
            <div className="salon-map__salon-img" />
            <div className="salon-map__place-name">
                Six Flags México
            </div>
            <div className="salon-map__desc">
                <div>
                    <strong>Cuándo:</strong>
                    <br />
                    23 de enero de 2025 18:00hrs.
                </div>
                <div>

                    <strong>Dirección:</strong>
                    <br />
                    <u onClick={() => openGoogleMaps('https://maps.app.goo.gl/msXWLFrqATdTP4Ao7')}>
                        Carr. Picacho-Ajusco Km 1.5, Jardines del Ajusco, Tlalpan, 14219 Ciudad de México, CDMX
                    </u>
                </div>
            </div>
            <div className="salon-map__salon-map" />
            </div>
    )
}
