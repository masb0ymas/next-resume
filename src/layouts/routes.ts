import dashboardRoutes from './routes/admin/dashboard'
import settingRoutes from './routes/admin/setting'

// @ts-expect-error
const globalRoutes = [].concat(dashboardRoutes, settingRoutes)

export default globalRoutes
