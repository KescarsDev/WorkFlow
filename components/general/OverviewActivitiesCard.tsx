import React from 'react'
import Link from 'next/link'

import {
    Card,
    CardContent,
} from '@/components/ui/card'

import { CheckCircle2 } from 'lucide-react'

export default function OverviewActivitiesCard ({ item }) {
    return (
        <Link
            href={item.href}
            >
            <Card className={'flex justify-center h-36 p-2 hover:shadow-primary animate'}>
                <CardContent className={'flex flex-col items-center justify-between'}>
                    <h4 className={'font-semibold text-[50px]'}>
                        {item.number}
                    </h4>
                    <div className={'flex items-center gap-2 text-slate-500'}>
                        <CheckCircle2 />
                        <span className={'uppercase text-sm'}>
                            {item.label}
                        </span>
                    </div>
                </CardContent>
            </Card>
        </Link>
    )
}