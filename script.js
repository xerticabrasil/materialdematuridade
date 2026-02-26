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
                  low: "O uso de processos manuais sugere que o tempo de resposta institucional pode ser demorado, o que poderia favorecer o acúmulo de solicitações.", 
                  med: "Embora o órgão conte com sistemas digitais, a análise de cada pedido parece depender do esforço individual de cada servidor.", 
                  high: "A maturidade identificada indica que o órgão poderia utilizar inteligência artificial para organizar solicitações automaticamente." 
              }
            },
            { id: 2, text: "Qual a capacidade do órgão em cruzar informações de diferentes fontes para validar uma decisão?", 
              options: [
                  { val: 1, label: "A) Realizamos a validação baseado apenas em dados estruturados simples." },
                  { val: 3, label: "B) O Systema acessa bases diferentes, mas não interpreta dados nao estruturados." },
                  { val: 5, label: "C) Utilizamos IA para cruzar dados de diversas fontes diferentes." }
              ], analysis: { 
                  low: "A dificuldade em unificar dados de fontes distintas pode trazer insegurança administrativa.", 
                  med: "A organização acessa bases de dados, mas a conferência de informações ainda exige análise manual extensa.", 
                  high: "A capacidade de cruzar dados automaticamente favorece a segurança administrativa e a conformidade institucional." 
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
                  { val: 5, label: "C) Agente de resolução: Os agentes executam fluxos completos de forma autônoma." }
              ], analysis: { 
                  low: "A tecnologia pode estar atuando apenas como um arquivo digital, sem reduzir o esforço mental do servidor.", 
                  med: "O suporte tecnológico ajuda a encontrar informações, mas a conclusão final das tarefas exige atenção humana individual.", 
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
                  med: "O investimento em IA ainda parece isolado, o que torna a implementação demorada.", 
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
                  { val: 3, label: "B) Claro: dados disponíveis, mas exigem grande esforço de interpretação." },
                  { val: 5, label: "C) Muito Claro: IA traduz complexidade em respostas simples." }
              ], analysis: { 
                  low: "A baixa clareza das informações digitais pode estar gerando uma demanda excessiva por atendimentos.", 
                  med: "Os dados são públicos, mas sua interpretação exige esforço do cidadão.", 
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
                  med: "O sistema controla o trâmite, mas a decisão final enfrenta esperas por análise humana.", 
                  high: "A orquestração automática do atendimento favorece o cumprimento de metas de gestão." 
              }
            },
            { id: 8, text: "Como o órgão protege seu capital intelectual?", 
              options: [
                  { val: 1, label: "A) O conhecimento reside de forma individual." },
                  { val: 3, label: "B) O conhecimento está consolidado, mas depende de servidores específicos." },
                  { val: 5, label: "C) O conhecimento está institucionalizado em uma camada de inteligência." }
              ], analysis: { 
                  low: "A dependência do conhecimento individual traz um risco para a continuidade administrativa.", 
                  med: "O órgão possui regras formalizadas, mas a aplicação depende da experiência pessoal.", 
                  high: "A institucionalização do conhecimento garante a preservação da memória operacional." 
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
                  med: "Existem registros técnicos, mas a tradução para linguagem de gestão é demorada.", 
                  high: "O modelo de transparência plena favorece a prestação de contas institucional." 
              }
            },
            { id: 10, text: "Como o órgão garante que as decisões seguem as normas mais recentes?", 
              options: [
                  { val: 1, label: "A) O servidor precisa buscar atualizações por conta própria." },
                  { val: 3, label: "B) Enviamos circulares, mas não garantimos a aplicação na ponta." },
                  { val: 5, label: "C) As novas normas são integradas à inteligência do sistema." }
              ], analysis: { 
                  low: "A atualização manual de normas é um processo demorado e arriscado.", 
                  med: "A comunicação existe, mas não há garantia de aplicação padrão em todos os casos.", 
                  high: "A integração automática de normas garante que os atendimentos sigam regras atuais." 
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
                if(!firstMiss) firstMiss = document.getElementById(`q
