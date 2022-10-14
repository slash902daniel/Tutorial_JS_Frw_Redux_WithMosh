import * as actions from './actionTypes'

//regular function
export function bugAdded(description) {
    return   { 
        type: actions.BUG_ADDED,
        payload: {
            description
        }
    };
}

//arrow function
export const bugAdded2 = description => ({
    type: actions.BUG_ADDED,
    payload: {
        description
    }
    
})

export const bugResolved = id => ({
    type: actions.BUG_RESOLVED,
    payload: {
        id
    }
    
})