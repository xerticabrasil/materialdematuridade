const sectionsData = [
    {
        category: "Execução e Valor",
        items: [
            { id: 1, text: "Como a organização lida com o volume crescente de demandas e a pressão por prazos?", 
              options: [
                  { val: 1, label: "A) A triagem é manual, gerando gargalos e atrasos frequentes." },
                  { val: 3, label: "B) Utilizamos sistemas digitais, mas ainda depende de interpretação humana." },
                  { val: 5, label: "C) Utilizamos IA para classificar demandas por relevância e urgência." }
              ], analysis: { 
                  low: "O uso de processos manuais sugere que o tempo de resposta institucional pode ser demorado, o que poderia favorecer o acúmulo de solicitações. Existe a possibilidade de que demandas importantes não recebam a atenção necessária no tempo adequado, o que tem potencial para impactar negativamente a imagem do órgão perante o cidadão.", 
                  med: "Embora o órgão conte com sistemas digitais, a análise de cada pedido parece depender do esforço individual de cada servidor. Esse modelo pode acarretar demora no desfecho das solicitações, uma vez que a agilidade fica limitada à capacidade de leitura e interpretação manual, podendo gerar esperas mesmo em fluxos eletrônicos.", 
                  high: "A maturidade identificada indica que o órgão poderia utilizar inteligência artificial para organizar solicitações automaticamente. Isso pode favorecer uma resposta institucional potencialmente mais ágil e padronizada, podendo permitir que a equipe técnica foque em casos complexos sem a sobrecarga de triagens repetitivas." 
              }
            },
            { id: 2, text: "Qual a capacidade do órgão em cruzar informações de diferentes fontes para validar uma decisão?", 
              options: [
                  { val: 1, label: "A) Realizamos a validação baseado apenas em dados estruturados simples." },
                  { val: 3, label: "B) O Systema acessa bases diferentes, mas não interpreta dados nao estruturados." },
                  { val: 5, label: "C) Utilizamos IA para cruzar dados de diversas fontes diferentes." }
              ], analysis: { 
                  low: "A dificuldade em unificar dados de fontes distintas pode trazer insegurança administrativa. Sem uma visão integrada, existe a possibilidade de ocorrerem decisões inconsistentes entre áreas ou falta de isonomia em casos semelhantes, o que poderia gerar questionamentos e necessidade de revisões constantes nos atos administrativos.", 
                  med: "A organização acessa bases de dados, mas a conferência de informações para validar um pedido ainda parece exigir análise manual extensa. Esse processo pode ser demorado e suscetível a falhas de revisão, o que poderia atrasar a fundamentação de pareceres e limitar a prontidão do gestor para decidir com base em evidências totais.", 
                  high: "A capacidade de cruzar dados automaticamente favorece a segurança administrativa e a conformidade institucional. Esse nível de integração permite fundamentar atos públicos em informações sólidas, o que tem potencial para assegurar que o princípio da impessoalidade seja preservado através de critérios técnicos de alto nível." 
              }
            }
        ]
    },
    {
        category: "Estratégia e Inovação",
        items: [
            { id: 3, text: "Qual o papel da tecnologia na execução de tarefas complexas hoje?", 
              options: [
                  { val: 1, label: "A) Ferramenta de registro: Armazena as informações que o humano fornece." },
                  { val: 3, label: "B) Ferramenta de apoio; fornece informações para o humano decidir." },
                  { val: 5, label: "C) Agente de resolução: Os agentes executam fluxos completos de forma autônoma e indicam decisões e próximos passos" }
              ], analysis: { 
                  low: "A tecnologia pode estar atuando apenas como um arquivo digital, sem reduzir o esforço mental do servidor nas tarefas complexas.", 
                  med: "O suporte tecnológico ajuda a encontrar informações, mas a conclusão final das tarefas parece exigir atenção humana individual em cada etapa.", 
                  high: "A adoção de IA como agente de resolução indica uma gestão moderna e focada em resolutividade." 
              }
            },
            { id: 4, text: "A Inteligência Artificial é tratada como prioridade estratégica no orçamento do órgão?", 
              options: [
                  { val: 1, label: "A) Não. O orçamento está concentrado na manutenção da operação atual." },
                  { val: 3, label: "B) Parcialmente. Existem recursos para modernização, mas IA ainda é experimental." },
                  { val: 5, label: "C) Sim. Há previsão orçamentária estruturada para projetos de IA." }
              ], analysis: { 
                  low: "A ausência de recursos planejados para inovação pode expor o órgão ao risco de obsolescência.", 
                  med: "O investimento em IA ainda parece isolado, o que tem potencial para tornar a implementação demorada.", 
                  high: "O orçamento focado em eficiência demonstra compromisso com a boa gestão dos recursos públicos." 
              }
            }
        ]
    },
    {
        category: "Dados Estratégicos",
        items: [
            { id: 5, text: "Quão fácil é encontrar uma resposta específica dentro de relatórios densos ou normas?", 
              options: [
                  { val: 1, label: "A) Nada fácil: Leitura manual de dezenas de páginas." },
                  { val: 3, label: "B) Fácil: Busca por palavras-chave que mostram o arquivo." },
                  { val: 5, label: "C) Muito Fácil: IA entende perguntas simples e extrai a resposta exata." }
              ], analysis: { 
                  low: "As barreiras ao conhecimento técnico sugerem que a fundamentação das decisões pode ser demorada.", 
                  med: "A busca por palavras-chave localiza arquivos, mas a extração de inteligência ainda exige tempo.", 
                  high: "A facilidade em extrair respostas exatas permite atender demandas com muito mais segurança." 
              }
            },
            { id: 6, text: "Qual a clareza das informações públicas para quem não é especialista?", 
              options: [
                  { val: 1, label: "A) Nada claro: Dados técnicos demais e inacessíveis." },
                  { val: 3, label: "B) Claro: dados disponíveis, mas exigem esforço de interpretação." },
                  { val: 5, label: "C) Muito Claro: IA traduz complexidade em respostas simples." }
              ], analysis: { 
                  low: "A baixa clareza das informações digitais pode estar gerando uma demanda excessiva por atendimentos.", 
                  med: "Os dados são públicos, mas sua interpretação pode ainda exigir esforço do cidadão.", 
                  high: "O uso de IA como tradutor da burocracia estatal aproxima o governo do cidadão." 
              }
            }
        ]
    },
    {
        category: "Cultura e Pessoas",
        items: [
            { id: 7, text: "O seu sistema de atendimento ao cidadão apenas 'abre protocolos' ou resolve de ponta a ponta?", 
              options: [
                  { val: 1, label: "A) Registra protocolos e depende totalmente de análise humana." },
                  { val: 3, label: "B) Encaminha para áreas responsáveis, mas sem acompanhamento automático." },
                  { val: 5, label: "C) Orquestra o fluxo ponta a ponta com automação/IA até a resolução." }
              ], analysis: { 
                  low: "O foco apenas em registrar pedidos pode limitar a resolução real das demandas.", 
                  med: "O sistema controla o trâmite, mas a decisão final parece enfrentar esperas por análise humana.", 
                  high: "A orquestração automática do atendimento favorece o cumprimento de metas de gestão." 
              }
            },
            { id: 8, text: "Como o órgão protege seu capital intelectual?", 
              options: [
                  { val: 1, label: "A) O conhecimento reside de forma individual." },
                  { val: 3, label: "B) O conhecimento está consolidado, mas depende de servidores específicos." },
                  { val: 5, label: "C) O conhecimento está institucionalizado em uma camada de inteligência." }
              ], analysis: { 
                  low: "A dependência do conhecimento individual traz um risco potencial para a continuidade.", 
                  med: "O órgão possui regras formalizadas, mas a aplicação ainda depende da experiência pessoal.", 
                  high: "A institucionalização do conhecimento garante que o órgão preserve sua memória operacional." 
              }
            }
        ]
    },
    {
        category: "Governança Responsável",
        items: [
            { id: 9, text: "Como sua gestão garante que as decisões por IA sejam explicáveis?", 
              options: [
                  { val: 1, label: "A) Baixa Explicabilidade: O sistema entrega o resultado, mas não explica." },
                  { val: 3, label: "B) Rastro Técnico: O sistema gera registros (logs), mas não traduz a lógica." },
                  { val: 5, label: "C) Transparência Total: Justificativa automática em texto comum." }
              ], analysis: { 
                  low: "A falta de clareza sobre o resultado pode trazer insegurança administrativa.", 
                  med: "Existem registros técnicos, mas a tradução para linguagem de gestão pode ser demorada.", 
                  high: "O modelo de transparência plena favorece a prestação de contas." 
              }
            },
            { id: 10, text: "Como o órgão garante que as decisões seguem as normas mais recentes?", 
              options: [
                  { val: 1, label: "A) O servidor precisa buscar atualizações por conta própria." },
                  { val: 3, label: "B) Enviamos circulares, mas não garantimos a aplicação na ponta." },
                  { val: 5, label: "C) As novas normas são integradas à inteligência do sistema." }
              ], analysis: { 
                  low: "A atualização manual de normas pode ser um processo demorado e arriscado.", 
                  med: "A comunicação existe, mas não há garantia de que seja aplicada de forma padrão.", 
                  high: "A integração automática de normas garante que os atendimentos sigam as regras recentes." 
              }
            }
        ]
    }
];

