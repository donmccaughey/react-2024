import React from 'react';
import {Item} from "./Item";

export function Main({news: {items}}) {
    let listItems = items.map((item) =>
        <Item key={item.seq_id} {...item} />
    );

    return (
        <main>
            <ol>{...listItems}</ol>
        </main>
    );
}
