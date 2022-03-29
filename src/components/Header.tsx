import logo_ws from "../assets/logo-ws.png";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <a href="./index.html" className="link">
          Цифровая доступность
        </a>
      </div>

      <button className="header__accessibility">
        <img
          className="header__accessibility-img"
          src={logo_ws}
          alt="логотип цифровой доступности"
        ></img>
      </button>
    </header>
  );
}

export default Header;
