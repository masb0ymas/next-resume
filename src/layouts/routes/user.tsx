import dynamic from 'next/dynamic'

const PublicContainer = dynamic(() => import('layouts/containers/Public'))

const routes = [
  {
    path: '/',
    // layout: TrasmiContainer,
    exact: true,
  },
  {
    path: '/examples/',
    layout: PublicContainer,
  },
]

export default routes
