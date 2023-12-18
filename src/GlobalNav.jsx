import headerMenu from './headerMenu';

import { useState } from 'react';

import './GlobalNav.css';

function GlobalNav({ className, setPage }) { 
    const [ showMenu, setShowMenu ] = useState(false);

    const list = headerMenu.map(item => { 
        return ( 
            <li className="global-nav-item" key={item.path}> 
                <a 
                    className="global-nav-link" 
                    href={item.path}
                    onClick={(e) => {
                        e.preventDefault();
                        setPage(item.name)
                    }}
                > 
                    {item.name} 
                </a>
            </li> 
        ); 
    }); 
    const menuClass = showMenu ? 'global-nav-list-open' : '';

    return (
        <nav className={`global-nav ${className}`}> 
            <button className="menu-button" aria-label={showMenu ? "Close Menu" : "Open Menu"}
                onClick = { () =>{ setShowMenu(!showMenu)} }
            >
                <i className="gg-menu"></i>
            </button>
            <ul className={`global-nav-list ${menuClass}`}> 
                { list } 
            </ul>
        </nav> 
    ); 
}

export default GlobalNav;