export function ago(now, iso) {
    const then = Date.parse(iso);
    const elapsed_ms = now - then;
    return timeAgo(elapsed_ms);
}

function timeAgo(elapsed_ms) {
    const SEC = 1000; // ms
    const MIN = 60 * SEC;
    const HOUR = 60 * MIN;
    const DAY = 24 * HOUR;

    let age = 0;
    let unit = '';

    if (elapsed_ms < MIN) {
        age = Math.floor(elapsed_ms / SEC);
        unit = 'second';
    } else if (elapsed_ms < HOUR) {
        age = Math.floor(elapsed_ms / MIN);
        unit = 'minute';
    } else if (elapsed_ms < DAY) {
        age = Math.floor(elapsed_ms / HOUR);
        unit = 'hour';
    } else {
        age = Math.floor(elapsed_ms / DAY);
        unit = 'day';
    }

    let plural = (age === 1) ? '' : 's';
    return '' + age + ' ' + unit + plural + ' ago';
}
