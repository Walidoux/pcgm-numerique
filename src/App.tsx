import { Classe } from './components/Classe/Classe'
import { getClasse } from './data/Classes'
import type { ClassesRange } from './types/Classe'

const App: React.FC = () => {
  return (
    <main className='m-3 max-w-[525px]'>
      {Array.from({ length: 9 }, (_, i) => (
        <Classe key={i} classe={getClasse((i + 1) as ClassesRange)} />
      ))}
    </main>
  )
}

export default App
