import React from 'react'

import { FormTypes} from "@/types/Forms";
import CallForm from './Call.form';


interface Props {
    form: FormTypes
}
export default function CallView ({ form }: Props) {
    return (
        <>
            <CallForm form={form}/>
        </>
    )
}