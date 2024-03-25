import { useForm } from 'react-hook-form'

import { Card } from '@/components/ui/card/card'
import { ControlledCheckbox } from '@/components/ui/controlled/controlled-checkbox/controlled-checkbox'
import { ControlledInput } from '@/components/ui/controlled/controlled-input/controlled-input'
import { Typography } from '@/components/ui/typography/typography'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './sign-in-form.module.scss'

import { Button } from '../../ui/button'

type SignInFormSchema = z.infer<typeof SignInSchema>

const SignInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
  rememberMe: z.boolean().default(false),
})

export const SignInForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<SignInFormSchema>({
    resolver: zodResolver(SignInSchema),
  })

  const onSubmit = (data: SignInFormSchema) => {
    console.log(data)
  }

  return (
    <Card className={s.formContainer}>
      <Typography className={s.header} variant={'large'}>
        Sign In
      </Typography>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <DevTool control={control} />
        <ControlledInput
          control={control}
          errorMessage={errors.email?.message}
          label={'Email'}
          name={'email'}
        />
        <ControlledInput
          control={control}
          errorMessage={errors.password?.message}
          label={'Password'}
          name={'password'}
          type={'password'}
        />
        <ControlledCheckbox control={control} label={'remember me'} name={'rememberMe'} />
        <Typography className={s.forgotPass}>Forgot Password?</Typography>
        <Button type={'submit'}>Submit</Button>
        <Typography className={s.haveAccount} variant={'link1'}>
          Don&apos;t have an account?
        </Typography>
        <Typography className={s.signUp} variant={'link1'}>
          Sign Up
        </Typography>
      </form>
    </Card>
  )
}
