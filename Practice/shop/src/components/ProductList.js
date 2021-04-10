import React, { Component } from "react";
import ProductItem from "./ProductItem.js"

class ProductList extends Component {
    render() {
        return (
            <div className="row">
                {this.props.products.map((item, index) => (
                    <div key={index} className="col-md-4 col-sm-6">
                        <ProductItem item = {item} />
                    </div>
                ))}

                {/* <div className="col-md-4 col-sm-6">
                    <ProductItem />
                </div>
                <div className="col-md-4 col-sm-6">
                    <ProductItem />
                </div>
                <div className="col-md-4 col-sm-6">
                    <ProductItem />
                </div>
                <div className="col-md-4 col-sm-6">
                    <ProductItem />
                </div>
                <div className="col-md-4 col-sm-6">
                    <ProductItem />
                </div>
                <div className="col-md-4 col-sm-6">
                    <ProductItem />
                </div>
                <div className="col-md-4 col-sm-6">
                    <ProductItem />
                </div>
                <div className="col-md-4 col-sm-6">
                    <ProductItem />
                </div> */}
            </div>
        );
    }
}

export default ProductList;