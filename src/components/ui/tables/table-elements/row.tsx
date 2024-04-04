import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

export const Row = forwardRef<ElementRef<'tr'>, ComponentPropsWithoutRef<'tr'>>(
  ({ className, ...restProps }, ref): JSX.Element => {
    return <tr className={className} ref={ref} {...restProps} />
  }
)
