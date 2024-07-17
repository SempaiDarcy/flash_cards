import { ReactNode } from 'react'
import { IconType } from 'react-icons'

import { Button, Typography } from '@/components'

import s from '@/components/ui/drop-down-menu/drop-down-menu.module.scss'
type DropDownItemProps = {
  children: ReactNode
  icon: IconType
}
export const DropDownItem = ({ children = 'children', icon }: DropDownItemProps) => {
  return (
    <Button className={s.dropDownItem} icon={icon}>
      <Typography className={s.typography}>{children}</Typography>
    </Button>
  )
}
