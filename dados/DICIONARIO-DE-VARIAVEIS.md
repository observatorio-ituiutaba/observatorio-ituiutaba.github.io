# Dicionário de variáveis

Observatório de Segurança Pública — Ituiutaba/MG
Fonte primária: Sistema Integrado de Defesa Social (SIDS/REDS) — Polícia Militar de Minas Gerais

---

## `microdados-violencia-domestica-ituiutaba-2014-2025.csv`

5.392 registros individuais. Codificação UTF-8 com BOM, separador vírgula.

| Variável | Tipo | Descrição |
|---|---|---|
| `municipio_cod` | inteiro | Código do município no registro de origem (313420 — Ituiutaba/MG) |
| `municipio_fato` | texto | Município de ocorrência do fato |
| `data_fato` | data (AAAA-MM-DD) | Data do fato registrado |
| `mes` | inteiro (1–12) | Mês de referência |
| `ano` | inteiro | Ano de referência |
| `natureza_delito` | texto | Natureza do delito conforme classificação no momento do registro |
| `tentado_consumado` | texto | Consumação do fato. **Atenção:** os rótulos variam entre anos — `CONSUMADO` / `TENTADO` nos registros até 2024, e `S` / `N` em 2025. Trate os dois esquemas antes de agregar. |
| `qtde_vitimas` | inteiro | Número de vítimas envolvidas na ocorrência |

## `serie-lesao-corporal-ituiutaba-2014-2025.csv`

Agregado anual dos registros de lesão corporal.

| Variável | Descrição |
|---|---|
| `ano` | Ano de referência |
| `registros` | Número de ocorrências registradas |
| `vitimas` | Soma de `qtde_vitimas` |
| `meses_cobertos` | Quantos meses do ano têm dado na base (12 em todos os anos, exceto 2023) |
| `media_mensal` | `registros ÷ meses_cobertos` — **use esta coluna para comparar anos** |
| `total_registros_vd` | Total de registros de violência doméstica no ano, todas as naturezas |

## `registros-por-natureza-ituiutaba-2014-2025.csv`

Tabela cruzada: uma linha por ano, uma coluna por natureza do delito. 77 naturezas distintas aparecem na série.

---

## Advertências de uso

**1. Cobertura incompleta em 2023.** A base contém apenas janeiro a julho de 2023. Comparações interanuais devem usar média mensal. Comparar totais brutos produz uma queda artificial de cerca de 42%.

**2. Sem perfil da vítima.** Não há sexo, idade, raça ou cor, nem o vínculo entre autor e vítima. Não é possível isolar os casos abrangidos pela Lei nº 11.340/2006 nem afirmar a proporção de vítimas mulheres.

**3. Classificação preliminar.** A natureza do delito é o enquadramento feito no atendimento da ocorrência, em geral antes do exame de corpo de delito. Lesão corporal e vias de fato trocam de categoria com frequência. A base não é atualizada retroativamente.

**4. Subnotificação.** Os dados refletem ocorrências registradas, não a totalidade dos episódios ocorridos no município.

**5. Rótulos que mudam entre anos.** Além de `tentado_consumado`, as colunas `risp` e `rmbh` da base original também mudaram de formato ao longo da série. Elas foram removidas destes microdados por não agregarem informação analítica ao recorte municipal.

---

## Licença

Dados originais de domínio público, produzidos pela Polícia Militar de Minas Gerais.
Tratamento, consolidação e documentação: Observatório de Segurança Pública — Ituiutaba/MG.

Uso livre, inclusive comercial, mediante citação da fonte:

> OBSERVATÓRIO DE SEGURANÇA PÚBLICA — ITUIUTABA/MG. *Microdados de violência doméstica e familiar em Ituiutaba (MG), 2014–2025*. Dados originais: SIDS/REDS, Polícia Militar de Minas Gerais. Ituiutaba, 2026.
