import { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const CategoriesContext = createContext({
    categoriesMap: [],
});

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState([]);

    useEffect(() => {
        const getCategoriesMap = async () => {
            axios.get('http://localhost:5000/categories')
                .then(categoryMap => setCategoriesMap(categoryMap.data));
        };
        getCategoriesMap();
    }, [])

    const value = { categoriesMap };
    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    )
}