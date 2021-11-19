function login(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    };

    return fetch('http://localhost:3001/auth/login', requestOptions)
        .then(response => response.json())
}

export const APIobject = {
    login,
}