import { Classe } from './components/Classe/Classe'
import { getClasse } from './data/Classes'
import { ClassesRange } from './types/Classe'

const App: React.FC = () => {
  return (
    <main className='m-3 max-w-lg'>
      {Array.from({ length: 2 }, (_, i) => (
        <Classe key={i} classe={getClasse((i + 1) as ClassesRange)} />
      ))}
    </main>
  )
}

export default App
