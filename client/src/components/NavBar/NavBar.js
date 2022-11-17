import { Link } from "react-router-dom"

import logo from "../../imagenes/dogApp2.png"
import linkedin from "../../imagenes/linkedin.png"
import git from "../../imagenes/github.png"

import style from "./NavBar.module.css"

export default function NavBar(){
    return(
        <div className={style.nav}>
            <div>
                <Link to ="/home">
                <img src={logo} alt="logo" className={style.icon}/>
                </Link>
            </div>

            <div className={style.logos}>
            <a href="https://www.linkedin.com/in/facundo-monllor/"><img src={linkedin} alt="logo linkedin" className={style.logitos}/></a>
            <a href="https://github.com/facundo-monllor"><img src={git} alt="logo git" className={style.logitos}/></a>
            </div>

            <div className={style.buttons}>
                <Link to ="/home">
                <button className={style.boton}>Home</button>
                </Link>
                <Link to="/create">
                <button className={style.boton}>Create Dog</button>
                </Link>
            </div>
        </div>
    )
}