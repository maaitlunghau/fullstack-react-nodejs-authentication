import { createContext, useState } from "react";

export const AuthContext = createContext({
    isAuthenticated: false,
    user: {
        username: "",
        email: "",
        role: "",
    },
});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        isAuthenticated: false,
        user: {
            username: "",
            email: "",
            role: "",
        },
    });
    const [appLoading, setAppLoading] = useState(false);

    return (
        <AuthContext.Provider value={{ auth, setAuth, appLoading, setAppLoading }}>
            {children}
        </AuthContext.Provider>
    );
};