import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

export const HeadCell = forwardRef<ElementRef<'th'>, ComponentPropsWithoutRef<'th'>>(
  ({ className, ...restProps }, ref) => {
    return <th className={className} ref={ref} {...restProps} />
  }
)
