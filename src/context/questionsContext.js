import createContext from './createDataContext';
import initalQuesData from './../data/question';


const quesReducer = (state, actions) =>{
    switch(actions.type){
        case 'add_answer':
            return state.map((ques)=>{
                if(ques.id === actions.payload.id){
                    ques.ans = [{text: actions.payload.ans, by:actions.payload.by },...ques.ans]
                }
                return ques
            })
        case 'add_question':
            return [ 
                    { 
                        id: (Math.floor(Math.random()*9999999)).toString(), 
                        ques: actions.payload.ques,
                        askedBy: actions.payload.askedBy,
                        ans: []
                    },
                    ...state
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

const addAnswer = ( dispatch ) => {
    return (id, ans, by, callback) => {
        dispatch({ 
            type: 'add_answer', 
            payload: {
                id, 
                ans,
                by 
            }
        });
        if(callback){
            callback()
        }
    }
}

export const { Context, Provider } = createContext(
    quesReducer, 
    { addQuestion, addAnswer }, 
    initalQuesData
);