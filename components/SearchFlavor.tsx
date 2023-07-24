"use client";

import { useState, Fragment } from 'react';

import { Combobox, Transition } from '@headlessui/react'
import Image from 'next/image';

import { flavors } from '@/constants';
import { SearchFlavorProps } from '@/types'

const SearchFlavor = ({ selected, setSelected } : SearchFlavorProps) => {
    const [query, setQuery] = useState('');

    const filteredFlavors = query === ""  ?
    flavors : flavors.filter((item) => (
        item.toLowerCase()
        .replace(/\s+/g, "")
        .includes(query.toLowerCase().replace(/\s+/g, ""))
    ))

  return (
    <div className='search-manufacturer'>
        <Combobox value={selected} onChange={setSelected}>
            <div className='relative w-full'>
                <Combobox.Button className='absolute top-[14px]'>
                    <Image
                        src='/sofo2Inv.svg'
                        width={20}
                        height={20}
                        className='ml-4'
                        alt='conito'
                    />
                </Combobox.Button>

                <Combobox.Input
                    className='search-manufacturer__input'
                    placeholder='Frutilla'
                    displayValue={(flavour: string) => flavour}
                    onChange={(e) => setQuery(e.target.value)}
                />

                <Transition
                as={Fragment}
                leave='transition ease-in duration-100'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
                afterLeave={() => setQuery('')}
                >   
                    <Combobox.Options>
                        {filteredFlavors.length === 0 && query !== "" ? (
                            <Combobox.Option
                                value={query}
                                className='search-manufacturer__option'
                            >
                                No tenemos el sabor "{query}" !
                            </Combobox.Option>
                        ) : (
                            filteredFlavors.map((flavor) => (
                                <Combobox.Option
                                    key={flavor}
                                    className={({ active }) => `first-letter:relative search-manufacturer__option ${active ? 
                                        'bg-primary-blue text-white' : "text-gray-900"}`}
                                    value={flavor}
                                >
                                    {({ selected, active }) => (
                                        <>
                                         <span
                                            className={`block truncate ${
                                                selected ? 'font-medium' : 'font-normal'
                                            }`}
                                            >
                                            {flavor}
                                            </span>
                                            {selected ? (
                                            <span
                                                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                                active ? 'text-white' : 'text-teal-600'
                                                }`}
                                            >
                                        </span>
                                            ) : null}
                                        </>
                                    )}
                                </Combobox.Option>
                            ))
                        )}
                    </Combobox.Options>
                </Transition>
            </div>
        </Combobox>
    </div>
  )
}

export default SearchFlavor;