import FormHeader from '@/components/ui/header/FormHeader'
import MailContainer from '@/components/ui/modules/MailForm/Mail.container'
import React from 'react'

export default function NewMail () {
    return (
        <>
            <FormHeader 
                title='Courrier'
                href='/user-space/mail'
            />
            <div className='flex items-center mt-8 justify-center max-h-screen-lg overflow-hidden'>
                <MailContainer />
            </div>
        </>
    )
}