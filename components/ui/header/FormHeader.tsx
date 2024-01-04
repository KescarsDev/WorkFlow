import React from 'react'
import Link from 'next/link'

import { X } from 'lucide-react'
interface FormHeaderProps {
    title: string
    href: string
}
export default function FormHeader ({
    title,
    href
}: FormHeaderProps) {
    return (
        <>
            <div className='flex items-center justify-between bg-white py-3 px-16'>
                <h2 className='text-xl font-semibold text-gray-400'>
                    {title}
                </h2>
                
                <Link href={href}>
                    <X className={'w-5 h-5'}/>
                </Link>
            </div>
        </>
    )
}