"use client"

import React, {useEffect, useState, Fragment} from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { uuid } from 'uuidv4'

import {
    ChevronsUpDown,
    Search,
    Check,
    MousePointerSquareDashed 
} from "lucide-react";
import {ProvidersProps} from "@/types/AppLinks";
import clsx from 'clsx';

const providers:ProvidersProps[] = [
    {
        label: "Prestataire 1"
    },
    {
        label: "Prestataire 2"
    },
    {
        label: "Prestataire 3"
    },
    {
        label: "Prestataire 4"
    }
]



export default function ComboBox ({
    
}) {

    const [selectedProvider, setSelectedProvider] = useState(providers[0])

    return(
        <>
            {/* <div className='bg-red-300 w-72 font-medium h-80'>
                <div className='bg-white w-full p-2 flex items-center justify-between rounded'>
                    select Contry
                    <ChevronsUpDown size={15} />
                </div>
                <ul className='bg-white mt-2 overflow-y-auto max-h-60'>
                    
                    <div>
                        <Search
                            size={18}
                        />
                        <input
                            type='text'
                            placeholder='enter quelque chose...'
                            className='placeholder:text-gray-700 p-2 outline-none'
                            />
                    </div>
                    {prestataires.map((prestataire) => (
                        <li
                            key={prestataire.label}
                            className='p-2 text-sm hover:bg-sky-600 hover:text-white'
                            >
                            {prestataire.label}
                        </li>
                    ))}
                    
                    
                </ul>
            </div> */}

            <div className="w-72">
                <Listbox 
                    value={selectedProvider} 
                    onChange={setSelectedProvider}
                    
                    
                >
                
                    {({ open }) => (
                    <>

                        <div className="mt-1 relative">
                        <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm animate">
                            <span className="block font-semibold text-gray-600 truncate">{selectedProvider.label}</span>
                            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                <MousePointerSquareDashed  className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </span>
                        </Listbox.Button>

                        <Transition
                            show={open}
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                
                            {providers.map((provider) => (
                                <Listbox.Option
                                key={provider.label}
                                className={({ active }) =>
                                    `cursor-default select-none relative py-2 pl-10 pr-4 ${
                                    active ? 'text-white bg-primary/70' : 'text-gray-900'
                                    }`
                                }
                                value={provider}
                                >
                                    
                                {({ selected, active }) => (
                                    <>
                                    <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                                        {provider.label}
                                    </span>
                                    {selected ? (
                                        <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                            active ? 'text-white' : 'text-primary/90'
                                        }`}>
                                        <Check className="h-5 w-5" aria-hidden="true" />
                                        </span>
                                    ) : null}
                                    </>
                                )}
                                </Listbox.Option>
                            ))}
                            </Listbox.Options>
                        </Transition>
                        </div>
                    </>
                    )}
                </Listbox>
            </div>
  
        </>
    )
}