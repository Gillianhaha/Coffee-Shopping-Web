import './Footer.css';

import footerMenu from './footerMenu';

function Footer({ setPage,isDark }) {

  const placeList = footerMenu.placeList.map(item => {
    return (
      <li className="footer-place-item" key={item.path}>
        <a className="footer-place-link" href={item.path}
          onClick={(e) => {
            e.preventDefault();
            setPage(item.name);
          }}
        >
          {item.name}
        </a>
      </li>
    );
  });
  
  const linkList = footerMenu.linkList.map(item => {
    return (
      <li className="footer-link-item" key={item.path}>
        <a className="footer-link-link" href={item.path}
          onClick={(e) => {
            e.preventDefault();
            setPage(item.name);
          }}
        >
          {item.name}
        </a>
      </li>
    );
  });

  const socialList = footerMenu.socialList.map(item =>{ 
    return(
      <li className="footer-social-item" key={item.path}>
        <a className="footer-social-link" href={item.path}
          target="_blank" rel="noopener noreferrer" aria-label={`The icon of ${item.name}`}
        >
          <i className={item.name}></i>
        </a>
      </li>
    );
  });

  const modeClass = isDark ? "dark-mode" : "";
  
  return (
    <footer className={`footer footer-${modeClass}`}>
      <h2 className={`footer-title footer-title-${modeClass}`}> Welcome to Explore More </h2>

      <ul className="footer-place-list">
        { placeList }
      </ul>

      <ul className="footer-link-list">
        { linkList }
      </ul>

      <ul className="footer-social-list">
        { socialList }
      </ul>
    </footer>
  );
}

export default Footer;
