import React from 'react';
import './parents.scss';

export const Parents = () => {
    return (
        <div className="parents parents__container">
            <div className="parents__title">
                Tenemos el honor de invitarlos a nuestro enlace matrimonial con la bendición de Dios y acompalados de nuestros padres y padrinos
            </div>
            <div className="parents__desc">
                <br />
                <strong>Padres de la novia</strong>
                <br />

                Jose Luis Benal Cordova
                <br />
                María de Lourdes Orna Casas
                <br /> <br /> <br />
                <strong>Padres del novio</strong>
                <br />
                Eusebo Guzmán Cruz
                <br />
                Laura Rivera Martinez

                <br /><br /> <br />
                <strong>Nuestros padrinos</strong>
            </div>

            <div className="parents__padrinos-container">
                <div className="parents__padrino-container">
                    <div className="parents__padrino-image-container">
                        <img src="./img/padrinos-icons/church.png" alt="church" width={80} height={80} />
                        <div>
                            Velación
                        </div>
                    </div>

                    <div className="parents__padrino-text-container">
                        Juan Ignacio Bernal Cordova
                        <br />
                        Marilu Hernández Morales
                    </div>

                </div>
                <div className="parents__padrino-container">
                    <div className="parents__padrino-image-container">
                        <img src="./img/padrinos-icons/rings.png" alt="rings" width={80} height={80} />
                        <div>
                            Anillos
                        </div>
                    </div>

                    <div className="parents__padrino-text-container">
                        <div>
                            Albert Abril Gonzalez
                        </div>
                        <div>

                            Abigail Puente Rivera
                        </div>
                    </div>
                </div>
                <div className="parents__padrino-container">
                    <div className="parents__padrino-image-container">
                        <img src="./img/padrinos-icons/arras.png" alt="arras" width={80} height={80} />
                        <div>
                            Arras
                        </div>
                    </div>

                    <div className="parents__padrino-text-container">
                        <div>
                            Sergio Vargas Caballos
                        </div>
                        <div>
                            Lourdes Bernal Cordova
                        </div>
                    </div>
                </div>
                <div className="parents__padrino-container">
                    <div className="parents__padrino-image-container">
                        <img src="./img/padrinos-icons/lazo.png" alt="lazo" width={80} height={80} />
                        <div>
                            Lazo
                        </div>
                    </div>

                    <div className="parents__padrino-text-container">
                        <div>
                            Armando Puente Martinez
                        </div>
                        <div>
                            María Alicia Rivera Mertinez
                        </div>
                    </div>
                </div>
                <div className="parents__padrino-container">
                    <div className="parents__padrino-image-container">
                        <img src="./img/padrinos-icons/bible.png" alt="bible" width={80} height={80} />
                        <div>
                            Bíblia y Rosario
                        </div>
                    </div>

                    <div className="parents__padrino-text-container">
                        <div>
                            Raquel Bernal Cordova
                        </div>
                        <div>
                            Ximena Villareal Bernal
                        </div>
                    </div>
                </div>
            </div>

            <img src="./img/flower.png" className="parents__flower-bottom" alt="flower" />
        </div>
    )
}
