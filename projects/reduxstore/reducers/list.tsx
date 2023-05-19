import { ADD_SEASONS, MARK_COMPLETED, REMOVE_SEASONS } from "../action/action.types";

let initialState: []

export  default (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_SEASONS:
          return [...state, action.payload]   
            break;
        case REMOVE_SEASONS:
          return state.filter((item) => item.id  !== action.payload)
          
             break;
        case MARK_COMPLETED:
          return state.map((item)=> item.id === action.payload ? {...item, isComplete: !item.isComplete} : item)
             break;    
        default:
             return state 
   }

}