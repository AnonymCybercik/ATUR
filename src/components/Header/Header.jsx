import React from "react";
import "./Header.scss";

function Header() {
    return (
        <div>
            <header>
                <nav>
                    <ul className="nav-ul">
                        <span className="nav-left-item">
                            <li className="nav-items">A<span>Tour</span></li>
                        </span>
                        <span className="nav-right-item">
                            <li className="nav-items">99890 000 00 00</li>
                            <li className="nav-items"><i className="fa fa-instagram"></i></li>
                            <li className="nav-items"><i className="fa fa-telegram"></i></li>
                        </span>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Header;
