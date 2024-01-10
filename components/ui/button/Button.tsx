import React from 'react'

import { IconProps } from '@/types/IconsProps'
import { LinkType } from '@/types/LinkType'
import clsx from 'clsx'
import Spinner from '../spinner/Spinner'
import Link from 'next/link'

interface ButtonProps {
  size?: 'small' | 'medium' | 'large'
  variant?: 'primary' | 'secondary' | 'outline' | 'disabled' | 'ico' | 'success' | 'danger'
  icon?: IconProps
  iconTheme?: 'primary' | 'secondary' | 'gray'
  iconPosition?: 'left' | 'right'
  disabled?: boolean
  isLoading?: boolean
  type?: 'button' | 'submit'
  widthFull?: boolean
  children?: React.ReactNode
  baseUrl?: string
  linkType?: LinkType
  action?: Function
  className?: string
}

export default function Button({
  size = 'medium',
  variant = 'primary',
  icon,
  iconTheme = 'primary',
  iconPosition = 'right',
  disabled,
  isLoading,
  type = 'button',
  widthFull = false,
  children,
  baseUrl,
  linkType = 'internal',
  action = () => {},
  className
}: ButtonProps) {

  let sizeStyle: string = "",
      variantStyle: string = "",
      icoSize: number = 0

  switch (variant) {
    case 'primary':
      variantStyle = 'bg-my-primary hover:bg-primary/90 text-primary-foreground shadow rounded-md'
      break
    case 'secondary':
      variantStyle = 'bg-secondary hover:bg-secondary/80 text-secondary-foreground shadow-sm rounded-md'
      break
    case 'success':
      variantStyle = 'bg-success hover:bg-success/70 text-white shadow-sm rounded-md'
      break
    case 'danger':
      variantStyle = 'bg-danger hover:bg-danger/70 text-white shadow-sm rounded-md'
      break
    case 'outline':
      variantStyle = 'border border-input bg-background shadow-sm hover:bg-secondary/80 rounded-md'
      break
    case 'disabled':
      variantStyle = 'bg-my-secondary-200 border border-gray-500 text-gray-600 shadow-sm rounded-md cursor-not-allowed'
      break
    case 'ico':
      if (iconTheme === 'primary')
        variantStyle = 'bg-my-primary hover:bg-primary/90 text-primary-foreground shadow rouded-full'
      if (iconTheme === 'secondary')
        variantStyle = 'bg-my-secondary hover:bg-secondary/80 text-secondary-foreground shadow-sm rounded-full'
      if (iconTheme === 'gray')
        variantStyle = 'bg-my-secondary-400 hover:bg-my-secondary-200 text-secondary-foreground shadow-sm rounded-full'
  }

  switch (size) {
    case 'small':
      sizeStyle = `text-[16px] font-medium ${variant === 'ico' ? 'h-[36px] w-[36px] flex items-center justify-center': 'px-3 text-xs'}`
      icoSize = 18
      break
    case 'medium':
      sizeStyle = `text-[18px] font-medium ${variant === 'ico' ? 'h-[40px] w-[40px] flex items-center justify-center': 'px-4 py-2'}`
      icoSize = 20
      break
    case 'large':
      sizeStyle = `text-[20px] font-medium ${variant === 'ico' ? 'h-[44px] w-[44px] flex items-center justify-center': 'px-8'}`
      break
  }

  const handleClick = () => {
    if (action) {
      action()
    }
  }


  const buttonContent = (
    <>
      {isLoading && (
        <div className="absolute flex inset-0 items-center justify-center">
          {variant === 'primary' || variant === 'ico' ?
          (<Spinner variant='white' />):
          (<Spinner/>)}
        </div>
      )}

      <div className={clsx(isLoading && 'invisible')}>
        {icon && variant === 'ico' ? (
          <icon.icon size={icoSize} />
        ) : 
        (
          <div className={clsx(icon && 'flex items-center gap-1')}>
            {icon && iconPosition === 'left' && (<icon.icon size={icoSize} />)}
            {children}
            {icon && iconPosition === 'right' && (<icon.icon size={icoSize} />)}
          </div>
        )}
      </div>
    </>
  )


  const buttonElement = (
    <button
      type={type}
      onClick={handleClick}

      className={clsx(
        sizeStyle,
        variantStyle,
        isLoading && 'cursor-not-allowed',
        'relative animate',
        widthFull && 'w-full',
        className
      )}
      disabled={disabled || isLoading ? true : false}
    >
      {buttonContent}
    </button>
  )

  if (baseUrl) {
    if(linkType === LinkType.EXTERNAL) {
      return (
        <a href={baseUrl} target='_blank'>
          {buttonElement}
        </a>
      )
    } else {
      return <Link href={baseUrl}>{buttonElement}</Link>
    }
  }

  return buttonElement
}
