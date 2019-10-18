import React from 'react';

import './header.scss';

const Header = () => {
    return (
        <div className="header f-flex">
            <h3>
                <a href="#">Star DB</a>
            </h3>
            <ul className="d-flex">
                <li><a href="#">People</a></li>
                <li><a href="#">Planets</a></li>
                <li><a href="#">Starship</a></li>
            </ul>
        </div>
    );
};

export default Header;