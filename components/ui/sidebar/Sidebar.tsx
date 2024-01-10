'use client'

import React from 'react'
import Link from 'next/link'

import {
    ChevronLeft,
    Workflow,
} from 'lucide-react'
import { GrOverview } from "react-icons/gr"
import { MdAddIcCall } from "react-icons/md"
import { IoPeopleCircleOutline } from "react-icons/io5"
import { FaFileInvoice } from "react-icons/fa6"
import { FaMailchimp } from "react-icons/fa6"
import { SidebarItem } from '@/types/AppLinks'
import SidebarDropdownLinks from './SidebarDopdownLinks'

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
                        href={'/user-space/general/dashboard'}
                        className='flex space-x-2 hover:bg-primary-hoverLink p-3 rounded-md animate'
                    >
                        <GrOverview className='w-6 h-6' />
                        <span>Général</span>
                    </Link>
                    <Link
                        href={'/user-space/call'}
                        className='flex space-x-2 hover:bg-primary-hoverLink p-3 rounded-md animate'
                    >
                        <MdAddIcCall className='w-6 h-6' />
                        <span>Appel</span>
                    </Link>
                    <Link
                        href={'/user-space/visit'}
                        className='flex space-x-2 hover:bg-primary-hoverLink p-3 rounded-md animate'
                    >
                        <IoPeopleCircleOutline className='w-6 h-6' />
                        <span>Visite</span>
                    </Link>
                    <Link
                        href={'/user-space/visit'}
                        className='flex space-x-2 hover:bg-primary-hoverLink p-3 rounded-md animate'
                    >
                        <FaFileInvoice className='w-6 h-6' />
                        <span>Courrier</span>
                    </Link>
                    <SidebarDropdownLinks 
                        label='Facturation'
                        items={invoicingLinks}
                        icon={{icon: FaMailchimp}}
                    />
                </nav>
            </div>
            {/* Sidiebar Footer */}
            <button className='flex items-center justify-center gap-2 py-3 bg-my-primary-500'>
                <ChevronLeft />
            </button>
        </div>
    )
}