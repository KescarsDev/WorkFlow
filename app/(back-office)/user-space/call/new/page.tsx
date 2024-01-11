import React from 'react'


import { FormTypes } from '@/types/Forms'
import CallContainer from '@/components/ui/modules/CallForm/Call.container'
import FormHeader from '@/components/ui/header/FormHeader'




 
interface Props {
    form: FormTypes
} 
// @ts-ignore
export default function NewCall ({ form }:Props) {
 

    return (
        <>
            <FormHeader
                title={'Nouvel Appel'}
                href={'#'}
            />
            <div className='flex items-center mt-8 justify-center max-h-screen-lg overflow-hidden'>
                {/* Form */}
                <CallContainer />
            </div>
            {/* Footer */}
        </>
    )
}