// get session
export function fetchSession() {
    return fetch('/api/v1/session', {
        method: 'GET',
    })
    .catch(() => Promise.reject({ error: 'networkError' }))
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        return response.json()
        .catch(error => Promise.reject({ error }))
        .then(err => Promise.reject(err));
    });
}

// change username
export function fetchChangeUsername(newUsername) {
    return fetch('/api/v1/session', {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({ newUsername }),
    })
        .catch(() => Promise.reject({ error: 'networkError' }))
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            return response.json()
                .catch(error => Promise.reject({ error }))
                .then(err => Promise.reject(err));
        });
}

// login
export function fetchLogin(username) {
    return fetch('/api/v1/session', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({ username }),
    })
        .catch(() => Promise.reject({ error: 'networkError' }))
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            return response.json()
                .catch(error => Promise.reject({ error }))
                .then(err => Promise.reject(err));
        });
}

// logout
export function fetchLogout() {
    return fetch('/api/v1/session', {
        method: 'DELETE',
    })
        .catch(() => Promise.reject({ error: 'networkError' }))
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            return response.json()
                .catch(error => Promise.reject({ error }))
                .then(err => Promise.reject(err));
        });
}

// add new message
export function fetchAddMessage(text) {
    return fetch('/api/v1/messages', {
        method: 'POST',
        headers: new Headers({
            'content-type': 'application/json',
        }),
        body: JSON.stringify({ text }),
    })
        .catch(() => Promise.reject({ error: 'networkError' }))
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            return response.json()
                .catch(error => Promise.reject({ error }))
                .then(err => Promise.reject(err));
        });
}

// get all messages
export function fetchAllMessages() {
    return fetch('/api/v1/messages', {
        method: 'GET',
    })
        .catch(() => Promise.reject({ error: 'networkError' }))
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            return response.json()
                .catch(error => Promise.reject({ error }))
                .then(err => Promise.reject(err));
        });
}

// get online users
export function fetchOnlineUsers() {
    return fetch('/api/v1/online-users', {
        method: 'GET',
    })
        .catch(() => Promise.reject({ error: 'networkError' }))
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            return response.json()
                .catch(error => Promise.reject({ error }))
                .then(err => Promise.reject(err));
        });
}

// add to cart
export function fetchAddToCart({itemname, price, imgurl}) {
    return fetch('/api/v1/cart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ itemname, price, imgurl }),
    })
        .catch(() => Promise.reject({ error: 'networkError' }))
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            return response.json()
                .catch(error => Promise.reject({ error }))
                .then(err => Promise.reject(err));
        });
}

// get cart
export function fetchCart() {
    return fetch('/api/v1/cart', {
        method: 'GET',
    })
    .catch(() => Promise.reject({ error: 'networkError' }))
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        return response.json()
            .catch(error => Promise.reject({ error }))
            .then(err => Promise.reject(err));
    });
}

// update cart
export function fetchUpdateCart({itemname, quantity}) {
    return fetch('/api/v1/cart', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ itemname, quantity }),
    })
        .catch(() => Promise.reject({ error: 'networkError' }))
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            return response.json()
                .catch(error => Promise.reject({ error }))
                .then(err => Promise.reject(err));
        });
}

// clear cart
export function fetchClearCart() {
    return fetch('/api/v1/cart', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .catch(() => Promise.reject({ error: 'networkError' }))
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            return response.json()
                .catch(error => Promise.reject({ error }))
                .then(err => Promise.reject(err));
        });
}

// get all data
export function fetchAllData() {
    return fetch('/api/v1/all-data', {
        method: 'GET',
    })
    .catch(() => Promise.reject({ error: 'networkError' }))
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        return response.json()
            .catch(error => Promise.reject({ error }))
            .then(err => Promise.reject(err));
    });
}

