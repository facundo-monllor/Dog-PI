import axios from "axios";

export const GET_DOGS = "GET_DOGS"
export const ALL_TEMPS = "ALL_TEMPS"
export const FILTER_TEMPS = "FILTER_TEMPS"
export const FILTER_FROM = "FILTER_FROM"
export const ORDER_AZ = "ORDER_AZ"
export const ORDER_WEIGHT = "ORDER_WEIGHT"
export const SEARCH_DOGS = "SEARCH_DOGS"
export const CREATE_DOGS = "CREATE_DOGS"
export const DETAILS_DOGS = "DETAILS_DOGS"
export const DELETE_DOG = "DELETE_DOG"

// const URL = "http://localhost:3001"
const URL = "https://dog-pi-production.up.railway.app"

export function getDogs(){
    return async function(dispatch){
        let json = await axios.get(`${URL}/api/dogs/`)
        return dispatch({
            type: GET_DOGS,
            payload: json.data
        })
    }
}

export function allTemps(){
    return async function(dispatch){
        let json = await axios.get(`${URL}/api/temperaments/`)
        return dispatch({
            type: ALL_TEMPS,
            payload: json.data

        })
    }
}
export function searchDogs(breed){
    return async function(dispatch){
        try{
            let json = await axios.get(`${URL}/api/dogs?name=${breed}`)
            return dispatch({
                type: SEARCH_DOGS,
                payload: json.data
            })
        }catch(e){
            // alert("Sorry, the Dog you are looking for doesn't exists")
            return ("the dog does not exist")
        }
    }
}

export function createDogs(payload){
    return async function(){
        let json = await axios.post(`${URL}/api/dogs`,payload);
        return json
    }
}

export function detailsDogs(id){
    return async function(dispatch){
        try{
            let json = await axios.get(`${URL}/api/dogs/${id}`)
            return dispatch({
                type: DETAILS_DOGS,
                payload: json.data
            })
        }catch(e){
            console.log(e.message)
        }
    }
}


export function filterTemps(payload){
    return{
        type: FILTER_TEMPS,
        payload: payload
  }
}

export function filterFrom(payload){
    return{
        type: FILTER_FROM,
        payload
    }
}

export function orderAZ(payload){
    return{
        type: ORDER_AZ,
        payload
    }
}

export function orderWeight(payload){
    return{
        type: ORDER_WEIGHT,
        payload
    }
}

export function deleteDog(id){
    // console.log(id)
    return async function(){
        try{
            return await axios.delete(`${URL}/api/dogs/${id}`)
        }catch(e){
            console.log(e.message)
        }
    }
}
