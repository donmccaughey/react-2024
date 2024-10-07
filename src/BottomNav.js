import { createElement } from 'react';

export function BottomNav({ total_pages }) {
    return createElement(
        'nav',
        { key: 'bottom-nav' },
        createElement(
            'p',
            null,
            'page 1 of ' + total_pages,
        ),
    );
}
