import {createElement} from "react";
import {Item} from "./Item";

export function Items({ items }) {
    return createElement(
        'ol',
        null,
        items.map((item) =>
            createElement(Item, {key: item.seq_id, item})
        ),
    );
}
