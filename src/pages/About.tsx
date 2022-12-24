import classNames from 'classnames'

interface AboutProps {
  className?: string
}

export const About: React.FC<AboutProps> = ({ className }) => {
  return <section className={classNames(className, '')}></section>
}
