import React from 'react'
import { Button } from '../button'

export default function Footer() {
  return (
    <>
        <div className='bg-white h-24 mt-10 w-full border-t border-gray-200 shadow fixed flex items-center p-12 gap-8'>
          <Button>
            Valider
          </Button>
          <Button
            variant='outline'
          >
            Annuler
          </Button>
        </div>
    </>
  )
}
