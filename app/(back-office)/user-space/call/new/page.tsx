"use client"

import React from 'react'
import * as z from "zod"

import FormHeader from "@/components/ui/header/FormHeader"
import { Label } from '@/components/ui/label'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger
} from "@/components/ui/popover"
import {
    CheckIcon,
    ChevronsUpDown
} from "lucide-react";
import {FormSchemaProps, PrestataireProps} from "@/types/AppLinks";

export default function NewCall () {


    const prestataires:PrestataireProps[] = [
        {
            value: "Prestataire 1",
            label: "Prestataire 1"
        },
        {
            value: "Prestataire 2",
            label: "Prestataire 2"
        },
        {
            value: "Prestataire 3",
            label: "Prestataire 3"
        },
        {
            value: "Prestataire 4",
            label: "Prestataire 4"
        }
    ]
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")

    const formSchema = z.object({
        username: z.string().min(2).max(50),
        motive: z.string().min(11).max(100)
    })
    type FormSchemaProps = z.infer<typeof formSchema>


    return (
        <>
            {/* Header */}
            <FormHeader
                title={'Nouvel Appel'}
                href={'#'}
            />
            {/* Form */}
            <form
                className='w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3'
                >
                <div className='sm:col-span-2'>
                    <div className='flex gap-4 items-center'>
                        <Label
                            htmlFor={'name'}
                            className={'font-semibold text-gray-600'}
                            >
                            Prestataire
                        </Label>

                        <Popover
                            open={open}
                            onOpenChange={setOpen}
                            >
                            <PopoverTrigger asChild>
                                <Button
                                    variant={'outline'}
                                    role={"combobox"}
                                    aria-expanded={open}
                                    className={'w-[230px] justify-between'}
                                    >
                                    {value
                                    ? prestataires.find((prestataire) => prestataire.value === value)?.label
                                    : "Selection le prestataire..."}
                                    <ChevronsUpDown className={'ml-2 h-4 w-4 shrink-0 opacity-50'} />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className={'w-[200px] p-0'}>
                                <Command>
                                    <CommandInput
                                        placeholder={'Rechercher un prestataire...'}
                                        className='h-9'
                                    />
                                        <CommandEmpty>
                                            Aucun prestataire trouvé.
                                        </CommandEmpty>
                                        <CommandGroup>
                                            {prestataires.map((prestataire) => (
                                                <CommandItem
                                                    key={prestataire.value}
                                                    value={prestataire.value}
                                                    onSelect={(currentValue) => {
                                                    setValue(currentValue === value ? "" : currentValue)
                                                        setOpen(false)
                                                }}
                                                    >
                                                    {prestataire.label}
                                                    <CheckIcon
                                                        className={cn(
                                                            "ml-auto h-4 w-4",
                                                            value === prestataire.value ? "opacity-100" : "opacity-0"
                                                        )}
                                                    />
                                                </CommandItem>
                                            ))}
                                        </CommandGroup>
                                </Command>
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>
            </form>
        </>
    )
}