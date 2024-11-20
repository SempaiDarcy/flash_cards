import type { Meta, StoryObj } from '@storybook/react'

import userPhotoUrl from '@/assets/img/profile.png'
import { DropDownMenu, DropDownMenuProfileInfo, ProfileIcon } from '@/components'
import { DropDownItem } from '@/components/ui/drop-down-menu/drop-down-item/drop-down-item'
import { BiEditAlt } from 'react-icons/bi'
import { CiMenuKebab } from 'react-icons/ci'
import { FiLogOut } from 'react-icons/fi'
import { HiOutlineUser } from 'react-icons/hi'
import { LuPlayCircle } from 'react-icons/lu'
import { MdOutlineDelete } from 'react-icons/md'

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
        <DropDownItem icon={HiOutlineUser}>children</DropDownItem>
        <DropDownItem icon={FiLogOut}>Sign Out</DropDownItem>
      </DropDownMenu>
    )
  },
}

export const Usual: Story = {
  args: {
    trigger: (
      <div style={{ cursor: 'pointer', fontSize: '2.4rem' }}>
        <CiMenuKebab />
      </div>
    ),
  },
  render: ({ trigger }) => {
    return (
      <DropDownMenu trigger={trigger}>
        <DropDownItem icon={LuPlayCircle}>Learn</DropDownItem>
        <DropDownItem icon={BiEditAlt}>Edit</DropDownItem>
        <DropDownItem icon={MdOutlineDelete}>Delete</DropDownItem>
      </DropDownMenu>
    )
  },
}
