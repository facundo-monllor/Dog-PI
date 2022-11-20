import React from "react";
import {useDispatch, useSelector} from "react-redux"
import { useState } from "react";
import { getDogs } from "../../redux/actions";

import DogCard from "../DogCard/DogCard";
import Filter from "../Filter/Filter";
import Pagination from "../Pagination/Pagination";
import SearchBar from "../SearchBar/SearchBar";

import style from "./Home.module.css"

export default function Home(){
    let dispatch = useDispatch()
    const dogs = useSelector((state) => state.dogs)
    const allDogs= useSelector((state) => state.noFiltered)
    const [order, setOrder] = useState("")
    
    
    React.useEffect(() => {
        dispatch(getDogs())
    },[dispatch])
    
    console.log(dogs)
    
    const [currentPage,setCurrentPage] = useState(1)
    const [DogsPerPage, setDogsPerPage] = useState(8)
    const lastDog = currentPage * DogsPerPage
    const firstDog = lastDog - DogsPerPage
    const currentDogs = Array.from(dogs).slice(firstDog,lastDog)

    console.log(currentDogs)
    console.log(order,setDogsPerPage)
    

    const numeration = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    if(!allDogs.length){
        return(
            <div className={style.inputs}>
            <SearchBar />
            <Filter
                setCurrentPage= {setCurrentPage}
                setOrder= {setOrder}/>
                <div className={style.Loading}>
                    <img src="https://cdn.dribbble.com/users/1142616/screenshots/5310753/loading-dog.gif" alt="loading" className={style.landing}/>
                </div>
            </div>
        )
    }else if(currentDogs.length){
        return(
        <div>
            <div className={style.inputs}>
            <SearchBar />
            <Filter
                setCurrentPage= {setCurrentPage}
                setOrder= {setOrder}/>
            </div>

            <ul className={style.cards}>    
                {
                        currentDogs.map((d) => (
                        <DogCard
                        key = {d.id}
                        id = {d.id}
                        name = {d.name}
                        weightMin = {d.weightMin}
                        weightMax = {d.weightMax}
                        img = {d.img}
                        tempers = {d.tempers}
                        />
                    )) 
                }
            </ul>

             <Pagination
            dogs= {dogs}
            currentPage= {currentPage}
            setCurrentPage= {setCurrentPage}
            DogsPerPage = {DogsPerPage}
            numeration = {numeration}
            />
            
        </div>
        )
    }else if(allDogs && currentDogs.length === 0){
        return(
        <div>
            <div className={style.inputs}>
            <SearchBar />
            <Filter
                setCurrentPage= {setCurrentPage}
                setOrder= {setOrder}/>
            </div>
            
            <div className={style.notFound}>
                <img src="https://easydrawingguides.com/wp-content/uploads/2022/01/dog-barking-step-by-step-drawing-tutorial-step-10-1.png" alt="not found" className={style.imgNF}/>
                <h2 className={style.textNF}>DOG NOT FOUND</h2>
            </div>

        </div>

        )
    }

    













    // return(
    //     <div>
    //         <div className={style.inputs}>
    //         <SearchBar />
    //         <Filter
    //             setCurrentPage= {setCurrentPage}
    //             setOrder= {setOrder}/>
    //         </div>

    //         <ul className={style.cards}>    
    //             {
    //                 currentDogs.length !== 0 ?
    //                     currentDogs.map((d) => (
    //                     <DogCard
    //                     key = {d.id}
    //                     id = {d.id}
    //                     name = {d.name}
    //                     weightMin = {d.weightMin}
    //                     weightMax = {d.weightMax}
    //                     img = {d.img}
    //                     tempers = {d.tempers}
    //                     />
    //                 )) : (
    //                     <img src="https://cdn.dribbble.com/users/1142616/screenshots/5310753/loading-dog.gif" alt="loading" className={style.landing}/>
    //                 )
    //             }
    //         </ul>
    //         {
    //             currentDogs.length !== 0 ?
    //          <Pagination
    //         dogs= {dogs}
    //         currentPage= {currentPage}
    //         setCurrentPage= {setCurrentPage}
    //         DogsPerPage = {DogsPerPage}
    //         numeration = {numeration}
    //         /> : null
    //         }
    //     </div>
    // )
}