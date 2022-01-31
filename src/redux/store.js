import { createStore } from 'redux'


const StateReducer = ( state = { list: [], selectedState: false, cities: [], selectedCity: false }, action, data = false) => {
    console.log('ACTION', action, data)
    switch(action.type){
        case 'UPDATE_LIST':
            return {...state, list: action.payload }

        case 'SELECT_STATE':
            return { ...state, selectedState: action.payload, cities: [], selectedCity: false }
        
        case 'UPDATE_CITY_LIST':
            return { ...state, cities: action.payload }

        default:
            return state
    }
}


export const states = createStore(StateReducer)
