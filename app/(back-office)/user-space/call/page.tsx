import React from 'react'

import SubHeader from '@/components/ui/header/SubHeader'
import Image from 'next/image'

export default function Call () {
    return (
        <>
            <SubHeader
                newLink={'/user-space/call/new'}
                title={'Appel'}
            />
            <div className='h-[80vh] flex flex-col items-center justify-center gap-2'>
                <Image
                    src={'/image/aucun2.jpg'}
                    alt='image'
                    height={260}
                    width={260} 
                    className='rounded-full'
                />
                <p className='text-4xl text-gray-600 font-bold'>
                    Aucun appel enregistrer
                </p>
           </div>
        </>
    )
}