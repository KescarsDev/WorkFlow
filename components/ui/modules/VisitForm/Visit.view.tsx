import { FormTypes } from '@/types/Forms'
import React from 'react'
import VisitForm from './Visit.form'

interface Props {
    form: FormTypes
}
export default function VisitView ({form}: Props) {
    return (
        <>
            <VisitForm form={form} />
        </>
    )
}