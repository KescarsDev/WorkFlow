import React from 'react'

import Header  from '@/components/ui/header/Header'
import Sidebar from '@/components/ui/sidebar/Sidebar'


interface Props {
    children: React.ReactNode
}
export default function Layout ({children}: Props) {
    return (
        <>
            <div className='flex'>
                <Sidebar />
                <main className='ml-60 w-full min-h-screen bg-slate-100'>
                    <Header />
                    {children}
                </main>
            </div>
        </>
    )
}