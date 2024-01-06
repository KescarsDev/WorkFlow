import React from 'react'


import { FormTypes } from '@/types/Forms'
import CallContainer from '@/components/ui/modules/CallForm/Call.container'





interface Props {
    form: FormTypes
} 
// @ts-ignore
export default function NewCall ({ form }:Props) {
 

    return (
        <>
            <div className='mt-4 max-h-screen'>
                {/* Form */}
                <CallContainer />
            </div>
            {/* Footer */}
        </>
    )
}