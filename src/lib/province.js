/* eslint-disable */
/* https://gist.github.com/stockmind/8bcbbf9ac41bc196401b96084ec8c5d3 */
const province = [
  {
    'nome': 'Agrigento',
    'sigla': 'AG',
    'regione': 'Sicilia',
  },
  {
    'nome': 'Alessandria',
    'sigla': 'AL',
    'regione': 'Piemonte',
  },
  {
    'nome': 'Ancona',
    'sigla': 'AN',
    'regione': 'Marche',
  },
  {
    'nome': 'Arezzo',
    'sigla': 'AR',
    'regione': 'Toscana',
  },
  {
    'nome': 'Ascoli Piceno',
    'sigla': 'AP',
    'regione': 'Marche',
  },
  {
    'nome': 'Asti',
    'sigla': 'AT',
    'regione': 'Piemonte',
  },
  {
    'nome': 'Avellino',
    'sigla': 'AV',
    'regione': 'Campania',
  },
  {
    'nome': 'Bari',
    'sigla': 'BA',
    'regione': 'Puglia',
  },
  {
    'nome': 'Barletta-Andria-Trani',
    'sigla': 'BT',
    'regione': 'Puglia',
  },
  {
    'nome': 'Belluno',
    'sigla': 'BL',
    'regione': 'Veneto',
  },
  {
    'nome': 'Benevento',
    'sigla': 'BN',
    'regione': 'Campania',
  },
  {
    'nome': 'Bergamo',
    'sigla': 'BG',
    'regione': 'Lombardia',
  },
  {
    'nome': 'Biella',
    'sigla': 'BI',
    'regione': 'Piemonte',
  },
  {
    'nome': 'Bologna',
    'sigla': 'BO',
    'regione': 'Emilia-Romagna',
  },
  {
    'nome': 'Bolzano/Bozen',
    'sigla': 'BZ',
    'regione': 'Trentino-Alto Adige/Südtirol',
  },
  {
    'nome': 'Brescia',
    'sigla': 'BS',
    'regione': 'Lombardia',
  },
  {
    'nome': 'Brindisi',
    'sigla': 'BR',
    'regione': 'Puglia',
  },
  {
    'nome': 'Cagliari',
    'sigla': 'CA',
    'regione': 'Sardegna',
  },
  {
    'nome': 'Caltanissetta',
    'sigla': 'CL',
    'regione': 'Sicilia',
  },
  {
    'nome': 'Campobasso',
    'sigla': 'CB',
    'regione': 'Molise',
  },
  {
    'nome': 'Carbonia-Iglesias',
    'sigla': 'CI',
    'regione': 'Sardegna',
  },
  {
    'nome': 'Caserta',
    'sigla': 'CE',
    'regione': 'Campania',
  },
  {
    'nome': 'Catania',
    'sigla': 'CT',
    'regione': 'Sicilia',
  },
  {
    'nome': 'Catanzaro',
    'sigla': 'CZ',
    'regione': 'Calabria',
  },
  {
    'nome': 'Chieti',
    'sigla': 'CH',
    'regione': 'Abruzzo',
  },
  {
    'nome': 'Como',
    'sigla': 'CO',
    'regione': 'Lombardia',
  },
  {
    'nome': 'Cosenza',
    'sigla': 'CS',
    'regione': 'Calabria',
  },
  {
    'nome': 'Cremona',
    'sigla': 'CR',
    'regione': 'Lombardia',
  },
  {
    'nome': 'Crotone',
    'sigla': 'KR',
    'regione': 'Calabria',
  },
  {
    'nome': 'Cuneo',
    'sigla': 'CN',
    'regione': 'Piemonte',
  },
  {
    'nome': 'Enna',
    'sigla': 'EN',
    'regione': 'Sicilia',
  },
  {
    'nome': 'Fermo',
    'sigla': 'FM',
    'regione': 'Marche',
  },
  {
    'nome': 'Ferrara',
    'sigla': 'FE',
    'regione': 'Emilia-Romagna',
  },
  {
    'nome': 'Firenze',
    'sigla': 'FI',
    'regione': 'Toscana',
  },
  {
    'nome': 'Foggia',
    'sigla': 'FG',
    'regione': 'Puglia',
  },
  {
    'nome': 'Forlì-Cesena',
    'sigla': 'FC',
    'regione': 'Emilia-Romagna',
  },
  {
    'nome': 'Frosinone',
    'sigla': 'FR',
    'regione': 'Lazio',
  },
  {
    'nome': 'Genova',
    'sigla': 'GE',
    'regione': 'Liguria',
  },
  {
    'nome': 'Gorizia',
    'sigla': 'GO',
    'regione': 'Friuli-Venezia Giulia',
  },
  {
    'nome': 'Grosseto',
    'sigla': 'GR',
    'regione': 'Toscana',
  },
  {
    'nome': 'Imperia',
    'sigla': 'IM',
    'regione': 'Liguria',
  },
  {
    'nome': 'Isernia',
    'sigla': 'IS',
    'regione': 'Molise',
  },
  {
    'nome': "L'Aquila",
    'sigla': 'AQ',
    'regione': 'Abruzzo',
  },
  {
    'nome': 'La Spezia',
    'sigla': 'SP',
    'regione': 'Liguria',
  },
  {
    'nome': 'Latina',
    'sigla': 'LT',
    'regione': 'Lazio',
  },
  {
    'nome': 'Lecce',
    'sigla': 'LE',
    'regione': 'Puglia',
  },
  {
    'nome': 'Lecco',
    'sigla': 'LC',
    'regione': 'Lombardia',
  },
  {
    'nome': 'Livorno',
    'sigla': 'LI',
    'regione': 'Toscana',
  },
  {
    'nome': 'Lodi',
    'sigla': 'LO',
    'regione': 'Lombardia',
  },
  {
    'nome': 'Lucca',
    'sigla': 'LU',
    'regione': 'Toscana',
  },
  {
    'nome': 'Macerata',
    'sigla': 'MC',
    'regione': 'Marche',
  },
  {
    'nome': 'Mantova',
    'sigla': 'MN',
    'regione': 'Lombardia',
  },
  {
    'nome': 'Massa-Carrara',
    'sigla': 'MS',
    'regione': 'Toscana',
  },
  {
    'nome': 'Matera',
    'sigla': 'MT',
    'regione': 'Basilicata',
  },
  {
    'nome': 'Medio Campidano',
    'sigla': 'VS',
    'regione': 'Sardegna',
  },
  {
    'nome': 'Messina',
    'sigla': 'ME',
    'regione': 'Sicilia',
  },
  {
    'nome': 'Milano',
    'sigla': 'MI',
    'regione': 'Lombardia',
  },
  {
    'nome': 'Modena',
    'sigla': 'MO',
    'regione': 'Emilia-Romagna',
  },
  {
    'nome': 'Monza e della Brianza',
    'sigla': 'MB',
    'regione': 'Lombardia',
  },
  {
    'nome': 'Napoli',
    'sigla': 'NA',
    'regione': 'Campania',
  },
  {
    'nome': 'Novara',
    'sigla': 'NO',
    'regione': 'Piemonte',
  },
  {
    'nome': 'Nuoro',
    'sigla': 'NU',
    'regione': 'Sardegna',
  },
  {
    'nome': 'Ogliastra',
    'sigla': 'OG',
    'regione': 'Sardegna',
  },
  {
    'nome': 'Olbia-Tempio',
    'sigla': 'OT',
    'regione': 'Sardegna',
  },
  {
    'nome': 'Oristano',
    'sigla': 'OR',
    'regione': 'Sardegna',
  },
  {
    'nome': 'Padova',
    'sigla': 'PD',
    'regione': 'Veneto',
  },
  {
    'nome': 'Palermo',
    'sigla': 'PA',
    'regione': 'Sicilia',
  },
  {
    'nome': 'Parma',
    'sigla': 'PR',
    'regione': 'Emilia-Romagna',
  },
  {
    'nome': 'Pavia',
    'sigla': 'PV',
    'regione': 'Lombardia',
  },
  {
    'nome': 'Perugia',
    'sigla': 'PG',
    'regione': 'Umbria',
  },
  {
    'nome': 'Pesaro e Urbino',
    'sigla': 'PU',
    'regione': 'Marche',
  },
  {
    'nome': 'Pescara',
    'sigla': 'PE',
    'regione': 'Abruzzo',
  },
  {
    'nome': 'Piacenza',
    'sigla': 'PC',
    'regione': 'Emilia-Romagna',
  },
  {
    'nome': 'Pisa',
    'sigla': 'PI',
    'regione': 'Toscana',
  },
  {
    'nome': 'Pistoia',
    'sigla': 'PT',
    'regione': 'Toscana',
  },
  {
    'nome': 'Pordenone',
    'sigla': 'PN',
    'regione': 'Friuli-Venezia Giulia',
  },
  {
    'nome': 'Potenza',
    'sigla': 'PZ',
    'regione': 'Basilicata',
  },
  {
    'nome': 'Prato',
    'sigla': 'PO',
    'regione': 'Toscana',
  },
  {
    'nome': 'Ragusa',
    'sigla': 'RG',
    'regione': 'Sicilia',
  },
  {
    'nome': 'Ravenna',
    'sigla': 'RA',
    'regione': 'Emilia-Romagna',
  },
  {
    'nome': 'Reggio di Calabria',
    'sigla': 'RC',
    'regione': 'Calabria',
  },
  {
    'nome': "Reggio nell'Emilia",
    'sigla': 'RE',
    'regione': 'Emilia-Romagna',
  },
  {
    'nome': 'Rieti',
    'sigla': 'RI',
    'regione': 'Lazio',
  },
  {
    'nome': 'Rimini',
    'sigla': 'RN',
    'regione': 'Emilia-Romagna',
  },
  {
    'nome': 'Roma',
    'sigla': 'RM',
    'regione': 'Lazio',
  },
  {
    'nome': 'Rovigo',
    'sigla': 'RO',
    'regione': 'Veneto',
  },
  {
    'nome': 'Salerno',
    'sigla': 'SA',
    'regione': 'Campania',
  },
  {
    'nome': 'Sassari',
    'sigla': 'SS',
    'regione': 'Sardegna',
  },
  {
    'nome': 'Savona',
    'sigla': 'SV',
    'regione': 'Liguria',
  },
  {
    'nome': 'Siena',
    'sigla': 'SI',
    'regione': 'Toscana',
  },
  {
    'nome': 'Siracusa',
    'sigla': 'SR',
    'regione': 'Sicilia',
  },
  {
    'nome': 'Sondrio',
    'sigla': 'SO',
    'regione': 'Lombardia',
  },
  {
    'nome': 'Taranto',
    'sigla': 'TA',
    'regione': 'Puglia',
  },
  {
    'nome': 'Teramo',
    'sigla': 'TE',
    'regione': 'Abruzzo',
  },
  {
    'nome': 'Terni',
    'sigla': 'TR',
    'regione': 'Umbria',
  },
  {
    'nome': 'Torino',
    'sigla': 'TO',
    'regione': 'Piemonte',
  },
  {
    'nome': 'Trapani',
    'sigla': 'TP',
    'regione': 'Sicilia',
  },
  {
    'nome': 'Trento',
    'sigla': 'TN',
    'regione': 'Trentino-Alto Adige/Südtirol',
  },
  {
    'nome': 'Treviso',
    'sigla': 'TV',
    'regione': 'Veneto',
  },
  {
    'nome': 'Trieste',
    'sigla': 'TS',
    'regione': 'Friuli-Venezia Giulia',
  },
  {
    'nome': 'Udine',
    'sigla': 'UD',
    'regione': 'Friuli-Venezia Giulia',
  },
  {
    'nome': "Valle d'Aosta",
    'sigla': 'AO',
    'regione': "Valle d'Aosta",
  },
  {
    'nome': 'Varese',
    'sigla': 'VA',
    'regione': 'Lombardia',
  },
  {
    'nome': 'Venezia',
    'sigla': 'VE',
    'regione': 'Veneto',
  },
  {
    'nome': 'Verbano-Cusio-Ossola',
    'sigla': 'VB',
    'regione': 'Piemonte',
  },
  {
    'nome': 'Vercelli',
    'sigla': 'VC',
    'regione': 'Piemonte',
  },
  {
    'nome': 'Verona',
    'sigla': 'VR',
    'regione': 'Veneto',
  },
  {
    'nome': 'Vibo Valentia',
    'sigla': 'VV',
    'regione': 'Calabria',
  },
  {
    'nome': 'Vicenza',
    'sigla': 'VI',
    'regione': 'Veneto',
  },
  {
    'nome': 'Viterbo',
    'sigla': 'VT',
    'regione': 'Lazio',
  },
]

export default province
