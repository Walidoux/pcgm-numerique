import { ClassesRange, IClasse } from 'src/types/Classe'

type ClassesTypes = { [key in ClassesRange]: IClasse }

export const getClasse = (nbClasse: ClassesRange): IClasse => {
  const current: ClassesTypes = {
    1: {
      titre: 'Comptes de financement permanent',
      numero: [nbClasse],
      rubriques: [
        {
          titre: 'Capitaux propres',
          numero: [nbClasse, 1],
          postes: [
            {
              titre: 'Capital social ou personnel',
              numero: [nbClasse, 1, 1],
              comptes: [
                { titre: 'Capital social', numero: [nbClasse, 1, 1, 1] },
                {
                  titre: 'Fonds de dotation',
                  numero: [nbClasse, 1, 1, 2]
                },
                {
                  titre: 'Capital personnel',
                  numero: [nbClasse, 1, 1, 7],
                  sous_comptes: [
                    {
                      titre: 'Capital individuel',
                      numero: [nbClasse, 1, 1, 7, 1]
                    },
                    {
                      titre: "Compte de l'exploitant",
                      numero: [nbClasse, 1, 1, 7, 5]
                    }
                  ]
                },
                {
                  titre: 'Actionnaires, capital souscrit-non appelé',
                  numero: [nbClasse, 1, 1, 9]
                }
              ]
            },
            {
              titre: "Primes d'émission, de fusion et d'apport",
              numero: [nbClasse, 1, 2],
              comptes: [
                { titre: "Primes d'émission", numero: [nbClasse, 1, 2, 1] },
                { titre: 'Primes de fusion', numero: [nbClasse, 1, 2, 2] }
              ]
            },
            {
              titre: 'Écarts de réévaluation',
              numero: [nbClasse, 1, 3],
              comptes: [
                { titre: 'Écart de réévaluation', numero: [nbClasse, 1, 3, 0] }
              ]
            },
            {
              titre: 'Réserve légale',
              numero: [nbClasse, 1, 4],
              comptes: [
                { titre: 'Réserve légale', numero: [nbClasse, 1, 4, 0] }
              ]
            },
            {
              titre: 'Autres réserves',
              numero: [nbClasse, 1, 5],
              comptes: [
                {
                  titre: 'Réserves statutaires ou contractuelles',
                  numero: [nbClasse, 1, 5, 1]
                },
                { titre: 'Réserves facultatives', numero: [nbClasse, 1, 5, 2] },
                { titre: 'Réserves réglementées', numero: [nbClasse, 1, 5, 5] }
              ]
            },
            {
              titre: 'Report à nouveau',
              numero: [nbClasse, 1, 6],
              comptes: [
                {
                  titre: 'Report à nouveau (solde créditeur)',
                  numero: [nbClasse, 1, 6, 1]
                },
                {
                  titre: 'Report à nouveau (solde débiteur)',
                  numero: [nbClasse, 1, 6, 9]
                }
              ]
            },
            {
              titre: "Résultat net en instance d'affectation",

              numero: [nbClasse, 1, 8],
              comptes: [
                {
                  titre:
                    "Résultat net en instance d'affectation (solde créditeur)",
                  numero: [nbClasse, 1, 8, 1]
                },
                {
                  titre:
                    "Résultat net en instance d'affectation (solde débiteur)",
                  numero: [nbClasse, 1, 8, 9]
                }
              ]
            },
            {
              titre: "Résultat net de l'exercice",
              numero: [nbClasse, 1, 9],
              comptes: [
                {
                  titre: "Résultat net de l'exercice (solde créditeur)",
                  numero: [nbClasse, 1, 9, 1]
                },
                {
                  titre: "Résultat net de l'exercice (solde débiteur)",
                  numero: [nbClasse, 1, 9, 9]
                }
              ]
            }
          ]
        },
        {
          titre: 'Capitaux propres et assimilés',
          numero: [nbClasse, 3],
          postes: [
            {
              titre: "Subventions d'investissement",
              numero: [nbClasse, 3, 1],
              comptes: [
                {
                  titre: "Subventions d'investissement reçues",
                  numero: [nbClasse, 3, 1, 1]
                },
                {
                  titre:
                    "Subventions d'investissement inscrit au compte de produit et charges",
                  numero: [nbClasse, 3, 1, 9]
                }
              ]
            },
            {
              titre: 'Provisions réglementées',
              numero: [nbClasse, 3, 5],
              comptes: [
                {
                  titre: 'Provisions pour amortissements dérogatoires',
                  numero: [nbClasse, 3, 5, 1]
                },
                {
                  titre: "Provisions pour plus-values en instance d'imposition",
                  numero: [nbClasse, 3, 5, 2]
                },
                {
                  titre: 'Provisions pour investissements',
                  numero: [nbClasse, 3, 5, 4]
                },
                {
                  titre: 'Provisions pour reconstitution des gisements',
                  numero: [nbClasse, 3, 5, 5]
                },
                {
                  titre:
                    'Provisions pour acquisition et construction de logements',
                  numero: [nbClasse, 3, 5, 6]
                },
                {
                  titre: 'Autres provisions réglementées',
                  numero: [nbClasse, 3, 5, 8]
                }
              ]
            }
          ]
        },
        {
          titre: 'Dettes de financement',
          numero: [nbClasse, 4],
          postes: [
            {
              titre: 'Emprunts obligataires',
              numero: [nbClasse, 4, 1],
              comptes: [
                { titre: 'Emprunts obligataires', numero: [nbClasse, 4, 1, 0] }
              ]
            },
            {
              titre: 'Autres dettes de financement',
              numero: [nbClasse, 4, 8],
              comptes: [
                {
                  titre: 'Emprunts auprès des établissements de crédit',
                  numero: [nbClasse, 4, 8, 1]
                },
                { titre: "Avance de l'État", numero: [nbClasse, 4, 8, 2] },
                {
                  titre: 'Dettes rattachées à des participants',
                  numero: [nbClasse, 4, 8, 3]
                },
                { titre: 'Billets de fonds', numero: [nbClasse, 4, 8, 4] },
                {
                  titre: 'Avances reçues et comptes courants bloqués',
                  numero: [nbClasse, 4, 8, 5]
                },
                {
                  titre: "Fournisseurs d'immobilisations",
                  numero: [nbClasse, 4, 8, 6]
                },
                {
                  titre: 'Dépôts et cautionnements reçus',
                  numero: [nbClasse, 4, 8, 7]
                },
                {
                  titre: 'Dettes de financement diverses',
                  numero: [nbClasse, 4, 8, 8]
                }
              ]
            }
          ]
        },
        {
          titre: 'Provisions durables pour risques et charges',
          numero: [nbClasse, 5],
          postes: [
            {
              titre: 'Provisions pour risques',
              numero: [nbClasse, 5, 1],
              comptes: [
                {
                  titre: 'Provisions pour litiges',
                  numero: [nbClasse, 5, 1, 1]
                },
                {
                  titre: 'Provisions pour garanties données aux clients',
                  numero: [nbClasse, 5, 1, 2]
                },
                {
                  titre: 'Provisions pour propre assureur',
                  numero: [nbClasse, 5, 1, 3]
                },
                {
                  titre: 'Provisions pour pertes sur marchés à terme',
                  numero: [nbClasse, 5, 1, 4]
                },
                {
                  titre: 'Provisions pour amendes, doubles droits, pénalités',
                  numero: [nbClasse, 5, 1, 5]
                },
                {
                  titre: 'Provisions pour pertes de change',
                  numero: [nbClasse, 5, 1, 6]
                },
                {
                  titre: 'Autres provisions pour risques',
                  numero: [nbClasse, 5, 1, 8]
                }
              ]
            },
            {
              titre: 'Provisions pour charges',
              numero: [nbClasse, 5, 5],
              comptes: [
                {
                  titre: 'Provisions pour impôts',
                  numero: [nbClasse, 5, 5, 1]
                },
                {
                  titre:
                    'Provisions, pensions de retraite et obligations similaires',
                  numero: [nbClasse, 5, 5, 2]
                },
                {
                  titre:
                    'Provisions p. charges à répartir sur plusieurs exercices',
                  numero: [nbClasse, 5, 5, 5]
                },
                {
                  titre: 'Autres provisions pour charges',
                  numero: [nbClasse, 5, 5, 8]
                }
              ]
            }
          ]
        },
        {
          titre: 'Comptes de liaison des établissements et succursales',
          numero: [nbClasse, 6],
          postes: [
            {
              titre: 'Comptes de liaison des établissements et succursales',
              numero: [nbClasse, 6, 0],
              comptes: [
                {
                  titre: 'Augmentation des créances immoblisées',
                  numero: [nbClasse, 6, 0, 1]
                },
                {
                  titre: 'Augmentation des créances immoblisées',
                  numero: [nbClasse, 6, 0, 1]
                }
              ]
            }
          ]
        },
        {
          titre: 'Écarts de conversion - Passif',
          numero: [nbClasse, 7],
          postes: [
            {
              titre: 'Augmentation des créances immobilisées',
              numero: [nbClasse, 7, 1],
              comptes: [
                {
                  titre: 'Diminution des dettes de financement',
                  numero: [nbClasse, 7, 1, 0]
                }
              ]
            },
            {
              titre: 'Diminution des dettes de financement',
              numero: [nbClasse, 7, 2],
              comptes: [
                {
                  titre: 'Diminution des dettes de financement',
                  numero: [nbClasse, 7, 2, 0]
                }
              ]
            }
          ]
        }
      ]
    },
    2: {
      titre: "Comptes d'actif immobilisé",
      numero: [nbClasse],
      rubriques: [
        {
          titre: 'Immobilisations en non-valeurs',
          numero: [nbClasse, 1],
          postes: [
            {
              titre: 'Frais préliminaires',
              numero: [nbClasse, 1, 1],
              comptes: [
                { titre: 'Frais de constitution', numero: [nbClasse, 1, 1, 1] },

                {
                  titre: 'Frais de préalable de démarrage',
                  numero: [nbClasse, 1, 1, 2]
                },

                {
                  titre: "Frais d'augmentation de capital",
                  numero: [nbClasse, 1, 1, 3]
                },
                {
                  titre:
                    'Frais sur opérations de fusions, scissions et transformations',
                  numero: [nbClasse, 1, 1, 4]
                },
                { titre: 'Frais de prospection', numero: [nbClasse, 1, 1, 6] },
                { titre: 'Frais de publicité', numero: [nbClasse, 1, 1, 7] },
                {
                  titre: 'Autres frais préliminaires',
                  numero: [nbClasse, 1, 1, 8]
                }
              ]
            },
            {
              titre: 'Charges à répartir sur plusieurs exercices',
              numero: [nbClasse, 1, 2],
              comptes: [
                {
                  titre: "Frais d'acquisition des immobilisations",
                  numero: [nbClasse, 1, 2, 1]
                },
                {
                  titre: "Frais d'émission des emprunts",
                  numero: [nbClasse, 1, 2, 5]
                },
                {
                  titre: 'Autres charges à répartir',
                  numero: [nbClasse, 1, 2, 8]
                }
              ]
            },
            {
              titre: 'Primes de remboursement des obligations',
              numero: [nbClasse, 1, 3],
              comptes: [
                {
                  titre: 'Primes de remboursement des obligations',
                  numero: [nbClasse, 1, 3, 0]
                }
              ]
            }
          ]
        },
        {
          titre: 'Immobilisations incorporelles',
          numero: [nbClasse, 2],
          postes: [
            {
              titre: 'Immobilisation en recherche et développement',
              numero: [nbClasse, 2, 1],
              comptes: [
                {
                  titre: 'Immobilisation en recherche et développement',
                  numero: [nbClasse, 2, 1, 0]
                }
              ]
            },
            {
              titre: 'Brevets, marques, droits et valeurs similaires',
              numero: [nbClasse, 2, 2],
              comptes: [
                {
                  titre: 'Brevets, marques, droits et valeurs similaires',
                  numero: [nbClasse, 2, 2, 0]
                }
              ]
            },
            {
              titre: 'Fonds commercial',
              numero: [nbClasse, 2, 3],
              comptes: [
                {
                  titre: 'Fonds commercial',
                  numero: [nbClasse, 2, 3, 0]
                }
              ]
            },
            {
              titre: 'Autres immobilisations incorporelles',
              numero: [nbClasse, 2, 8],
              comptes: [
                {
                  titre: 'Autres immobilisations incorporelles',
                  numero: [nbClasse, 2, 8, 5]
                }
              ]
            }
          ]
        },
        {
          titre: 'Immobilisations corporelles',
          numero: [nbClasse, 3],
          postes: [
            {
              titre: 'Terrains',
              numero: [nbClasse, 3, 1],
              comptes: [
                { titre: 'Terrains nus', numero: [nbClasse, 3, 1, 1] },
                { titre: 'Terrains aménagés', numero: [nbClasse, 3, 1, 2] },
                { titre: 'Terrains bâtis', numero: [nbClasse, 3, 1, 3] },
                { titre: 'Terrains de gisement', numero: [nbClasse, 3, 1, 4] },
                {
                  titre: 'Agencements et aménagements de terrains',
                  numero: [nbClasse, 3, 1, 6]
                },
                { titre: 'Autres terrains', numero: [nbClasse, 3, 1, 8] }
              ]
            },
            {
              titre: 'Constructions',
              numero: [nbClasse, 3, 2],
              comptes: [
                {
                  titre: 'Bâtiments',
                  numero: [nbClasse, 3, 2, 1],
                  sous_comptes: [
                    {
                      titre: 'Bâtiments industriels [A, B...]',
                      numero: [nbClasse, 3, 2, 1, 1]
                    },
                    {
                      titre:
                        'Bâtiments administratifs et commerciaux [A, B...]',
                      numero: [nbClasse, 3, 2, 1, 4]
                    },
                    {
                      titre: 'Autres bâtiments',
                      numero: [nbClasse, 3, 2, 1, 8]
                    }
                  ]
                },
                {
                  titre: "Constructions sur terrains d'autrui",
                  numero: [nbClasse, 3, 2, 3]
                },
                {
                  titre: "Ouvrages d'infrastructure",
                  numero: [nbClasse, 3, 2, 5]
                },
                {
                  titre: 'Agencements et aménagements des constructions',
                  numero: [nbClasse, 3, 2, 7]
                },
                {
                  titre: 'Autres constructions',
                  numero: [nbClasse, 3, 2, 8]
                }
              ]
            },
            {
              titre: 'Installations techniques, matériel et outillage',
              numero: [nbClasse, 3, 3],
              comptes: [
                {
                  titre: 'Installations techniques',
                  numero: [nbClasse, 3, 3, 1]
                },
                {
                  titre: "Ouvrages d'infrastructure",
                  numero: [nbClasse, 3, 3, 2],
                  sous_comptes: [
                    {
                      titre: 'Matériel',
                      numero: [nbClasse, 3, 3, 2, 1]
                    },
                    {
                      titre: 'Outillage',
                      numero: [nbClasse, 3, 3, 2, 4]
                    }
                  ]
                },
                {
                  titre: 'Agencements et aménagements des constructions',
                  numero: [nbClasse, 3, 3, 3]
                },
                {
                  titre:
                    'Autres installations techniques, matériel et outillage',
                  numero: [nbClasse, 3, 3, 8]
                }
              ]
            },
            {
              titre: 'Matériel de transport',
              numero: [nbClasse, 3, 4],
              comptes: [
                {
                  titre: 'Matériel de transport',
                  numero: [nbClasse, 3, 4, 0]
                }
              ]
            },
            {
              titre: 'Mobilier, matériel de bureau et aménag. divers',
              numero: [nbClasse, 3, 5],
              comptes: [
                {
                  titre: 'Mobilier de bureau',
                  numero: [nbClasse, 3, 5, 1]
                },
                {
                  titre: 'Matériel de bureau',
                  numero: [nbClasse, 3, 5, 2]
                },
                {
                  titre: 'Matériel informatique',
                  numero: [nbClasse, 3, 5, 5]
                },
                {
                  titre:
                    "Agencements, installations et aménagements divers (de biens n'appartenant pas à l'entreprise",
                  numero: [nbClasse, 3, 5, 6]
                },
                {
                  titre:
                    'Autres mobilier, matériel de bureau et aménag. divers',
                  numero: [nbClasse, 3, 5, 8]
                }
              ]
            },
            {
              titre: 'Autres immobilisations corporelles',
              numero: [nbClasse, 3, 8],
              comptes: [
                {
                  titre: 'Autres immobilisations corporelles',
                  numero: [nbClasse, 3, 8, 0]
                }
              ]
            },
            {
              titre: 'Immobilisations corporelles en cours',
              numero: [nbClasse, 3, 9],
              comptes: [
                {
                  titre: 'Immobil. corp. en cours de terrains et constructions',
                  numero: [nbClasse, 3, 9, 2]
                },
                {
                  titre:
                    'Immobilisations corporelles en cours des installations techniques, matériel et outillage',
                  numero: [nbClasse, 3, 9, 3]
                },
                {
                  titre: 'Immobil. corp. en cours de matériel de transports',
                  numero: [nbClasse, 3, 9, 4]
                },

                {
                  titre:
                    'Immobilisations corporelles en cours de mobilier, matériel de bureau et aménagements divers',
                  numero: [nbClasse, 3, 9, 5]
                },
                {
                  titre:
                    "Avances et acomptes versés sur commandes d'immoblisations corporelles",
                  numero: [nbClasse, 3, 9, 7]
                },
                {
                  titre: 'Autres immobilisations corporelles en cours',
                  numero: [nbClasse, 3, 9, 8]
                }
              ]
            }
          ]
        },
        {
          titre: 'Immobilisations financières',
          numero: [
            [nbClasse, 4],
            [nbClasse, 5]
          ],
          postes: [
            {
              titre: 'Prêts immobiliés',
              numero: [nbClasse, 4, 1],
              comptes: [
                {
                  titre: 'Prêts au personnel',
                  numero: [nbClasse, 4, 1, 1]
                },
                {
                  titre: 'Prêts aux associés',
                  numero: [nbClasse, 4, 1, 5]
                },
                {
                  titre: 'Billets de fonds',
                  numero: [nbClasse, 4, 1, 6]
                },
                {
                  titre: 'Autres prêts',
                  numero: [nbClasse, 4, 1, 8]
                }
              ]
            },
            {
              titre: 'Autres créances financières',
              numero: [nbClasse, 4, 8],
              comptes: [
                {
                  titre: 'Titres immobilisés (droits de créance)',
                  numero: [nbClasse, 4, 8, 1],
                  sous_comptes: [
                    { titre: 'Obligations', numero: [nbClasse, 4, 8, 1, 1] },
                    {
                      titre: "Bons d'équipements",
                      numero: [nbClasse, 4, 8, 1, 3]
                    },
                    { titre: 'Bons divers', numero: [nbClasse, 4, 8, 1, 8] }
                  ]
                },
                {
                  titre: 'Créances rattachées à des participations',
                  numero: [nbClasse, 4, 8, 3]
                },
                {
                  titre: 'Dépôts et cautionnements versés',
                  numero: [nbClasse, 4, 8, 6],
                  sous_comptes: [
                    { titre: 'Dépôts', numero: [nbClasse, 4, 8, 6, 1] },
                    {
                      titre: 'Cautionnements',
                      numero: [nbClasse, 4, 8, 6, 4]
                    }
                  ]
                },
                {
                  titre: 'Créances immobilisées',
                  numero: [nbClasse, 4, 8, 7]
                },
                {
                  titre: 'Créances financières diverses',
                  numero: [nbClasse, 4, 8, 8]
                }
              ]
            },
            {
              titre: 'Titres de participation',
              numero: [nbClasse, 5, 1],
              comptes: [
                {
                  titre: 'Titres de participation',
                  numero: [nbClasse, 5, 1, 0]
                }
              ]
            },
            {
              titre: 'Autres titres immobilisés (Droits de propriété)',
              numero: [nbClasse, 5, 8],
              comptes: [
                {
                  titre: 'Autres immobilisations incorporelles',
                  numero: [nbClasse, 5, 8, 1]
                },
                {
                  titre: 'Titres divers',
                  numero: [nbClasse, 5, 8, 8]
                }
              ]
            }
          ]
        },
        {
          titre: 'Écart de conversion-actif',
          numero: [nbClasse, 7],
          postes: [
            {
              titre: 'Diminution des créances immobilisées',
              numero: [nbClasse, 7, 1],
              comptes: [
                {
                  titre: 'Diminution des créances immobilisées',
                  numero: [nbClasse, 7, 1, 0]
                }
              ]
            },
            {
              titre: 'Augmentation des dettes de financement',
              numero: [nbClasse, 7, 2],
              comptes: [
                {
                  titre: 'Augmentation des dettes de financement',
                  numero: [nbClasse, 7, 2, 0]
                }
              ]
            }
          ]
        },
        {
          titre: 'Amortissements des immobilisations',
          numero: [nbClasse, 8],
          postes: [
            {
              titre: 'Amortissements des non-valeurs',
              numero: [nbClasse, 8, 1],
              comptes: [
                {
                  titre: 'Amortissements des Frais préliminaires',
                  numero: [nbClasse, 8, 1, 1],
                  sous_comptes: [
                    {
                      titre: 'Amortissements des Frais de constitution',
                      numero: [nbClasse, 8, 1, 1, 1]
                    },
                    {
                      titre: 'Amort. Frais préliminaires au démarrage',
                      numero: [nbClasse, 8, 1, 1, 2]
                    },
                    {
                      titre: "Amort. Frais d'augmentation du capital",
                      numero: [nbClasse, 8, 1, 1, 3]
                    },
                    {
                      titre:
                        'Amortissements des Frais sur opérations des fusions, scissions et transformations',
                      numero: [nbClasse, 8, 1, 1, 4]
                    },
                    {
                      titre: 'Amortissements des Frais de prospection',
                      numero: [nbClasse, 8, 1, 1, 6]
                    },
                    {
                      titre: 'Amortissements des Frais de publicité',
                      numero: [nbClasse, 8, 1, 1, 7]
                    },
                    {
                      titre: 'Amortissements des autres Frais préliminaires',
                      numero: [nbClasse, 8, 1, 1, 8]
                    }
                  ]
                },
                {
                  titre: 'Augmentation des Charges à répartir',
                  numero: [nbClasse, 8, 1, 2],
                  sous_comptes: [
                    {
                      titre: "Amort. Frais d'acquisition des immobilisations",
                      numero: [nbClasse, 8, 1, 2, 1]
                    },
                    {
                      titre: "Amort. Frais d'émission des emprunts",
                      numero: [nbClasse, 8, 1, 2, 5]
                    },
                    {
                      titre: 'Amortissements des autres charges à répartir',
                      numero: [nbClasse, 8, 1, 2, 8]
                    }
                  ]
                },
                {
                  titre: 'Amort. Primes de remboursement des obligations',
                  numero: [nbClasse, 8, 1, 3]
                }
              ]
            },
            {
              titre: 'Amortissements des immobilisations incorporelles',
              numero: [nbClasse, 8, 2],
              comptes: [
                {
                  titre: "Amort. de l'immobil. en recherche et développement",
                  numero: [nbClasse, 8, 2, 1]
                },
                {
                  titre:
                    'Amort. des brevets, marques, droits et valeurs similaires',
                  numero: [nbClasse, 8, 2, 2]
                },
                {
                  titre: 'Amortissements du fond commercial',
                  numero: [nbClasse, 8, 2, 3]
                },
                {
                  titre: 'Amort. des autres immobilisations incorporelles',
                  numero: [nbClasse, 8, 2, 8]
                }
              ]
            },
            {
              titre: 'Amortissements des immobilisations corporelles',
              numero: [nbClasse, 8, 3],
              comptes: [
                {
                  titre: 'Amortissements des terrains',
                  numero: [nbClasse, 8, 3, 1],
                  sous_comptes: [
                    {
                      titre: 'Amortissements des terrains nus',
                      numero: [nbClasse, 8, 3, 1, 1]
                    },
                    {
                      titre: 'Amortissements des terrains aménagés',
                      numero: [nbClasse, 8, 3, 1, 2]
                    },
                    {
                      titre: 'Amortissements des terrains bâtis',
                      numero: [nbClasse, 8, 3, 1, 3]
                    },
                    {
                      titre: 'Amortissements des terrains de gisement',
                      numero: [nbClasse, 8, 3, 1, 4]
                    },
                    {
                      titre:
                        'Amortissements des agencements et aménagements de terrains',
                      numero: [nbClasse, 8, 3, 1, 6]
                    },
                    {
                      titre: 'Amortissements des autres terrains',
                      numero: [nbClasse, 8, 3, 1, 8]
                    }
                  ]
                },
                {
                  titre: 'Amortissements des constructions',
                  numero: [nbClasse, 8, 3, 2],
                  sous_comptes: [
                    {
                      titre: 'Amortissements des bâtiments',
                      numero: [nbClasse, 8, 3, 1, 1]
                    },
                    {
                      titre: "Amort. des constructions sur terrains d'autrui",
                      numero: [nbClasse, 8, 3, 1, 2]
                    },
                    {
                      titre: "Amortissements des ouvrages d'infrastructure",
                      numero: [nbClasse, 8, 3, 1, 5]
                    },
                    {
                      titre:
                        'Amortissements des installations, agencements et aménagements des constructions',
                      numero: [nbClasse, 8, 3, 1, 7]
                    },
                    {
                      titre: 'Amortissements des autres constructions',
                      numero: [nbClasse, 8, 3, 1, 8]
                    }
                  ]
                },
                {
                  titre:
                    'Amort. des installations techniques, matériel et outillage',
                  numero: [nbClasse, 8, 3, 3],
                  sous_comptes: [
                    {
                      titre: 'Amortissements des installations techniques',
                      numero: [nbClasse, 8, 3, 3, 1]
                    },
                    {
                      titre: 'Amortissements du matériel et outillage',
                      numero: [nbClasse, 8, 3, 3, 2]
                    },
                    {
                      titre: 'Amort. emballages récupérables identifiables',
                      numero: [nbClasse, 8, 3, 3, 3]
                    },
                    {
                      titre:
                        'Amortissements des autres installations techniques, matériel et outillage',
                      numero: [nbClasse, 8, 3, 1, 8]
                    }
                  ]
                },
                {
                  titre: 'Amortissements du matériel de transport',
                  numero: [nbClasse, 8, 3, 4]
                },
                {
                  titre:
                    'Amortissements du mobilier, matériel de bureau et aménagements divers',
                  numero: [nbClasse, 8, 3, 5],
                  sous_comptes: [
                    {
                      titre: 'Amortissements du mobilier de bureau',
                      numero: [nbClasse, 8, 3, 5, 1]
                    },
                    {
                      titre: 'Amortissements du matériel de bureau',
                      numero: [nbClasse, 8, 3, 5, 2]
                    },
                    {
                      titre: 'Amortissements du matériel informatique',
                      numero: [nbClasse, 8, 3, 5, 5]
                    },
                    {
                      titre:
                        'Amortissements des agencements, installations et aménagements divers',
                      numero: [nbClasse, 8, 3, 5, 6]
                    },
                    {
                      titre:
                        'Amortissements des autres mobiliers, matériel de bureau aménagements divers',
                      numero: [nbClasse, 8, 3, 5, 8]
                    }
                  ]
                },
                {
                  titre:
                    'Amortissements des autres immobilisations corporelles',
                  numero: [nbClasse, 8, 3, 8]
                }
              ]
            }
          ]
        },
        {
          titre: 'Provisions pour dépréciation des immobilisations',
          numero: [nbClasse, 9],
          postes: [
            {
              titre: 'Provisions p. dépréc. des immobil. incorporelles',
              numero: [nbClasse, 9, 2],
              comptes: [
                {
                  titre: 'Provisions p. dépréc. des immobil. incorporelles',
                  numero: [nbClasse, 9, 2, 0]
                }
              ]
            },
            {
              titre: 'Provisions p. dépréc. des immobil. corporelles',
              numero: [nbClasse, 9, 3],
              comptes: [
                {
                  titre: 'Provisions p. dépréc. des immobil. corporelles',
                  numero: [nbClasse, 9, 3, 0]
                }
              ]
            },
            {
              titre: 'Provisions p. dépréc. immobil. financières',
              numero: [
                [nbClasse, 9, 4],
                [nbClasse, 9, 5]
              ],
              comptes: [
                {
                  titre: 'Provisions pour dépréciation des prêts immobilisés ',
                  numero: [nbClasse, 9, 4, 1]
                },
                {
                  titre: 'Provisions p. dépréc. autres créances financières',
                  numero: [nbClasse, 9, 4, 8]
                },
                {
                  titre:
                    'Provisions pour dépréciation des titres de participations',
                  numero: [nbClasse, 9, 5, 1]
                },
                {
                  titre: 'Provisions p. dépréc. des autres titres immobilisés',
                  numero: [nbClasse, 9, 5, 8]
                }
              ]
            }
          ]
        }
      ]
    },
    3: { titre: '', numero: [nbClasse], rubriques: [] },
    4: { titre: '', numero: [nbClasse], rubriques: [] },
    5: { titre: '', numero: [nbClasse], rubriques: [] },
    6: { titre: '', numero: [nbClasse], rubriques: [] },
    7: { titre: '', numero: [nbClasse], rubriques: [] },
    8: { titre: '', numero: [nbClasse], rubriques: [] },
    9: { titre: '', numero: [nbClasse], rubriques: [] },
    0: { titre: '', numero: [nbClasse], rubriques: [] }
  }

  return current[nbClasse]
}
