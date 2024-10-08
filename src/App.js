import { createElement, useEffect, useState } from 'react';
import { getNews, emptyNews } from './api';
import { Header } from './Header'
import { Main } from './Main'
import { Footer } from './Footer'


const GET_NEWS_INTERVAL_MS = 5 * 60 * 1000;


export function App() {
    const [news, setNews] = useState(emptyNews);

    useEffect(() => {
        getNews().then(setNews);

        const intervalId = setInterval(() => {
            getNews().then(setNews);
        }, GET_NEWS_INTERVAL_MS);

        return () => clearInterval(intervalId);
    }, []);

    return [
        createElement(Header, { key: 'header', ...news }),
        createElement(Main, { key: 'main', ...news }),
        createElement(Footer, { key: 'footer', ...news }),
    ];
}
