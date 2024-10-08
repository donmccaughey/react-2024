import { createElement } from 'react';
import {Item} from "./Item";

export function Main({ items }) {
    let listItems = items.map((item) =>
        createElement(Item, { key: item.seq_id, ...item })
    );

    return createElement('main', null,
        createElement('ol', null,
            ...listItems,
        )
    );
}
