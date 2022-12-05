import { ClassesRange, IClasse } from 'src/types/Classe'

type ClassesTypes = { [key in ClassesRange]: IClasse }

export const getClasse = (nbClasse: ClassesRange): IClasse => {
  const current: ClassesTypes = {
    1: {
      title: 'Comptes de financement permanent',
      numero: [nbClasse],
      rubriques: [
        {
          title: 'Capitaux propres',
          numero: [nbClasse, 1],
          postes: [
            {
              title: 'Capital social ou personnel',
              numero: [nbClasse, 1, 1],
              comptes: [
                { title: 'Capital social', numero: [nbClasse, 1, 1, 1] },
                {
                  title: 'Fonds de dotation',
                  numero: [nbClasse, 1, 1, 2]
                },
                {
                  title: 'Capital personnel',
                  numero: [nbClasse, 1, 1, 7],
                  sous_comptes: [
                    {
                      title: 'Capital individuel',
                      numero: [nbClasse, 1, 1, 7, 1]
                    },
                    {
                      title: "Compte de l'exploitant",
                      numero: [nbClasse, 1, 1, 7, 5]
                    }
                  ]
                },
                {
                  title: 'Actionnaires, capital souscrit-non appelé',
                  numero: [nbClasse, 1, 1, 9]
                }
              ]
            },
            {
              title: "Primes d'émission, de fusion et d'apport",
              numero: [nbClasse, 1, 2],
              comptes: [
                { title: "Primes d'émission", numero: [nbClasse, 1, 2, 1] },
                { title: 'Primes de fusion', numero: [nbClasse, 1, 2, 2] }
              ]
            },
            {
              title: 'Écarts de réévaluation',
              numero: [nbClasse, 1, 3],
              comptes: [
                { title: 'Écart de réévaluation', numero: [nbClasse, 1, 3, 0] }
              ]
            },
            {
              title: 'Réserve légale',
              numero: [nbClasse, 1, 4],
              comptes: [
                { title: 'Réserve légale', numero: [nbClasse, 1, 4, 0] }
              ]
            },
            {
              title: 'Autres réserves',
              numero: [nbClasse, 1, 5],
              comptes: [
                {
                  title: 'Réserves statutaires ou contractuelles',
                  numero: [nbClasse, 1, 5, 1]
                },
                { title: 'Réserves facultatives', numero: [nbClasse, 1, 5, 2] },
                { title: 'Réserves réglementées', numero: [nbClasse, 1, 5, 5] }
              ]
            },
            {
              title: 'Report à nouveau',
              numero: [nbClasse, 1, 6],
              comptes: [
                {
                  title: 'Report à nouveau (solde créditeur)',
                  numero: [nbClasse, 1, 6, 1]
                },
                {
                  title: 'Report à nouveau (solde débiteur)',
                  numero: [nbClasse, 1, 6, 9]
                }
              ]
            },
            {
              title: "Résultat net en instance d'affectation",

              numero: [nbClasse, 1, 8],
              comptes: [
                {
                  title:
                    "Résultat net en instance d'affectation (solde créditeur)",
                  numero: [nbClasse, 1, 8, 1]
                },
                {
                  title:
                    "Résultat net en instance d'affectation (solde débiteur)",
                  numero: [nbClasse, 1, 8, 9]
                }
              ]
            },
            {
              title: "Résultat net de l'exercice",
              numero: [nbClasse, 1, 9],
              comptes: [
                {
                  title: "Résultat net de l'exercice (solde créditeur)",
                  numero: [nbClasse, 1, 9, 1]
                },
                {
                  title: "Résultat net de l'exercice (solde débiteur)",
                  numero: [nbClasse, 1, 9, 9]
                }
              ]
            }
          ]
        },
        {
          title: 'Capitaux propres et assimilés',
          numero: [nbClasse, 3],
          postes: [
            {
              title: "Subventions d'investissement",
              numero: [nbClasse, 3, 1],
              comptes: [
                {
                  title: "Subventions d'investissement reçues",
                  numero: [nbClasse, 3, 1, 1]
                },
                {
                  title:
                    "Subventions d'investissement inscrit au compte de produit et charges",
                  numero: [nbClasse, 3, 1, 9]
                }
              ]
            },
            {
              title: 'Provisions réglementées',
              numero: [nbClasse, 3, 5],
              comptes: [
                {
                  title: 'Provisions pour amortissements dérogatoires',
                  numero: [nbClasse, 3, 5, 1]
                },
                {
                  title: "Provisions pour plus-values en instance d'imposition",
                  numero: [nbClasse, 3, 5, 2]
                },
                {
                  title: 'Provisions pour investissements',
                  numero: [nbClasse, 3, 5, 4]
                },
                {
                  title: 'Provisions pour reconstitution des gisements',
                  numero: [nbClasse, 3, 5, 5]
                },
                {
                  title:
                    'Provisions pour acquisition et construction de logements',
                  numero: [nbClasse, 3, 5, 6]
                },
                {
                  title: 'Autres provisions réglementées',
                  numero: [nbClasse, 3, 5, 8]
                }
              ]
            }
          ]
        },
        {
          title: 'Dettes de financement',
          numero: [nbClasse, 4],
          postes: [
            {
              title: 'Emprunts obligataires',
              numero: [nbClasse, 4, 1],
              comptes: [
                { title: 'Emprunts obligataires', numero: [nbClasse, 4, 1, 0] }
              ]
            },
            {
              title: 'Autres dettes de financement',
              numero: [nbClasse, 4, 8],
              comptes: [
                {
                  title: 'Emprunts auprès des établissements de crédit',
                  numero: [nbClasse, 4, 8, 1]
                },
                { title: "Avance de l'État", numero: [nbClasse, 4, 8, 2] },
                {
                  title: 'Dettes rattachées à des participants',
                  numero: [nbClasse, 4, 8, 3]
                },
                { title: 'Billets de fonds', numero: [nbClasse, 4, 8, 4] },
                {
                  title: 'Avances reçues et comptes courants bloqués',
                  numero: [nbClasse, 4, 8, 5]
                },
                {
                  title: "Fournisseurs d'immobilisations",
                  numero: [nbClasse, 4, 8, 6]
                },
                {
                  title: 'Dépôts et cautionnements reçus',
                  numero: [nbClasse, 4, 8, 7]
                },
                {
                  title: 'Dettes de financement diverses',
                  numero: [nbClasse, 4, 8, 8]
                }
              ]
            }
          ]
        },
        {
          title: 'Provisions durables pour risques et charges',
          numero: [nbClasse, 5],
          postes: [
            {
              title: 'Provisions pour risques',
              numero: [nbClasse, 5, 1],
              comptes: [
                {
                  title: 'Provisions pour litiges',
                  numero: [nbClasse, 5, 1, 1]
                },
                {
                  title: 'Provisions pour garanties données aux clients',
                  numero: [nbClasse, 5, 1, 2]
                },
                {
                  title: 'Provisions pour propre assureur',
                  numero: [nbClasse, 5, 1, 3]
                },
                {
                  title: 'Provisions pour pertes sur marchés à terme',
                  numero: [nbClasse, 5, 1, 4]
                },
                {
                  title: 'Provisions pour amendes, doubles droits, pénalités',
                  numero: [nbClasse, 5, 1, 5]
                },
                {
                  title: 'Provisions pour pertes de change',
                  numero: [nbClasse, 5, 1, 6]
                },
                {
                  title: 'Autres provisions pour risques',
                  numero: [nbClasse, 5, 1, 8]
                }
              ]
            },
            {
              title: 'Provisions pour charges',
              numero: [nbClasse, 5, 5],
              comptes: [
                {
                  title: 'Provisions pour impôts',
                  numero: [nbClasse, 5, 5, 1]
                },
                {
                  title:
                    'Provisions, pensions de retraite et obligations similaires',
                  numero: [nbClasse, 5, 5, 2]
                },
                {
                  title:
                    'Provisions p. charges à répartir sur plusieurs exercices',
                  numero: [nbClasse, 5, 5, 5]
                },
                {
                  title: 'Autres provisions pour charges',
                  numero: [nbClasse, 5, 5, 8]
                }
              ]
            }
          ]
        },
        {
          title: 'Comptes de liaison des établissements et succursales',
          numero: [nbClasse, 6],
          postes: [
            {
              title: 'Comptes de liaison des établissements et succursales',
              numero: [nbClasse, 6, 0],
              comptes: [
                {
                  title: 'Augmentation des créances immoblisées',
                  numero: [nbClasse, 6, 0, 1]
                },
                {
                  title: 'Augmentation des créances immoblisées',
                  numero: [nbClasse, 6, 0, 1]
                }
              ]
            }
          ]
        },
        {
          title: 'Écarts de conversion - Passif',
          numero: [nbClasse, 7],
          postes: [
            {
              title: 'Augmentation des créances immobilisées',
              numero: [nbClasse, 7, 1],
              comptes: [
                {
                  title: 'Diminution des dettes de financement',
                  numero: [nbClasse, 7, 1, 0]
                }
              ]
            },
            {
              title: 'Diminution des dettes de financement',
              numero: [nbClasse, 7, 2],
              comptes: [
                {
                  title: 'Diminution des dettes de financement',
                  numero: [nbClasse, 7, 2, 0]
                }
              ]
            }
          ]
        }
      ]
    },
    2: {
      title: "Comptes d'actif immobilisé",
      numero: [nbClasse],
      rubriques: [
        {
          title: 'Immobilisations en non-valeurs',
          numero: [nbClasse, 1],
          postes: [
            {
              title: 'Frais préliminaires',
              numero: [nbClasse, 1, 1],
              comptes: [
                { title: 'Frais de constitution', numero: [nbClasse, 1, 1, 1] },

                {
                  title: 'Frais de préalable de démarrage',
                  numero: [nbClasse, 1, 1, 2]
                },

                {
                  title: "Frais d'augmentation de capital",
                  numero: [nbClasse, 1, 1, 3]
                },
                {
                  title:
                    'Frais sur opérations de fusions, scissions et transformations',
                  numero: [nbClasse, 1, 1, 4]
                },
                { title: 'Frais de prospection', numero: [nbClasse, 1, 1, 6] },
                { title: 'Frais de publicité', numero: [nbClasse, 1, 1, 7] },
                {
                  title: 'Autres frais préliminaires',
                  numero: [nbClasse, 1, 1, 8]
                }
              ]
            },
            {
              title: 'Charges à répartir sur plusieurs exercices',
              numero: [nbClasse, 1, 2],
              comptes: [
                {
                  title: "Frais d'acquisition des immobilisations",
                  numero: [nbClasse, 1, 2, 1]
                },
                {
                  title: "Frais d'émission des emprunts",
                  numero: [nbClasse, 1, 2, 5]
                },
                {
                  title: 'Autres charges à répartir',
                  numero: [nbClasse, 1, 2, 8]
                }
              ]
            },
            {
              title: 'Primes de remboursement des obligations',
              numero: [nbClasse, 1, 3],
              comptes: [
                {
                  title: 'Primes de remboursement des obligations',
                  numero: [nbClasse, 1, 3, 0]
                }
              ]
            }
          ]
        },
        {
          title: 'Immobilisations incorporelles',
          numero: [nbClasse, 2],
          postes: [
            {
              title: 'Immobilisation en recherche et développement',
              numero: [nbClasse, 2, 1],
              comptes: [
                {
                  title: 'Immobilisation en recherche et développement',
                  numero: [nbClasse, 2, 1, 0]
                }
              ]
            },
            {
              title: 'Brevets, marques, droits et valeurs similaires',
              numero: [nbClasse, 2, 2],
              comptes: [
                {
                  title: 'Brevets, marques, droits et valeurs similaires',
                  numero: [nbClasse, 2, 2, 0]
                }
              ]
            },
            {
              title: 'Fonds commercial',
              numero: [nbClasse, 2, 3],
              comptes: [
                {
                  title: 'Fonds commercial',
                  numero: [nbClasse, 2, 3, 0]
                }
              ]
            },
            {
              title: 'Autres immobilisations incorporelles',
              numero: [nbClasse, 2, 8],
              comptes: [
                {
                  title: 'Autres immobilisations incorporelles',
                  numero: [nbClasse, 2, 8, 5]
                }
              ]
            }
          ]
        },
        {
          title: 'Immobilisations corporelles',
          numero: [nbClasse, 3],
          postes: [
            {
              title: 'Terrains',
              numero: [nbClasse, 3, 1],
              comptes: [
                { title: 'Terrains nus', numero: [nbClasse, 3, 1, 1] },
                { title: 'Terrains aménagés', numero: [nbClasse, 3, 1, 2] },
                { title: 'Terrains bâtis', numero: [nbClasse, 3, 1, 3] },
                { title: 'Terrains de gisement', numero: [nbClasse, 3, 1, 4] },
                {
                  title: 'Agencements et aménagements de terrains',
                  numero: [nbClasse, 3, 1, 6]
                },
                { title: 'Autres terrains', numero: [nbClasse, 3, 1, 8] }
              ]
            },
            {
              title: 'Constructions',
              numero: [nbClasse, 3, 2],
              comptes: [
                {
                  title: 'Bâtiments',
                  numero: [nbClasse, 3, 2, 1],
                  sous_comptes: [
                    {
                      title: 'Bâtiments industriels [A, B...]',
                      numero: [nbClasse, 3, 2, 1, 1]
                    },
                    {
                      title:
                        'Bâtiments administratifs et commerciaux [A, B...]',
                      numero: [nbClasse, 3, 2, 1, 4]
                    },
                    {
                      title: 'Autres bâtiments',
                      numero: [nbClasse, 3, 2, 1, 8]
                    }
                  ]
                },
                {
                  title: "Constructions sur terrains d'autrui",
                  numero: [nbClasse, 3, 2, 3]
                },
                {
                  title: "Ouvrages d'infrastructure",
                  numero: [nbClasse, 3, 2, 5]
                },
                {
                  title: 'Agencements et aménagements des constructions',
                  numero: [nbClasse, 3, 2, 7]
                },
                {
                  title: 'Autres constructions',
                  numero: [nbClasse, 3, 2, 8]
                }
              ]
            },
            {
              title: 'Installations techniques, matériel et outillage',
              numero: [nbClasse, 3, 3],
              comptes: [
                {
                  title: 'Installations techniques',
                  numero: [nbClasse, 3, 3, 1]
                },
                {
                  title: "Ouvrages d'infrastructure",
                  numero: [nbClasse, 3, 3, 2],
                  sous_comptes: [
                    {
                      title: 'Matériel',
                      numero: [nbClasse, 3, 3, 2, 1]
                    },
                    {
                      title: 'Outillage',
                      numero: [nbClasse, 3, 3, 2, 4]
                    }
                  ]
                },
                {
                  title: 'Agencements et aménagements des constructions',
                  numero: [nbClasse, 3, 3, 3]
                },
                {
                  title:
                    'Autres installations techniques, matériel et outillage',
                  numero: [nbClasse, 3, 3, 8]
                }
              ]
            },
            {
              title: 'Matériel de transport',
              numero: [nbClasse, 3, 4],
              comptes: [
                {
                  title: 'Matériel de transport',
                  numero: [nbClasse, 3, 4, 0]
                }
              ]
            },
            {
              title: 'Mobilier, matériel de bureau et aménag. divers',
              numero: [nbClasse, 3, 5],
              comptes: [
                {
                  title: 'Mobilier de bureau',
                  numero: [nbClasse, 3, 5, 1]
                },
                {
                  title: 'Matériel de bureau',
                  numero: [nbClasse, 3, 5, 2]
                },
                {
                  title: 'Matériel informatique',
                  numero: [nbClasse, 3, 5, 5]
                },
                {
                  title:
                    "Agencements, installations et aménagements divers (de biens n'appartenant pas à l'entreprise",
                  numero: [nbClasse, 3, 5, 6]
                },
                {
                  title:
                    'Autres mobilier, matériel de bureau et aménag. divers',
                  numero: [nbClasse, 3, 5, 8]
                }
              ]
            },
            {
              title: 'Autres immobilisations corporelles',
              numero: [nbClasse, 3, 8],
              comptes: [
                {
                  title: 'Autres immobilisations corporelles',
                  numero: [nbClasse, 3, 8, 0]
                }
              ]
            },
            {
              title: 'Immobilisations corporelles en cours',
              numero: [nbClasse, 3, 9],
              comptes: [
                {
                  title: 'Immobil. corp. en cours de terrains et constructions',
                  numero: [nbClasse, 3, 9, 2]
                },
                {
                  title:
                    'Immobilisations corporelles en cours des installations techniques, matériel et outillage',
                  numero: [nbClasse, 3, 9, 3]
                },
                {
                  title: 'Immobil. corp. en cours de matériel de transports',
                  numero: [nbClasse, 3, 9, 4]
                },

                {
                  title:
                    'Immobilisations corporelles en cours de mobilier, matériel de bureau et aménagements divers',
                  numero: [nbClasse, 3, 9, 5]
                },
                {
                  title:
                    "Avances et acomptes versés sur commandes d'immoblisations corporelles",
                  numero: [nbClasse, 3, 9, 7]
                },
                {
                  title: 'Autres immobilisations corporelles en cours',
                  numero: [nbClasse, 3, 9, 8]
                }
              ]
            }
          ]
        },
        {
          title: 'Immobilisations financières',
          numero: [
            [nbClasse, 4],
            [nbClasse, 5]
          ],
          postes: [
            {
              title: 'Prêts immobiliés',
              numero: [nbClasse, 4, 1],
              comptes: [
                {
                  title: 'Prêts au personnel',
                  numero: [nbClasse, 4, 1, 1]
                },
                {
                  title: 'Prêts aux associés',
                  numero: [nbClasse, 4, 1, 5]
                },
                {
                  title: 'Billets de fonds',
                  numero: [nbClasse, 4, 1, 6]
                },
                {
                  title: 'Autres prêts',
                  numero: [nbClasse, 4, 1, 8]
                }
              ]
            },
            {
              title: 'Autres créances financières',
              numero: [nbClasse, 4, 8],
              comptes: [
                {
                  title: 'Titres immobilisés (droits de créance)',
                  numero: [nbClasse, 4, 8, 1],
                  sous_comptes: [
                    { title: 'Obligations', numero: [nbClasse, 4, 8, 1, 1] },
                    {
                      title: "Bons d'équipements",
                      numero: [nbClasse, 4, 8, 1, 3]
                    },
                    { title: 'Bons divers', numero: [nbClasse, 4, 8, 1, 8] }
                  ]
                },
                {
                  title: 'Créances rattachées à des participations',
                  numero: [nbClasse, 4, 8, 3]
                },
                {
                  title: 'Dépôts et cautionnements versés',
                  numero: [nbClasse, 4, 8, 6],
                  sous_comptes: [
                    { title: 'Dépôts', numero: [nbClasse, 4, 8, 6, 1] },
                    {
                      title: 'Cautionnements',
                      numero: [nbClasse, 4, 8, 6, 4]
                    }
                  ]
                },
                {
                  title: 'Créances immobilisées',
                  numero: [nbClasse, 4, 8, 7]
                },
                {
                  title: 'Créances financières diverses',
                  numero: [nbClasse, 4, 8, 8]
                }
              ]
            },
            {
              title: 'Titres de participation',
              numero: [nbClasse, 5, 1],
              comptes: [
                {
                  title: 'Titres de participation',
                  numero: [nbClasse, 5, 1, 0]
                }
              ]
            },
            {
              title: 'Autres titres immobilisés (Droits de propriété)',
              numero: [nbClasse, 5, 8],
              comptes: [
                {
                  title: 'Autres immobilisations incorporelles',
                  numero: [nbClasse, 5, 8, 1]
                },
                {
                  title: 'Titres divers',
                  numero: [nbClasse, 5, 8, 8]
                }
              ]
            }
          ]
        },
        {
          title: 'Écart de conversion-actif',
          numero: [nbClasse, 7],
          postes: [
            {
              title: 'Diminution des créances immobilisées',
              numero: [nbClasse, 7, 1],
              comptes: [
                {
                  title: 'Diminution des créances immobilisées',
                  numero: [nbClasse, 7, 1, 0]
                }
              ]
            },
            {
              title: 'Augmentation des dettes de financement',
              numero: [nbClasse, 7, 2],
              comptes: [
                {
                  title: 'Augmentation des dettes de financement',
                  numero: [nbClasse, 7, 2, 0]
                }
              ]
            }
          ]
        },
        {
          title: 'Amortissements des immobilisations',
          numero: [nbClasse, 8],
          postes: [
            {
              title: 'Amortissements des non-valeurs',
              numero: [nbClasse, 8, 1],
              comptes: [
                {
                  title: 'Amortissements des Frais préliminaires',
                  numero: [nbClasse, 8, 1, 1],
                  sous_comptes: [
                    {
                      title: 'Amortissements des Frais de constitution',
                      numero: [nbClasse, 8, 1, 1, 1]
                    },
                    {
                      title: 'Amort. Frais préliminaires au démarrage',
                      numero: [nbClasse, 8, 1, 1, 2]
                    },
                    {
                      title: "Amort. Frais d'augmentation du capital",
                      numero: [nbClasse, 8, 1, 1, 3]
                    },
                    {
                      title:
                        'Amortissements des Frais sur opérations des fusions, scissions et transformations',
                      numero: [nbClasse, 8, 1, 1, 4]
                    },
                    {
                      title: 'Amortissements des Frais de prospection',
                      numero: [nbClasse, 8, 1, 1, 6]
                    },
                    {
                      title: 'Amortissements des Frais de publicité',
                      numero: [nbClasse, 8, 1, 1, 7]
                    },
                    {
                      title: 'Amortissements des autres Frais préliminaires',
                      numero: [nbClasse, 8, 1, 1, 8]
                    }
                  ]
                },
                {
                  title: 'Augmentation des Charges à répartir',
                  numero: [nbClasse, 8, 1, 2],
                  sous_comptes: [
                    {
                      title: "Amort. Frais d'acquisition des immobilisations",
                      numero: [nbClasse, 8, 1, 2, 1]
                    },
                    {
                      title: "Amort. Frais d'émission des emprunts",
                      numero: [nbClasse, 8, 1, 2, 5]
                    },
                    {
                      title: 'Amortissements des autres charges à répartir',
                      numero: [nbClasse, 8, 1, 2, 8]
                    }
                  ]
                },
                {
                  title: 'Amort. Primes de remboursement des obligations',
                  numero: [nbClasse, 8, 1, 3]
                }
              ]
            },
            {
              title: 'Amortissements des immobilisations incorporelles',
              numero: [nbClasse, 8, 2],
              comptes: [
                {
                  title: "Amort. de l'immobil. en recherche et développement",
                  numero: [nbClasse, 8, 2, 1]
                },
                {
                  title:
                    'Amort. des brevets, marques, droits et valeurs similaires',
                  numero: [nbClasse, 8, 2, 2]
                },
                {
                  title: 'Amortissements du fond commercial',
                  numero: [nbClasse, 8, 2, 3]
                },
                {
                  title: 'Amort. des autres immobilisations incorporelles',
                  numero: [nbClasse, 8, 2, 8]
                }
              ]
            },
            {
              title: 'Amortissements des immobilisations corporelles',
              numero: [nbClasse, 8, 3],
              comptes: [
                {
                  title: 'Amortissements des terrains',
                  numero: [nbClasse, 8, 3, 1],
                  sous_comptes: [
                    {
                      title: 'Amortissements des terrains nus',
                      numero: [nbClasse, 8, 3, 1, 1]
                    },
                    {
                      title: 'Amortissements des terrains aménagés',
                      numero: [nbClasse, 8, 3, 1, 2]
                    },
                    {
                      title: 'Amortissements des terrains bâtis',
                      numero: [nbClasse, 8, 3, 1, 3]
                    },
                    {
                      title: 'Amortissements des terrains de gisement',
                      numero: [nbClasse, 8, 3, 1, 4]
                    },
                    {
                      title:
                        'Amortissements des agencements et aménagements de terrains',
                      numero: [nbClasse, 8, 3, 1, 6]
                    },
                    {
                      title: 'Amortissements des autres terrains',
                      numero: [nbClasse, 8, 3, 1, 8]
                    }
                  ]
                },
                {
                  title: 'Amortissements des constructions',
                  numero: [nbClasse, 8, 3, 2],
                  sous_comptes: [
                    {
                      title: 'Amortissements des bâtiments',
                      numero: [nbClasse, 8, 3, 1, 1]
                    },
                    {
                      title: "Amort. des constructions sur terrains d'autrui",
                      numero: [nbClasse, 8, 3, 1, 2]
                    },
                    {
                      title: "Amortissements des ouvrages d'infrastructure",
                      numero: [nbClasse, 8, 3, 1, 5]
                    },
                    {
                      title:
                        'Amortissements des installations, agencements et aménagements des constructions',
                      numero: [nbClasse, 8, 3, 1, 7]
                    },
                    {
                      title: 'Amortissements des autres constructions',
                      numero: [nbClasse, 8, 3, 1, 8]
                    }
                  ]
                },
                {
                  title:
                    'Amort. des installations techniques, matériel et outillage',
                  numero: [nbClasse, 8, 3, 3],
                  sous_comptes: [
                    {
                      title: 'Amortissements des installations techniques',
                      numero: [nbClasse, 8, 3, 3, 1]
                    },
                    {
                      title: 'Amortissements du matériel et outillage',
                      numero: [nbClasse, 8, 3, 3, 2]
                    },
                    {
                      title: 'Amort. emballages récupérables identifiables',
                      numero: [nbClasse, 8, 3, 3, 3]
                    },
                    {
                      title:
                        'Amortissements des autres installations techniques, matériel et outillage',
                      numero: [nbClasse, 8, 3, 1, 8]
                    }
                  ]
                },
                {
                  title: 'Amortissements du matériel de transport',
                  numero: [nbClasse, 8, 3, 4]
                },
                {
                  title:
                    'Amortissements du mobilier, matériel de bureau et aménagements divers',
                  numero: [nbClasse, 8, 3, 5],
                  sous_comptes: [
                    {
                      title: 'Amortissements du mobilier de bureau',
                      numero: [nbClasse, 8, 3, 5, 1]
                    },
                    {
                      title: 'Amortissements du matériel de bureau',
                      numero: [nbClasse, 8, 3, 5, 2]
                    },
                    {
                      title: 'Amortissements du matériel informatique',
                      numero: [nbClasse, 8, 3, 5, 5]
                    },
                    {
                      title:
                        'Amortissements des agencements, installations et aménagements divers',
                      numero: [nbClasse, 8, 3, 5, 6]
                    },
                    {
                      title:
                        'Amortissements des autres mobiliers, matériel de bureau aménagements divers',
                      numero: [nbClasse, 8, 3, 5, 8]
                    }
                  ]
                },
                {
                  title:
                    'Amortissements des autres immobilisations corporelles',
                  numero: [nbClasse, 8, 3, 8]
                }
              ]
            }
          ]
        },
        {
          title: 'Provisions pour dépréciation des immobilisations',
          numero: [nbClasse, 9],
          postes: [
            {
              title: 'Provisions p. dépréc. des immobil. incorporelles',
              numero: [nbClasse, 9, 2],
              comptes: [
                {
                  title: 'Provisions p. dépréc. des immobil. incorporelles',
                  numero: [nbClasse, 9, 2, 0]
                }
              ]
            },
            {
              title: 'Provisions p. dépréc. des immobil. corporelles',
              numero: [nbClasse, 9, 3],
              comptes: [
                {
                  title: 'Provisions p. dépréc. des immobil. corporelles',
                  numero: [nbClasse, 9, 3, 0]
                }
              ]
            },
            {
              title: 'Provisions p. dépréc. immobil. financières',
              numero: [
                [nbClasse, 9, 4],
                [nbClasse, 9, 5]
              ],
              comptes: [
                {
                  title: 'Provisions pour dépréciation des prêts immobilisés ',
                  numero: [nbClasse, 9, 4, 1]
                },
                {
                  title: 'Provisions p. dépréc. autres créances financières',
                  numero: [nbClasse, 9, 4, 8]
                },
                {
                  title:
                    'Provisions pour dépréciation des titres de participations',
                  numero: [nbClasse, 9, 5, 1]
                },
                {
                  title: 'Provisions p. dépréc. des autres titres immobilisés',
                  numero: [nbClasse, 9, 5, 8]
                }
              ]
            }
          ]
        }
      ]
    },
    3: {
      title: "Comptes d'actifs circulant (Hors trésorerie)",
      numero: [nbClasse],
      rubriques: [
        {
          title: 'Stocks',
          numero: [nbClasse, 1],
          postes: [
            {
              title: 'Marchandises',
              numero: [nbClasse, 1, 1],
              comptes: [
                {
                  title: 'Marchandises (groupe A)',
                  numero: [nbClasse, 1, 1, 1]
                },
                {
                  title: 'Marchandises (groupe B)',
                  numero: [nbClasse, 1, 1, 2]
                },
                {
                  title: 'Marchandises en cours de route',
                  numero: [nbClasse, 1, 1, 6]
                },
                {
                  title: 'Autres marchandises',
                  numero: [nbClasse, 1, 1, 8]
                }
              ]
            },
            {
              title: 'Matières et fournitures consommables',
              numero: [nbClasse, 1, 2],
              comptes: [
                {
                  title: 'Matières premières',
                  numero: [nbClasse, 1, 2, 1],
                  sous_comptes: [
                    {
                      title: 'Matières premières (groupe A)',
                      numero: [nbClasse, 1, 2, 1, 1]
                    },
                    {
                      title: 'Matières premières (groupe B)',
                      numero: [nbClasse, 1, 2, 1, 2]
                    }
                  ]
                },
                {
                  title: 'Matières et fournitures consommables',
                  numero: [nbClasse, 1, 2, 2],
                  sous_comptes: [
                    {
                      title: 'Matières consommables (groupe A)',
                      numero: [nbClasse, 1, 2, 2, 1]
                    },
                    {
                      title: 'Matières consommables (groupe B)',
                      numero: [nbClasse, 1, 2, 2, 2]
                    },
                    {
                      title: 'Combustibles',
                      numero: [nbClasse, 1, 2, 2, 3]
                    },
                    {
                      title: "Produits d'entretiens",
                      numero: [nbClasse, 1, 2, 2, 4]
                    },
                    {
                      title: "Fournitures d'atelier et d'usine",
                      numero: [nbClasse, 1, 2, 2, 5]
                    },
                    {
                      title: 'Fournitures de magasin',
                      numero: [nbClasse, 1, 2, 2, 6]
                    },
                    {
                      title: 'Fournitures de bureau',
                      numero: [nbClasse, 1, 2, 2, 7]
                    }
                  ]
                },
                {
                  title: 'Emballages',
                  numero: [nbClasse, 1, 2, 3],
                  sous_comptes: [
                    {
                      title: 'Emballages perdus',
                      numero: [nbClasse, 1, 2, 3, 1]
                    },
                    {
                      title: 'Emballages récupérables non identifiable',
                      numero: [nbClasse, 1, 2, 3, 2]
                    },
                    {
                      title: 'Emballages à usage mixte',
                      numero: [nbClasse, 1, 2, 3, 3]
                    }
                  ]
                },
                {
                  title:
                    'Matières et fournitures consommables en cours de route',
                  numero: [nbClasse, 1, 2, 6]
                },
                {
                  title: 'Autres matières et fournitures consommables',
                  numero: [nbClasse, 1, 2, 8]
                }
              ]
            },
            {
              title: 'Produits en cours',
              numero: [nbClasse, 1, 3],
              comptes: [
                {
                  title: 'Bien en cours',
                  numero: [nbClasse, 1, 3, 1],
                  sous_comptes: [
                    {
                      title: 'Biens produits en cours',
                      numero: [nbClasse, 1, 3, 1, 1]
                    },
                    {
                      title: 'Biens intermédiaires en cours',
                      numero: [nbClasse, 1, 3, 1, 2]
                    },
                    {
                      title: 'Biens résiduels en cours',
                      numero: [nbClasse, 1, 3, 1, 7]
                    }
                  ]
                },
                {
                  title: 'Services en cours',
                  numero: [nbClasse, 1, 3, 4],
                  sous_comptes: [
                    {
                      title: 'Travaux en cours',
                      numero: [nbClasse, 1, 3, 4, 1]
                    },
                    {
                      title: 'Études en cours',
                      numero: [nbClasse, 1, 3, 4, 2]
                    },
                    {
                      title: 'Prestations en cours',
                      numero: [nbClasse, 1, 3, 4, 3]
                    }
                  ]
                },
                {
                  title: 'Autres produits en cours',
                  numero: [nbClasse, 1, 3, 8]
                }
              ]
            },
            {
              title: 'Produits intermédiaires et produit résiduels',
              numero: [nbClasse, 1, 4],
              comptes: [
                {
                  title: 'Produits intermédiaires',
                  numero: [nbClasse, 1, 4, 1],
                  sous_comptes: [
                    {
                      title: 'Produits intermédiaires (groupe A)',
                      numero: [nbClasse, 1, 4, 1, 1]
                    },
                    {
                      title: 'Produits intermédiaires (groupe B)',
                      numero: [nbClasse, 1, 4, 1, 2]
                    }
                  ]
                },
                {
                  title: 'Produits résiduels (ou matières de récupération)',
                  numero: [nbClasse, 1, 4, 5],
                  sous_comptes: [
                    { title: 'Déchets', numero: [nbClasse, 1, 4, 5, 1] },
                    { title: 'Rebuts', numero: [nbClasse, 1, 4, 5, 2] },
                    {
                      title: 'Matières de récupération',
                      numero: [nbClasse, 1, 4, 5, 3]
                    }
                  ]
                },
                {
                  title: 'Autres produits interm. et prod. résiduels',
                  numero: [nbClasse, 1, 4, 8]
                }
              ]
            },
            {
              title: 'Produits finis',
              numero: [nbClasse, 1, 5],
              comptes: [
                {
                  title: 'Produits finis (groupe A)',
                  numero: [nbClasse, 1, 5, 1]
                },
                {
                  title: 'Produits finis (groupe B)',
                  numero: [nbClasse, 1, 5, 2]
                },
                {
                  title: 'Produits finis en cours de route',
                  numero: [nbClasse, 1, 5, 6]
                },
                {
                  title: 'Autres Produits finis',
                  numero: [nbClasse, 1, 5, 8]
                }
              ]
            }
          ]
        },
        {
          title: "Créances de l'actif circulant",
          numero: [nbClasse, 4],
          postes: [
            {
              title: 'Fournisseurs débiteurs, avances et acomptes',
              numero: [nbClasse, 4, 1],
              comptes: [
                {
                  title:
                    "Fournisseurs - avances et acomptes versés sur commandes d'exploitation",
                  numero: [nbClasse, 4, 1, 1]
                },
                {
                  title:
                    'Fournisseurs - créances pour emballages et matériel à rendre',
                  numero: [nbClasse, 4, 1, 3]
                },
                {
                  title:
                    'Rabais, remises et ristournes à obtenir - avoirs non encore reçus',
                  numero: [nbClasse, 4, 1, 7]
                },
                {
                  title: 'Autres fournisseurs débiteurs',
                  numero: [nbClasse, 4, 1, 8]
                }
              ]
            },
            {
              title: 'Clients et comptes rattachés',
              numero: [nbClasse, 4, 2],
              comptes: [
                {
                  title: 'Clients',
                  numero: [nbClasse, 4, 2, 1],
                  sous_comptes: [
                    {
                      title: 'Clients - catégorie A',
                      numero: [nbClasse, 4, 2, 1, 1]
                    },
                    {
                      title: 'Clients - catégorie B',
                      numero: [nbClasse, 4, 2, 1, 2]
                    }
                  ]
                },
                {
                  title: 'Clients - retenues de garanties',
                  numero: [nbClasse, 4, 2, 3]
                },
                {
                  title: 'Clients douteux ou litigieux',
                  numero: [nbClasse, 4, 2, 4]
                },
                {
                  title: 'Clients - effets à recevoir',
                  numero: [nbClasse, 4, 2, 5]
                },
                {
                  title:
                    'Clients - factures à établir et créances sur travaux non encore facturables',
                  numero: [nbClasse, 4, 2, 7],
                  sous_comptes: [
                    {
                      title: 'Clients - factures à établir',
                      numero: [nbClasse, 4, 2, 7, 1]
                    },
                    {
                      title: 'Créances sur travaux non encore facturables',
                      numero: [nbClasse, 4, 2, 7, 2]
                    }
                  ]
                },
                {
                  title: 'Autres clients et comptes rattachés',
                  numero: [nbClasse, 4, 2, 8]
                }
              ]
            },
            {
              title: 'Personnel - débiteur',
              numero: [nbClasse, 4, 3],
              comptes: [
                {
                  title: 'Avances et acomptes au personnel',
                  numero: [nbClasse, 4, 3, 1]
                },
                {
                  title: 'Peronnel - autres débiteurs',
                  numero: [nbClasse, 4, 3, 8]
                }
              ]
            },
            {
              title: 'État - débiteur',
              numero: [nbClasse, 4, 5],
              comptes: [
                {
                  title: 'Subventions à recevoir',
                  numero: [nbClasse, 4, 5, 1],
                  sous_comptes: [
                    {
                      title: "Subventions d'investissement à recevoir",
                      numero: [nbClasse, 4, 5, 1, 1]
                    },
                    {
                      title: "Subventions d'exploitation à recevoir",
                      numero: [nbClasse, 4, 5, 1, 2]
                    },
                    {
                      title: "Subventions d'équilibre à recevoir",
                      numero: [nbClasse, 4, 5, 1, 3]
                    }
                  ]
                },
                {
                  title: 'Acomptes sur impôts sur les résultats',
                  numero: [nbClasse, 4, 5, 3]
                },
                {
                  title: 'État - T.V.A récupérable',
                  numero: [nbClasse, 4, 5, 5],
                  sous_comptes: [
                    {
                      title: 'État - T.V.A récupérable sur immobilisations',
                      numero: [nbClasse, 4, 5, 5, 1]
                    },
                    {
                      title: 'État - T.V.A récupérable sur charges',
                      numero: [nbClasse, 4, 5, 5, 2]
                    }
                  ]
                },
                {
                  title: 'État - Crédits de T.V.A (suivants déclarations)',
                  numero: [nbClasse, 4, 5, 6]
                },
                {
                  title: 'État - Autres comptes débiteurs',
                  numero: [nbClasse, 4, 5, 8]
                }
              ]
            },
            {
              title: "Comptes d'associés - débiteurs",
              numero: [nbClasse, 4, 6],
              comptes: [
                {
                  title: "Associés - comptes d'apport en société",
                  numero: [nbClasse, 4, 6, 1]
                },
                {
                  title: 'Actionnaires - capital souscrit et appelé non versé',
                  numero: [nbClasse, 4, 6, 2]
                },
                {
                  title: 'Comptes courants des associés - débiteurs',
                  numero: [nbClasse, 4, 6, 3]
                },
                {
                  title: 'Associés - opérations faites en commun',
                  numero: [nbClasse, 4, 6, 4]
                },
                {
                  title: "Créances rattachées aux comptes d'associés",
                  numero: [nbClasse, 4, 6, 7]
                },
                {
                  title: "Autres comptes d'associés - débiteurs",
                  numero: [nbClasse, 4, 6, 8]
                }
              ]
            },
            {
              title: 'Autres débiteurs',
              numero: [nbClasse, 4, 8],
              comptes: [
                {
                  title: "Créances sur cessions d'immobilisations",
                  numero: [nbClasse, 4, 8, 1]
                },
                {
                  title: "Créances sur cessions d'élements d'actif circulant",
                  numero: [nbClasse, 4, 8, 2]
                },
                {
                  title: 'Créances rattachés aux autres débiteurs',
                  numero: [nbClasse, 4, 8, 7]
                },
                {
                  title: 'Divers débiteurs',
                  numero: [nbClasse, 4, 8, 8]
                }
              ]
            },
            {
              title: 'Comptes de régularisation - actif',
              numero: [nbClasse, 4, 9],
              comptes: [
                {
                  title: "Charges constatées d'avance",
                  numero: [nbClasse, 4, 9, 1]
                },
                {
                  title: 'Intérêts courus et non échus à percevoir',
                  numero: [nbClasse, 4, 9, 3]
                },
                {
                  title: 'Comptes de répartition périodique des charges',
                  numero: [nbClasse, 4, 9, 5]
                },
                {
                  title: "Comptes transitoires ou d'attente - débiteurs",
                  numero: [nbClasse, 4, 9, 7]
                }
              ]
            }
          ]
        },
        {
          title: 'Titres et valeurs de placement',
          numero: [nbClasse, 5],
          postes: [
            {
              title: 'Titres et valeurs de placement',
              numero: [nbClasse, 5, 0],
              comptes: [
                {
                  title: 'Actions, partie libérée',
                  numero: [nbClasse, 5, 0, 1]
                },
                {
                  title: 'Actions, partie non libérée',
                  numero: [nbClasse, 5, 0, 2]
                },
                { title: 'Obligations', numero: [nbClasse, 5, 0, 4] },
                {
                  title: 'Bons de caisse et bons du Trésor',
                  numero: [nbClasse, 5, 0, 6],
                  sous_comptes: [
                    { title: 'Bons de caisse', numero: [nbClasse, 5, 0, 6, 1] },
                    { title: 'Bons du trésor', numero: [nbClasse, 5, 0, 6, 2] }
                  ]
                },
                {
                  title: 'Autres titres et valeurs de placement similaires',
                  numero: [nbClasse, 5, 0, 8]
                }
              ]
            }
          ]
        },
        {
          title: 'Écarts de conversion-actif (élément circulants)',
          numero: [nbClasse, 7],
          postes: [
            {
              title: 'Écarts de conversion-actif (élément circulants)',
              numero: [nbClasse, 7, 0],
              comptes: [
                {
                  title: 'Diminution des créances circulantes',
                  numero: [nbClasse, 7, 0, 1]
                },
                {
                  title: 'Augmentation des dette circulantes',
                  numero: [nbClasse, 7, 0, 2]
                }
              ]
            }
          ]
        },
        {
          title:
            "Provisions pour dépréciation des comptes de l'actif circulant",
          numero: [nbClasse, 9],
          postes: [
            {
              title: 'Provisions pour dépréciation des stocks',
              numero: [nbClasse, 9, 1],
              comptes: [
                {
                  title: 'Provisions pour dépréciation des marchandises',
                  numero: [nbClasse, 9, 1, 1]
                },
                {
                  title:
                    'Provisions pour dépréciation des matières et fournitures',
                  numero: [nbClasse, 9, 1, 2]
                },
                {
                  title: 'Provisions pour dépréciation des produits en cours',
                  numero: [nbClasse, 9, 1, 3]
                },
                {
                  title:
                    'Provisions pour dépréciation des produits intermédiaires',
                  numero: [nbClasse, 9, 1, 4]
                },
                {
                  title: 'Provisions pour dépréciation des produits finis',
                  numero: [nbClasse, 9, 1, 5]
                }
              ]
            },
            {
              title:
                "Provisions pour dépréciation des créances de l'actif circulant",
              numero: [nbClasse, 9, 4],
              comptes: [
                {
                  title:
                    'Provisions pour dépréciation - fournisseurs débiteurs, avances et acomptes',
                  numero: [nbClasse, 9, 4, 1]
                },
                {
                  title:
                    'Provisions pour dépréciation des clients et comptes rattachés',
                  numero: [nbClasse, 9, 4, 2]
                },
                {
                  title: 'Provisions pour dépréciation du personnel - débiteur',
                  numero: [nbClasse, 9, 4, 3]
                },
                {
                  title:
                    "Provisions pour dépréciation des comptes d'associés débiteurs",
                  numero: [nbClasse, 9, 4, 6]
                },
                {
                  title: 'Provisions pour dépréciation des autres débiteurs',
                  numero: [nbClasse, 9, 4, 8]
                }
              ]
            },
            {
              title:
                'Provisions pour dépréciation des titres et valeurs de placement',
              numero: [nbClasse, 9, 5],
              comptes: [
                {
                  title:
                    'Provisions pour dépréciation des titres et valeurs de placement',
                  numero: [nbClasse, 9, 5, 0]
                }
              ]
            }
          ]
        }
      ]
    },
    4: {
      title: 'Comptes de passif circulant',
      numero: [nbClasse],
      rubriques: [
        {
          title: 'Dettes du passif circulant',
          numero: [nbClasse, 4],
          postes: [
            {
              title: 'Fournisseurs et comptes rattachés',
              numero: [nbClasse, 4, 1],
              comptes: [
                {
                  title: 'Fournisseurs',
                  numero: [nbClasse, 4, 1, 1],
                  sous_comptes: [
                    {
                      title: 'Fournisseurs - catégorie A',
                      numero: [nbClasse, 4, 1, 1, 1]
                    },
                    {
                      title: 'Fournisseurs - catégorie B',
                      numero: [nbClasse, 4, 1, 1, 2]
                    }
                  ]
                },
                {
                  title: 'Fournisseurs - retenues de garantie',
                  numero: [nbClasse, 4, 1, 3]
                },
                {
                  title: 'Fournisseurs - effets à payer',
                  numero: [nbClasse, 4, 1, 5]
                },
                {
                  title: 'Fournisseurs - factures non parvenues',
                  numero: [nbClasse, 4, 1, 7]
                },
                {
                  title: 'Autrs fournisseurs et comptes rattachés',
                  numero: [nbClasse, 4, 1, 8]
                }
              ]
            },
            {
              title: 'Clients créditeurs, avances et acomptes',
              numero: [nbClasse, 4, 2],
              comptes: [
                {
                  title:
                    'Clients - avances et acomptes reçus sur commandes en cours',
                  numero: [nbClasse, 4, 2, 1]
                },
                {
                  title:
                    'Clients - dettes pour emballages et matériel consignés',
                  numero: [nbClasse, 4, 2, 5]
                },
                {
                  title:
                    'Rabais, remises et ristournes à accorder - avoirs à établir',
                  numero: [nbClasse, 4, 2, 7]
                },
                {
                  title: 'Autres clients créditeurs',
                  numero: [nbClasse, 4, 2, 8]
                }
              ]
            },
            {
              title: 'Personnel - créditeur',
              numero: [nbClasse, 4, 3],
              comptes: [
                {
                  title: 'Rémunérations dues au personnel',
                  numero: [nbClasse, 4, 3, 1]
                },
                {
                  title: 'Dépôts du personnel créditeurs',
                  numero: [nbClasse, 4, 3, 3]
                },
                {
                  title: 'Oppositions sur salaires',
                  numero: [nbClasse, 4, 3, 4]
                },
                {
                  title: 'Charges de personnel à payer',
                  numero: [nbClasse, 4, 3, 7]
                },
                {
                  title: 'Personnel - autres créditeurs',
                  numero: [nbClasse, 4, 3, 8]
                }
              ]
            },
            {
              title: 'Organismes sociaux',
              numero: [nbClasse, 4, 4],
              comptes: [
                {
                  title: 'Caisse Nationale de la Sécurité sociale',
                  numero: [nbClasse, 4, 4, 1]
                },
                {
                  title: 'Caisses de retraite',
                  numero: [nbClasse, 4, 4, 3]
                },
                {
                  title: 'Mutuelles',
                  numero: [nbClasse, 4, 4, 5]
                },
                {
                  title: 'Charges sociales à payer',
                  numero: [nbClasse, 4, 4, 7]
                },
                {
                  title: 'Autres organismes sociaux',
                  numero: [nbClasse, 4, 4, 8]
                }
              ]
            },
            {
              title: 'État - créditeur',
              numero: [nbClasse, 4, 5],
              comptes: [
                {
                  title: 'État, impôts, taxes et assimilés',
                  numero: [nbClasse, 4, 5, 2],
                  sous_comptes: [
                    {
                      title: "État, taxe urbaine et taxe d'édilité",
                      numero: [nbClasse, 4, 5, 2, 1]
                    },
                    {
                      title: 'État, patente',
                      numero: [nbClasse, 4, 5, 2, 2]
                    },
                    {
                      title: 'État, P.T.S et P.S.N',
                      numero: [nbClasse, 4, 5, 2, 5]
                    }
                  ]
                },
                {
                  title: 'État, impôts sur les résultats',
                  numero: [nbClasse, 4, 5, 3]
                },
                {
                  title: 'État, T.V.A. facturée',
                  numero: [nbClasse, 4, 5, 5]
                },
                {
                  title: 'État, T.V.A. due (suivant déclarations)',
                  numero: [nbClasse, 4, 5, 6]
                },
                {
                  title: 'État, impôts et taxes à payer',
                  numero: [nbClasse, 4, 5, 7]
                },
                {
                  title: 'État - Autres comptes créditeurs',
                  numero: [nbClasse, 4, 5, 8]
                }
              ]
            },
            {
              title: 'Autres créanciers',
              numero: [nbClasse, 4, 8],
              comptes: [
                {
                  title: "Dettes sur acquisitions d'immobilisations",
                  numero: [nbClasse, 4, 8, 1]
                },
                {
                  title:
                    'Dettes sur acquisition de titres et valeurs de placement',
                  numero: [nbClasse, 4, 8, 3]
                },
                {
                  title: 'Obligations échues à rembourser',
                  numero: [nbClasse, 4, 8, 4]
                },
                {
                  title: 'Obligations, coupons à payer',
                  numero: [nbClasse, 4, 8, 5]
                },
                {
                  title: 'Dettes rattachées aux autres créanciers',
                  numero: [nbClasse, 4, 8, 7]
                },
                {
                  title: 'Divers créanciers',
                  numero: [nbClasse, 4, 8, 8]
                }
              ]
            },
            {
              title: 'Comptes de régularisaiton - passif',
              numero: [nbClasse, 4, 9],
              comptes: [
                {
                  title: "Produits contastés d'avance",
                  numero: [nbClasse, 4, 9, 1]
                },
                {
                  title: 'Intérêts courus et non échus à payer',
                  numero: [nbClasse, 4, 9, 3]
                },
                {
                  title: 'Comptes de répartition périodique des produits',
                  numero: [nbClasse, 4, 9, 5]
                },
                {
                  title: "Comptes transitoires ou d'attente - créditeurs",
                  numero: [nbClasse, 4, 9, 7]
                }
              ]
            }
          ]
        },
        {
          title: 'Autres provisions pour risques et charges',
          numero: [nbClasse, 5],
          postes: [
            {
              title: 'Autres provisions pour risques et charges',
              numero: [nbClasse, 5, 0],
              comptes: [
                {
                  title: 'Provisions pour litiges',
                  numero: [nbClasse, 5, 0, 1]
                },
                {
                  title: 'Provisions pour garanties données aux clients',
                  numero: [nbClasse, 5, 0, 2]
                },
                {
                  title: 'Provisions pour amendes, doubles droits et pénalités',
                  numero: [nbClasse, 5, 0, 5]
                },
                {
                  title: 'Provisions pour pertes de change',
                  numero: [nbClasse, 5, 0, 6]
                },
                {
                  title: 'Provisions pour impôts',
                  numero: [nbClasse, 5, 0, 7]
                },
                {
                  title: 'Autres provisions pour risques et charges',
                  numero: [nbClasse, 5, 0, 8]
                }
              ]
            }
          ]
        },
        {
          title: 'Écarts de conversion - passif (eléments circulants)',
          numero: [nbClasse, 7],
          postes: [
            {
              title: 'Écarts de conversion - passif (eléments circulants)',
              numero: [nbClasse, 7, 0],
              comptes: [
                {
                  title: 'Augmentation des créances circulantes',
                  numero: [nbClasse, 7, 0, 1]
                },
                {
                  title: 'Diminution des dettes circulantes',
                  numero: [nbClasse, 7, 0, 2]
                }
              ]
            }
          ]
        }
      ]
    },
    5: { title: '', numero: [nbClasse], rubriques: [] },
    6: { title: '', numero: [nbClasse], rubriques: [] },
    7: { title: '', numero: [nbClasse], rubriques: [] },
    8: { title: '', numero: [nbClasse], rubriques: [] },
    9: { title: '', numero: [nbClasse], rubriques: [] },
    0: { title: '', numero: [nbClasse], rubriques: [] }
  }

  return current[nbClasse]
}
