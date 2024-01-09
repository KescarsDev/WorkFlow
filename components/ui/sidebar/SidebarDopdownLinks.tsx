'use Client'

import React from 'react'

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger
} from '@/components/ui/collapsible'

import { ChevronRight } from 'lucide-react'
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

    

    return (
        <>
            <Collapsible>
                <CollapsibleTrigger className='flex justify-between items-center w-full'>
                    <div className='flex space-x-2 p-1'>
                        <icon.icon className='w-5 h-5' />
                        <span>{label}</span>
                    </div>
                    <ChevronRight className='w-4 h-4' />
                </CollapsibleTrigger>
                <CollapsibleContent>
                    {
                        items.map(( item, i) => (
                            <CollapsibleLink 
                                key={i}
                                href={item.href}
                                label={item.label}
                            />
                        ))
                    }
                </CollapsibleContent>
            </Collapsible>
        </>
    )
}