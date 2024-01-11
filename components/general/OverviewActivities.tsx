import React from 'react'

import {OverviewActivitiesCardProps} from "@/types/AppLinks";

import OverviewActivitiesCard from "@/components/general/OverviewActivitiesCard";


export default function OverviewActivities () {
    
    const overviewActivities: OverviewActivitiesCardProps[] = [
        {
            label: 'Appel',
            href: '#',
            number: 0
        },
        {
            label: 'Visite',
            href: '#',
            number: 0
        },
        {
            label: 'Facturation',
            href: '#',
            number: 0
        },
        {
            label: 'Courrier',
            href: '#',
            number: 0
        }
    ]
    
    return (
        <>
            <div className={'bg-green-50 border-b border-slate-300 p-12 grid grid-cols-12'}>
                {/* General Activities */}
                <div className='col-span-8 pr-8 border-r border-slate-300'>
                    <h2 className='mb-6 text-xl'>
                        Activité Général
                    </h2>
                    <div className='grid grid-cols-4 gap-10 p-2'>
                        {/* Card */}
                        {
                            overviewActivities.map(( item, i ) => (
                                <OverviewActivitiesCard item={item} key={i}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}