import React from "react";
import style from "./Pagination.module.css"

export default function Pagination({dogs, DogsPerPage, numeration,currentPage, setCurrentPage, pageNumberLimit, setPageNumberLimit, maxPageLimit, setMaxPageLimit, minPageLimit, setMinPageLimit}){

    const pageNumbers = []

    // const [pageNumberLimit, setPageNumberLimit] = useState(5);
    // const [maxPageLimit, setMaxPageLimit] = useState(5);
    // const [minPageLimit, setMinPageLimit] = useState(0);
    console.log(setPageNumberLimit)

    
    for (let i = 1; i <= Math.ceil(dogs.length/DogsPerPage); i++){
        pageNumbers.push(i)
    }

    const handlePrev = () => {
        setCurrentPage(currentPage - 1)
        
        if((currentPage - 1 )%pageNumberLimit === 0){ // 6 - 1 % 5
        setMaxPageLimit(maxPageLimit - pageNumberLimit) // 10 - 5 = 5
        setMinPageLimit(minPageLimit - pageNumberLimit) // 5 - 5 = 0
    }
    }

    const handleNext = () => {
        setCurrentPage(currentPage + 1)
        
        if(currentPage + 1 > maxPageLimit){ // 5 + 1 > 5 
        setMaxPageLimit(maxPageLimit + pageNumberLimit) // 5 + 5 = 10
        setMinPageLimit(minPageLimit + pageNumberLimit) // 0 5 = 5
    }
    }
    
    // console.log(currentPage)

    return(
        <nav>
            <ul className={style.pagina}>
                {currentPage !== 1 ? <button onClick={() => handlePrev()} className={style.pn}>Prev</button> : null}
                
                {
                    pageNumbers && pageNumbers.map((num) => {

                        if(num < maxPageLimit + 1 && num > minPageLimit ){
                            return(
                                <button key={num}
                                onClick={() => numeration(num)}
                                className= {num === currentPage ? `${style.active}` :  `${style.desactive}`}
                                >{num}
                                </button>
                                )
                            } else{
                                return null
                            }
                        })
                }
                
                {currentPage !== pageNumbers.length ? <button onClick={() => handleNext()} className={style.pn}>Next</button> : null}
                
            </ul>
        </nav>
    )
}
