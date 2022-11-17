import React from "react";
import { Link } from "react-router-dom";
// import { NavLink } from "react-router-dom";

import style from "./DogCard.module.css"


export default function DogCard({name,weightMin,weightMax,img,tempers,id}){
    return(
    <Link to ={`/home/${id}`} className={style.link}>
        <div className={style.cont}>
            <img src={img} alt={name} className={style.imagen}/>
            <h2 className={style.name}>{name}</h2>
            <h3 className={style.tempers}>{tempers.map((t) => {
                if(tempers.indexOf(t) !== tempers.length -1){
                    return t + ", "
                }else return t
            })}</h3>
            <div className={style.www}><h3 className={style.weight}>Weight: {weightMin} - {weightMax} kg</h3></div>
        </div>
        </Link>
    )
}