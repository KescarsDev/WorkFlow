import React from 'react'
import Link from 'next/link'

import { PlusCircle } from 'lucide-react'

interface CollapsibleLinkProps {
    label: string
    href: string
}
export default function CollapsibleLink ({
    label,
    href
}: CollapsibleLinkProps) {
    return (
        <Link
            href={href}
            className='flex items-center justify-between pl-8 pr-4 hover:bg-my-primary-400 transition-all animate py-2 rounded-md'
        >
            <span className='text-sm'>
                {label}
            </span>
            <PlusCircle />
        </Link>
    )
}