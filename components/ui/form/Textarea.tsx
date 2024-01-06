import React from 'react'
import clsx from 'clsx'

interface TextareaProps {
    isLoading?: boolean
    placeholder: string
    register: any
    id: string
    className: string
}
export default function Textarea({
    isLoading,
    placeholder,
    register,
    id,
    className
}: TextareaProps) {
  return (
    <>
        <div>
            <textarea 
                disabled={isLoading}
                placeholder={placeholder}
                name={id} 
                id={id} 
                cols={30} 
                rows={10}
                className={clsx(
                    isLoading && 'cursor-not-allowed',
                    "w-[650px] py-1.5 px-4 border border-gray-00 shadow rounded-lg font-semibold focus:outline-none placeholder:font-semibold animate",
                    className
                )}
                {...register(id)}
            ></textarea>
        </div>
    </>
  )
}
