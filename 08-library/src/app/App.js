import React, { useState } from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar"
import Items from '../components/Items'
import Footer from '../components/Footer';

const i = [
  {
    id: 1,
    title: 'Evgeny Onegin',
    price: 300,
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita molestiae esse quia culpa! Similique cumque harum optio impedit et eligendi, eius consectetur vel minus quisquam maxime ipsum. Porro, beatae unde?",
    image: 'https://i.grenka.ua/shop/1/6/309/evgenij-onegin_dbc.jpg'
  },
  {
    id: 2,
    title: 'Evgeny Onegin',
    price: 240,
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita molestiae esse quia culpa! Similique cumque harum optio impedit et eligendi, eius consectetur vel minus quisquam maxime ipsum. Porro, beatae unde?",
    image: 'https://s1.livelib.ru/boocover/1004719195/o/6881/Aleksandr_Pushkin__Evgenij_Onegin.jpeg'
  },
  {
    id: 3,
    title: 'Evgeny Onegin',
    price: 1000000,
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita molestiae esse quia culpa! Similique cumque harum optio impedit et eligendi, eius consectetur vel minus quisquam maxime ipsum. Porro, beatae unde?",
    image: 'https://s1.livelib.ru/boocover/1002064587/200x305/a99a/boocover.jpg'
  },
  {
    id: 4,
    title: 'Evgeny Onegin',
    price: 10,
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita molestiae esse quia culpa! Similique cumque harum optio impedit et eligendi, eius consectetur vel minus quisquam maxime ipsum. Porro, beatae unde?",
    image: 'https://all-the-books.ru/upload/resize_cache/iblock/3e7/400_596_14ea206e1adc774c374d982cab5ef0488/evgeniy_onegin.jpg'
  },
]

const App = () => {
return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="container">

        </div>
        <div className="container border shadow-sm rounded p-4">
          <Route path="/" exact>
            <div className="row">
              {books.map((item) => (
                <div className="col-3 card-size">
                  <div className="card books-item">
                    <img className="card-img-top" src={item.image} alt=""></img>
                    <div className="card-body">
                      <h2 className="card-title">{item.title}</h2>
                      <p className="card-text">Price: {item.price} som</p>
                    </div>
                    <Link className="m-4 btn btn-primary" to="/items">
                      Detail
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </Route>
          <Route path='/items'>      
            {books.map((item) => (
              <div>
                <Items item={item} />
              </div>
            ))}
          </Route>
        </div>
      </main>
      <footer>
        <Router path="/Footer">
        <div>
                <Footer item={item} />
              </div>
        </Router>
      </footer>
    </div>
  );
};

export default App;