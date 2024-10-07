const errorState = {
    items: [
        {
            seq_id: 0,
            title: 'Error...',
            url: '#',
        }
    ],
    total_pages: 1,
};

export const initialState = {
    items: [
        {
            seq_id: 0,
            title: 'Loading...',
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
            return errorState;
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        return errorState;
    }
}
