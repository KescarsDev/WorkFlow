import React from 'react'
import SubHeader from "@/components/ui/header/SubHeader";

export default function Mail () {
    return (
        <>
            <SubHeader
                newLink={'/user-space/mail/new'}
                title={'Courrier'}
            />
        </>
    )
}