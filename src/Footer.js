import { createElement } from 'react';

export function Footer({ total_pages }) {
    return createElement('footer', null,
        createElement('nav', null,
            createElement('p', null,
                'page 1 of ' + total_pages,
            ),
        ),
    );
}
