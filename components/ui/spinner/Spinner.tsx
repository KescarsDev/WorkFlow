import React from 'react'
import clsx from 'clsx'


interface SpinnerProps  {
    size?: 'small' | 'medium' | 'large'
    variant?: 'primary' | 'white'
}

const Spinner = ({
    size = 'small',
    variant = 'primary'
}) => {

    let variantStyle:string = '',
        sizeStyle:string = ''
    
    switch (size) {
        case 'small':
            sizeStyle = 'w-5 h-5'
            break
        case 'medium':
            sizeStyle = 'w-9 h-9'
            break
        case 'large':
            sizeStyle = 'w-12 h-12'
            break
    }

    switch (variant) {
        case 'primary':
            variantStyle = 'text-my-primary-500'
            break
        case 'white':
            variantStyle = 'text-white'
            break
    }

    return (
        <svg 
        role="spinner"
        xmlns="http://www.w3.org/2000/svg" 
        fill="none"
        viewBox="0 0 24 24" 
        className={clsx(sizeStyle, variantStyle, "animate-spin")}
    >
            
        <circle 
            // transform="matrix(0.1583 -0.9874 0.9874 0.1583 -6.9328 112.6198)" 
            className="opacity-25" 
            cx="12" 
            cy="12"
            r={"10"}
            stroke="currentColor"
            strokeWidth={"4"}
        ></circle>
        <path 
            className="opacity-75" 
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
    </svg>
    )
}

export default Spinner