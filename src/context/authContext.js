import createContext from './createDataContext';
import UserData from './../data/user';
import user from './../data/user';

const reducer = (state, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return {
                ...state,
                isSignout: false,
                userToken: action.payload.token,
                userDetails: action.payload.userDetails
            };
        case 'SIGN_OUT':
            return {
                ...state,
                isSignout: true,
                userToken: null,
            };
        case 'SIGNIN_ERROR':
            return {
                ...state,
                isSignout: true,
                userToken: null,
                error: action.payload.error
            };
        default:
            return state
    }
}

const signIn = (dispatch) => {
    return (username, password) => {
        if(UserData[username] && UserData[username].password === password){
            console.log(username)
            console.log(UserData[username].password)
            console.log(password)
            dispatch({ 
                type: 'SIGN_IN', 
                payload: {
                    token: Math.floor(Math.random()*1000000),
                    userDetails:  UserData[username]['profile']
                }
            })
        } else {
            dispatch({ 
                type: 'SIGNIN_ERROR',
                payload: {
                    error: 'Incorrect combination of username and password'
                }
            })
        }
    }
}

const signOut = (dispatch) => {
    return ()=>{
        dispatch({ type: 'SIGN_OUT' })
    }
}


export const { Context, Provider } = createContext(
    reducer, 
    { signIn, signOut}, 
    { isLoading: true, isSignout: false, userToken: null }
);