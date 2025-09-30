import React from 'react';
import './parents.scss';
import { Flower } from '../flower/Flower';

export const Parents = () => {
    return (
        <div className="parents parents__container">

            <div className="parents__flower-top-container">
                <img src="./img/flowers-top.png" alt="church" />
            </div>

            <div className="parents parents__sub-container">
                <div className="parents__title">
                    Tenemos el honor de invitarlos a nuestro enlace matrimonial  con la bendición de Dios y acompañado de nuestros padres y padrinos.
                </div>
                <div className="parents__parents-container">
                    <div className="parents__parents-family-container parents__general-font">
                        <div>
                            <strong>Padres de la novia</strong>
                        </div>
                        <div >
                            José Luis Bernal Cordova
                        </div>
                        <div>
                            María de Lourdes Orna Casas
                        </div>
                    </div>

                    <div className="parents__parents-family-container parents__general-font">
                        <div>
                            <strong>Padres del novio</strong>
                        </div>
                        <div >
                            Eusebio Guzmán Cruz
                        </div>
                        <div >
                            Laura Rivera Martínez
                        </div>
                    </div>

                </div>

                <div className="parents__general-font" style={{ display: 'flex', justifyContent: 'center', marginBottom: '15px' }}>
                    Nuestros padrinos
                </div>


                <div className="parents__padrinos-container parents__general-font">
                    <div className="parents__padrino-container">
                        <div className="parents__padrino-image-container">
                            <img src="./img/padrinos-icons/church.png" alt="church" width={40} height={40} />
                            {/* <div>
                                Velación
                            </div> */}
                        </div>

                        <div className="parents__padrino-text-container">
                            <div>
                                Juan Ignacio Bernal Cordova
                            </div>
                            <div>
                                Marilu Hernández Morales
                            </div>
                        </div>

                    </div>
                    <div className="parents__padrino-container">
                        <div className="parents__padrino-image-container">
                            <img src="./img/padrinos-icons/rings.png" alt="rings" width={40} height={30} />
                            {/* <div>
                                Anillos
                            </div> */}
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
                            <img src="./img/padrinos-icons/arras.png" alt="arras" width={40} height={40} />
                            {/* <div>
                                Arras
                            </div> */}
                        </div>

                        <div className="parents__padrino-text-container">
                            <div>
                                Sergio Vargas Ceballos
                            </div>
                            <div>
                                Lourdes Bernal Cordova
                            </div>
                        </div>
                    </div>
                    <div className="parents__padrino-container">
                        <div className="parents__padrino-image-container">
                            <img src="./img/padrinos-icons/lazo.png" alt="lazo" width={40} height={40} />
                            {/* <div>
                                Lazo
                            </div> */}
                        </div>

                        <div className="parents__padrino-text-container">
                            <div>
                                Armando Puente Martínez
                            </div>
                            <div>
                                María Alicia Rivera Martínez
                            </div>
                        </div>
                    </div>
                    <div className="parents__padrino-container">
                        <div className="parents__padrino-image-container">
                            <img src="./img/padrinos-icons/bible.png" alt="bible" width={40} height={30} />
                            {/* <div>
                                Bíblia y Rosario
                            </div> */}
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
            </div>

            <div className="parents__flower-top-container parents__flower-top-container--inverted">
                <img src="./img/flowers-top.png" alt="church" />
            </div>
            <div className="parents__flower-top-container parents__flower-top-container" style={{ marginTop: '-21px' }}>
                <img src="./img/flowers-top.png" alt="church" />
            </div>
        </div>
    )
}
