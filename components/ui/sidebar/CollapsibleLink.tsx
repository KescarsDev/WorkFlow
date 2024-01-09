import React from 'react'
import Link from 'next/link'
import { PlusCircle } from 'lucide-react'

interface CollapsibleLinkProps {
    href: string
    label: String
}
export default function CollapsibleLink ({href, label}: CollapsibleLinkProps) {
    return (
        <>
            <Link
                href={href}
                className='flex items-center justify-between pl-8 pr-4 hover:bg-my-primary-400 transition-all animate rounded-md'
            >
                <span className='text-sm'>
                    {label}
                </span>
                <PlusCircle className='h-4 w-4'/>
            </Link>
        </>
    )
}