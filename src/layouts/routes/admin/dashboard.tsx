import dynamic from 'next/dynamic'

const AdminContainer = dynamic(() => import('layouts/containers/Admin'))

const routes = [
  {
    path: '/admin/dashboard',
    layout: AdminContainer,
    exact: true,
  },
]

export default routes
