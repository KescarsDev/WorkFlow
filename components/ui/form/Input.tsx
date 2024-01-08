import React from 'react'
import clsx from 'clsx'

interface InputProps {
    isLoading?: boolean
    placeholder: string
    type?: 'email' | 'text' | 'password' | 'date' | 'number'
    register: any
    errors: any
    errorMsg?: string
    isAutoCompleted?: boolean
    required?: boolean
    id: string
    className?: string
}

export default function Input ({
    isLoading,
    placeholder,
    type = 'text',
    register,
    errors,
    errorMsg = 'Erreur dans le remplissage du formulaire',
    id,
    required = true,
    isAutoCompleted = false,
    className
}: InputProps) {
    return (
        <>
            <div className='space-y-2'>
                <input
                    type={type}
                    placeholder={placeholder}
                    disabled={isLoading}
                    className={clsx(
                        isLoading && 'cursor-not-allowed',
                        errors[id] ?
                            'placeholder-alert-danger border boder-alert-danger focus:border-alert-danger focus:ring-1 focus:ring-alert-danger/70 text-alert-danger' :
                            'placeholder-gray-500 focus-border focus:border-primary/80 focus:ring-1 focus:ring-primary/70',
                        'w-full py-1.5 px-4 border border-gray-00 shadow rounded-lg font-semibold focus:outline-none placeholder:font-semibold animate',
                        className
                    )}
                    {...register(id, {
                        required: {
                            value: required,
                            message: errorMsg
                        },
                    })}
                    autoComplete={isAutoCompleted ? 'on' : 'off'}
                    />
                {errors[id] && (
                    <div className='text-sm text-alert-danger'>
                        {errors[id].message}
                    </div>
                )}
            </div>
        </>
    )
}