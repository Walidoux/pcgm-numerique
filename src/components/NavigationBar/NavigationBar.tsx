import classNames from 'classnames'
import { motion } from 'framer-motion'

import { NavLink } from './NavLink'
import { routes } from '../../routes'

interface NavigationBarProps {
  className?: string
}

export const NavigationBar: React.FC<NavigationBarProps> = ({ className }) => (
  <motion.ul
    className={classNames(
      className,
      'fixed bottom-6 mx-4 flex h-20 rounded-3xl bg-white/50 px-5 shadow-2xl backdrop-blur-md'
    )}>
    {routes.map((item, index) => (
      <NavLink key={index} {...item} />
    ))}
  </motion.ul>
)
