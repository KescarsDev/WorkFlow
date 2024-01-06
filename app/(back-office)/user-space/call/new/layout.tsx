
import Footer from '@/components/ui/footer/Footer'
import FormHeader from '@/components/ui/header/FormHeader'
import Header from '@/components/ui/header/Header'
import React from 'react'

interface Props {
    children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div className=''>
        <FormHeader
            title={'Nouvel Appel'}
            href={'#'}
        />
        {children}
        <Footer />
    </div>
  ) 
}
