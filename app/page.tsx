"use client"

import Image from 'next/image';
import { useEffect, useState } from 'react';

import { CustomFilter, FlavorCard, Hero, SearchBar, ShowMore } from '@/components'
import { fetchFlavors } from '@/utils'
import { categorias } from '@/constants';

export default function Home() {
  const [allFlavors, setAllFlavors] = useState([]);
  // const [filteredFlavors, setFilteredFlavors] = useState([]);
  // const [filteredCategorias, setFilteredCategorias] = useState([]);


  const [loading, setLoading] = useState(false);

  const [flavor, setFlavor] = useState ("");
  const [categoria, setCategoria] = useState("");

  const [limit, setLimit] = useState(10);

  const getFlavors = async () => {
    try {
      setLoading(true)
      const result = await fetchFlavors({ name: flavor || ""});
      setAllFlavors(result);
    } catch (error) {
      console.log(error)
    }finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getFlavors();
    
  }, [allFlavors, categoria, flavor, categoria, limit])
  
  
  
  const filteredCategorias= allFlavors.filter((f) => f.categoria.toLowerCase() === categoria.toLowerCase())
  const filteredFlavors = allFlavors.filter((f) => f.name.toLowerCase() === flavor.toLowerCase())
  

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className='mt-12 padding-x padding-y
      max-width' id="discover">
        <div className='home__text-container'>
          <h1 className='text-4x1
          font-extrabold'>
            Nuestros Sabores
          </h1>
          <p>Conoce todos nuestros sabores!</p>
        </div>
        
        <div className='home__filters'>
          <SearchBar setFlavor={setFlavor}  />

          <div className='home__filter-container'>
            <CustomFilter title="Categoría" options={categorias} setFilter={setCategoria} />
          </div>
        </div>


        {flavor.length || categoria.length > 0 ?
        <section>
          <div className='home__cars-wrapper'>
            {filteredFlavors?.map((flavor) => (
              <FlavorCard flavor={flavor} />
            ))}
            {filteredCategorias?.map((flavor) => (
              <FlavorCard flavor={flavor} />
            ))}
          </div>

          {loading && (
            <div className='mt-16 w-full flex-center'>
              <Image
                src="/loader.svg"
                alt="loader"
                height={50}
                width={50}
                className="object-contain"
              />
            </div>
          )}
        </section>

        :

        <section>
          <div className='home__cars-wrapper'>
            {allFlavors?.map((flavor) => (
              <FlavorCard flavor={flavor} />
            ))}
          </div>
        </section>
        }

        <ShowMore
          pageNumber={limit / 10}
          isNext={limit > allFlavors.length}
          setLimit = {setLimit}
          setFlavor={setFlavor}
          setCategoria={setCategoria}
        />

      </div>
    </main>
  )
}  
