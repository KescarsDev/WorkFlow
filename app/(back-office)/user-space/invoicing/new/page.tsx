import FormHeader from '@/components/ui/header/FormHeader'
import InvoicingContainer from '@/components/ui/modules/InvoicingForm/Invoicing.container'
import React from 'react'

export default function NewInvoice () {
    return (
        <>
            <div className=''>
                <FormHeader
                    title='Facturation'
                    href='/user-space/invoicing'
                />
                <div className=' h-[80vh] flex items-center justify-center'>
                    <InvoicingContainer />
                </div>
            </div>
        </>
        )
}