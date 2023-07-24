"use client";

import React, { useState } from 'react'

import { SearchFlavour } from "./";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import SearchFlavor from './SearchFlavor';

const SearchButton = ({ otherClasses } : {otherClasses: string}) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src="/magnifying-glass.svg"
      alt="magnifying glass"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
)

const SearchBar = ({ setFlavor }) => {
    const [searchFlavor, setSearchFlavor] = useState('');
    const router = useRouter();
    

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if(searchFlavor === "") {
        return alert('No hay nada en la barra de búsqueda')
      }

      setFlavor(searchFlavor)
      console.log(searchFlavor);
      
    }


  return (
    <form className='searchbar' onSubmit={handleSearch}>
        <div className="searchbar__item">
            <SearchFlavor
                selected={searchFlavor}
                setSelected={setSearchFlavor}
            />
            <SearchButton otherClasses="sm:hidden" />
        </div>
        <SearchButton otherClasses="max-sm:hidden" />
    </form>
  )
}

export default SearchBar