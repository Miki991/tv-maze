const initialState = {
    shows: [],
    schedule: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_SHOWS':
            return {
                ...state,
                shows: action.shows
            }
        case 'SET_SCHEDULE':
            return {
                ...state,
                schedule: action.schedule
            }
        default:
            return state;
    }
}



export {reducer}