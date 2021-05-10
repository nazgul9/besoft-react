import React from 'react';
import { connect } from 'react-redux';
import ProductItem from './ProductItem';

const Productslist = ({ products }) => {
    return (
        <div className="row">
            {products.map((item) => (
                <ProductItem key={item.id} item = {item} />
            ))}
        </div>
    );
};

const msp = ({ products }) => {
    return { products }
}

export default connect(msp)(Productslist);