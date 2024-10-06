import {createElement} from "react";
import {TopNav} from "./TopNav";

export function Header() {
    return createElement(
        'header',
        null,
        createElement('h1', null, 'News'),
        createElement(TopNav),
    );
}
