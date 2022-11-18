import { GET_DOGS, ALL_TEMPS, FILTER_TEMPS, FILTER_FROM, ORDER_AZ, ORDER_WEIGHT, SEARCH_DOGS, CREATE_DOGS, DETAILS_DOGS } from "../actions";

const initialState = {
    dogs: [],
    noFiltered: [],
    tempers: [],
    dogsDetails: []
}

export default function rootReducer (state = initialState, action){
    switch(action.type){
        case GET_DOGS:
            return{
                ...state,
                dogs: action.payload,
                noFiltered: action.payload,
                dogsDetails: []
            }
        case ALL_TEMPS:
            return{
                ...state,
                tempers: action.payload
            }
        case SEARCH_DOGS:
            return{
                ...state,
                dogs: action.payload
            }
        case CREATE_DOGS:
            return{
                ...state
            }
        case DETAILS_DOGS:
            return{
                ...state,
                dogsDetails: action.payload
            }
        case FILTER_TEMPS:
            const allDogs = state.noFiltered
            const filterTemps = action.payload === "none" ? allDogs : allDogs.filter((d) => d.tempers.includes(action.payload))
            return{
                ...state,
                dogs: filterTemps
            }
        case FILTER_FROM:
            const allDogsF = state.noFiltered
            let filterFrom
            if(action.payload === "all"){
                filterFrom = allDogsF
            }
            if(action.payload === "api"){
                filterFrom = allDogsF.filter((d) => !d.createdDB)
            }
            if(action.payload === "yours"){
                filterFrom = allDogsF.filter((d) => d.createdDB)
            }
            return{
                ...state,
                dogs: filterFrom
            }
            
        case ORDER_AZ:
            let orderAZ
            if(action.payload === "alphabetically"){
                orderAZ = state.dogs
            }
            if(action.payload === "a-z"){
                orderAZ = state.dogs.sort(function(a,b){
                    if(a.name.toUpperCase() < b.name.toUpperCase()) {return -1}
                    if(a.name.toUpperCase() > b.name.toUpperCase()) {return 1}
                    return 0;
                })
            }else if(action.payload === "z-a"){
                orderAZ = state.dogs.sort(function(a,b){
                    if(a.name.toUpperCase() < b.name.toUpperCase()) {return 1}
                    if(a.name.toUpperCase() > b.name.toUpperCase()) {return -1}
                    return 0;
                })
            }
            return{
                ...state,
                dogs: orderAZ
            }
        case ORDER_WEIGHT:
            let orderWeight
            if(action.payload === "weight"){
                orderWeight = state.dogs
            }
            if(action.payload === "plus"){
                orderWeight = state.dogs.sort(function(a,b){
                    if(a.weightMin < b.weightMin) {return 1}
                    if(a.weightMin > b.weightMin) {return -1}
                    return 0;
                })
            }else if(action.payload === "less"){
                orderWeight = state.dogs.sort(function(a,b){
                    if(a.weightMin < b.weightMin) {return -1}
                    if(a.weightMin > b.weightMin) {return 1}
                    return 0;
                })
            }
            return{
                ...state,
                dogs: orderWeight
            }
            default:
                return{...state}
    }
}