import React from 'react'
import Link from "next/link";

import { Button } from '@/components/ui/button'

import {
    Plus,
    List,
    LayoutGrid,
    MoreHorizontal,
    HelpCircle
} from "lucide-react";

interface SubHeaderProps {
    newLink: string
    title: string
}
export default function SubHeader ({
    newLink,
    title
}: SubHeaderProps) {
    return (
        <>
            <div className='flex items-center justify-between py-5 px-4 bg-white'>
                <Button
                    variant={'ghost'}
                    className={'text-2xl text-slate-600 font-semibold hover:bg-white'}
                    >
                    {title}
                </Button>
                <div className='flex gap-4'>
                    {/* New button*/}
                    <Button>
                        <Link
                            href={newLink}
                            className={'flex items-center text-slate-50 gap-1'}
                            >
                            <Plus  className={'w-5 h-5'}/>
                            <span>
                                New
                            </span>
                        </Link>
                    </Button>
                    {/* Layout Buttons */}
                    <div className='flex rounded-md overflow-hidden border border-gray-400'>
                        <Button
                            variant={'ghost'}
                            className={'bg-gray-300 rounded-none border-r border-gray-400 hover:bg-gray-300/50'}
                            >
                            <List className={'w-4 h-4'} />
                        </Button>
                        <Button
                            variant={'ghost'}
                            className={'bg-gray-100 rounded-none hover:bg-gray-100/50'}
                            >
                            <LayoutGrid className={'w-4 h-4'}/>
                        </Button>
                    </div>
                    {/* More Button */}
                    <Button
                        variant={'ghost'}
                        className={'border border-gray-300'}
                        >
                        <MoreHorizontal className={'w-4 h-4'} />
                    </Button>
                    {/* Help Button */}
                    <Button
                        variant={'secondary'}
                        className={'border border-gray-200'}
                        >
                        <HelpCircle className={'w-4 h-4'}/>
                    </Button>
                </div>
            </div>
        </>
    )
}