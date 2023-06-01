import dynamic from 'next/dynamic'

const PublicContainer = dynamic(() => import('~/layouts/containers/Public'))

const routes = [
  {
    path: '/',
    layout: PublicContainer,
    exact: true,
  },
  {
    path: '/p',
    layout: PublicContainer,
  },
]

const homeRoutes = routes

export default homeRoutes
