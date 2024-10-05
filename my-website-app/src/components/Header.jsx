function Header() {
  return (
    <header className="header">
      <div className="myLogo">DK</div>
      <nav className="navigation-bar">
        <ul>
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
            <a href="#contact">Kontakt</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;