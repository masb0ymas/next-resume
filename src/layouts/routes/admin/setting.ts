import dynamic from 'next/dynamic'

const AdminContainer = dynamic(() => import('~/layouts/containers/Admin'))

const routes = [
  {
    path: '/admin/settings/app',
    layout: AdminContainer,
  },
  {
    path: '/admin/settings/account',
    layout: AdminContainer,
  },
  {
    path: '/admin/settings/master',
    layout: AdminContainer,
  },
]

const settingRoutes = routes

export default settingRoutes
