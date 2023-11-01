import { FETCH_COMMENTS } from "../actions/commentAction";

const initialState={
    comments:[]
}

const commentReducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_COMMENTS:
            return{
                ...state,
                comments:action.payload
            }

        default:
            return state    
    }
}


export default commentReducer