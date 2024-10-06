import {createElement, StrictMode} from "react";
import {createRoot} from 'react-dom/client'
import {App} from './App'

createRoot(document.body).render(
    createElement(
        StrictMode,
        null,
        createElement(App),
    )
);
