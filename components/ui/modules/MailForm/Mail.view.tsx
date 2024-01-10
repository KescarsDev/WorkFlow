import { FormTypes } from '@/types/Forms'
import React from 'react'
import MailForm from './Mail.form'

interface Props {
    form: FormTypes
}
export default function MailView ({form}: Props) {
    return (
        <>
            <MailForm form={form} />
        </>
    )
}