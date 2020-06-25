import React from 'react'

export default function SearchBar({searchTerm, updateSearchTerm}) {

    const handleChange = event => {
        updateSearchTerm(event.target.value)
    }
    return (

        <div>
            <form>
                <input 
                className="searchBar" 
                type="text"
                placeholder="Search by Name"
                value={searchTerm} 
                onChange={handleChange}>
                </input>
  
            </form>
        </div>
    )
}
