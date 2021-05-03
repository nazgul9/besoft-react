import React from 'react'
import '../index.css';

const Items = (props) => {

    const item = props.item;

    return (
        <div className='container m-3'>
            <h2 className="text-center">{item.title}</h2>
            <img className="w-25 m-3" src={item.image} />
            <p className="m-2">{item.content}</p>
        </div>
    )
};

export default Items;