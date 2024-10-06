import {createElement} from "react";

export function Item({ title, url }) {
    return createElement(
        'li',
        null,
        createElement(
            'a',
            { href: url, target: '_blank' },
            title,
        ),
    );
}
