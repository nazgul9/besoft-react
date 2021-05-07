import React from 'react';
import { Link } from 'react-router-dom';
import ReadMoreReact from 'read-more-react'

const ProductItem = ({item}) => {
    return (
        <div className="col-3 mt-2 mb-2 d-flex justify-content-between">
            <div className="card">
                <img className="card-img-top card-img-pro" src={item.image} alt="" />
                <div>
                    <h2 className="text-center">{item.title}</h2>
                </div>
                <div className="card-body">
                    <p className="card-text product-dest">
                        <ReadMoreReact readMoreText="read more" min={30} ideal={40} max={50} text={item.description} />
                    </p>
                    <p>
                        <Link to={`/item/${item.id}`} className="btn btn-primary" >
                            Detail
                        </Link>
                        <span className=" ml-2">
                            {item.price} $
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;