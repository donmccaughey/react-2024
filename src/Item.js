import {createElement} from "react";

export function Item({ item }) {
    return createElement(
        'li',
        null,
        createElement(
            'a',
            { href: item.url, target: '_blank' },
            item.title,
        ),
    );
}
