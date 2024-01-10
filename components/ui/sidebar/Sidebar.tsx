import React from 'react'
import Link from 'next/link'

import {
    Workflow,
    
} from 'lucide-react'
import { SidebarItem } from '@/types/AppLinks'

export default function Sidebar () {

    const invoicingLinks:SidebarItem[] = [
        {
            href: '/user-space/invoicing/receipt-invoicing',
            label: 'Reception Facture'
        },
        {
            href: '/user-space/invoicing/check-delivery',
            label: 'Remise Chèque'
        }
    ]

    return (
        <div className='w-60 min-h-screen bg-my-primary-200 text-slate-50 flex flex-col justify-between fixed'>
            {/* Top Part */}
            <div className='flex flex-col'>
                {/* logo */}
                <Link
                    href={'#'}
                    className='flex items-center gap-2 py-3 px-2 bg-my-primary-500'
                >
                    <Workflow />
                    <span className='font-semibold text-xl'>
                        WorkFlow
                    </span>
                </Link>
                {/* Links */}
                <nav className='flex flex-col gap-8 px-3 py-6'>
                    <Link
                        href={'/user-space/general/dashbord'}
                        className='flex space-x-2 hover:bg-primary-hoverLink'
                    >
                        <
                        <span>Général</span>
                    </Link>
                </nav>
            </div>
        </div>
    )
}