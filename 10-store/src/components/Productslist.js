import React from 'react';
import { connect } from 'react-redux';
import ProductItem from './ProductItem';

const Productslist = ({ state }) => {
    return (
        <div className="row">
            {state.map((item) => (
                <ProductItem key={item.id} item = {item} />
            ))}
        </div>
    );
};

const msp = (state) => {
    return { state }
}

export default connect(msp)(Productslist);