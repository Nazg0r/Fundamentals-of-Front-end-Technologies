import React from 'react';

const Header = () => {

    function changeColor(e) {
        e.target.classList.toggle("education-active");
    }
    return (
        <div>
            <h2>Горчинський Назарій Романович</h2>
            <p>
                Дата народження: 12.09.2004; <br/>
                Місце народження: м. Ковель, Волинська обл.;
            </p>
            <p id="education" onClick={changeColor}>
                Повна середня освіта: Ковельський ліцей №3 ім. Лесі Українки; <br/>
                Вища освіта: Київський Політехнічний Університет ім. Ігоря
                Сікорського;
            </p>
        </div>
    );
};

export default Header;