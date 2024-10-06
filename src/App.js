import {createElement, useEffect, useState} from "react";
import {Header} from './Header'
import {Main} from './Main'
import {Footer} from './Footer'


const initialState = {
    items: [
        {
            seq_id: 0,
            title: 'Loading...',
            url: '#',
        }
    ],
    total_pages: 1,
};


export function App() {
    const [news, setNews] = useState(initialState);

    useEffect(() => {
        fetch('/api/', {
            headers: { Accept: 'application/json' },
        })
        .then(response => response.json())
        .then(data => setNews(data))
        .catch(error => console.log('Error fetching news:', error));
    }, []);

    return [
        createElement(Header, { key: 'header' }),
        createElement(Main, { key: 'main', news }),
        createElement(Footer, { key: 'footer', news }),
    ];
}
