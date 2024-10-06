import {createElement} from "react";

export function BottomNav({ totalPages }) {
    return createElement(
        'nav',
        { key: 'bottom-nav' },
        createElement(
            'p',
            null,
            'page 1 of ' + totalPages,
        ),
    );
}
