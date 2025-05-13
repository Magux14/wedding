import './dress-code.scss';

export const DressCode = () => {
    return (
        <div className="dress-code dress-code__container">
            <img src="./img/flower.png" className="dress-code__flower-top" alt="flower" />
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
