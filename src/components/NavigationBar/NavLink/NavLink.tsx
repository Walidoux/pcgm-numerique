import { AnimatePresence, motion } from 'framer-motion'
import { NavLink as RouterLink, useLocation } from 'react-router-dom'
import { IRoutes } from 'src/routes'

export const NavLink: React.FC<IRoutes> = ({ icon, redirect }) => {
  const location = useLocation()

  return (
    <li className='relative text-gray-900' onClick={() => {}}>
      <RouterLink
        to={redirect}
        className='grid h-full w-full place-items-center px-[33px]'>
        <span className='mb-1 text-2xl'>{icon}</span>
        <AnimatePresence>
          {redirect === location.pathname && (
            <motion.span
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              className='absolute bottom-1/4 h-1 w-1 rounded-full bg-black'
            />
          )}
        </AnimatePresence>
      </RouterLink>
    </li>
  )
}
