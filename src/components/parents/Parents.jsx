import React from 'react';
import './parents.scss';

export const Parents = () => {
    return (
        <div className="parents parents__container">
            <div className="parents__title">
                Con la bendición de Dios y de nuestros padres g
            </div>
            <div className="parents__desc">
                papá 1
                <br />
                mamá 1
                <br />
                &
                <br />
                papá 2
                <br />
                mamá 2
            </div>
            <div className="parents__title">
                Acompañados de nuestros padrinos
            </div>
            <div className="parents__desc">
                padrino
                madrina
            </div>
            <img src="./img/flower.png" className="parents__flower-bottom" alt="flower" />
        </div>
    )
}
