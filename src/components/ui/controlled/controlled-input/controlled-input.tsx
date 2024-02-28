import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { TextField, TextFieldProps } from '@/components/ui/text-field/text-field'

export type ControlledInputProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<TextFieldProps, 'onChangeValue' | 'value'>
export const ControlledInput = <T extends FieldValues>({
  control,
  name,
  ...restProps
}: ControlledInputProps<T>) => {
  const { field } = useController({
    control,
    name,
  })

  return <TextField {...field} {...restProps} />
}
