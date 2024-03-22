import { type RouteProps } from 'react-router-dom'
import MainPage from 'pages/MainPage/ui/MainPage'
import AboutPage from 'pages/AboutPage/ui/AboutPage'

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about'
}

export const routePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: routePath.main,
    element: <MainPage/>
  },
  [AppRoutes.ABOUT]: {
    path: routePath.about,
    element: <AboutPage/>
  }
}
