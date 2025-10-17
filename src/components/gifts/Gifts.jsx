import React from 'react';
import './gifts.scss';
import { Flower } from '../flower/Flower';

const lstStores = [
    {
        id: 1,
        imageName: 'liverpool',
        desc: 'Evento: 51713122',
        url: 'https://mesaderegalos.liverpool.com.mx/milistaderegalos/51713122'
    },
    {
        id: 2,
        imageName: 'sears',
        desc: 'Mesa #201235',
        url: 'https://www.sears.com.mx/Mesa-de-Regalos/201235/Te-invito-a-mi-Boda---Itzel--&-Jesus-',
    },
    {
        id: 3,
        name: 'Lluvia de sobres',
        desc: 'Es la tradición de regalar sobres con efectivo a los novios durante el evento.',
    },
]

export const Gifts = () => {
    const handleGoUrl = (url) => {
        window.open(url, '_blank');
    }

    const handleCopyToClipboard = (text) => {
        navigator.clipboard.writeText(text);

        // Alert the copied text
        alert('CLABE copiada al portapapeles');
    }

    const renderCard = (id, name, desc, url, imageName) => <div key={`${id}`} className="gifts__card" >
        {
            imageName &&
            <img src={`./img/gifts/${imageName}.png`} alt={`${imageName}`} />
        }
        <div className="gifts__card-title subtitle">
            {name}
        </div>
        {
            desc &&
            <div className="gifts__card-subtitle">
                {desc}
            </div>
        }
        {
            url && <button className="main-button" onClick={() => handleGoUrl(url)}>VER REGALOS</button>
        }
    </div>

    return (
        <div className="gifts gifts__container">
            <Flower position="right" />

            <div className="gifts__title title">
                Mesa de Regalos
            </div>
            <div className="gifts__desc">
                El regalo más valioso para nosotros es tu precencia, pero si deseas obsequiarnos algo, te compartimos algunas opciones que recibiremos con cariño:
            </div>
            {
                lstStores.map((item) => renderCard(item.id, item.name, item.desc, item.url, item.imageName))
            }
            <div className="gifts__card" >
                {/* <img src={`./img/gifts/${imageName}.png`} alt={`${imageName}`} /> */}
                <div className="gifts__card-title">
                    Transferencia
                </div>
                <div className="gifts__card-subtitle">
                    BBVA
                    <br />
                    Itzel Alejandra Bernal Ortiz
                    <br /><br />
                    CLABE:
                    <br />
                    0121 8001 5903 2318 08
                    <br /><br />
                    Concepto: Donativo
                    <br /><br />
                    <button className="main-button" onClick={() => handleCopyToClipboard('5555555555555')}>COPIAR CLABE</button>
                </div>
            </div>
        </div>
    )
}
