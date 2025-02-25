import React from 'react';

import logoCSS from './Logo.css';
import Burgerlogo from '../../Assets/images/burger-logo.png';

const logo = (props) => {
    return (
        <div className={logoCSS.Logo} style={{height: props.height}}>
            <img src={Burgerlogo} alt="MyBurger" />
        </div>
    )
}

export default logo;