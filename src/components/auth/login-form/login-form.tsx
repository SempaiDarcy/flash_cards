import { useController, useForm } from 'react-hook-form'

import { CheckboxComponent } from '@/components/ui/checkbox/checkbox'
import { TextField } from '@/components/ui/text-field/text-field'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Button } from '../../ui/button'

type LoginFormSchema = z.infer<typeof loginSchema>
const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
  rememberMe: z.boolean().default(false),
})

export const LoginForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data: LoginFormSchema) => {
    console.log(data)
  }

  const {
    field: { onChange, value },
  } = useController({
    control,
    defaultValue: false,
    name: 'rememberMe',
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField {...register('email')} errorMessage={errors.email?.message} label={'email'} />
      <TextField
        {...register('password')}
        errorMessage={errors.password?.message}
        label={'password'}
      />
      <CheckboxComponent checked={value} label={'remember me'} onCheckedHandler={onChange} />
      <Button type={'submit'}>Submit</Button>
    </form>
  )
}
