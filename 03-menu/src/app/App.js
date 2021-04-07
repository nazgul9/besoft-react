import React, { Component } from 'react';
import Cart from '../components/Cart';
import Menulist from '../components/Menulist';

class App extends Component {

    state = {
        cart:{
            foods:[],
        },

        menu: [
            { // внутри {} скобок является Объектом
                id: 17,
                name: "Manty",
                gram: "300",
                price: "120"
            },
            {
                id: 16,
                name: "Shashlyk",
                gram: "120",
                price: "70"
            },
            {
                id: 15, // для исплавления ошибки с "key"
                name: "Plov",
                gram: "300",
                price: "150"
            },
            {
                id: 14,
                name: "Lagman",
                gram: "300",
                price: "140"
            }
        ]
    }

    addCart = (id) =>{
        this.setState(
            (state)=>{
                const food = state.menu.find((item)=>item.id === id)
                const foods = [...state.cart.foods, {...food}] 
                return {cart:{foods}} // это строка переносит данные с переменой foods, на массив state.cart.foods 
            }
        )
    }

    render() {
        console.log(this.state.cart)
        return (
            <div className="container">
                <h1 className="text">Menu</h1>
                <Menulist addCart={this.addCart} menu = {this.state.menu}/>
                <Cart cart = {this.state.cart} />
            </div>
        )
    }
}

export default App;