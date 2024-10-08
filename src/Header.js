import { createElement } from 'react';

export function Header() {
    return createElement('header', null,
        createElement('h1', null,
            'News'
        ),
        createElement('nav', null,
            createElement('p', null,
                'updated 0 minutes ago'
            ),
        ),
    );
}
