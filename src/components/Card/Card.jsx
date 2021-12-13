import "./Card.scss";
import image  from "../../assets/images/img_1.jpg";

function Card() {
    return (
        <div>
            <figure>
                <div className="overlay">
                    <i className="ti-plus"></i>
                </div>
                <img
                    src={image}
                    alt="Image"
                    className="img-responsive"
                />
            </figure>
            <div className="fh5co-text">
                <br />
                <h2>New York, USA</h2>
                <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia..
                </p>
                <p>
                    <span className="btn btn-primary">Schedule a Trip</span>
                </p>
            </div>
        </div>
    );
}

export default Card;
