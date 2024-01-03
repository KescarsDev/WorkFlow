import React from 'react'

import { FiSearch } from "react-icons/fi"
import { Input } from "@/components/ui/input";

export default function SearchInput () {
    return (
        <>
            <div className={'relative w-full flex'}>
                <div className={'absolute inset-y-0 start-0 flex items-center ps-3 left-10 pointer-events-none'}>
                    <FiSearch className={'w-4 h-4 text-gray-500 dark:text-gray-400'} />
                </div>
                <Input
                    type={'text'}
                    placeholder={'Recherche ( / )'}
                    className={'ps-10 px-2 py-1.5 text-gray-700 text-sm font-semibold outline-none bg-gray-50 block'}
                />
            </div>
        </>
    )
}