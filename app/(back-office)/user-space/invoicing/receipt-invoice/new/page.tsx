import React from 'react'

import FormHeader from '@/components/ui/header/FormHeader'
import ReceiptInvoicingContainer from '@/components/ui/modules/InvoicingForms/ReceiptInvoice/ReceiptInvoicing.container'


export default function NewInvoice () {
    return (
        <>
            <div className=''>
                <FormHeader
                    title='Facturation'
                    href='/user-space/invoicing'
                />
                <div className=' h-[80vh] flex items-center justify-center'>
                    <ReceiptInvoicingContainer />
                </div>
            </div>
        </>
        )
}