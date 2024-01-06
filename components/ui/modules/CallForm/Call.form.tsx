import { FormTypes } from '@/types/Forms'
import React from 'react'
import Input from '../../form/Input'
import ComboBox from '../../form/ComboBox'
import Textarea from '../../form/Textarea'


interface Props {
    form: FormTypes
}

export default function CallForm ({form}: Props) {

    const { onSubmit, errors, isLoading, register, handleSubmit } = form

  return (
    <form 
        onSubmit={handleSubmit(onSubmit)}
        className='grid grid-cols-12 w-full max-w-5xl bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto space-x-20 '
    >
        <div className='col-span-6 space-y-4'>
            <div className='flex items-center justify-between'>
                <label 
                    htmlFor="provider"
                    className='text-gray-700 font-semibold '
                >
                    Prestataire
                </label>
                <ComboBox />
            </div>
            <div className='flex items-center gap-2 justify-between'>
                <label 
                    htmlFor="intolocutor"
                    className='text-gray-700 font-semibold '
                >
                    Interlocuteur
                </label>
                <Input 
                    isLoading={isLoading}
                    placeholder="Nom de l'interlocuteur"
                    type='text'
                    register={register}
                    errors={errors}
                    errorMsg='Erreur dans le remplissage du formulaire'
                    id='provider'
                    isAutoCompleted={true}
                    className=''
                />
            </div>

        </div>

        <div className='col-span-6 space-y-4'>
            <div className='flex items-center gap-2 justify-between'>
                <label 
                    htmlFor="date"
                    className='text-gray-700 font-semibold '
                >
                    Date
                </label>
                <Input 
                    isLoading={isLoading}
                    placeholder='Date'
                    type='date'
                    register={register}
                    errors={errors}
                    errorMsg='Erreur dans le remplissage du formulaire'
                    id='date'
                    isAutoCompleted={true}
                    className=''
                />
            </div>
            <div className='flex items-center gap-2 justify-between'>
                <label 
                    htmlFor="date"
                    className='text-gray-700 font-semibold '
                >
                    Contact
                </label>
                <Input 
                    isLoading={isLoading}
                    placeholder='Contact'
                    type='text'
                    register={register}
                    errors={errors}
                    errorMsg='Erreur dans le remplissage du formulaire'
                    id='contact'
                    isAutoCompleted={true}
                    className=''
                />
            </div>
            <div className='flex items-center gap-2 justify-between'>
                <label 
                    htmlFor="date"
                    className='text-gray-700 font-semibold '
                >
                    Motif
                </label>
                <Input 
                    isLoading={isLoading}
                    placeholder='Motif'
                    type='text'
                    register={register}
                    errors={errors}
                    errorMsg='Erreur dans le remplissage du formulaire'
                    id='motive'
                    isAutoCompleted={true}
                    className=''
                />
            </div>

        </div>
        <div className='w-full mt-6 col-span-12 grid justify-items-start'>
            <div className=''>
                <label 
                    htmlFor="intolocutor"
                    className='text-gray-700 font-semibold '
                >
                    Description
                </label>
                <Textarea 
                    isLoading={isLoading}
                    placeholder="Nom de l'interlocuteur"
                    register={register}
                    id='provider'
                    className='mt-2'
                />
            </div>
        </div>
    </form>
  )
}
