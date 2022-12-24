import classNames from 'classnames'

interface SearchProps {
  className?: string
}

export const Search: React.FC<SearchProps> = ({ className }) => {
  return <section className={classNames(className, '')}></section>
}
