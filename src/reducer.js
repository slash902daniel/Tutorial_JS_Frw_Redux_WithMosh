lastId = 0;

export default function reducer(state = [], action) {
    //VERSION WITH SWITCH
    switch (action.type) {
        case 'bugAdded':
            return [
                ...state,
                {
                    id: ++lastId,
                    description: action.payload.description,
                    resolve: false,
                }
            ]

        case 'bugRemoved':
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