"use client"

import { CallFormFieldsType } from "@/types/Forms";

import CallView  from "@/components/ui/modules/CallForm/Call.view"
import { useForm, SubmitHandler } from "react-hook-form";
import  userToggle  from "@/hooks/user-toggle";


export default function CallContainer () {

    const { value: isLoading, setValue: setIsLoading } = userToggle()
    
    const {
        handleSubmit,
        formState: {errors},
        register,
        setError,
        reset
    } = useForm<CallFormFieldsType>()

    const onSubmit: SubmitHandler<CallFormFieldsType> = async (formData) => {
        setIsLoading(true)
        console.log('formData', formData)
    }
    
    return(
        <> 
            <CallView
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