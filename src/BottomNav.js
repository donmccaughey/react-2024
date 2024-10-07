import { createElement } from 'react';

export function BottomNav({ total_pages }) {
    return createElement('nav', null,
        createElement('p', null,
            'page 1 of ' + total_pages,
        ),
    );
}
