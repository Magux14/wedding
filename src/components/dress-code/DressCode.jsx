import { Flower } from '../flower/Flower';
import './dress-code.scss';

export const DressCode = () => {
    return (
        <div className="dress-code dress-code__container">
            <Flower position="left" />

            <div className="dress-code__title">
                Dress Code
            </div>
            <div className="dress-code__desc">
                Vestimenta formal
                <br />
                Mujeres:  Con mucho cariño les pedimos no utilizar color blanco, colores pasteles y color verde esmeralda ya que están reservados para la novia
            </div>

            <div className="dress-code__img-container">
                <img src="./img/green-paint.webp" alt="paint" className="dress-code__overlap-image" />
                <img className="dress-code__example-image dress-code__above-image" src={`./img/dress-code-woman.webp`} alt={`dress-code`} />
                <img className="dress-code__example-image dress-code__above-image" src={`./img/dress-code-man.webp`} alt={`dress-code`} />
            </div>
        </div>
    )
}
