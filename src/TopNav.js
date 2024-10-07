import { createElement } from 'react';

export function TopNav() {
    return createElement('nav', null,
        createElement('p', null,
            'updated 0 minutes ago'
        ),
    );
}
