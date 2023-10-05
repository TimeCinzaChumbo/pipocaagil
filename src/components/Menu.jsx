import "./Menu.css"
import logo from "../assets/images/logo.png";
import arrow from "../assets/icons/arrow-right.svg";

function Menu() {
    return (
        <div className="nav-container">
            <img src={logo} alt="" id="logo" />
            <nav className="nav">
                <ul>
                    <li className="nav-item">
                        <a href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="/whoweare">Quem somos</a>
                    </li>
                    <li className="nav-item">
                        <a href="/episodes">Episódios</a>
                    </li>
                    <li className="nav-item">
                        <a href="/photogallery">Galeria de Fotos</a>
                    </li>
                    <li className="nav-item">
                        <a href="/contacts">Contatos</a>
                    </li>
                </ul>
                <a href="/subscribers" id="btn-subscriber">Sou assinante <img src={arrow} alt="" /></a>
            </nav>
        </div>
    );
};


export default Menu;