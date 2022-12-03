import { Fragment } from 'react'

import { Classe } from './components/Classe/Classe'
import { getClasse } from './data/Classes'
import { ClassesRange } from './types/Classe'

const App: React.FC = () => {
  console.log('tets')

  return (
    <Fragment>
      {Array.from({ length: 2 }, (_, i) => (
        <Classe key={i} classe={getClasse((i + 1) as ClassesRange)} />
      ))}
    </Fragment>
  )
}

export default App
