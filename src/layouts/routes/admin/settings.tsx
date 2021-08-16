import dynamic from 'next/dynamic'

const AdminContainer = dynamic(() => import('layouts/containers/Admin'))

const routes = [
  {
    path: '/admin/settings/account/users',
    layout: AdminContainer,
  },
  {
    path: '/admin/settings/account/role',
    layout: AdminContainer,
  },
  {
    path: '/admin/settings/account/session',
    layout: AdminContainer,
  },
]

export default routes
