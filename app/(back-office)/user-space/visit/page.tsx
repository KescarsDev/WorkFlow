import React from 'react'

import SubHeader from '@/components/ui/header/SubHeader'

export default function Visit () {
    return (
        <>
            <SubHeader
                newLink={'/user-space/visit/new'}
                title={'Visites'}
            />
        </>
    )
}