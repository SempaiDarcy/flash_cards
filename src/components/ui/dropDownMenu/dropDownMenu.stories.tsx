import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/components/ui/button'
import { DropDownMenu } from '@/components/ui/dropDownMenu/dropDownMenu'
import DropDownMenuProfileInfo from '@/components/ui/dropDownMenu/dropDownMenuProfileInfo/dropDownMenuProfileInfo'
import { ProfileIcon } from '@/components/ui/dropDownMenu/profileIcon/profileIcon'
import userPhotoUrl from '@/components/ui/header/img/profileIcon.png'
import { BiEditAlt } from 'react-icons/bi'
import { FiLogOut } from 'react-icons/fi'
import { HiOutlineUser } from 'react-icons/hi'
import { LuPlayCircle } from 'react-icons/lu'
import { MdOutlineDelete } from 'react-icons/md'

import s from '@/components/ui/dropDownMenu/dropDownMenu.module.scss'

const meta = {
  component: DropDownMenu,
  tags: ['autodocs'],
  title: 'Components/DropDownMenu',
} satisfies Meta<typeof DropDownMenu>

export default meta
type Story = StoryObj<typeof meta>

export const WithProfile: Story = {
  args: {
    trigger: <ProfileIcon userPhotoUrl={userPhotoUrl} />,
    userEmail: 'j&johnson@gmail.com',
    userName: 'Ivan',
  },

  render: ({ trigger, userEmail, userName }) => {
    return (
      <DropDownMenu trigger={trigger}>
        <DropDownMenuProfileInfo
          userEmail={userEmail}
          userName={userName}
          userPhotoUrl={userPhotoUrl}
        />
        <Button className={s.popoverItemContainer} icon={HiOutlineUser}>
          children
        </Button>
        <Button className={s.popoverItemContainer} icon={FiLogOut}>
          Sign Out
        </Button>
      </DropDownMenu>
    )
  },
}

export const Usual: Story = {
  args: {
    trigger: <button></button>,
  },
  render: ({ trigger }) => {
    return (
      <DropDownMenu trigger={trigger}>
        <Button className={s.popoverItemContainer} icon={LuPlayCircle}>
          Learn
        </Button>
        <Button className={s.popoverItemContainer} icon={BiEditAlt}>
          Edit
        </Button>
        <Button className={s.popoverItemContainer} icon={MdOutlineDelete}>
          Delete
        </Button>
      </DropDownMenu>
    )
  },
}
