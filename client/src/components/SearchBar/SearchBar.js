import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { searchDogs } from "../../redux/actions";

import style from "./SearchBar.module.css"


export default function SearchBar(){
    let dispatch = useDispatch()

    const [search, setSearch] = useState("")

    const handleInput = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
        console.log(search)
    }

    const handleClick = (e) => {
        e.preventDefault()
        dispatch(searchDogs(search))
        setSearch("")
    }


    return(
        <div className={style.cont}>
            <div className={style.cont2}>
            <input onKeyPress={(e) => {
                if (e.key === "Enter") {
                    handleClick(e)}}}
                    type="text" placeholder="Search Dog..." onChange={(e) => handleInput(e)} value={search} className={style.input}/>
            <button type="submit" onClick={(e) => handleClick(e)} className={style.button}>🔎</button>
            </div>
        </div>
    )
}
