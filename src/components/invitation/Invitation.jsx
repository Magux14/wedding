import { useSearchParams } from 'react-router-dom';
import './invitation.scss';
import { Flower } from '../flower/Flower';

export const Invitation = () => {

    const [searchParams] = useSearchParams();
    const invitationText = searchParams.get("inv") || '-';
    const ticketsNum = searchParams.get("t") || 0;

    return (
        <div className="invitation invitation__container">
            <Flower position="left" />
            <div>
                <span className="subtitle">Invitado(s):</span>
                <br />
                <span className="subtitle">{invitationText}</span>
                <br /><br />
                <span className="subtitle">Boletos: {ticketsNum}</span>
            </div>
        </div>
    )
}
