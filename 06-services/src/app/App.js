import React, { useState } from "react";
import NewsItem from './NewsItem'

const initialState = [
    {
        id: 1,
        title: "Hello News",
        short_body: "la la la la la la la la la la",
        type: "Sport"
    },
    {
        id: 2,
        title: "Hi Sanji",
        short_body: "la la la la la la la la la la",
        type: "Games"
    },
    {
        id: 3,
        title: "Hello Zoro",
        short_body: "la la la la la la la la la la",
        type: "PC"
    },
    {
        id: 4,
        title: "Hello Luffy",
        short_body: "la la la la la la la la la la",
        type: "Idiot"
    }
]

const App = () => {

    const [news, setNews] = useState(initialState)

    return (
        <div>
            <div style={{borderRadius: "10px"}} className="container border shadow-sm">
                <h1 className="text-center mt-4">Hello news</h1>
                <div className="row mt-5 mb-5">
                    {news.map((item) => (
                        <div key={item.id} className="col-6 mt-5">
                            <NewsItem item = {item} />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default App;
