import { useSearchParams } from 'react-router-dom';
import './invitation.scss';

export const Invitation = () => {

        const [searchParams] = useSearchParams();
        const invitationText = searchParams.get("inv") || '-';
        const ticketsNum = searchParams.get("t") || 0;

    return (
        <div className="invitation invitation__container">
            <img src="./img/flower.png" className="invitation__flower-top" alt="flower" />
            <div className="portrait__invitation-text">
                Invitado(s):
                <br />
                {invitationText}
                <br /><br />
                Boletos: {ticketsNum}
            </div>
        </div>
    )
}
