'use client'

import userToggle from '@/hooks/user-toggle'
import { VisitFormFieldsType } from '@/types/Forms'
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import VisitView from './Visit.view'

export default function VisitContainer () {

    const {value: isLoading, setValue: setIsLoading} = userToggle()

    const {
        handleSubmit,
        formState: {errors},
        register,
        setError,
        reset
    } = useForm<VisitFormFieldsType>()

    const onSubmit: SubmitHandler<VisitFormFieldsType> = async (formData) => {
        setIsLoading(true)
        console.log('formData', formData)
    }

    return (
        <>
            <VisitView 
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