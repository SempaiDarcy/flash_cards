import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

export const Cell = forwardRef<ElementRef<'td'>, ComponentPropsWithoutRef<'td'>>(
  ({ className, ...restProps }, ref) => {
    return <td className={className} ref={ref} {...restProps} />
  }
)
