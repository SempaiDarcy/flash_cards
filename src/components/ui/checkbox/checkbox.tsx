import { ReactNode } from 'react'

import * as RadixCheckbox from '@radix-ui/react-checkbox'
import { IoMdCheckmark } from 'react-icons/io'

import s from './checkbox.module.scss'
export type CheckboxProps = {
  checked: RadixCheckbox.CheckedState
  children?: ReactNode
  className?: string
  disabled?: boolean | undefined
  id?: string
  onChange: (checked: RadixCheckbox.CheckedState) => void
}
export const Checkbox = ({ checked, children, className, disabled, onChange }: CheckboxProps) => {
  return (
    <form>
      <div className={`${s.checkboxContainer} ${className}`}>
        <RadixCheckbox.Root
          checked={checked}
          className={s.checkboxRoot}
          disabled={disabled}
          id={'c1'}
          onCheckedChange={onChange}
        >
          <RadixCheckbox.Indicator className={s.checkboxIndicator}>
            <IoMdCheckmark className={s.checkboxIcon} />
          </RadixCheckbox.Indicator>
        </RadixCheckbox.Root>
        <label
          className={`${s.checkboxLabel} ${disabled ? s.checkboxLabelDisabled : ''}`}
          htmlFor={'c1'}
        >
          {children}
        </label>
      </div>
    </form>
  )
}
