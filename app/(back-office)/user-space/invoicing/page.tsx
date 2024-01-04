import React from 'react'
import SubHeader from "@/components/ui/header/SubHeader";

export default function Invoicing () {
    return (
        <>
            <SubHeader
                newLink={'/user-space/invoicing/new'}
                title={'Facturation'}
            />
            
            <div>
                {"Ajout d'une div "}
            </div>
        </>
    )
}