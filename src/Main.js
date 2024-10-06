import {createElement} from "react";
import {Items} from "./Items";

export function Main({ news }) {
    return createElement(
        'main',
        null,
        createElement(Items, { items: news.items }),
    );
}
