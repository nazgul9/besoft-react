import React, { useEffect, useState } from "react";
import axios from 'axios'
import NewsItem from './NewsItem'
import Navbar from '../components/Navbar'
import {Route} from 'react-router-dom'
import About from '../components/About'
import Contacts from '../components/Contacts'
import NewsDetail from '../components/NewsDetail'

const App = () => {

    const [news, setNews] = useState([])
    useEffect(()=>{
        axios.get("https://nurkadyrnur.pythonanywhere.com/news/").then((res)=>{
            setNews(res.data.results);
        })
    },[])

    return (
        <div>
            <Navbar />
            <div style={{borderRadius: "10px"}} className="container border shadow-sm">
                <Route path="/" exact>
                    <h1 className="text-center mt-4">Hello news</h1>
                    <div className="row mt-5 mb-5">
                        {news.map((item) => (
                            <div key={item.id} className="col-6 mt-5">
                                <NewsItem item = {item} />
                            </div>
                        ))}
                    </div>
                </Route>
                <Route path = "/About" exact>
                    <About />
                </Route>
                <Route path = "/Contacts" exact>
                    <Contacts />
                </Route>
                <Route path="/news/:newsId" exact>
                    <NewsDetail />
                </Route>
            </div>
        </div>
    );
};

export default App;
