import React from 'react';
import './parents.scss';

export const Parents = () => {
    return (
        <div className="parents parents__container">
            <div className="parents__title">
                Con la bendición de Dios
                <br />
                y de nuestros padres
            </div>
            <div className="parents__desc">
                papá 1 nombre
                <br />
                mamá 1 nombre
                <br />
                &
                <br />
                papá 2 nombre
                <br />
                mamá 2 nombre
            </div>
            <div className="parents__title">
                Acompañados de
                <br />
                nuestros padrinos
            </div>
            <div className="parents__desc">
                padrino
                <br />
                madrina
            </div>
            <img src="./img/flower.png" className="parents__flower-bottom" alt="flower" />
        </div>
    )
}
