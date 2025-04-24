import React from 'react';
import './gifts.scss';

const lstStores = [
    {
        name: 'amazon',
        url: 'https://www.amazon.com.mx/'
    },
    {
        name: 'liverpool',
        url: 'https://www.liverpool.com.mx/'
    },
    {
        name: 'mercado libre',
        url: 'https://www.mercadolibre.com.mx/'
    },
]

export const Gifts = () => {
    const handleGoUrl = (url) => {
        window.location.href = url
    }

    const renderCard = (imageName, url) => <div className="gifts__card" onClick={() => handleGoUrl(url)}>
        <img src={`./img/gifts/${imageName}.png`} alt={`${imageName}`} />
    </div>

    return (
        <div className="gifts gifts__container">
            <div className="gifts__title">
                Mesa de Regalos
            </div>
            <div className="gifts__desc">
                Para nosotros tu presencia es nuestro mejor regalo, pero si deseas hacernos llegar un obsequio, te sugerimos nuestra mesa de regalos:
            </div>
            {
                lstStores.map((item) => renderCard(item.name, item.url))
            }
        </div>
    )
}
