import { ComponentPropsWithoutRef, forwardRef } from 'react'

import s from './card.module.scss'

export const CardPage = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'div'>>(
  ({ className, ...rest }, ref) => {
    return <div className={s.card} ref={ref} {...rest}></div>
  }
)
