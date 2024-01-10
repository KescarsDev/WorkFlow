import { FormTypes } from '@/types/Forms'
import React from 'react'
import ComboBox from '../../form/ComboBox'
import Input from '../../form/Input'
import Textarea from '../../form/Textarea'
import Button from '../../button/Button'
import { FaPlus } from 'react-icons/fa6'


interface Props {
    form: FormTypes
}

export default function ({form}: Props) {

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
                        Prestataires
                    </label>
                    <ComboBox/>
                </div>
                <div className='flex items-center gap-2 justify-between'>
                    <label 
                        htmlFor="sender"
                        className='text-gray-700 font-semibold '
                    >
                        Expéditeur
                    </label>
                    <Input 
                        isLoading={isLoading}
                        placeholder="Nom de l'expéditeur"
                        type='text'
                        register={register}
                        errors={errors}
                        errorMsg='Erreur dans le remplissage du formulaire'
                        id='sender'
                        isAutoCompleted={true}
                        className=''
                    />
                </div>
                <div className='flex items-center gap-2 justify-between'>
                    <label 
                        htmlFor="recipient"
                        className='text-gray-700 font-semibold '
                    >
                        Destinataire
                    </label>
                    <Input 
                        isLoading={isLoading}
                        placeholder="Nom du destinataire"
                        type='text'
                        register={register}
                        errors={errors}
                        errorMsg='Erreur dans le remplissage du formulaire'
                        id='recipient'
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
                        htmlFor="mailNumber"
                        className='text-gray-700 font-semibold '
                    >
                        N° Courrier
                    </label>
                    <Input 
                        isLoading={isLoading}
                        placeholder='Numéro du courrier'
                        type='text'
                        register={register}
                        errors={errors}
                        errorMsg='Erreur dans le remplissage du formulaire'
                        id='mailNumber'
                        isAutoCompleted={true}
                        className=''
                    />
                </div>
                <div className='flex items-center gap-2 justify-between'>
                    <label 
                        htmlFor="wording"
                        className='text-gray-700 font-semibold '
                    >
                        Libellé
                    </label>
                    <Input 
                        isLoading={isLoading}
                        placeholder="Saisir l'objet du courrier"
                        type='text'
                        register={register}
                        errors={errors}
                        errorMsg='Erreur dans le remplissage du formulaire'
                        id='wording'
                        isAutoCompleted={true}
                        className=''
                    />
                </div>

            </div>
            <div className='w-full mt-6 col-span-12 grid justify-items-start'>
                <div className=''>
                    <label 
                        htmlFor="observation"
                        className='text-gray-700 font-semibold '
                    >
                        Observation
                    </label>
                    <Textarea 
                        isLoading={isLoading}
                        placeholder="Noter les observations s'il y en a"
                        register={register}
                        id='observation'
                        className='mt-2'
                        cols={30}
                        rows={10}
                    />
                </div>
            </div>
            <div className='mt-6 flex items-center gap-6'>
                <Button
                    isLoading={isLoading}
                    icon={{icon: FaPlus}}
                    iconPosition='left'
                    type='submit'
                >
                    Enregister
                </Button>
                <Button
                    type='button'
                    variant='secondary'
                >
                    Annuler
                </Button>
            </div>
        </form>
    )
}