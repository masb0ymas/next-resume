import dynamic from 'next/dynamic'

const AdminContainer = dynamic(() => import('~/layouts/containers/Admin'))

const routes = [
  {
    path: '/admin/dashboard',
    layout: AdminContainer,
    exact: true,
  },
  {
    path: '/admin/profile',
    layout: AdminContainer,
    exact: true,
  },
]

const dashboardRoutes = routes

export default dashboardRoutes
