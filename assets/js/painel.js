/* Painel interativo. Quatro visões sobre a mesma base, desenhadas com Chart.js.
   Todos os números vêm de DADOS (assets/js/dados.js) — este arquivo não guarda dado. */

(function () {
  if (typeof Chart === "undefined" || typeof DADOS === "undefined") return;

  const ROXO = "#6B2E8F", MAGENTA = "#C4368C", LARANJA = "#D9531E",
        LAVANDA = "#C9A6E8", TINTA2 = "#5B4470", BORDA = "#DCCBEC";

  Chart.defaults.font.family = "'Source Sans 3', system-ui, sans-serif";
  Chart.defaults.font.size = 13;
  Chart.defaults.color = TINTA2;

  const rotulos = DADOS.anos.map(DADOS.rotuloAno);
  const mesesNome = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
                     "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

  const eixoY = t => ({
    beginAtZero: true, title: { text: t, display: true, color: TINTA2 },
    grid: { color: "#F0EAF6" }, border: { display: false }
  });
  const eixoX = { grid: { display: false } };

  // Média mensal por ano — a visão que permite incluir 2023 sem distorção.
  const visoes = {
    media: {
      texto: "Cada barra é a média de registros de lesão corporal por mês naquele ano. "
           + "Usamos média mensal, e não o total do ano, porque 2023 só tem sete meses "
           + "na base — comparar totais brutos criaria uma queda que não existe.",
      config: () => ({
        type: "bar",
        data: {
          labels: rotulos,
          datasets: [{
            label: "Registros por mês",
            data: DADOS.mediaMensal,
            backgroundColor: DADOS.anos.map(a => DADOS.ehParcial(a) ? LAVANDA : ROXO),
            borderRadius: 3
          }]
        },
        options: {
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: { y: eixoY("registros por mês"), x: eixoX }
        }
      })
    },

    naturezas: {
      texto: "As quatro naturezas mais registradas, em números absolutos por ano. "
           + "A queda visível em 2023 é efeito da cobertura parcial da base, não do "
           + "fenômeno. Repare no descumprimento de medida protetiva: inexistente até "
           + "2018, cresce de forma contínua desde então.",
      config: () => {
        const cores = [MAGENTA, ROXO, LAVANDA, LARANJA];
        return {
          type: "line",
          data: {
            labels: rotulos,
            datasets: Object.keys(DADOS.porNatureza).map((nome, i) => ({
              label: nome,
              data: DADOS.porNatureza[nome],
              borderColor: cores[i], backgroundColor: cores[i],
              tension: 0.25, borderWidth: 2.4, pointRadius: 3, pointHoverRadius: 5
            }))
          },
          options: {
            maintainAspectRatio: false,
            interaction: { mode: "index", intersect: false },
            plugins: { legend: { position: "bottom", labels: { boxWidth: 12, padding: 16 } } },
            scales: { y: eixoY("registros no ano"), x: eixoX }
          }
        };
      }
    },

    semana: {
      texto: "Ocorrências de lesão corporal por dia da semana, somando toda a série. "
           + "Se as ocorrências se distribuíssem por igual, cada dia teria cerca de 170. "
           + "A linha tracejada marca esse patamar: domingo e sábado ficam muito acima, "
           + "e juntos concentram 42,4% de tudo.",
      config: () => {
        const dias = Object.keys(DADOS.diaSemana);
        const vals = dias.map(d => DADOS.diaSemana[d]);
        const esperado = vals.reduce((a, b) => a + b, 0) / 7;
        return {
          type: "bar",
          data: {
            labels: dias,
            datasets: [
              {
                label: "Ocorrências",
                data: vals,
                backgroundColor: dias.map(d =>
                  (d === "Sábado" || d === "Domingo") ? LARANJA : ROXO),
                borderRadius: 3, order: 2
              },
              {
                label: "Distribuição uniforme",
                data: dias.map(() => esperado),
                type: "line", borderColor: TINTA2, borderDash: [6, 4],
                borderWidth: 1.6, pointRadius: 0, order: 1
              }
            ]
          },
          options: {
            maintainAspectRatio: false,
            plugins: { legend: { position: "bottom", labels: { boxWidth: 12, padding: 16 } } },
            scales: { y: eixoY("ocorrências, 2014–2025"), x: eixoX }
          }
        };
      }
    },

    sazonal: {
      texto: "Registros de lesão corporal somados por mês do calendário, excluindo 2023 "
           + "para não desequilibrar o primeiro semestre. Março, novembro e outubro são "
           + "os meses mais pesados; julho é o mais leve. O padrão é fraco, mas estável.",
      config: () => {
        const soma = new Array(12).fill(0);
        DADOS.anos.filter(a => !DADOS.ehParcial(a)).forEach(a =>
          DADOS.mensal[a].forEach((v, i) => { soma[i] += (v || 0); }));
        const media = soma.reduce((a, b) => a + b, 0) / 12;
        return {
          type: "bar",
          data: {
            labels: mesesNome,
            datasets: [{
              label: "Registros",
              data: soma,
              backgroundColor: soma.map(v => v >= media ? ROXO : LAVANDA),
              borderRadius: 3
            }]
          },
          options: {
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: { y: eixoY("registros, 2014–2025 exceto 2023"), x: eixoX }
          }
        };
      }
    }
  };

  const tela = document.getElementById("grafico");
  const leitura = document.getElementById("leitura");
  const botoes = Array.from(document.querySelectorAll(".controles button"));
  let grafico = null;

  function mostrar(chave) {
    if (grafico) grafico.destroy();
    grafico = new Chart(tela, visoes[chave].config());
    leitura.textContent = visoes[chave].texto;
    botoes.forEach(b => b.setAttribute("aria-pressed", String(b.dataset.visao === chave)));
  }

  botoes.forEach(b => b.addEventListener("click", () => mostrar(b.dataset.visao)));
  mostrar("media");
})();
