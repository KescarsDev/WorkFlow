import React from 'react'
import {
    History,
    Plus,
    Users,
    ChevronDown,
    Settings
} from "lucide-react";

import { Button } from '@/components/ui/button'
import SearchInput from "@/components/ui/header/SearchInput"
import {
    Tooltip,
    TooltipTrigger,
    TooltipContent
} from '@/components/ui/tooltip'
import {
    Avatar,
    AvatarFallback,
    AvatarImage
} from '@/components/ui/avatar'

export default  function Header () {
    return (
        <>
            <div className={'bg-gray-100 h-12 flex items-center justify-between px-8 border-b border-slate-200 shadow-sm'}>
                {/* left part */}
                <div className={'flex gap-3'}>
                    {/* recent activity */}
                    <button>
                        <History />
                    </button>
                    {/* SearchInput */}
                    <SearchInput />
                </div>
                
                {/* right part */}
                <div className={'flex items-center gap-3'}>
                    {/* plus icon */}
                    <div className={'pr-2 border-gray-300 border-r'}>
                        <Button
                            className={'rounded-full'}
                            size={'icon'}
                            >
                            <Plus className={'text-slate-50 w-4 h-4'}/>
                        </Button>
                    </div>
                    {/* Users, settings*/}
                    <div className='flex gap-x-2 pr-2 border-r border-gray-300'>
                        <Tooltip>
                            <TooltipTrigger >
                                <Button
                                    className={'rounded-full hover:bg-slate-200'}
                                    size={'icon'}
                                    variant={'ghost'}
                                    >
                                    <Users className={'w-4 h-4 text-slate-900'}/>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                Users Account
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger>
                                <Button
                                    className={'rounded-full hover:bg-slate-200'}
                                    size={'icon'}
                                    variant={'ghost'}
                                    >
                                    <Settings className={'w-4 h-4 text-slate-900'}/>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                Settings
                            </TooltipContent>
                        </Tooltip>
                    </div>
                    {/* User profile */}
                    <div className={'flex gap-1'}>
                        <Button
                            variant={'ghost'}
                            className={'flex items-center'}
                            >
                            <span>
                                Username
                            </span>
                            <ChevronDown className={'w-4 h-4'}/>
                        </Button>
                        <Avatar>
                            <AvatarImage
                                src={'/image/user.jpg'}
                                className={'object-cover'}
                            />
                            <AvatarFallback className={'bg-gray-500 text-white'}>
                                UN
                            </AvatarFallback>
                        </Avatar>
                    </div>
                </div>
            </div>
        </>
    )
}