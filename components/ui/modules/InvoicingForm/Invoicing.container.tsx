'use client'

import userToggle from '@/hooks/user-toggle'
import { InvoicingFormFieldsType } from '@/types/Forms'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import InvoicingView from './Invoicing.view'

export default function InvoicingContainer () {

    const { value: isLoading, setValue: setIsLoading } = userToggle()

    const {
        handleSubmit,
        formState: {errors},
        register,
        setError,
        reset
    } = useForm<InvoicingFormFieldsType>()

    const onSubmit: SubmitHandler<InvoicingFormFieldsType> = async (formData) => {
        setIsLoading(true)
        console.log('formData', formData)
    }

    return(
        <>
            <InvoicingView
                form={{
                    errors,
                    isLoading,
                    register,
                    handleSubmit,
                    onSubmit
                }}
            />
        </>
    )
}