export const emptyNews = {
    items: [
        {
            seq_id: 0,
            title: 'Loading...',
            url: '#',
        }
    ],
    total_pages: 1,
};

const newsError = {
    items: [
        {
            seq_id: 0,
            title: 'Error...',
            url: '#',
        }
    ],
    total_pages: 1,
};


export async function getNews() {
    try {
        const response = await fetch('/api/', {
            headers: { Accept: 'application/json' },
        });
        if (!response.ok) {
            console.error(`Error ${response.status}: ${response.statusText}`);
            return newsError;
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        return newsError;
    }
}
