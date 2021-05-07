import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';


const Detail = ({ state }) => {

    const { itemId } = useParams()

    const product = state.find((item) => item.id == itemId)

    return (
        <div>
            <h1 className="text-center mt-2">{product.title}</h1>
            <div className="row">
                <div className="col-6">
                    <img className="w-100" src={product.image} alt="" />
                </div>
                <div className="col-6 mt-5">
                    <p className="">
                        {product.description}
                    </p>
                    <p>
                        <Link to="/" className="btn btn-primary">
                            Buy
                        </Link>
                        <span className="ml-2 text-primary h6 font-weight-bold">
                            Price: {product.price}$
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

const msp = (state) => {
    return { state }
}

export default connect(msp)(Detail);
