import {createElement, useEffect, useState} from "react";
import {getNews, initialState} from "./api";
import {Header} from './Header'
import {Main} from './Main'
import {Footer} from './Footer'


export function App() {
    const [news, setNews] = useState(initialState);

    useEffect(() => {
        getNews().then(news => setNews(news));
    }, []);

    return [
        createElement(Header, { key: 'header' }),
        createElement(Main, { key: 'main', news }),
        createElement(Footer, { key: 'footer', news }),
    ];
}
