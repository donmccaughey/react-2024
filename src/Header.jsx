import React from 'react';
import { ago } from './ago';

export function Header({news: {modified}, now}) {
    return (
        <header>
            <h1>React News</h1>
            <nav>
                <p>
                    updated <time dateTime={modified}>{ago(now, modified)}</time>
                </p>
            </nav>
        </header>
    );
}
