import './flower.scss';

export const Flower = ({ position }) => {
    return (
        <img src="./img/flower.png" className={`flower flower__${position}`} alt="flower" />
    )
}
