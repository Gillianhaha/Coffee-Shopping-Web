import GlobalNav from './GlobalNav'; 

import './Header.css';

import logo from './photos/logo.jpg';

function Header({setPage, isDark, setIsDark}) { 
    const modeClass = isDark ? "dark-mode" : "";
    const buttonIcon = isDark ? <i className="gg-toggle-off"></i> : <i className="gg-toggle-on"></i>;

    return ( 
        <header className={`header header-${modeClass}`}> 
            <img 
                src={logo} 
                className="header-logo" 
                alt="Coffee Aloha Logo" 
            />

            <h1 className={`header-title title-${modeClass}`}> 
                Coffee Aloha
            </h1> 
            
            <button className="bg-mode-button" onClick={()=>setIsDark(!isDark)} aria-label="Click the button can switch between dark/light modes.">
                <span className="mode-button-container">
                    Light
                    {buttonIcon} 
                    Dark
                </span>
            </button> 

            <GlobalNav className={`header-nav header-nav-${modeClass}`} setPage={setPage}/> 
        </header> 
    ); 
}


export default Header;