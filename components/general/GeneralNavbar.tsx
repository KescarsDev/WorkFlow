'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname} from 'next/navigation'

import { BsBuildings } from "react-icons/bs"

import { GeneralNavLinksProps } from '@/types/AppLinks'

export default function GeneralNavbar () {
    const pathname = usePathname()
    const GeneralNavLinks: GeneralNavLinksProps[] = [
        {
            href: '/user-space/general/dashboard',
            label: 'Tableau de bord'
        },
        {
            href: '/user-space/general/call',
            label: 'Appel'
        },
        {
            href: '/user-space/general/visit',
            label: 'Visite'
        },
        {
            href: '/user-space/general/invoicing',
            label: 'Facturation'
        },
        {
            href: '/user-space/general/mail',
            label: 'Courrier'
        }
    ]
    
    return (
        <>
            <div className='h-32 p-5 bg-slate-50 generalHeaderBg border-b border-slate-300 shadow-sm'>
                {/* User info */}
                <div className='flex space-x-3'>
                    <div className='flex items-center justify-center border border-gray-200 rounded-lg w-12 h-12 bg-white'>
                        <BsBuildings />
                    </div>
                    <div className='flex flex-col'>
                        <p className='text-slate-700 font-semibold'>
                            Hello Username Developper 
                        </p>
                        <span className='text-sm'>
                            Username
                        </span>
                    </div>
                </div>
                {/* Links */}
                <nav className='sticky mt-6 space-x-7'>
                    {GeneralNavLinks.map((link, i) => (
                        <Link
                            key={i}
                            href={link.href}
                            className={`
                                ${pathname === link.href
                                    ? 'py-3 border-b-2 border-primary'
                                    : 'py-3'
                                }
                                animate hover:border-b-2 hover:border-primary/50                             
                            `}
                            >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </>
    )
}