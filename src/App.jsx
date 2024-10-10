import React from 'react';
import { useEffect, useState } from 'react';
import { getNews, emptyNews } from './api';
import { Header } from './Header'
import { Main } from './Main'
import { Footer } from './Footer'


const GET_NEWS_INTERVAL_MS = 60 * 1000;


export function App() {
    const [news, setNews] = useState(emptyNews);
    const [now, setNow] = useState(Date.now());

    useEffect(() => {
        getNews()
            .then(setNews)
            .then(() => setNow(Date.now()));

        const intervalId = setInterval(() => {
            getNews()
                .then(setNews)
                .then(() => setNow(Date.now()));
        }, GET_NEWS_INTERVAL_MS);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <Header { ...news} now={now} />
            <Main { ...news } now={now} />
            <Footer { ...news} now={now} />
        </>
    );
}
