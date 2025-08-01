import { Flower } from '../flower/Flower';
import './dress-code.scss';

export const DressCode = () => {
    return (
        <div className="dress-code dress-code__container">
            <Flower position="right" />

            <div className="dress-code__title">
                Dress Code
            </div>
            <div className="dress-code__desc">
                Formal
                <br />
                Mujeres:
                NO color pastel ni blanco.
            </div>

            <img className="dress-code__example-image" src={`./img/dress-code.png`} alt={`dress-code`} />

        </div>
    )
}
