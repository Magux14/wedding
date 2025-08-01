import { Flower } from '../flower/Flower';
import './message-from-bride.scss';

export const MessageFromBride = () => {
    return (
        <div className="message-from-bride message-from-bride__container">
            <Flower position="right" />

            <div className="message-from-bride__title">
                Mensaje de los novios
            </div>
            <div className="message-from-bride__desc">
                "Hay momentos que se atesoran en nuestro corazón para siempre; por esta razón, queremos compartir este momento especial contigo"
            </div>
        </div>
    )
}
