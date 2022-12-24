import { Classe } from '../components/Classe/Classe'
import { getClasse } from '../data/Classes'
import type { ClassesRange } from '../types/Classe'

export const Home: React.FC = () => (
  <section className='pb-28'>
    {Array.from({ length: 9 }, (_, i) => (
      <Classe key={i} classe={getClasse((i + 1) as ClassesRange)} />
    ))}
  </section>
)
