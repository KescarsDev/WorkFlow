'use client'

import React from 'react'

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger
} from '@/components/ui/collapsible'

import { ChevronsUpDown } from 'lucide-react'
import { IconProps } from '@/types/IconsProps'
import CollapsibleLink from './CollapsibleLink'
import { SidebarItem } from '@/types/AppLinks'

interface SidebarDropdownLinksProps {
    label: string
    items: SidebarItem[]
    icon: IconProps
}
export default function SidebarDropdownLinks ({
    label,
    items,
    icon
}: SidebarDropdownLinksProps) {

    return(
        <Collapsible>
            <CollapsibleTrigger className='flex justify-between items-center w-full hover:bg-primary-hoverLink p-3 rounded-md animate'>
                <div className='flex space-x-2'>
                    <icon.icon className='w-5 h-5' />
                    <span>{label}</span>
                </div>
                <ChevronsUpDown className='w-4 h-4 font-semibold' />
            </CollapsibleTrigger>
            <CollapsibleContent>
                {
                    items.map((item, i) => (
                        <CollapsibleLink
                            key={i}
                            href={item.href}
                            label={item.label}
                        />
                    ))
                }
            </CollapsibleContent>
        </Collapsible>
    )
}