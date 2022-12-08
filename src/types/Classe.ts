type Enumerate<
  N extends number,
  Acc extends number[] = []
> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>

type FixedLength<TItem, TLength extends number> = [TItem, ...TItem[]] & {
  length: TLength
}

type Range<F extends number, T extends number> = Exclude<
  Enumerate<T>,
  Enumerate<F>
>

export type ClasseNumsRefs<T extends number> =
  | FixedLength<number, T>
  | Array<FixedLength<number, T>>

export interface DefaultData_NumRefTo<K extends number> {
  title: string
  numero: ClasseNumsRefs<K>
  description?: string
}

export type ClassesRange = Range<0, 10>

export type IClasse = DefaultData_NumRefTo<1> & { rubriques: IRubrique[] }
export type IRubrique = DefaultData_NumRefTo<2> & { postes?: IPoste[] }
export type IPoste = DefaultData_NumRefTo<3> & { comptes?: ICompte[] }
export type ICompte = DefaultData_NumRefTo<4> & {
  sous_comptes?: Array<DefaultData_NumRefTo<5>>
}