let clientData = {};
let responses = {};
let resultsData = { total: 0, title: "", topics: [], deep: "", plan: "" };
let radarChart = null;

window.onload = function() {
    const container = document.getElementById('questions-container');
    if (!container) return;
    sectionsData.forEach(section => {
        let html = `<div><h3 class="text-brand-cyan text-xs font-bold uppercase tracking-[0.4em] mb-4 border-l-4 border-brand-cyan pl-4">${section.category}</h3><div class="space-y-4">`;
        section.items.forEach(item => {
            html += `<div id="q-box-${item.id}" class="glass-panel p-6 rounded-2xl"><p class="text-sm md:text-base text-slate-100 mb-6 font-medium">${item.text}</p><div class="flex flex-col gap-3">`;
            item.options.forEach(opt => {
                html += `<div><input type="radio" name="q${item.id}" id="q${item.id}_${opt.val}" value="${opt.val}" required><label for="q${item.id}_${opt.val}" class="block w-full text-left p-4 rounded-xl border border-slate-700 cursor-pointer text-xs transition-all hover:bg-slate-800">${opt.label}</label></div>`;
            });
            html += `</div></div>`;
        });
        container.insertAdjacentHTML('beforeend', html + `</div></div>`);
    });
};

function validateQuizAndNext() {
    let answered = 0; let firstMiss = null;
    responses = {};
    sectionsData.forEach(sec => {
        sec.items.forEach(item => {
            const radios = document.getElementsByName(`q${item.id}`);
            let sel = null; for(let r of radios) { if(r.checked) sel = r; }
            if (sel) { 
                responses[item.id] = { val: parseInt(sel.value) };
                document.getElementById(`q-box-${item.id}`).classList.remove('unanswered'); 
                answered++;
            } else { 
                document.getElementById(`q-box-${item.id}`).classList.add('unanswered'); 
                if(!firstMiss) firstMiss = document.getElementById(`q-box-${item.id}`); 
            }
        });
    });
    if (answered < 10) { 
        document.getElementById('quiz-error').classList.remove('hidden'); 
        if(firstMiss) firstMiss.scrollIntoView({ behavior: 'smooth', block: 'center' }); 
        return; 
    }
    document.getElementById('form-page').classList.add('hidden-page');
    document.getElementById('landing-page').classList.remove('hidden-page');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.getElementById('leadForm').addEventListener('submit', function(e) {
    e.preventDefault();
    if (!this.checkValidity()) { document.getElementById('lead-error').classList.remove('hidden'); return; }
    clientData = { name: document.getElementById('client_name').value, email: document.getElementById('client_email').value };
    finishProcess();
});

function finishProcess() {
    let total = 0;
    const topicsContainer = document.getElementById('topic-results');
    topicsContainer.innerHTML = '';
    resultsData.topics = [];
    const chartLabels = [];
    const chartData = [];

    sectionsData.forEach(sec => {
        let secVal = 0; 
        sec.items.forEach(item => { 
            secVal += responses[item.id].val; 
            total += responses[item.id].val;
        });
        const score = secVal / 2; 
        const pct = (score/5)*100;
        let ana = score <= 2 ? sec.items[0].analysis.low : (score <= 4 ? sec.items[0].analysis.med : sec.items[0].analysis.high);
        
        resultsData.topics.push({ cat: sec.category, score: score.toFixed(1), ana: ana });
        chartLabels.push(sec.category);
        chartData.push(score);

        topicsContainer.innerHTML += `<div class="border-l border-slate-800 pl-6 pb-12"><div class="flex justify-between mb-4 text-white font-bold text-lg"><span>${sec.category}</span><span>${score.toFixed(1)}/5</span></div><div class="w-full bg-slate-800 h-2 mb-6 rounded-full overflow-hidden"><div class="bg-brand-solid h-full" style="width:${pct}%"></div></div><p class="text-slate-300 text-sm">"${ana}"</p></div>`;
    });

    document.getElementById('personalized-greeting').innerText = "Olá, " + clientData.name + "!";
    const ctx = document.getElementById('radarChart').getContext('2d');
    if (radarChart) radarChart.destroy();
    radarChart = new Chart(ctx, {
        type: 'radar',
        data: { labels: chartLabels, datasets: [{ data: chartData, backgroundColor: 'rgba(0, 190, 255, 0.2)', borderColor: '#FF00FF', borderWidth: 2 }] },
        options: { scales: { r: { suggestedMin: 0, suggestedMax: 5 } }, plugins: { legend: { display: false } } }
    });

    resultsData.total = total;
    resultsData.title = total <= 15 ? "Gestão Analógica" : (total <= 30 ? "Gestão Digital" : (total <= 45 ? "Gestão Estratégica" : "Liderança Agêntica"));
    resultsData.deep = "Diagnóstico consolidado gerado com sucesso.";
    resultsData.plan = "Plano de ação sugerido com base nos seus dados.";

    document.getElementById('result-title').innerText = resultsData.title;
    document.getElementById('result-score').innerText = total;
    document.getElementById('deep-analysis-content').innerHTML = resultsData.deep;
    document.getElementById('action-plan-content').innerHTML = resultsData.plan;

    document.getElementById('g_name').value = clientData.name;
    document.getElementById('g_email').value = clientData.email;
    for(let i=1; i<=10; i++) { document.getElementById(`g_q${i}`).value = responses[i].val; }
    document.getElementById('googleForm').submit();

    document.getElementById('landing-page').classList.add('hidden-page');
    document.getElementById('result-page').classList.remove('hidden-page');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openPrintWindow() {
    window.print();
}
