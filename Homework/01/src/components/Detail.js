import React from 'react';
import { Link, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

const Detail = ({ state }) => {

    const { id } = useParams()

    const product = state.find((item) => item.id == id)

    return (
        <>
            <div>
                <h3 className="title text-center mt-3 mb-3">{product.title}</h3>
            </div>
            <div className="container border shadow-sm">
                <div className="constainer">

                    <Link to="/" exact>
                        <img className="h-100 w-100 mt-2 mb-2" src={product.image} alt="" />
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Detail;