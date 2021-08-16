import DashboardOutlined from '@ant-design/icons/DashboardOutlined'
import SettingOutlined from '@ant-design/icons/SettingOutlined'

function useMenu() {
  const data = [
    // Menu yang tidak ada turunan
    {
      id: 'menu1',
      name: 'Dashboard',
      icon: <DashboardOutlined style={{ fontSize: 16 }} />,
      url: '/admin/dashboard',
    },
    {
      id: 'menu2',
      name: 'Settings',
      icon: <SettingOutlined style={{ fontSize: 16 }} />,
      submenus: [
        {
          id: 'menu2-1',
          name: 'Account',
          url: '/admin/settings/account',
        },
        {
          id: 'menu2-2',
          name: 'Master Data',
          url: '/admin/settings/master-data',
        },
      ],
    },
  ]

  return {
    data,
    total: data.length,
  }
}

export default useMenu
