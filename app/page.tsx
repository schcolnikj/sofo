import Image from 'next/image'

import { CustomFilter, Hero, SearchBar } from '@/components'

export default function Home() {
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
            <CustomFilter title="crema" />
            <CustomFilter title="frutal" />
          </div>
        </div>

      </div>
    </main>
  )
}  
