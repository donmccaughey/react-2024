const emptyNewsTemplate = {
    items: [
        {
            seq_id: 0,
            title: 'Loading...',
            url: '#',
        }
    ],
    modified: '1970-01-01T00:00:00+00:00',
    total_pages: 1,
};

const newsErrorTemplate = {
    items: [
        {
            seq_id: 0,
            title: 'Error...',
            url: '#',
        }
    ],
    modified: '1970-01-01T00:00:00+00:00',
    total_pages: 1,
};


function makeNewsFrom(newsTemplate) {
    let news = {...newsTemplate};
    news.modified = new Date().toISOString();
    return news;
}


export function getEmptyNews() {
    return makeNewsFrom(emptyNewsTemplate);
}

export async function getNews() {
    try {
        const response = await fetch('/api/', {
            headers: { Accept: 'application/json' },
        });
        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        return makeNewsFrom(newsErrorTemplate);
    }
}
