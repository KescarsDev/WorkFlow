import { FormTypes } from '@/types/Forms'
import React from 'react' 
import InvoicingForm from './Invoicing.form'


interface Props {
    form: FormTypes
}
export default function InvoicingView ({form}: Props) {
    return (
        <>
            <InvoicingForm form={form} />
        </>
    )
}