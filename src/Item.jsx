import React from 'react';

export function Item({ title, url }) {
    return (
        <li>
            <a href={url} target='_blank'>{title}</a>
        </li>
    );
}
