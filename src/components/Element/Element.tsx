import classNames from 'classnames'
import { AiOutlineLine } from 'react-icons/ai'
import type { ClasseNumsRefs, DefaultData_NumRefTo } from 'src/types/Classe'

import type { FuncNumRefType } from '../Classe'

export interface ElementProps extends DefaultData_NumRefTo<2 | 3 | 4 | 5> {
  whichElement: 'poste' | 'compte' | 'sous_compte'
  className?: string
  handleNumRefs?: FuncNumRefType
}

export const Element: React.FC<ElementProps> = ({
  title,
  numero,
  description,
  whichElement,
  handleNumRefs,
  className
}) => (
  <div
    className={classNames(className, 'flex items-center px-4', {
      'mt-4 mb-1': whichElement === 'poste',
      'cursor-pointer rounded-lg transition hover:bg-gray-200':
        whichElement !== 'poste',
      'ml-10 text-blue-500': whichElement === 'sous_compte'
    })}>
    <span
      className={classNames('select-none self-start font-poppins', {
        'block w-12': whichElement !== 'poste'
      })}>
      {handleNumRefs != null
        ? handleNumRefs(numero as ClasseNumsRefs<2 | 3>).join('')
        : numero.join('').concat(whichElement !== 'poste' ? '.' : '')}
    </span>

    {whichElement === 'poste' && (
      <AiOutlineLine className='ml-4 mt-1 self-start' />
    )}
    <div className='mx-4'>
      <span className={classNames({ 'font-bold': whichElement === 'poste' })}>
        {title}
      </span>
      {description != null && <span className='ml-4'>{description}</span>}
    </div>
  </div>
)
