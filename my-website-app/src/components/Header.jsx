import './../styles/Header.css'

function Header() {
  return (
    <header className="fixed-header">
      <div className="my-logo">DK</div>
      <nav className="navigation-bar">
        <ul className="navigation-elements"> 
          <li>
            <a href="#start">Start</a>
          </li>
          <li>
            <a href="#portfolio">Meine Projekte</a>
          </li>
          <li>
            <a href="#about">Über mich</a>
          </li>
          <li>
            <a id="contact_hover" href="#contact">Kontakt</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;