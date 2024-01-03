'use client'

import React from 'react'
import  Link  from 'next/link'
import { usePathname } from 'next/navigation'

import {
    Workflow,
    ChevronLeft
} from "lucide-react";
import { GrOverview } from "react-icons/gr"
import { MdAddIcCall } from "react-icons/md"
import { IoPeopleCircleOutline } from "react-icons/io5"
import { FaFileInvoice } from "react-icons/fa6"
import { FaMailchimp } from "react-icons/fa6"

import { SidebarLinksProps } from '@/types/AppLinks'
import { Button } from '@/components/ui/button'

export default function Sidebar () {
    
    const pathname = usePathname()
    const SidebarLink:SidebarLinksProps[] = [
        {
            href: '/user-space/general/dashboard',
            label: 'Général',
            icon: <GrOverview className={'w-6 h-6'} />
        },
        {
            href: '/user-space/call',
            label: 'Appel',
            icon: <MdAddIcCall className={'w-6 h-6'} />
        },
        {
            href: '/user-space/visit',
            label: 'Visite',
            icon: <IoPeopleCircleOutline className={'w-6 h-6'} />
        },
        {
            href: '/user-space/invoicing',
            label: 'Facturation',
            icon: <FaFileInvoice className={'w-6 h-6'} />
        },
        {
            href: '/user-space/mail',
            label: 'Courrier',
            icon: <FaMailchimp className={'w-6 h-6'} />
        },
    ]
    
    return (
        <>
            <div className='w-60 min-h-screen bg-primary-sidebarBg text-slate-50 flex flex-col justify-between fixed'>
                {/* Top part */}
                <div className='flex flex-col'>
                    {/* logo */}
                    <Link
                        href={'/'}
                        className={'flex items-center gap-2 py-3 px-2 bg-primary-variantDark'}
                        >
                        <Workflow />
                        <span className='font-semibold text-xl'>
                            WorkFlow
                        </span>
                    </Link>
                    {/* Links */}
                    <nav className='flex flex-col gap-8 px-3 py-6'>
                        {SidebarLink.map((link, i) => (
                            <Link
                                href={link.href}
                                key={i}
                                className={`
                                    ${
                                        pathname === link.href
                                        ? ' bg-primary-hoverLink'
                                        : ' '
                                    }
                                    flex items-center space-x-2 text-slate-50 p-2 hover:bg-primary-hoverLink/50 rounded-md animate
                                `}
                                >
                                {link.icon}
                                <span className='font-semibold'>
                                    {link.label}
                                </span>
                            </Link>
                        ))}
                    </nav>
                </div>
                
                {/* Bottom part */}
                <Button className={'flex items-center justify-center rounded-none bg-primary-variantDark hover:bg-primary-variantDark'}>
                    <ChevronLeft />
                </Button>
            </div>
        </>
    )
}