import React from 'react';

import toolBarCSS from './Toolbar.css';
import Logo from '../../Logo/Logo';

const toolbar = (props) => {
    return (
        <header className={toolBarCSS.Toolbar}>
            <div>Menu</div>
            <Logo />
            <nav>
                ...
            </nav>
        </header>
    )
}

export default toolbar ;