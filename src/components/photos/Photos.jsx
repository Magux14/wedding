import './photos.scss';
export const Photos = () => {
    return (
        <div className="photos__container">
            <div className="photos__row">
                <div className="photos__item">
                    <img src="./img/photos/1.png" alt="" />
                </div>
                <div className="photos__item">
                    <img src="./img/photos/flower1.png" alt="" style={{ width: '80%', display: 'block', marginLeft: 'auto' }} />
                </div>
            </div>
            <div className="photos__row">
                <div className="photos__item" style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <img src="./img/photos/flower2.png" alt="" style={{ width: '80%' }} />
                </div>
                <div className="photos__item">
                    <img src="./img/photos/2.png" alt="" />
                </div>
            </div>
            <div className="photos__row">
                <div className="photos__item">
                    <img src="./img/photos/3.png" alt="" />
                </div>
                <div className="photos__item" style={{ alignItems: 'flex-end' }}>
                    <img src="./img/photos/flower3.png" alt="" style={{ width: '80%', display: 'block', marginTop: 'auto', }} />
                </div>
            </div>
        </div>
    )
}
