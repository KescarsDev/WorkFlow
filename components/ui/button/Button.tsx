import React from 'react'

import { IconProps } from '@/types/IconsProps'

interface ButtonProps {
  size?: 'small' | 'medium' | 'large'
  variant?: 'primary' | 'secondary' | 'outline' | 'disabled' | 'ico' | 'success' | 'danger'
  icon?: IconProps
  iconTheme?: 'primary' | 'secondary' | 'gray'
  iconPosition?: 'left' | 'right'
  
}

export default function Button({

}: ButtonProps) {
  return (
    <div>Button</div>
  )
}
