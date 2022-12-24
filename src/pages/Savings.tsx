import classNames from 'classnames'

interface SavingsProps {
  className?: string
}

export const Savings: React.FC<SavingsProps> = ({ className }) => {
  return <section className={classNames(className, '')}></section>
}
