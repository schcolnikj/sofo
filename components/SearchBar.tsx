"use client";

import React, { useState } from 'react'

import { SearchFlavour } from "./";
import Image from 'next/image';
import { useRouter } from 'next/navigation';

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

const SearchBar = () => {
    const [flavor, setFlavor] = useState('');
    const router = useRouter();
    

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if(flavor === "") {
        return alert('No hay nada en la barra de búsqueda')
      }

      updateSearchParams(flavor.toLowerCase())
    }

    const updateSearchParams = (flavor: string) => {
      const searchParams = new URLSearchParams(window.location.search);

      if(flavor) {
        searchParams.set('flavor', flavor)
      } else {
        searchParams.delete('flavor')
      }

      const newPathname = `${window.location.pathname}?${searchParams.toString()}`
      
      router.push(newPathname);
    }

  return (
    <form className='searchbar' onSubmit={handleSearch}>
        <div className="searchbar__item">
            <SearchFlavour
                flavor={flavor}
                setFlavor={setFlavor}
            />
            <SearchButton otherClasses="sm:hidden" />
        </div>
        <SearchButton otherClasses="max-sm:hidden" />
    </form>
  )
}

export default SearchBar