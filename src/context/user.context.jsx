import axios from "axios";
import { createContext, useState } from "react";

export const UserContext = createContext({
    setCurrentUser: () => null,
    currentUser: null,
    logout: () => { },
    createUser: () => { },
    login: () => { }
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    const createUser = (username, password, email) => {
        axios.post('http://localhost:5000/register', { username, password, email })
            .then(res => setCurrentUser(res.data.username))
            .catch(err => console.log(err));
    };

    const login = (username, password) => {
        axios.post('http://localhost:5000/login', { username, password })
            .then(res => setCurrentUser(res.data.username))
            .catch(err => console.log(err));
    };

    const getStateFromBackend = () => {
        axios.get('http://localhost:5000/user')
            .then(res => setCurrentUser(res.data.username))
    }
    getStateFromBackend();

    const logout = () => {
        axios.post('http://localhost:5000/logout')
            .then(res => setCurrentUser(res.data));
    }

    const value = { currentUser, setCurrentUser, createUser, login, logout };

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
