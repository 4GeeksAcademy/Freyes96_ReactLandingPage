import React from "react";

const Jumbotron = ({ title, text, primaryLabel }) => {
    return (
        <div className="bg-secondary-subtle py-5 mb-5 rounded-3">
            <div className="container">
                <h1 className="display-5 text-start">{title}</h1>
                <p className="fs-4 text-start">{text}</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-start">
                    <button type="button" className="btn btn-primary btn-lg px-4 gap-3">{primaryLabel}</button>
                </div>
            </div>
        </div>
    );
};

export default Jumbotron;