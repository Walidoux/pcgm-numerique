import classNames from 'classnames'
import type { ClasseNumsRefs, IClasse } from 'src/types/Classe'
import { Fragment } from 'react'

import { Title } from './Title'
import { Element } from '../Element'

export type FuncNumRefType = (
  el: ClasseNumsRefs<2 | 3>
) => ClasseNumsRefs<2 | 3> | number[]

export const Classe: React.FC<{ classe: IClasse }> = ({ classe }) => {
  const handleNumRefs: FuncNumRefType = (el) =>
    Array.isArray(el[0]) && !el.includes('/' as never)
      ? el.splice(1, 0, '/' as never)
      : el

  return (
    <section>
      <Title
        classe={classe}
        title={classe.title}
        numero={classe.numero}
        whichTitle='classe'
        description={classe.description}
        className={classNames({ 'mt-5': classe.numero[0] !== 1 })}
      />

      {classe.rubriques.map((rubrique, i) => (
        <Fragment key={i}>
          <Title
            classe={classe}
            title={rubrique.title}
            numero={rubrique.numero}
            whichTitle='rubrique'
            description={rubrique.description}
            handleNumRefs={() => handleNumRefs(rubrique.numero)}
          />

          {rubrique.postes?.map((post, i) => (
            <Fragment key={i}>
              <Element
                title={post.title}
                numero={post.numero}
                whichElement='poste'
                description={post.description}
                handleNumRefs={() => handleNumRefs(post.numero)}
              />

              {post.comptes?.map((compte, i) => (
                <Fragment key={i}>
                  <Element
                    title={compte.title}
                    numero={compte.numero}
                    whichElement='compte'
                  />

                  {compte.sous_comptes?.map((sousCompte, i) => (
                    <Element
                      key={i}
                      title={sousCompte.title}
                      numero={sousCompte.numero}
                      whichElement='sous_compte'
                    />
                  ))}
                </Fragment>
              ))}
            </Fragment>
          ))}
        </Fragment>
      ))}
    </section>
  )
}
