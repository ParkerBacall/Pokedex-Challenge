import React from 'react'

export default function Clear({clearFilter}) {
    
    const handleClick = () =>{
        clearFilter()
    }


    return (
        <div className="clearButtonContainer">
            <button onClick={handleClick} className='clearButton'>Clear</button>
        </div>
    )
}
