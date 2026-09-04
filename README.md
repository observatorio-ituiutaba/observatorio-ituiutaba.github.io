# Site do Observatório de Segurança Pública — Ituiutaba/MG

Site estático, sem banco de dados e sem processo de build. São arquivos HTML, CSS e JavaScript comuns: o que está aqui é exatamente o que vai para o ar.

---

## Parte 1 — Colocar no ar pela primeira vez

Leva uns quinze minutos e não exige terminal. Tudo pela interface do GitHub.

### 1. Criar a conta, a organização e o repositório

1. Crie uma conta em [github.com](https://github.com), se ainda não tiver.

2. **Crie uma organização.** Clique no seu avatar (canto superior direito) → **Your organizations** → **New organization** → escolha o plano **Free**.
   Em **Organization name**, use `observatorio-ituiutaba`. Esse nome vai virar o endereço do site, então escolha com calma: só letras minúsculas, números e hífen, e precisa estar livre no GitHub inteiro. Se estiver ocupado, tente `observatorio-vd-ituiutaba` ou similar.

   A organização é gratuita e serve a dois propósitos. Ela tira seu nome de usuário pessoal do endereço, e permite adicionar outras pessoas como membros com permissão de editar — o projeto deixa de estar preso à sua conta pessoal.

3. **Crie o repositório dentro da organização.** Na página da organização, clique em **New repository**.

4. Em **Repository name**, escreva `observatorio-ituiutaba.github.io` — **o nome da organização, seguido de `.github.io`**. Precisa ser exatamente isso, tudo em minúsculas.

   Esse nome não é decorativo. Um repositório assim nomeado é reconhecido pelo GitHub como o site principal da conta e publicado na raiz do endereço:

   `https://observatorio-ituiutaba.github.io`

   Qualquer outro nome de repositório produziria `https://observatorio-ituiutaba.github.io/nome-do-repositorio` — funciona igual, mas o endereço fica mais comprido.

5. Marque **Public**. Precisa ser público para o GitHub Pages funcionar no plano gratuito.

6. Clique em **Create repository**.

> **Quer manter seu e-mail fora do GitHub?** Em **Settings → Emails**, marque *Keep my email addresses private*. O e-mail nunca aparece no endereço do site, mas essa opção o esconde também das outras partes da plataforma.

### 2. Subir os arquivos

**As pastas vão inteiras.** Você arrasta as pastas `assets`, `boletins` e `dados` como pastas mesmo, com tudo dentro — a estrutura precisa ser preservada, senão os links quebram.

O que não deve ir é a pasta de fora, aquela que apareceu quando você descompactou o zip. Se ela subir junto, tudo fica um nível mais fundo e o site não abre.

Depois de descompactar, você tem algo assim:

```
site-observatorio-ituiutaba/     ← esta pasta NÃO sobe
├── index.html                   ← daqui
├── boletins.html                     para
├── painel.html                       baixo,
├── dados.html                        tudo
├── equipe.html                       sobe
├── ajuda.html
├── README.md
├── .nojekyll
├── assets/                      ← sobe como pasta, com tudo dentro
├── boletins/                    ← sobe como pasta, com tudo dentro
└── dados/                       ← sobe como pasta, com tudo dentro
```

Na prática:

1. Na página do repositório vazio, clique em **uploading an existing file**.
2. Abra a pasta `site-observatorio-ituiutaba`, selecione tudo que está dentro dela (`Ctrl+A` no Windows, `Cmd+A` no Mac) e arraste para a área de upload do GitHub. As três pastas sobem com o conteúdo intacto.
3. Escreva algo em **Commit changes** (por exemplo, "primeira versão do site") e confirme.

**Como saber se deu certo:** ao terminar, a página inicial do repositório deve mostrar `index.html` na lista, junto com as pastas `assets`, `boletins` e `dados`. Se em vez disso aparecer uma única pasta chamada `site-observatorio-ituiutaba`, foi a pasta de fora que subiu — apague tudo e repita o passo 2.

> O arquivo `.nojekyll` é invisível em alguns sistemas. No Mac, aperte `Cmd+Shift+.` no Finder para mostrá-lo; no Windows, ative "Itens ocultos" na aba Exibir. Se ele não subir, o site funciona do mesmo jeito — ele é só uma garantia contra o GitHub tentar processar os arquivos.

### 3. Ligar o GitHub Pages

1. No repositório, vá em **Settings** → **Pages** (menu da esquerda).
2. Em **Source**, escolha **Deploy from a branch**.
3. Em **Branch**, escolha `main` e a pasta `/ (root)`. Clique em **Save**.
4. Espere de um a dois minutos e recarregue a página. Vai aparecer o endereço:

   `https://observatorio-ituiutaba.github.io`

Pronto, está no ar.

### 4. Domínio próprio (opcional, e provavelmente desnecessário)

O endereço acima é gratuito, permanente e já vem com HTTPS. Não há pressa nenhuma em trocá-lo.

Se um dia o observatório quiser um endereço como `observatorioituiutaba.com.br`, o caminho é registrá-lo no [registro.br](https://registro.br) por R$ 40 por ano, editar os registros de DNS no painel deles apontando para os servidores do GitHub, e escrever o domínio em **Settings → Pages → Custom domain**.

Duas coisas que vale saber antes:

- **O domínio custa; o certificado HTTPS não.** O GitHub emite e renova o cadeado de segurança sozinho, sem cobrar. O que se paga é a anuidade do domínio, sob pena de perdê-lo.
- **Cuidado com o `.org.br`.** Ele é restrito a entidades sem fins lucrativos e exige envio de CNPJ e do estatuto social. Sem CNPJ próprio, o caminho é o `.com.br`, que aceita CPF.

Trocar depois é indolor: o GitHub redireciona o endereço antigo para o novo, então links já divulgados continuam funcionando.

Antes de gastar, vale perguntar ao setor de TI da universidade se cedem um subdomínio institucional. É só um apontamento de DNS para o GitHub Pages, não custa nada, e um endereço institucional dá mais peso ao trabalho que qualquer domínio comprado.

### 5. Já publiquei na conta pessoal. E agora?

Se o site foi ao ar num endereço com seu nome de usuário — algo como `https://seuusuario.github.io/observatorio-ituiutaba/` — não precisa refazer nada. O repositório pode ser transferido para uma organização com os arquivos, o histórico e tudo o mais.

1. Confira se o nome está livre abrindo `github.com/observatorio-ituiutaba` no navegador. Página não encontrada significa disponível.
2. Crie a organização, como descrito no passo 1 desta parte.
3. No repositório atual, vá em **Settings** → role até o fim → em **Danger Zone**, clique em **Transfer ownership** e escolha a organização.
4. Já dentro da organização, em **Settings** → **General**, mude o **Repository name** para `observatorio-ituiutaba.github.io` e clique em **Rename**.
5. Em **Settings** → **Pages**, confira se a origem continua em `main` / `/ (root)`. A transferência às vezes limpa essa configuração — se estiver vazia, selecione de novo e salve.

O endereço antigo para de funcionar. Se ele já tiver sido divulgado em algum lugar, avise as pessoas ou espere um momento melhor para fazer a troca.

---

## Parte 2 — Antes de divulgar o endereço

Cinco coisas precisam ser preenchidas. Todas são edições de texto: abra o arquivo no GitHub, clique no ícone de lápis, altere e confirme.

| Onde | O que fazer |
|---|---|
| `equipe.html` | Substituir os `[Nome completo]` e `[Instituição de vínculo]` pelos dados reais |
| `ajuda.html` | **Confirmar cada telefone, endereço e horário com o serviço.** Depois, apagar as linhas com `class="conferir"` |
| Todos os arquivos | Trocar `contato@exemplo.br` pelo e-mail real (aparece no rodapé de todas as páginas e nas páginas `equipe` e `dados`) |
| `index.html` e demais | Ajustar o nome do observatório, se o oficial for outro |
| Nome do observatório | Ele aparece em 25 lugares. Veja "Trocar o nome do observatório" na Parte 5 |
| Rodapé | Atualizar "Última atualização: setembro de 2026" quando publicar |

A página `ajuda.html` é a mais importante dessa lista. Um telefone errado ali é pior do que não ter a página.

---

## Parte 3 — Publicar um boletim novo

Três passos.

1. **Suba o PDF** na pasta `boletins/`. Use um nome sem espaços nem acentos, seguindo o padrão: `Boletim-Tecnico-02-Ameaca-Ituiutaba.pdf`.

2. **Abra `boletins.html`** e copie um bloco `<div class="boletim">` existente, colando-o no topo da seção "Publicados". Ajuste o número, o título, a data e o texto. Se o boletim estava listado em "Em preparação", apague o bloco de lá.

3. **Abra `index.html`** e atualize o bloco "Publicação mais recente" para apontar para o novo.

---

## Parte 4 — Atualizar os dados

Quando chegar mais um ano de dados, ou quando os meses faltantes de 2023 aparecerem:

### O arquivo que você edita

**`assets/js/dados.js`** — é o único. Os quatro gráficos do painel, a grade da página inicial e a tabela da página do painel leem tudo dali. Nenhum número está escrito em dois lugares.

Para acrescentar um ano, adicione:

- o ano na lista `anos`;
- os doze valores mensais em `mensal` (use `null` para mês sem dado);
- o total de vítimas em `vitimas`;
- os valores de cada natureza em `porNatureza`;
- o total do ano em `totalGeral`.

Os totais anuais e as médias mensais são calculados sozinhos.

Se um ano tiver cobertura parcial, acrescente-o em `parciais`. Ele passa a aparecer com asterisco e em tom mais claro em todos os gráficos, automaticamente.

### Os CSVs

Substitua os arquivos da pasta `dados/` pelas versões novas, mantendo os mesmos nomes — assim os links não quebram. Atualize também o `DICIONARIO-DE-VARIAVEIS.md` se alguma coluna mudar.

### Os números escritos no texto

Alguns números aparecem em prosa (na página inicial, nos boletins listados). Esses são manuais. Faça uma busca por "1.189", "5.392" e "42,4%" nos arquivos `.html` para achá-los.

---

## Trocar as cores do site

Todas as cores saem de um bloco só: o `:root` no topo de `assets/css/estilo.css`. Ele alimenta as seis páginas, os gráficos do painel, a grade da página inicial e o símbolo do cabeçalho. Não há cor escrita em nenhum outro arquivo.

O arquivo `PALETAS-PRONTAS.md` traz quatro combinações testadas, prontas para colar, e uma tabela explicando o que cada variável controla.

Para testar antes de publicar, edite o CSS no seu computador e abra o `index.html` no navegador — a mudança aparece na hora, sem precisar subir nada. Só depois de gostar do resultado envie o arquivo para o GitHub.

Um cuidado: a faixa de emergência no topo tem texto branco sobre `--laranja`. Se essa cor ficar clara demais, o texto some — e é a faixa que precisa ser lida por quem está em urgência.

---

## Trocar o nome do observatório

O nome aparece em 25 lugares, espalhados por seis páginas e dois arquivos de documentação. Se um dia ele mudar, o caminho mais seguro é usar a busca do GitHub para não esquecer nenhum.

1. No repositório, aperte a tecla `/` ou clique na barra de busca no topo.
2. Procure pelo nome antigo. O GitHub lista todos os arquivos onde ele aparece e a linha exata.
3. Abra cada arquivo, clique no ícone de lápis, use `Ctrl+F` (ou `Cmd+F`) para achar a ocorrência, corrija e confirme em **Commit changes**.

O nome aparece em três formas diferentes, e todas precisam ser trocadas:

| Forma | Onde aparece |
|---|---|
| Nome completo | Aba do navegador (`<title>`), rodapé de todas as páginas |
| Só a primeira parte | Cabeçalho ao lado do símbolo, dentro de `<b>` |
| Caixa alta | Modelos de citação em `boletins.html`, `dados.html` e no dicionário de variáveis |

Não esqueça do PDF do boletim: ele traz o nome na capa e no rodapé de duas páginas, e precisa ser gerado de novo.

---

## Parte 5 — Estrutura dos arquivos

```
index.html          Página inicial, com a grade de doze anos
boletins.html       Lista de boletins publicados e em preparação
painel.html         Quatro gráficos interativos
dados.html          Downloads, nota metodológica e como citar
equipe.html         Quem somos, apoio institucional, contato
ajuda.html          Serviços de atendimento e telefones de emergência

assets/css/estilo.css   Todo o visual do site. Editar aqui muda tudo.
assets/js/dados.js      OS DADOS. É o arquivo que se atualiza.
assets/js/grade.js      Desenha a grade da página inicial
assets/js/painel.js     Desenha os gráficos do painel
assets/js/chart.umd.js  Biblioteca de gráficos Chart.js (não editar)

boletins/           PDFs dos boletins
dados/              CSVs abertos e o dicionário de variáveis
```

O cabeçalho e o rodapé estão repetidos em cada página (é o custo de não ter build). Se mudar um item do menu, mude nos seis arquivos.

A biblioteca de gráficos [Chart.js](https://www.chartjs.org/) está hospedada junto com o site, em `assets/js/chart.umd.js` — o painel funciona mesmo sem acesso a servidores externos. A única dependência externa são as fontes Bitter e Source Sans 3, carregadas do Google Fonts; se elas não carregarem, o navegador usa as fontes de sistema e o site continua legível.

---

## Parte 6 — Registrar os boletins no Zenodo

Recomendado, e independente do site. O [Zenodo](https://zenodo.org) é gratuito, mantido pelo CERN, e emite DOI para cada publicação.

Isso resolve três coisas: dá citabilidade acadêmica ao boletim, garante preservação de longo prazo mesmo que este site saia do ar, e cria o registro permanente que uma instituição sem repositório próprio não oferece.

O caminho é criar uma comunidade no Zenodo com o nome do observatório e depositar cada boletim e cada versão da base. Leva cerca de dez minutos por publicação. Depois, é só acrescentar o DOI ao lado do link de download em `boletins.html`.

---

## Testar antes de subir

Para ver o site no seu computador antes de publicar, abra o `index.html` no navegador — funciona direto, sem servidor. Se preferir servidor local e tiver Python instalado:

```bash
cd pasta-do-site
python3 -m http.server 8000
```

E acesse `http://localhost:8000`.
