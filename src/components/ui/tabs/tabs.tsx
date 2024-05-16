import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import { Typography } from '@/components'
import * as RadixTabs from '@radix-ui/react-tabs'

import s from './tabs.module.scss'
export type TabsProps = {
  children: ReactNode
  label?: string
} & ComponentPropsWithoutRef<typeof RadixTabs.Root>

export const Tabs = forwardRef<ElementRef<typeof RadixTabs.Root>, TabsProps>(
  ({ children, label, ...restProps }, ref) => {
    return (
      <RadixTabs.Root className={s.root} ref={ref} {...restProps}>
        {label && (
          <Typography as={'label'} variant={'body2'}>
            {label}
          </Typography>
        )}
        <RadixTabs.List loop>{children}</RadixTabs.List>
      </RadixTabs.Root>
    )
  }
)
