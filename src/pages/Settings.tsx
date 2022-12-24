import classNames from 'classnames'

interface SettingsProps {
  className?: string
}

export const Settings: React.FC<SettingsProps> = ({ className }) => {
  return <section className={classNames(className, '')}></section>
}
