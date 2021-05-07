import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"

const Item = ({item}) => {
    return (
        <div>
            <img className="w-100 h-100" src={item.image} alt="" />
        </div>
    );
};

export default Item;