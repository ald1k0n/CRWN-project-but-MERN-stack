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
        axios.post('http://localhost:5000/register', { username, password, email },
            { withCredentials: true })
            .then(res => setCurrentUser(res.data.username))
            .catch(err => console.log(err));
    };

    const login = (username, password) => {
        axios.post('http://localhost:5000/login', { username, password },
            { withCredentials: true })
            .then(res => setCurrentUser(res.data.username))
            .catch(err => console.log(err));
    };

    const logout = () => {
        axios.post('http://localhost:5000/logout', {}, { withCredentials: true })
            .then(res => setCurrentUser(res.data));
    }

    const getUser = () => {
        axios.get('http://localhost:5000/user', { withCredentials: true })
            .then(res => setCurrentUser(res.data))
    }

    getUser()

    const value = { currentUser, setCurrentUser, createUser, login, logout };

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
