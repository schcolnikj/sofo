"use client";

import { useState } from 'react'

import { SearchFlavour } from "./";

const SearchBar = () => {
    const [flavour, setFlavour] = useState('');

    const handleSearch = () => {}

  return (
    <form className='searchbar' onSubmit={handleSearch}>
        <div className="searchbar__item">
            <SearchFlavour
                flavour={flavour}
                setFlavour={setFlavour}
            />
        </div>
    </form>
  )
}

export default SearchBar