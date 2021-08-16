import dashboardRoutes from 'layouts/routes/admin/dashboard'
import settingsRoutes from 'layouts/routes/admin/settings'
import homeRoutes from 'layouts/routes/public/home'

const globalRoutes = [].concat(homeRoutes, dashboardRoutes, settingsRoutes)

export default globalRoutes
