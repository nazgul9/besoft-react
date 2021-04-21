import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NewsItem from '../app/NewsItem';

const NewsDetail = () => {

    const {newsId} = useParams()
    const [news, setNews] = useState({})

    useEffect(()=>{
        axios.get(`https://nurkadyrnur.pythonanywhere.com/news/${newsId}/`).then(()=>{
            setNews(res.data)
        })
    },[])

    return (
        <div>
            <h1 className="text-center mb-3 mt-3">
                {news.title}
            </h1>
            <p className="card-text">{parser(news.body || "")}</p>
        </div>
    );
};

export default NewsDetail;