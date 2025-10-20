import './flower.scss';

export const Flower = ({ position, type = 1 }) => {
    return (
        <>
            {
                type == 1 &&
                <img src="./img/flower.png" className={`flower flower__${position}`} alt="flower" />
            }
            {
                type == 2 &&
                <img src="./img/photos/flower2.webp" className={`flower flower__${position}`} alt="flower" />
            }
            {
                type == 3 &&
                <img src="./img/photos/flower3.webp" className={`flower flower__${position}`} alt="flower" />
            }
        </>
    )
}
