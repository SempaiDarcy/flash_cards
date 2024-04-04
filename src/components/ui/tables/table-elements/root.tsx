import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

export const Root = forwardRef<ElementRef<'table'>, ComponentPropsWithoutRef<'table'>>(
  ({ className, ...restProps }, ref) => {
    return <table className={className} ref={ref} {...restProps} />
  }
)
