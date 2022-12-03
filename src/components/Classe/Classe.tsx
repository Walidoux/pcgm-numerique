import classNames from 'classnames'
import { ClasseNumsRefs, IClasse } from 'src/types/Classe'

interface ClasseProps {
  className?: string
  classe: IClasse
}

type OptionNumRefs = ClasseNumsRefs<2> | ClasseNumsRefs<3>

export const Classe: React.FC<ClasseProps> = ({ className, classe }) => {
  const handleNumRefs = (el: OptionNumRefs): any =>
    Array.isArray(el[0]) && !el.includes('/' as never)
      ? el.splice(1, 0, '/' as never)
      : el

  return (
    <section className={classNames(className, '')}>
      {classe.numero} {classe.titre}
      {classe.rubriques.map((rubrique, i) => (
        <div key={i}>
          {handleNumRefs(rubrique.numero)} {rubrique.titre}
          <div />
          {rubrique.postes.map((post, i) => (
            <div key={i}>
              {handleNumRefs(post.numero)} {post.titre}
              <div />
              {post.comptes.map((compte, i) => (
                <div key={i}>
                  {compte.numero} {compte.titre}
                  <div />
                  {compte.sous_comptes?.map((sousCompte, i) => (
                    <div key={i}>
                      {sousCompte.numero} {sousCompte.titre}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </section>
  )
}
