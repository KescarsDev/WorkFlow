import FormHeader from '@/components/ui/header/FormHeader'
import React from 'react'


interface Props{
    children: React.ReactNode
}
export default function Layout ({children}: Props) {
    return(
        <>
            <FormHeader
                title='Visite'
                href='#'
            />
            {children}
        </>
    )
}