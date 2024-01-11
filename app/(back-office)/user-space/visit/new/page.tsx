import FormHeader from '@/components/ui/header/FormHeader'
import VisitContainer from '@/components/ui/modules/VisitForm/Visit.container'
import React from 'react'

export default function NewVisit () {
    return (
        <>
            <FormHeader
                title='Visite'
                href='#'
            />
            <div className='flex items-center mt-8 justify-center max-h-screen-lg overflow-hidden'>
                <VisitContainer />
            </div>
        </>
    )
}