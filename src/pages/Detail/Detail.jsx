import React from "react";
import Header from "../../components/Header/Header";
import banner from "../../assets/images/banner.jpg";
import Footer from "../../components/Footer/Footer";
import "./Detail.scss";

function Detail() {
    return (
        <div>
            <Header />

            <br />

            <div className="container w-75">
                <div className="row">
                    <p className="col-md-12">
                        <h1>Trip Title</h1>
                    </p>

                    <div className="col-md-12">
                        <img src={banner} height="500px" width="100%" />
                    </div>

                    <div className="col-md-12 mt-5">
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Architecto eveniet recusandae expedita facere
                            dignissimos culpa, aliquam ratione molestiae
                            quisquam modi eum sapiente, suscipit consequatur.
                            Ipsa, magni? Laboriosam delectus magni possimus.
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Architecto eveniet recusandae expedita facere
                            dignissimos culpa, aliquam ratione molestiae
                            quisquam modi eum sapiente, suscipit consequatur.
                            Ipsa, magni? Laboriosam delectus magni possimus.
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Architecto eveniet recusandae expedita facere
                            dignissimos culpa, aliquam ratione molestiae
                            quisquam modi eum sapiente, suscipit consequatur.
                            Ipsa, magni? Laboriosam delectus magni possimus.
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Architecto eveniet recusandae expedita facere
                            dignissimos culpa, aliquam ratione molestiae
                            quisquam modi eum sapiente, suscipit consequatur.
                            Ipsa, magni? Laboriosam delectus magni possimus.
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Architecto eveniet recusandae expedita facere
                            dignissimos culpa, aliquam ratione molestiae
                            quisquam modi eum sapiente, suscipit consequatur.
                            Ipsa, magni? Laboriosam delectus magni possimus.
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Architecto eveniet recusandae expedita facere
                            dignissimos culpa, aliquam ratione molestiae
                            quisquam modi eum sapiente, suscipit consequatur.
                            Ipsa, magni? Laboriosam delectus magni possimus.
                        </p>
                    </div>
                    <p className="col-md-12">
                        <h1>Hotel Title</h1>
                    </p>

                    <div className="col-md-12">
                        <img src={banner} height="500px" width="100%" />
                    </div>

                    <div className="col-md-12 mt-5">
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Architecto eveniet recusandae expedita facere
                            dignissimos culpa, aliquam ratione molestiae
                            quisquam modi eum sapiente, suscipit consequatur.
                            Ipsa, magni? Laboriosam delectus magni possimus.
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Architecto eveniet recusandae expedita facere
                            dignissimos culpa, aliquam ratione molestiae
                            quisquam modi eum sapiente, suscipit consequatur.
                            Ipsa, magni? Laboriosam delectus magni possimus.
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Architecto eveniet recusandae expedita facere
                            dignissimos culpa, aliquam ratione molestiae
                            quisquam modi eum sapiente, suscipit consequatur.
                            Ipsa, magni? Laboriosam delectus magni possimus.
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Architecto eveniet recusandae expedita facere
                            dignissimos culpa, aliquam ratione molestiae
                            quisquam modi eum sapiente, suscipit consequatur.
                            Ipsa, magni? Laboriosam delectus magni possimus.
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Architecto eveniet recusandae expedita facere
                            dignissimos culpa, aliquam ratione molestiae
                            quisquam modi eum sapiente, suscipit consequatur.
                            Ipsa, magni? Laboriosam delectus magni possimus.
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Architecto eveniet recusandae expedita facere
                            dignissimos culpa, aliquam ratione molestiae
                            quisquam modi eum sapiente, suscipit consequatur.
                            Ipsa, magni? Laboriosam delectus magni possimus.
                        </p>
                    </div>

                    <div className="col-md-12 info-box mt-5">
                        <div className="col-md-6">
                            <div>
                                <div>if you want to buy this trip please contact with our manager</div>
                                <br />
                                <div>
                                    <i className="fa fa-telegram"> 99890 000 00 00</i>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div>Your personal manager waiting for you!</div><br />
                            <div>
                                <i className="fa fa-phone"></i> 99890 000 00 00
                            </div>
                            <div>we will help to you for find your best</div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <Footer />
        </div>
    );
}

export default Detail;
