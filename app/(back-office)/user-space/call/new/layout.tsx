import React from 'react'
import FormHeader from '@/components/ui/header/FormHeader'


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
    </div>
  ) 
}
