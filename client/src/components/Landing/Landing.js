import React from "react"
import { NavLink } from "react-router-dom"
import style from "./Landing.module.css"

import huella from "../../imagenes/lookBreeds.png"
import linkedin from "../../imagenes/linkedin.png"
import git from "../../imagenes/github.png"

export default function Landing(){
    return(
        <div className={style.background}>
            <div className={style.cont}>
            <NavLink to="/home"><button className={style.button}>START</button></NavLink>
            <div className={style.logos}>
            <a href="https://www.linkedin.com/in/facundo-monllor/"><img src={linkedin} alt="logo linkedin" width="40" height="40" style={{padding:"2px"}}/></a>
            <a href="https://github.com/facundo-monllor"><img src={git} alt="logo git" width="40" height="40" style={{padding:"2px"}}/></a>
            </div>
            </div>
            <img src={huella} alt="huella" className={style.img}/>
        </div>
    )
}