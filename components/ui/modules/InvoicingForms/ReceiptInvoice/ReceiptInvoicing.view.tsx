import { FormTypes } from '@/types/Forms'
import React from 'react' 
import ReceiptInvoicingForm from './ReceiptInvoicing.form'


interface Props {
    form: FormTypes
}
export default function ReceiptInvoicingView ({form}: Props) {
    return (
        <>
            <ReceiptInvoicingForm form={form} />
        </>
    )
}