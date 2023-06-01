import {
  IconApps,
  IconHome,
  IconServerCog,
  IconSettings,
  IconUsers,
} from '@tabler/icons-react'
import React from 'react'

interface LinkProps {
  icon: React.ReactNode
  color: string
  label: string
  link?: string
}

export interface MainLinkProps extends LinkProps {
  links?: LinkProps[]
}

function useMenuSidebar() {
  const data = [
    {
      icon: <IconHome size={16} />,
      color: 'blue',
      label: 'Dashboard',
      link: '/admin/dashboard',
    },
    {
      icon: <IconSettings size={16} />,
      color: 'grape',
      label: 'Settings',
      links: [
        {
          icon: <IconApps size={16} />,
          color: 'grape',
          label: 'App',
          link: '/admin/settings/app',
        },
        {
          icon: <IconUsers size={16} />,
          color: 'grape',
          label: 'Account',
          link: '/admin/settings/account',
        },
        {
          icon: <IconServerCog size={16} />,
          color: 'grape',
          label: 'Master Data',
          link: '/admin/settings/master',
        },
      ],
    },
  ]

  return { data, total: data.length }
}

export default useMenuSidebar
