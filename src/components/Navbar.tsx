export default function Navbar() {
  return (
    <header>
      <div className="header__container container">
        <img className="header__logo" src="images/logo.png" alt="logo" />
        <nav className="header__nav">
          <div className="header__bars">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className="header__nav__list">
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
