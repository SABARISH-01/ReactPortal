// src/userStore.js

export const addUser = (username, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));
};

export const findUser = (username, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    return users.find(user => user.username === username && user.password === password);
};
