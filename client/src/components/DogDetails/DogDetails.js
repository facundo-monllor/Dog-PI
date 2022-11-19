import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useHistory } from "react-router-dom";
import { detailsDogs, deleteDog } from "../../redux/actions";

import style from "./DogDetails.module.css"

export default function DogsDetails(){
    let dispatch = useDispatch()
    let params = useParams()
    let history = useHistory()

    const details = useSelector((state) => state.dogsDetails)
    console.log(details)

    
    const dogDelete = (e) => {
      if(window.confirm("Do you really want to delete?")) {
        dispatch(deleteDog(params.id))
        alert("The Dog has been successfully removed :)")
        history.push("/home")
    }
    }

    React.useEffect(() => {
        dispatch(detailsDogs(params.id))
    },[params.id,dispatch])

    return(
        <div>
            {
                details.length > 0 ? 
            <div className={style.cont}>
                <img src={details[0].img} alt={details[0].name} className={style.imagen}/>
                
                <div className={style.data}>
                  { details[0].createdDB === true ? <button onClick={(e) => dogDelete(e)} className={style.xBut}>DELETE</button> : null}
                    
                    <h1 className={style.name}>{details[0].name}</h1>

                <div className={style.info}>
                  <div className={style.height}>
                    <h3 className={style.height1}>Height</h3>
                    <h4 className={style.height2}>{details[0].heightMin} - {details[0].heightMax} Cm</h4>
                  </div>
                  <div className={style.weight}>
                    <h3 className={style.weight1}>Weight:</h3>
                    <h4 className={style.weight2}>{details[0].weightMin} - {details[0].weightMax} Kg</h4>
                  </div>
                  <div className={style.lifespan}>
                    <h3 className={style.lifespan1}>Life Span:</h3>
                    <h4 className={style.lifespan2}>{details[0].lifeMin} - {details[0].lifeMax} years</h4>
                  </div>
                </div>
                
                  <div>
                    <h3 className={style.tempTit}>Temperaments</h3>
                    <div className={style.tempCont}>
                    {details[0].tempers.map((t) => {
                            return <p className={style.t1}>{t}</p>
                    })}
                    </div>
                  </div>

                  <Link to="/home"><div className={style.link}><h3 className={style.return}>RETURN</h3></div></Link>

                </div>
            </div>
            :
            <img src="https://cdn.dribbble.com/users/1187836/screenshots/5684366/image.gif" alt="loading" className={style.loading}/>
            }
            
        </div>
    )
}