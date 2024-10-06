import {createElement} from "react";

export function TopNav() {
    return createElement(
        'nav',
        { key: 'top-nav' },
        createElement(
            'p',
            null,
            'updated 0 minutes ago'
        ),
    );
}
