import { Flower } from '../flower/Flower';
import './message-from-bride.scss';

export const MessageFromBride = () => {
    return (
        <div className="message-from-bride message-from-bride__container">
            <Flower position="right" />

            {/* <div className="message-from-bride__title">
                Mensaje de los novios
            </div> */}
            <div className="message-from-bride__desc">
                “Nuestra historia de amor tiene un nuevo capítulo y nada nos haría más felices que compartir este nuevo comienzo con las personas más importantes en nuestras vidas”
            </div>

            <img src="./img/anillos portada.webp" alt="" width={70} />

            <div className="message-from-bride__desc">
                Tenemos el honor de invitarlos a
            </div>

            <div className="message-from-bride__desc message-from-bride__desc--big">
                Nuestra Boda
            </div>
        </div>
    )
}
