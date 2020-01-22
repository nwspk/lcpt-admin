
export function postJSON(url, data) {
    return fetch(url, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(data),
    }).then(r => r.json());
}