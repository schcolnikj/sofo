import Image from 'next/image'

import { CustomFilter, FlavorCard, Hero, SearchBar, ShowMore } from '@/components'
import { fetchFlavors } from '@/utils'
import { categorias } from '@/constants';

export default async function Home({ searchParams }) {
  const allFlavors = await fetchFlavors({ name: searchParams.flavor || ""});
  const filteredFlavors = allFlavors.filter((flavor) => flavor.name.toLowerCase() === searchParams.flavor)
  const filteredCategorias= allFlavors.filter((flavor) => flavor.categoria.toLowerCase() === searchParams.Categoría)

  
  

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
          <SearchBar />

          <div className='home__filter-container'>
            <CustomFilter title="Categoría" options={categorias} />
          </div>
        </div>


        {filteredFlavors.length || filteredCategorias.length > 0 ?
        <section>
          <div className='home__cars-wrapper'>
            {filteredFlavors?.map((flavor) => (
              <FlavorCard flavor={flavor} />
            ))}
            {filteredCategorias?.map((flavor) => (
              <FlavorCard flavor={flavor} />
            ))}
          </div>
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
          pageNumber={(searchParams.pageNumber || 10) / 10}
          isNext={(searchParams.limit || 10) > allFlavors.length}
        />

      </div>
    </main>
  )
}  
