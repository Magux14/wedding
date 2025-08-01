import { useEffect, useRef, useState } from 'react';
import { Snow } from '../snow/snow';
import './portrait.scss';

export const Portrait = () => {
    const snowRef = useRef(null);
    const [snowVisible, setSnowVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setSnowVisible(entry.isIntersecting)

            }, {
            threshold: 0.1
        }
        );

        if (snowRef.current) {
            observer.observe(snowRef.current);
        }

        return () => {
            if (snowRef.current) observer.unobserve(snowRef.current);
        };
    }, []);

    return (
        <div className="portrait portrait__container">
            <div className="portrait__title-container">
                <div className="portrait__title-middle-line-container">
                    <div className="portrait__title-middle-line" />
                    <div />
                </div>

                <div className="portrait__title">
                    NUESTRA BODA
                </div>

                <div className="portrait__title-middle-line-container">
                    <div className="portrait__title-middle-line" />
                    <div />
                </div>
            </div>

            <div ref={snowRef} className="portrait__black-fade" >
                {/* {
                    snowVisible &&
                    <Snow />
                } */}

                <div className="portrait__content">

                    <div className="portrait__names">
                        Itzel & Jesús
                    </div>
                </div>

            </div>


        </div>
    )
}
