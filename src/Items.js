import { createElement } from 'react';
import { Item } from './Item';

export function Items({ items }) {
    let listItems = items.map((item) =>
        createElement(Item, { key: item.seq_id, ...item })
    );

    return createElement('ol', null,
        ...listItems,
    );
}
