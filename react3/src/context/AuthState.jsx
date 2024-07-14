import AuthContext from "./AuthContext"
import { useEffect, useState } from "react";

const AuthState = (props)=>{
    const [user, setuser] = useState({
        username: '',
        email: '',
    });
    //login fuction
    //logout function

    //localStorage.setItem('user', state)
    //localStorage.getItem('user')
    //localStorage.reamoveItem('user')

    //JSON.stringify(state)
    //JSON.parse(state)

    useEffect(() => {
        const storedUser = localStorage.getItem('user');

        if (storedUser !== 'undefined') {
            setuser(JSON.parse(storedUser));
        }
    }, []);

    const login = (userData) => {
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
    };

    const logout = () => {
        setUser({
            username: '',
            email: '',
        });
        localStorage.removeItem('user');
    };

    return (
        <AuthContext.Provider value={{user, login, logout}}>{props.children}</AuthContext.Provider>

    );
};

export default AuthState;