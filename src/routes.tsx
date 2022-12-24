import {
  FiSearch,
  FiHome,
  FiSettings,
  FiBookmark,
  FiHelpCircle
} from 'react-icons/fi'

type Pages = 'Search' | 'Settings' | 'Home' | 'Savings' | 'About'

export interface IRoutes {
  title: Pages
  icon: JSX.Element
  redirect: string
}

export const routes: IRoutes[] = [
  {
    title: 'Search',
    icon: <FiSearch />,
    redirect: '/search'
  },
  {
    title: 'Settings',
    icon: <FiSettings />,
    redirect: '/settings'
  },
  {
    title: 'Home',
    icon: <FiHome />,
    redirect: '/'
  },
  {
    title: 'Savings',
    icon: <FiBookmark fill='black' />,
    redirect: '/savings'
  },
  {
    title: 'About',
    icon: <FiHelpCircle />,
    redirect: '/about'
  }
]
