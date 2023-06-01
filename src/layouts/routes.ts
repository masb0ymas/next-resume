import dashboardRoutes from './routes/admin/dashboard'
import settingRoutes from './routes/admin/setting'
import homeRoutes from './routes/public/home'

// @ts-expect-error
const globalRoutes = [].concat(homeRoutes, dashboardRoutes, settingRoutes)

export default globalRoutes
