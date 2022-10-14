import * as actions from './actionTypes'

let lastId = 0;

export default function reducer(state = [], action) {
    //VERSION WITH SWITCH
    switch (action.type) {
        case actions.BUG_REMOVED:
            return [
                ...state,
                {
                    id: ++lastId,
                    description: action.payload.description,
                    resolve: false,
                }
            ]

        case actions.BUG_REMOVED:
            return state.filter(bug => bug.id !== action.payload.id );
        
        default:
            return state;
    }

    //VERSION WITH IF
    /*
    if (action.type === 'bugAdded') {
        return [
            ...state,
            {
                id: ++lastId,
                description: action.payload.description,
                resolve: false,
            }
        ]
    }
    else if (action.type === 'bugRemoved')
        return state.filter(bug => bug.id !== action.payload.id );
    
    return state;
    */

}