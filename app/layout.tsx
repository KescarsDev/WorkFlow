import React from 'react'

import '@/styles/main.scss'
import GeneralNavbar from '@/components/general/GeneralNavbar'

interface Props {
  children: React.ReactNode
}
export default function Layout ({children}: Props) {
  return (
    <>
    <div>
      <GeneralNavbar />
      { children }
    </div>
    </>
    )
}