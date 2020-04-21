import createContext from './createDataContext';
import initalQuesData from './../data/question';


const blogReducer = (state, actions) =>{
    switch(actions.type){
        case 'add_question':
            return [
                    ...state, 
                    { 
                        id: Math.floor(Math.random()*9999999), 
                        ques: actions.payload.ques,
                        askedBy: actions.payload.askedBy,
                        ans: []
                    }
                ]
        default:
            return state
    }
}

const addQuestion = ( dispatch ) => {
    return (ques, askedBy, callback) => {
        dispatch({ 
                type: 'add_question', 
                payload: {
                    ques, 
                    askedBy 
                }
            });
        if(callback){
            callback()
        }
    }
}

export const { Context, Provider } = createContext(
    blogReducer, 
    { addQuestion }, 
    initalQuesData
)










