import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom"

import { allTemps, createDogs } from "../../redux/actions";

import style from "./CreateDog.module.css"

export default function CreateDog(){

    let dispatch = useDispatch()
    let history = useHistory()
    const temps = useSelector(state => state.tempers)
    const dogs = useSelector(state => state.noFiltered)
    const [error,setError] = useState({})


    function validate(input){
        let errors = {}
    
        if(!input.name){
            errors.name = "Missing name"
        }
        if(input.name.search("[0-9]") !== -1){
            errors.name = "The name must not contain numbers"
        }
        if(dogs.find(d => d.name === input.name)){
            errors.name = ("Name cannot be repeated")
        }
        if(!input.heightMin){
            errors.heightMin = "Required Field"
        }
        if(!input.heightMax){
            errors.heightMax = "Required Field"
        }
        if(parseInt(input.heightMax) <= parseInt(input.heightMin)){
            errors.heightMax = "Max has to be greater than minimum"
        }
    
        if(!input.weightMin){
            errors.weightMin = "Required Field"
        }
        if(!input.weightMax){
            errors.weightMax = "Required Field"
        }
        if(parseInt(input.weightMax) <= parseInt(input.weightMin)){
            errors.weightMax = "Max has to be greater than minimum"
        }
    
        if(!input.lifeMin){
            errors.lifeMin = "Required Field"
        }
        if(!input.lifeMax){
            errors.lifeMax = "Required Field"
        }
        if(parseInt(input.lifeMax) <= parseInt(input.lifeMin)){
            errors.lifeMax = "Max has to be greater than minimum"
        }
        return errors
    }

    
    React.useEffect(() => {
        dispatch(allTemps())
    },[dispatch])

    const [input,setInput] = useState({
        name: "",
        heightMin: "",
        heightMax: "",
        weightMin: "",
        weightMax: "",
        lifeMin: "",
        lifeMax: "",
        img: "",
        tempers: []
    })
    

    const handleInput = (e) => {
        setInput({
            ...input,
            [e.target.name] : e.target.value
    })
         setError(validate({
            ...input,
            [e.target.name] : e.target.value
        }))
    console.log(error)
    }


    const handleSelect = (e) => {
        if(input.tempers.includes(e.target.value)){
            return alert("Temperament cannot be repeated")
        }
        if(input.tempers.length > 5){
           return alert("Only 6 temperaments allowed")
        }
        setError(validate({
            ...input,
            [e.target.name] : e.target.value
    }))
        setInput({
            ...input,
            tempers : [...input.tempers,e.target.value]
    })
    console.log(input)
    }

    const handleDelete = (e) => {
        setInput({
            ...input,
            tempers: input.tempers.filter((t) => t !== e)
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        if(input.tempers.length === 0){
            return alert("The dog needs at least one temperament")
        }
        let data = {...input}
        if(data.img === ""){
            data.img = undefined
        }
        dispatch(createDogs(data))
        setInput({
            name: "",
            heightMin: "",
            heightMax: "",
            weightMin: "",
            weightMax: "",
            lifeMin: "",
            lifeMax: "",
            img: "",
            tempers: []
        })
        alert("Successfully created dog")
        history.push("/home")
    }

    return(
        <div  className={style.cont}>
            <form onSubmit={(e) => handleSubmit(e)}>
            <div>
                <h1 className={style.create}>CREATE YOUR DOG</h1>
        <div className={style.divTodo}>
            <div className={style.divInput}>

                    <div className={style.divLabel}>
                    <label>Name:</label>
                    <input type="text" name="name" value={input.name} onChange={(e) => handleInput(e)}></input>
                    {error.name && (
                        <p className={style.error}>{error.name}</p>
                    )}
                    </div>
                    
                    <div className={style.divLabel}>
                    <label>Height Min:</label>
                    <input type="number" name="heightMin" value={input.heightMin} onChange={(e) => handleInput(e)}/>
                    {error.heightMin && (
                        <p className={style.error}>{error.heightMin}</p>
                    )}
                    <label>Max:</label>
                    <input type="number" name="heightMax" value={input.heightMax} onChange={(e) => handleInput(e)}/> <label> CM</label>
                    {error.heightMax && (
                        <p className={style.error}>{error.heightMax}</p>
                    )}
                    </div>

                    <div className={style.divLabel}>
                    <label>Weight Min:</label>
                    <input type="number" name="weightMin" value={input.weightMin} onChange={(e) => handleInput(e)}/>
                    {error.weightMin && (
                        <p className={style.error}>{error.weightMin}</p>
                    )}
                    <label>Max:</label>
                    <input type="number" name="weightMax" value={input.weightMax} onChange={(e) => handleInput(e)}/> <label> KG</label>
                    {error.weightMax && (
                        <p className={style.error}>{error.weightMax}</p>
                    )}
                    </div>

                    <div className={style.divLabel}>
                    <label>Life Span Min:</label>
                    <input type="number" name="lifeMin" value={input.lifeMin} onChange={e => handleInput(e)}/>
                    {error.lifeMin && (
                        <p className={style.error}>{error.lifeMin}</p>
                    )}
                    <label>Max:</label>
                    <input type="number" name="lifeMax" value={input.lifeMax} onChange={e => handleInput(e)}/><label> Years</label>
                    {error.lifeMax && (
                        <p className={style.error}>{error.lifeMax}</p>
                    )}
                    </div>
                
                     <div className={style.tempers}>
                    <label>Tempers:</label>
                    <select defaultValue={"none"} onChange={(e) => handleSelect(e)} className={style.select}>
                    <option value="none" disabled>Select temps...</option>
                        {temps.map((t) => {
                        return (
                            <option value={t.name}>{t.name}</option>
                        )
                    })}</select>
                    </div>

            </div>
                
                <div className={style.divImg}>
                    <label>Img:</label>
                    <input type="text" name="img" value={input.img} onChange={(e) => handleInput(e)} placeholder="URL" className={style.inpImg}/>
                    <img src={input.img ? input.img : "https://i.pinimg.com/736x/b2/4a/69/b24a69c17a1c581bc839c71d889f15f5.jpg"} alt ="foto" className={style.img}/>
                </div>
        </div>

            <div className={style.divBoton}>
                {
                    !error.name && !error.heightMin && !error.heightMax && !error.weightMin && !error.weightMax && !error.lifeMin && !error.lifeMax?
                    <button type="submit" className={style.botones}>
                        Create Dog
                    </button> :
                    null
                }
                

                <Link to="/home">
                <button className={style.botones}>Go to Home!</button>
                </Link>
            </div>

            </div>

            <div className={style.tags}>
            {input.tempers.map((t) => 
                        <div className={style.divTemps}>
                            <p className={style.pTemps}>{t}</p>
                            <button type="button" onClick={() => handleDelete(t)} className={style.butTemps}>X</button>
                        </div>
                    )} 
            </div>
</form> 
        </div>
    )
}