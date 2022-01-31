




export const loadStates = (list) => {
    return { 
        type: "UPDATE_LIST",
        payload: list
    }
}


export const selectState = (state) => {
    return { 
        type: 'SELECT_STATE',
        payload: state
    }
}

export const updateCities = (cities) => {
    return { 
        type: 'UPDATE_CITY_LIST',
        payload: cities
    }
}