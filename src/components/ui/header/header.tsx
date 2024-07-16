import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Logo } from '@/assets'
import userPhotoUrl from '@/assets/img/profile.png'
import {
  Button,
  DropDownMenu,
  DropDownMenuProfileInfo,
  ProfileIcon,
  Typography,
} from '@/components'
import { FiLogOut } from 'react-icons/fi'
import { HiOutlineUser } from 'react-icons/hi'

import s from './header.module.scss'

export type HeaderProps = {
  avatar?: string
  className?: string
  email?: string
  isLoggedIn: boolean
  name?: string
} & ComponentPropsWithoutRef<'div'>

export const Header = forwardRef<ElementRef<'div'>, HeaderProps>(
  ({ avatar = userPhotoUrl, email = 'j&johnson@gmail.com', isLoggedIn, name = 'Ivan' }, ref) => {
    return (
      <header className={s.headerBody} ref={ref}>
        <Logo className={s.headerLogo} />
        {isLoggedIn ? (
          <>
            <div className={s.userProfile}>
              <div>
                <Typography className={s.userName} variant={'h1'}>
                  {name}
                </Typography>
              </div>
              <DropDownMenu trigger={<ProfileIcon userPhotoUrl={avatar} />}>
                <DropDownMenuProfileInfo
                  userEmail={email}
                  userName={name}
                  userPhotoUrl={userPhotoUrl}
                />
                <Button className={s.button} icon={HiOutlineUser}>
                  children
                </Button>
                <Button className={s.button} icon={FiLogOut}>
                  Sign Out
                </Button>
              </DropDownMenu>
            </div>
          </>
        ) : (
          <Button>Sign In</Button>
        )}
      </header>
    )
  }
)
