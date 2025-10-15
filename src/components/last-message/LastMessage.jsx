import { Flower } from '../flower/Flower';
import './last-message.scss';

export const LastMessage = () => {
    return (
        <div className="last-message__container">
            <Flower position="left" />

            <div className="last-message__image-and-text-container">
                <img src="./img/photos/4.webp" alt="" />

                <div className="last-message__text-container">
                    <span>Andábamos sin buscarnos, pero sabiendo que andábamos para encontrarnos.</span>
                    <span className="last-message__text-quote">-Julio Cortazar</span>
                </div>

            </div>
            <div className="last-message__text-container">
                Tu presencia es nuestro regalo más preciado, por eso la invitación es personal e intransferible.
            </div>
            <div className="last-message__text-container">
                Te pedimos confirmar tu asistencia con el siguiente formulario.
            </div>

            <img src="./img/photos/5.webp" alt="" />

            <div className="last-message__text-container last-message__text--big">
                ¡Te esperamos!
                <br />
                Con cariño
            </div>

            <div className="last-message__text-container last-message__text--bigger">
                Itzel & Jesús
            </div>

            <div className="parents__flower-top-container parents__flower-top-container--inverted">
                <img src="./img/flowers-top.webp" alt="church" />
            </div>

        </div>
    )
}
