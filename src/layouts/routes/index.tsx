'use client'

import homeRoutes from "./public/home";

// @ts-expect-error
const globalRoutes = [].concat(homeRoutes);

export default globalRoutes;
