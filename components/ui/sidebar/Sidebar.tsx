'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import {
    ChevronLeft,
    Workflow,
} from 'lucide-react'
import { GrOverview } from "react-icons/gr"
import { MdAddIcCall } from "react-icons/md"
import { IoPeopleCircleOutline } from "react-icons/io5"
import { FaFileInvoice } from "react-icons/fa6"
import { FaMailchimp } from "react-icons/fa6"
import { SidebarItem, SidebarLinksProps } from '@/types/AppLinks'
import SidebarDropdownLinks from './SidebarDopdownLinks'

export default function Sidebar () {

    const pathname = usePathname()

    const invoicingLinks:SidebarItem[] = [
        {
            href: '/user-space/invoicing/receipt-invoice',
            label: 'Reception Facture'
        },
        {
            href: '/user-space/invoicing/check-delivery',
            label: 'Remise Chèque'
        }
    ]
    const sidebarLinks:SidebarLinksProps[] = [
        {
            href: '/user-space/general/dashboard',
            label: 'Général',
            icon: GrOverview
        },
        {
            href: '/user-space/call',
            label: 'Appel',
            icon: MdAddIcCall
        },
        {
            href: '/user-space/visit',
            label: 'Visit',
            icon: IoPeopleCircleOutline
        },
        {
            href: '/user-space/mail',
            label: 'Courrier',
            icon: FaFileInvoice
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
                <nav className='flex flex-col gap-5 px-3 py-6'>
                    {
                        sidebarLinks.map((link, i) => (
                            <Link
                                key={i}
                                href={link.href}
                                className={`${pathname === link.href && 'bg-primary-hoverLink'} flex space-x-2 hover:bg-my-primary-400 p-3 rounded-md animate`}
                            >
                                {link.icon}
                                <span>{link.label}</span>
                            </Link>
                        ))
                    }

                    <Link
                        href={'/user-space/invoicing/receipt-invoice'}
                    >
                    <SidebarDropdownLinks 
                        label='Facturation'
                        items={invoicingLinks}
                        icon={{icon: FaMailchimp}}
                    />
                    </Link>
                </nav>
            </div>
            {/* Sidiebar Footer */}
            <button className='flex items-center justify-center gap-2 py-3 bg-my-primary-500'>
                <ChevronLeft />
            </button>
        </div>
    )
}