# Paletas prontas

Para trocar a paleta, abra `assets/css/estilo.css` e substitua as nove primeiras
linhas do bloco `:root` por uma das opções abaixo. As linhas `--largura` e
`--prosa` ficam como estão — elas controlam largura, não cor.

Todas as opções foram montadas com contraste suficiente entre texto e fundo.
Se for inventar a sua própria, confira o contraste em https://webaim.org/resources/contrastchecker/

---

## Roxo (atual)

```css
  --papel:    #FCFAFE;
  --tinta:    #2B1740;
  --tinta-2:  #5B4470;
  --roxo:     #6B2E8F;
  --magenta:  #C4368C;
  --laranja:  #D9531E;
  --lavanda:  #EDE3F7;
  --lavanda-2:#F7F1FB;
  --lavanda-3:#C9A6E8;
  --borda:    #DCCBEC;
```

## Azul institucional

Mais próximo da identidade visual de órgãos públicos e universidades.

```css
  --papel:    #FAFBFD;
  --tinta:    #12233D;
  --tinta-2:  #4A5A72;
  --roxo:     #1D4E89;
  --magenta:  #C2185B;
  --laranja:  #D9531E;
  --lavanda:  #DEE8F4;
  --lavanda-2:#F0F5FA;
  --lavanda-3:#9FBEDC;
  --borda:    #C7D6E6;
```

## Verde sóbrio

Menos comum em observatórios de segurança, o que ajuda a distinguir o projeto.

```css
  --papel:    #FAFCFA;
  --tinta:    #152B22;
  --tinta-2:  #48604F;
  --roxo:     #1F6B4A;
  --magenta:  #B5561E;
  --laranja:  #C4521B;
  --lavanda:  #DCEBE2;
  --lavanda-2:#F0F7F2;
  --lavanda-3:#8FC0A4;
  --borda:    #C4DACC;
```

## Grafite e vermelho

O mais neutro. Deixa os dados carregarem a cor sozinhos.

```css
  --papel:    #FBFAFA;
  --tinta:    #1C1C1F;
  --tinta-2:  #55555C;
  --roxo:     #333338;
  --magenta:  #A8202E;
  --laranja:  #C4381F;
  --lavanda:  #E6E5E8;
  --lavanda-2:#F4F3F5;
  --lavanda-3:#A9A7AE;
  --borda:    #D3D1D6;
```

---

## O que cada variável controla

| Variável | Onde aparece |
|---|---|
| `--papel` | Fundo de todas as páginas |
| `--tinta` | Títulos e texto principal |
| `--tinta-2` | Texto secundário, legendas, rodapé, eixos dos gráficos |
| `--roxo` | Cor principal: links, botões, barras dos gráficos, símbolo, tom escuro da grade |
| `--magenta` | Série secundária nos gráficos, marcações de "confirmar" |
| `--laranja` | Faixa de emergência, telefones, alertas, barras de fim de semana |
| `--lavanda` | Fundos de destaque, tom claro da grade, aba ativa do menu |
| `--lavanda-2` | Fundo mais claro, caixas de citação, linhas de grade dos gráficos |
| `--lavanda-3` | Tom médio: séries secundárias, anos com cobertura parcial |
| `--borda` | Linhas de tabela e contornos de caixa |

## Um cuidado com a faixa laranja

A faixa de emergência no topo tem texto branco sobre `--laranja`. Se você
escolher um laranja ou amarelo mais claro, o texto fica ilegível — e é
justamente a faixa que precisa ser lida por quem está em situação de urgência.
Mantenha um tom escuro o bastante para o branco se destacar.
