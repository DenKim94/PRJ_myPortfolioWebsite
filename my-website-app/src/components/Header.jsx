import './../styles/Header.css'

function Header() {

  const showSidebar = () => {
    const sidebar = document.querySelector('.sidebar-elements')
    sidebar.style.display = 'flex'
  }
  const hideSidebar = () => {
    const sidebar = document.querySelector('.sidebar-elements')
    sidebar.style.display = 'none'
  }

  return (
    <header className="fixed-header">
      <div className="my-logo">DK</div>
      <nav className="navigation-bar">
        <ul className="sidebar-elements"> 
          <li onClick={hideSidebar}>
            <a id="close_icon"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M256-192.35 192.35-256l224-224-224-224L256-767.65l224 224 224-224L767.65-704l-224 224 224 224L704-192.35l-224-224-224 224Z"/></svg></a>
          </li>
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
        <ul className="navigation-elements"> 
          <li className='hideOnMobile'>
            <a href="#start">Start</a>
          </li>
          <li className='hideOnMobile'>
            <a href="#portfolio">Meine Projekte</a>
          </li>
          <li className='hideOnMobile'>
            <a href="#about">Über mich</a>
          </li>
          <li className='hideOnMobile'>
            <a id="contact_hover" href="#contact">Kontakt</a>
          </li>
          <li onClick={showSidebar}>
            <a className='showOnMobile'><svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M111.87-228.28v-91h736.26v91H111.87Zm0-206.22v-91h736.26v91H111.87Zm0-206.22v-91h736.26v91H111.87Z"/></svg></a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;