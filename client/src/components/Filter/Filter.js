import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { allTemps, filterTemps, filterFrom, orderAZ, orderWeight, getDogs } from "../../redux/actions";

import style from "./Filter.module.css"

export default function Filter({setCurrentPage, setOrder, setPageNumberLimit, setMaxPageLimit, setMinPageLimit}){
    let dispatch = useDispatch()
    const tempers = useSelector((state) => state.tempers)

    React.useEffect(() => {
        dispatch(allTemps())
    },[dispatch])
    
    const handleFilterTemp = (e) => {
        setCurrentPage(1)
        setPageNumberLimit(5)
        setMaxPageLimit(5)
        setMinPageLimit(0)
        dispatch(filterTemps(e.target.value))
    }

    const handleFilterFrom = (e) => {
        setCurrentPage(1)
        setPageNumberLimit(5)
        setMaxPageLimit(5)
        setMinPageLimit(0)
        dispatch(filterFrom(e.target.value))
    }

    const handleOrderAz = (e) => {
        e.preventDefault()
        setCurrentPage(1)
        setPageNumberLimit(5)
        setMaxPageLimit(5)
        setMinPageLimit(0)
        dispatch(orderAZ(e.target.value))
        setOrder(`order in ${e.target.value}`)
    }

    const handleOrderWeight = (e) => {
        e.preventDefault()
        setCurrentPage(1)
        setPageNumberLimit(5)
        setMaxPageLimit(5)
        setMinPageLimit(0)
        dispatch(orderWeight(e.target.value))
        setOrder(`order in ${e.target.value}`)
    }

    const handleReset = (e) => {
        e.preventDefault()
        setCurrentPage(1)
        setPageNumberLimit(5)
        setMaxPageLimit(5)
        setMinPageLimit(0)
        dispatch(getDogs())
    }


    return(
        <div className={style.cont}>
        
        <button onClick={(e) => handleReset(e)} className={style.button}>REFRESH</button>

        <select onChange={e => handleFilterFrom(e)} className={style.select}>
            <option value="all">ALL</option>
            <option value="api">API</option>
            <option value="yours">YOURS</option>
        </select>

        <select onChange={e => handleFilterTemp(e)} className={style.select}>
            <option value="none">All temperaments</option>
            {tempers.map((t) => {
                return (
                    <option value={t.name}>{t.name}</option>
                )
            })}
        </select>

        <select onChange={e => handleOrderAz(e)} defaultValue={"alphabetically"} className={style.select}>
            <option value="alphabetically" disabled>Alphabetically order</option>
            <option value="a-z">A-Z</option>
            <option value="z-a">Z-A</option>
        </select>

        <select onChange={(e) => handleOrderWeight(e)} defaultValue={"weight"} className={style.select}>
            <option value="weight" disabled>Weight order</option>
            <option value="plus">+ Weight</option>
            <option value="less">- Weight</option>
        </select>

        </div>
    )
}