import React from 'react';

export function Footer({news: {total_pages}}) {
    return (
        <footer>
            <nav>
                <p>page 1 of {total_pages}</p>
            </nav>
        </footer>
    );
}
