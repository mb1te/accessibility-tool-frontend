import logo_ws from "../assets/logo-ws.png";
import {FC} from "react";
import {Path} from "../constants/path";

export const HeaderCheck: FC = () => {
    return (
        <header className="header" id="check-header">
            <div className="header__logo">
                <a href={Path.index} className="link">
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

export default HeaderCheck;
