import "./home.scss";
import "../../assets/css/bootstrap.css";
import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import React from "react";

function Home() {
    return (
        <div>
            <Header />
            <div className="container mt-5 w-75 mb-5">
                <div className="row">
                    <div className="col-7 left-banner"></div>
                    <div className="col-5 right-banner">
                        <ul class="responsive-table">
                            <li class="table-header">
                                <div class="">Fast Tours</div>
                            </li>
                            <li class="table-row">
                                <div class="">Samarkand</div>
                            </li>
                            <li class="table-row">
                                <div class="">Bukhara</div>
                            </li>
                            <li class="table-row">
                                <div class="">Khiva</div>
                            </li>
                            <li class="table-row">
                                <div class="">Mountains</div>
                            </li>
                            <li class="table-row">
                                <div class="">Viza in Uzbekistan</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <br />
            <div className="gtco-section">
                <div className="gtco-container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center gtco-heading">
                            <h2>Most Popular Destination</h2>
                            <br />
                            <br />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <Link
                                to="/destination"
                                className="fh5co-card-item image-popup"
                            >
                                <Card />
                            </Link>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <Link
                                to="/destination"
                                className="fh5co-card-item image-popup"
                            >
                                <Card />
                            </Link>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <Link
                                to="/destination"
                                className="fh5co-card-item image-popup"
                            >
                                <Card />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="gtco-section">
                <div className="gtco-container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center gtco-heading">
                            <h2>Hot Trips</h2>
                            <br />
                            <br />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <Link
                                to="/destination"
                                className="fh5co-card-item image-popup"
                            >
                                <Card />
                            </Link>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <Link
                                to="/destination"
                                className="fh5co-card-item image-popup"
                            >
                                <Card />
                            </Link>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <Link
                                to="/destination"
                                className="fh5co-card-item image-popup"
                            >
                                <Card />
                            </Link>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <Link
                                to="/destination"
                                className="fh5co-card-item image-popup"
                            >
                                <Card />
                            </Link>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <Link
                                to="/destination"
                                className="fh5co-card-item image-popup"
                            >
                                <Card />
                            </Link>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <Link
                                to="/destination"
                                className="fh5co-card-item image-popup"
                            >
                                <Card />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <Footer />
        </div>
    );
}

export default Home;
