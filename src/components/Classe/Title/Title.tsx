import classNames from 'classnames'
import { ClasseNumsRefs, DefaultData_NumRefTo, IClasse } from 'src/types/Classe'

import { FuncNumRefType } from '..'

const pickPaletteColors = (nbClasse: number): string =>
  classNames({
    'bg-gradient-to-r from-background-classe1-start to-background-classe1-end shadow-yellow-500/40':
      nbClasse === 1,
    'bg-gradient-to-r from-purple-600 to-purple-500 shadow-purple-600/40':
      nbClasse === 2,
    'bg-gradient-to-r from-orange-300 to-orange-200 shadow-orange-300/40':
      nbClasse === 3,
    'bg-gradient-to-r from-green-600 to-green-500 shadow-green-600/40':
      nbClasse === 4,
    'bg-gradient-to-r from-blue-500 to-blue-400 shadow-blue-500/40':
      nbClasse === 5,
    'bg-gradient-to-r from-orange-600 to-orange-500 shadow-orange-600/40':
      nbClasse === 6,
    'bg-gradient-to-r from-pink-500 to-pink-400 shadow-pink-500/40':
      nbClasse === 7,
    'bg-gradient-to-r from-green-700 to-green-600 shadow-green-700/40':
      nbClasse === 8,
    'bg-gradient-to-r from-pink-700 to-pink-600 shadow-pink-700/40':
      nbClasse === 9,
    'bg-gradient-to-r from-purple-700 to-purple-600 shadow-purple-700/40':
      nbClasse === 0
  })

interface TitleProps extends DefaultData_NumRefTo<1 | 2 | 3> {
  whichTitle: 'classe' | 'rubrique'
  className?: string
  handleNumRefs?: FuncNumRefType
  classe: IClasse
}

export const Title: React.FC<TitleProps> = ({
  title,
  numero,
  whichTitle,
  handleNumRefs,
  classe,
  className
}) => (
  <div
    className={classNames(
      className,
      'flex items-center justify-center uppercase text-white',
      pickPaletteColors(classe.numero[0] as number),
      {
        'h-[75px] rounded-xl shadow-xl': whichTitle === 'classe',
        'mt-6 min-h-[35px] rounded-lg shadow-lg': whichTitle === 'rubrique'
      }
    )}>
    <span
      className={classNames(
        'grid h-full w-[90px] select-none place-items-center border-[3px] border-transparent border-r-white font-poppins font-semibold',
        {
          'text-4xl': whichTitle === 'classe',
          'text-xl': whichTitle === 'rubrique'
        }
      )}>
      {handleNumRefs != null
        ? handleNumRefs(numero as ClasseNumsRefs<2 | 3>)
        : numero.join()}
    </span>
    <span
      className={classNames('flex h-full w-full items-center px-8 font-inter', {
        'text-2xl font-bold': whichTitle === 'classe',
        'font-semibold': whichTitle === 'rubrique'
      })}>
      {title}
    </span>
  </div>
)
