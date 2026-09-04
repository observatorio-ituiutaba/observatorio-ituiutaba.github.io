/* Desenha a grade de 12 anos × 12 meses da página inicial.
   Cada célula é um mês; a intensidade da cor é o número de registros
   de lesão corporal naquele mês. Lê tudo de DADOS (assets/js/dados.js). */

(function () {
  const alvo = document.getElementById("grade-meses");
  if (!alvo || typeof DADOS === "undefined") return;

  const meses = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
  const nomes = ["janeiro", "fevereiro", "março", "abril", "maio", "junho",
                 "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];

  let maximo = 0;
  DADOS.anos.forEach(a => DADOS.mensal[a].forEach(v => { if (v > maximo) maximo = v; }));

  // Escala de cor construída a partir das variáveis do CSS.
  // Vai do tom claro (--lavanda) a uma versão escurecida de --roxo.
  const estilo = getComputedStyle(document.documentElement);
  function paraRGB(nome, padrao) {
    const hex = (estilo.getPropertyValue(nome) || padrao).trim();
    return [1, 3, 5].map(i => parseInt(hex.substr(i, 2), 16));
  }
  const claro = paraRGB("--lavanda", "#EDE3F7");
  const escuro = paraRGB("--roxo", "#6B2E8F").map(c => Math.round(c * 0.72));

  function cor(v) {
    if (v === null || v === undefined) return "#F2F2F4";
    const t = v / maximo;                     // 0 a 1
    const c = claro.map((d, i) => Math.round(d + (escuro[i] - d) * Math.pow(t, 0.75)));
    return `rgb(${c[0]},${c[1]},${c[2]})`;
  }

  let html = '<table class="meses"><caption class="sr-apenas">Registros mensais de '
           + 'lesão corporal por ano</caption><tr><th></th>';
  meses.forEach(m => { html += `<th scope="col">${m}</th>`; });
  html += "</tr>";

  DADOS.anos.forEach(a => {
    html += `<tr><th scope="row">${DADOS.rotuloAno(a)}</th>`;
    DADOS.mensal[a].forEach((v, i) => {
      const rotulo = v === null
        ? `${nomes[i]} de ${a}: sem dado na base`
        : `${nomes[i]} de ${a}: ${v} ${v === 1 ? "registro" : "registros"}`;
      html += `<td><i style="background:${cor(v)}" title="${rotulo}"></i></td>`;
    });
    html += "</tr>";
  });
  html += "</table>";

  alvo.innerHTML = html;

  document.getElementById("grade-legenda").innerHTML =
    `<span>Menos registros</span>
     <i style="background:${cor(1)}"></i>
     <i style="background:${cor(maximo * 0.35)}"></i>
     <i style="background:${cor(maximo * 0.65)}"></i>
     <i style="background:${cor(maximo)}"></i>
     <span>Mais registros (máximo: ${maximo} em um mês)</span>
     <i style="background:#F2F2F4;margin-left:14px"></i>
     <span>Sem dado na base</span>`;
})();
