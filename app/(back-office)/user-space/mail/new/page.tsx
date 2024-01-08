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
            <div className='mt-1.5'>
                <MailContainer />
            </div>
        </>
    )
}