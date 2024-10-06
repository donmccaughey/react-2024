import {createElement} from "react";
import {BottomNav} from "./BottomNav";

export function Footer({ news }) {
    return createElement(
        'footer',
        null,
        createElement(BottomNav, { totalPages: news.total_pages }),
    );
}
