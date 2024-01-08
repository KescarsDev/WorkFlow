'use client'

import userToggle from '@/hooks/user-toggle'
import { MailFormFieldsType } from '@/types/Forms'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import MailView from './Mail.view'

export default function MailContainer () {

    const { value: isLoading, setValue: setIsLoading } = userToggle()

    const {
        handleSubmit,
        formState: {errors},
        register,
        setError,
        reset
    } = useForm<MailFormFieldsType>()

    const onSubmit: SubmitHandler<MailFormFieldsType> = async (formData) => {
        setIsLoading(true)
        console.log('formData', formData)
    }

    return (
        <>
            <MailView
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