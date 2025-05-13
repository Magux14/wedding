import React from 'react';
import './gifts.scss';

const lstStores = [
    {
        name: 'liverpool',
        desc: 'Evento: XXXXXXX',
        url: 'https://www.liverpool.com.mx/'
    },
    {
        name: 'amazon',
        url: 'https://www.amazon.com.mx/'
    },
    {
        name: 'Lluvia de sobres',
        desc: 'Es la tradición de regalar sobres con efectivo a los novios durante el evento.',
    },
]

export const Gifts = () => {
    const handleGoUrl = (url) => {
        window.location.href = url
    }

    const handleCopyToClipboard = (text) => {
        navigator.clipboard.writeText(text);

        // Alert the copied text
        alert('CLABE copiada al portapapeles');
    }

    const renderCard = (name, desc, url) => <div key={`${name}`} className="gifts__card" >
        {/* <img src={`./img/gifts/${imageName}.png`} alt={`${imageName}`} /> */}
        <div className="gifts__card-title">
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
            <div className="gifts__title">
                Mesa de Regalos
            </div>
            <div className="gifts__desc">
                El regalo más valioso para nosotros es tu precencia, pero si deseas obsequiarnos algo, te compartimos algunas opciones que recibiremos con cariño:
            </div>
            {
                lstStores.map((item) => renderCard(item.name, item.desc, item.url))
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
