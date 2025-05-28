import React from "react";

const Card = ({ image, title, text, link, buttonLabel }) => {
    return (
        <div className="col-lg-3 col-md-6 d-flex justify-content-center mb-5">
            <div className="card" style={{ width: "500px", height: "400px" }}>
                <img src={image} className="card-img-top" alt={title} style={{ height: "60%", objectFit: "cover" }} />
                <div className="card-body d-flex flex-column justify-content-between">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{text}</p>
                    <a href={link} className="btn btn-primary px-3 py-2 mt-auto mx-auto" style={{ width: "fit-content" }}>{buttonLabel}</a>
                </div>
            </div>
        </div>
    );
};

export default Card;