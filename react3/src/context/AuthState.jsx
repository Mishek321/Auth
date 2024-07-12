import AuthContext from "./AuthContext"

const AuthState = (props)=>{
    const state = {
        username: 'Mishek',
        email: 'mishek@gmail.com',
    };
    //login fuction
    //logout function

    //localStorage.setItem('user', state)
    //localStorage.getItem('user')
    //localStorage.reamoveItem('user')

    //JSON.stringify(state)
    //JSON.parse(state)

    return (
        <AuthContext.Provider value={state}>{props.children}</AuthContext.Provider>

    );
};

export default AuthState;