import React from "react";
import "./Footer.scss";

function Footer() {
    return (
        <div>
            <div className="footer-basic">
                <footer>
                    <div className="social">
                        <a href="#">
                            <i className="fa fa-instagram"></i>
                        </a>
                        <a href="#">
                            <i className="fa fa-snapchat"></i>
                        </a>
                        <a href="#">
                            <i className="fa fa-twitter"></i>
                        </a>
                        <a href="#">
                            <i className="fa fa-facebook"></i>
                        </a>
                    </div>
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            <a href="#">Home</a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#">Services</a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#">About</a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#">Terms</a>
                        </li>
                        <li class="list-inline-item">
                            <a href="#">Privacy Policy</a>
                        </li>
                    </ul>
                    <p class="copyright">Comet.uz © 2021</p>
                </footer>
            </div>
        </div>
    );
}

export default Footer;
