import React from 'react'

import SubHeader from '@/components/ui/header/SubHeader'

export default function Call () {
    return (
        <>
            <SubHeader
                newLink={'/user-space/call/new'}
                title={'Appel'}
            />
        </>
    )
}