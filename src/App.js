import {createElement, useEffect, useState} from "react";
import {Header} from './Header'
import {Main} from './Main'
import {Footer} from './Footer'


const errorState = {
    items: [
        {
            seq_id: 0,
            title: 'Error...',
            url: '#',
        }
    ],
    total_pages: 1,
};

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
        getNews().then(news => setNews(news));
    }, []);

    return [
        createElement(Header, { key: 'header' }),
        createElement(Main, { key: 'main', news }),
        createElement(Footer, { key: 'footer', news }),
    ];
}


async function getNews() {
    try {
        const response = await fetch('/api/', {
            headers: { Accept: 'application/json' },
        });
        if (!response.ok) {
            console.error(`Error ${response.status}: ${response.statusText}`);
            return errorState;
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        return errorState;
    }
}
