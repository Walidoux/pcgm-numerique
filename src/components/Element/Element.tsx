import classNames from 'classnames'
import { AiOutlineLine } from 'react-icons/ai'
import { ClasseNumsRefs, DefaultData_NumRefTo } from 'src/types/Classe'

import { FuncNumRefType } from '../Classe'

export interface ElementProps extends DefaultData_NumRefTo<2 | 3 | 4 | 5> {
  whichElement: 'poste' | 'compte' | 'sous_compte'
  className?: string
  handleNumRefs?: FuncNumRefType
}

export const Element: React.FC<ElementProps> = ({
  title,
  numero,
  whichElement,
  handleNumRefs,
  className
}) => (
  <div
    className={classNames(className, 'flex items-center px-8', {
      'mt-4 mb-1 font-bold': whichElement === 'poste',
      'cursor-pointer rounded-lg transition hover:bg-gray-200':
        whichElement !== 'poste',
      'ml-10': whichElement === 'sous_compte'
    })}>
    <span
      className={classNames('block select-none font-poppins', {
        'w-12': whichElement !== 'poste'
      })}>
      {handleNumRefs != null
        ? handleNumRefs(numero as ClasseNumsRefs<2 | 3>)
        : numero}
      {(whichElement === 'compte' || whichElement === 'sous_compte') && '.'}
    </span>

    {whichElement === 'poste' && <AiOutlineLine className='ml-4' />}
    <span className='mx-4'>{title}</span>
  </div>
)
