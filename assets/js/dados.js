/* ==========================================================================
   DADOS DO OBSERVATÓRIO

   Este é o único arquivo que precisa ser editado quando chegarem dados novos.
   Os gráficos do painel e a grade da página inicial leem tudo daqui.

   COMO ATUALIZAR:
   1. Acrescente o ano em `anos`.
   2. Acrescente os 12 valores mensais em `mensal` (use null para mês sem dado).
   3. Acrescente os totais em `porNatureza` e `vitimas`.
   Os totais anuais e as médias mensais são calculados automaticamente.
   ========================================================================== */

const DADOS = {

  municipio: "Ituiutaba (MG)",
  populacao: 102217,          // IBGE, Censo 2022
  fonte: "SIDS/REDS — Polícia Militar de Minas Gerais",
  atualizado: "setembro de 2026",

  anos: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025],

  // Registros de LESÃO CORPORAL por mês. null = mês sem dado na base.
  mensal: {
    2014: [ 9,  9, 14, 12, 10, 12,  6,  8, 10, 17,  8, 11],
    2015: [12,  4, 12, 11, 10,  7,  8,  7,  9,  9, 14, 11],
    2016: [10,  9,  6,  8, 10,  4,  8, 11,  8,  8, 11,  5],
    2017: [10,  7, 16,  5,  9,  7,  8, 11,  9, 12, 12, 11],
    2018: [ 8,  6, 12,  4, 10, 10,  5,  7, 11, 10, 13, 14],
    2019: [ 9, 12,  7,  6,  5,  7, 11,  8, 11,  9,  8, 10],
    2020: [ 7, 10, 13,  8,  7,  9,  4, 10,  6, 10,  8,  8],
    2021: [ 8,  9,  6,  6,  5,  3,  2,  8,  9,  8, 11, 12],
    2022: [ 9,  5, 11,  9,  1,  3,  1,  7, 11, 10,  7,  7],
    2023: [ 9, 10,  9,  8,  4, 10, 10, null, null, null, null, null],
    2024: [ 9,  9, 12,  8,  6, 10,  4,  4, 10,  6,  9,  6],
    2025: [ 7,  8,  9,  8,  4,  8,  9, 10, 10,  9, 13,  5]
  },

  // Vítimas envolvidas nos registros de lesão corporal, por ano.
  vitimas: [163, 146, 118, 150, 139, 133, 119, 113, 96, 67, 114, 129],

  // Registros por natureza do delito, por ano.
  porNatureza: {
    "Ameaça":                       [186, 141, 147, 156, 160, 168, 140, 158, 148,  82, 136, 160],
    "Lesão corporal":               [126, 114,  98, 117, 110, 103, 100,  87,  81,  60,  93, 100],
    "Vias de fato / agressão":      [111,  99,  86,  80,  91,  78,  92,  96,  85,  30,  79,  80],
    "Descumprimento de protetiva":  [  0,   0,   0,   0,   0,   5,  12,   9,  11,  13,  21,  28]
  },

  // Total de registros de violência doméstica, todas as naturezas.
  totalGeral: [537, 437, 421, 442, 468, 466, 471, 467, 437, 261, 472, 513],

  // Ocorrências de lesão corporal por dia da semana, série completa.
  diaSemana: {
    "Domingo": 268, "Segunda": 165, "Terça": 133, "Quarta": 117,
    "Quinta": 126, "Sexta": 144, "Sábado": 236
  },

  // Anos com cobertura incompleta — sinalizados em todos os gráficos.
  parciais: { 2023: "janeiro a julho" }
};

/* --- Cálculos derivados. Não precisa editar nada daqui para baixo. --- */

DADOS.registros = DADOS.anos.map(a =>
  DADOS.mensal[a].reduce((s, v) => s + (v || 0), 0));

DADOS.mesesCobertos = DADOS.anos.map(a =>
  DADOS.mensal[a].filter(v => v !== null).length);

DADOS.mediaMensal = DADOS.anos.map((a, i) =>
  +(DADOS.registros[i] / DADOS.mesesCobertos[i]).toFixed(2));

DADOS.ehParcial = a => Object.prototype.hasOwnProperty.call(DADOS.parciais, a);

DADOS.rotuloAno = a => DADOS.ehParcial(a) ? a + "*" : String(a);
