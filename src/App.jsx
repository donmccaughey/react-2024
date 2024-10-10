import React from 'react';
import { useEffect, useState } from 'react';
import { getNews, getEmptyNews } from './api';
import { Header } from './Header'
import { Main } from './Main'
import { Footer } from './Footer'


const GET_NEWS_INTERVAL_MS = 60 * 1000;


export function App() {
    const [news, setNews] = useState(getEmptyNews());
    const [now, setNow] = useState(Date.now());

    const updateNews = () => {
        getNews()
            .then(setNews)
            .then(() => setNow(Date.now()));
    }

    useEffect(() => {
        updateNews();

        const intervalId = setInterval(() => {
            updateNews();
        }, GET_NEWS_INTERVAL_MS);

        return () => clearInterval(intervalId);
    }, []);

    const props = {
        news,
        now,
    };
    return (
        <>
            <Header {...props} />
            <Main {...props} />
            <Footer {...props} />
        </>
    );
}
