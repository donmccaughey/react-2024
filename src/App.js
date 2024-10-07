import { createElement, useEffect, useState } from 'react';
import { getNews, emptyNews } from './api';
import { Header } from './Header'
import { Main } from './Main'
import { Footer } from './Footer'


export function App() {
    const [news, setNews] = useState(emptyNews);

    useEffect(() => {
        getNews().then(setNews);
    }, []);

    return [
        createElement(Header, { key: 'header' }),
        createElement(Main, { key: 'main', news }),
        createElement(Footer, { key: 'footer', news }),
    ];
}
