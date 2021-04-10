import React, { Component } from "react";
import ProductList from "./ProductList.js"

class App extends Component {

    state = {
        products: [
            {
                title: "Product",
                description: 
                ('Lorem ipsum dolor sit amet consectetur adipisicing elit.' + 
                'Saepe, commodi nobis facilis deserunt dolore,' +
                'animi esse odio quos dolor architecto,' +
                'illum consequuntur praesentium accusamus culpa aperiam alias' +  
                'fugit tenetur recusandae?'),
                image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MX472?wid=1144&hei=1144&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1570119347612"
            },
            {
                title: "Product",
                description: 
                ('Lorem ipsum dolor sit amet consectetur adipisicing elit.' + 
                'Saepe, commodi nobis facilis deserunt dolore,' +
                'animi esse odio quos dolor architecto,' +
                'illum consequuntur praesentium accusamus culpa aperiam alias' +  
                'fugit tenetur recusandae?'),
                image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MX472?wid=1144&hei=1144&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1570119347612"
            },
            {
                title: "Product",
                description: 
                ('Lorem ipsum dolor sit amet consectetur adipisicing elit.' + 
                'Saepe, commodi nobis facilis deserunt dolore,' +
                'animi esse odio quos dolor architecto,' +
                'illum consequuntur praesentium accusamus culpa aperiam alias' +  
                'fugit tenetur recusandae?'),
                image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MX472?wid=1144&hei=1144&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1570119347612"
            },
            {
                title: "Product",
                description: 
                ('Lorem ipsum dolor sit amet consectetur adipisicing elit.' + 
                'Saepe, commodi nobis facilis deserunt dolore,' +
                'animi esse odio quos dolor architecto,' +
                'illum consequuntur praesentium accusamus culpa aperiam alias' +  
                'fugit tenetur recusandae?'),
                image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MX472?wid=1144&hei=1144&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1570119347612"
            },
            {
                title: "Product",
                description: 
                ('Lorem ipsum dolor sit amet consectetur adipisicing elit.' + 
                'Saepe, commodi nobis facilis deserunt dolore,' +
                'animi esse odio quos dolor architecto,' +
                'illum consequuntur praesentium accusamus culpa aperiam alias' +  
                'fugit tenetur recusandae?'),
                image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MX472?wid=1144&hei=1144&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1570119347612"
            },
            {
                title: "Product",
                description: 
                ('Lorem ipsum dolor sit amet consectetur adipisicing elit.' + 
                'Saepe, commodi nobis facilis deserunt dolore,' +
                'animi esse odio quos dolor architecto,' +
                'illum consequuntur praesentium accusamus culpa aperiam alias' +  
                'fugit tenetur recusandae?'),
                image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MX472?wid=1144&hei=1144&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1570119347612"
            },
            {
                title: "Product",
                description: 
                ('Lorem ipsum dolor sit amet consectetur adipisicing elit.' + 
                'Saepe, commodi nobis facilis deserunt dolore,' +
                'animi esse odio quos dolor architecto,' +
                'illum consequuntur praesentium accusamus culpa aperiam alias' +  
                'fugit tenetur recusandae?'),
                image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MX472?wid=1144&hei=1144&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1570119347612"
            },
            {
                title: "Product",
                description: 
                ('Lorem ipsum dolor sit amet consectetur adipisicing elit.' + 
                'Saepe, commodi nobis facilis deserunt dolore,' +
                'animi esse odio quos dolor architecto,' +
                'illum consequuntur praesentium accusamus culpa aperiam alias' +  
                'fugit tenetur recusandae?'),
                image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MX472?wid=1144&hei=1144&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1570119347612"
            },
            {
                title: "Product",
                description: 
                ('Lorem ipsum dolor sit amet consectetur adipisicing elit.' + 
                'Saepe, commodi nobis facilis deserunt dolore,' +
                'animi esse odio quos dolor architecto,' +
                'illum consequuntur praesentium accusamus culpa aperiam alias' +  
                'fugit tenetur recusandae?'),
                image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MX472?wid=1144&hei=1144&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1570119347612"
            }
        ]
    }

    render() {
        return (
            <div className="container border shadow-sm mt-5">
                <h1 className="text-center">Shop</h1>
                <ProductList products = {this.state.products}/>
            </div>
        );
    }
}

export default App;