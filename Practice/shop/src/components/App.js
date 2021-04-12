import React, { Component } from "react";
import ProductList from "./ProductList.js"

class App extends Component {

    state = {
        products: [
            {
                title: "Наушники (Хз какие)",
                description: 
                ('Lorem ipsum dolor sit amet consectetur adipisicing elit.' + 
                'Saepe, commodi nobis facilis deserunt dolore,' +
                'animi esse odio quos dolor architecto,' +
                'illum consequuntur praesentium accusamus culpa aperiam alias' +  
                'fugit tenetur recusandae?'),
                image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MX472?wid=1144&hei=1144&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1570119347612"
            },
            {
                title: "Колонки JBL",
                description: 
                ('Lorem ipsum dolor sit amet consectetur adipisicing elit.' + 
                'Saepe, commodi nobis facilis deserunt dolore,' +
                'animi esse odio quos dolor architecto,' +
                'illum consequuntur praesentium accusamus culpa aperiam alias' +  
                'fugit tenetur recusandae?'),
                image: "https://gadgetclick.ru/wa-data/public/shop/products/49/20/2049/images/10897/10897.970.jpg"
            },
            {
                title: "Airpods 2",
                description: 
                ('Lorem ipsum dolor sit amet consectetur adipisicing elit.' + 
                'Saepe, commodi nobis facilis deserunt dolore,' +
                'animi esse odio quos dolor architecto,' +
                'illum consequuntur praesentium accusamus culpa aperiam alias' +  
                'fugit tenetur recusandae?'),
                image: "https://st33.stpulscen.ru/images/product/347/175/462_big.jpg"
            },
            {
                title: "Maibenben T537",
                description: 
                ('Lorem ipsum dolor sit amet consectetur adipisicing elit.' + 
                'Saepe, commodi nobis facilis deserunt dolore,' +
                'animi esse odio quos dolor architecto,' +
                'illum consequuntur praesentium accusamus culpa aperiam alias' +  
                'fugit tenetur recusandae?'),
                image: "https://irecommend.ru/sites/default/files/product-images/328648/1pd29yQArhXv7GK0YsP3A.jpg"
            },
            {
                title: "Msi_leopard",
                description: 
                ('Lorem ipsum dolor sit amet consectetur adipisicing elit.' + 
                'Saepe, commodi nobis facilis deserunt dolore,' +
                'animi esse odio quos dolor architecto,' +
                'illum consequuntur praesentium accusamus culpa aperiam alias' +  
                'fugit tenetur recusandae?'),
                image: "https://tehnoteca.ru/img/1959/1958634/msi_gp66_leopard_10uh_gp66_10uh_275_6.jpg"
            },
            {
                title: "Dragon",
                description: 
                ('Lorem ipsum dolor sit amet consectetur adipisicing elit.' + 
                'Saepe, commodi nobis facilis deserunt dolore,' +
                'animi esse odio quos dolor architecto,' +
                'illum consequuntur praesentium accusamus culpa aperiam alias' +  
                'fugit tenetur recusandae?'),
                image: "https://www.bhphotovideo.com/images/images2000x2000/cyberpowerpc_gxi1130_xtreme_i7_8700k_3_2ghz_16gb_1368237.jpg"
            },
            {
                title: "X12",
                description: 
                ('Lorem ipsum dolor sit amet consectetur adipisicing elit.' + 
                'Saepe, commodi nobis facilis deserunt dolore,' +
                'animi esse odio quos dolor architecto,' +
                'illum consequuntur praesentium accusamus culpa aperiam alias' +  
                'fugit tenetur recusandae?'),
                image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6362/6362426_rd.jpg"
            },
            {
                title: "Hyper PC Extrem",
                description: 
                ('Lorem ipsum dolor sit amet consectetur adipisicing elit.' + 
                'Saepe, commodi nobis facilis deserunt dolore,' +
                'animi esse odio quos dolor architecto,' +
                'illum consequuntur praesentium accusamus culpa aperiam alias' +  
                'fugit tenetur recusandae?'),
                image: "https://images2.popmeh.ru/upload/custom/ef2/ef279453b29c47f4e3f15b90c786da81.jpg"
            },
            {
                title: "Hyper PC",
                description: 
                ('Lorem ipsum dolor sit amet consectetur adipisicing elit.' + 
                'Saepe, commodi nobis facilis deserunt dolore,' +
                'animi esse odio quos dolor architecto,' +
                'illum consequuntur praesentium accusamus culpa aperiam alias' +  
                'fugit tenetur recusandae?'),
                image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6362/6362425_sd.jpg"
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