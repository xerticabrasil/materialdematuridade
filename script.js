<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Diagnóstico de Maturidade IA | Xertica.ai</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <style>
        :root {
            --brand-cyan: #00BEFF;
            --brand-lime: #C0FF7D;
            --brand-magenta: #FF00FF;
            --bg-dark: #020617;
            --panel-dark: #0f172a;
            --border-dark: #1e293b;
        }

        body {
            font-family: 'Roboto', sans-serif;
            background-color: var(--bg-dark);
            color: #e2e8f0;
            margin: 0;
            padding: 0;
            overflow-x: hidden;
        }

        h1, h2, h3, h4 { font-family: 'Poppins', sans-serif; }

        .bg-brand-solid { background-color: var(--brand-cyan); }
        .text-brand-lime { color: var(--brand-lime); }
        .text-brand-cyan { color: var(--brand-cyan); }

        .glass-panel {
            background-color: var(--panel-dark);
            border: 1px solid var(--border-dark);
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
        }

        input[type="radio"] { display: none; }
        input[type="radio"]:checked + label {
            border-color: var(--brand-cyan);
            background-color: #004e66;
            color: white;
            font-weight: 600;
        }

        .input-field {
            background-color: #1e293b;
            border: 1px solid #334155;
            color: white;
            padding: 1rem 1.25rem;
            border-radius: 1rem;
            width: 100%;
        }
        .input-field:focus {
            border-color: var(--brand-cyan);
            outline: none;
        }

        .hidden-page { display: none !important; }

        .btn-animate { transition: transform 0.2s ease-in-out, filter 0.2s; }
        .btn-animate:hover { transform: translateY(-2px); filter: brightness(1.1); }

        .fade-in { animation: fadeIn 0.4s ease-out forwards; }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .unanswered { border: 2px solid #ef4444 !important; background-color: #451a1a !important; }

        .bg-grid {
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            background-image: 
                linear-gradient(to right, #ffffff08 1px, transparent 1px),
                linear-gradient(to bottom, #ffffff08 1px, transparent 1px);
            background-size: 60px 60px;
            z-index: -1;
            pointer-events: none;
        }

        #radarChartContainer {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            position: relative;
            padding: 20px;
        }
        
        canvas#radarChart {
            max-width: 100%;
            height: auto !important;
        }
    </style>
</head>
<body class="min-h-screen text-slate-200">
    <div class="bg-grid"></div>

    <!-- PÁGINA 1: QUESTIONÁRIO -->
    <main id="form-page" class="py-12 px-4 fade-in">
        <div class="max-w-2xl mx-auto">
            <header class="text-center mb-12">
                <img src="https://storage.googleapis.com/etp-bucket/Logos%20Xertica.ai%20%28.png%29/xertica.ai/Copy%20of%20Logo_XERTICA_white.png" alt="Xertica.ai" class="w-44 h-auto mx-auto mb-6">
                <h2 class="text-brand-lime text-xs font-bold uppercase tracking-[0.4em] mb-4">Mapeamento de Maturidade</h2>
                <h1 class="text-2xl md:text-3xl font-bold text-white leading-tight">Diagnóstico de Prontidão IA</h1>
                <p class="text-slate-400 mt-4 font-light leading-relaxed text-sm md:text-base">Responda às 10 perguntas abaixo para identificar o nível de maturidade da sua organização e receber recomendações estratégicas para implementação de IA.</p>
            </header>
            <form id="maturityForm" class="space-y-10">
                <div id="questions-container" class="space-y-12"></div>
                <div class="text-center pt-10 pb-16">
                    <p id="quiz-error" class="text-red-400 text-sm mb-4 hidden font-bold">Por favor, responda a todas as questões para prosseguir.</p>
                    <button type="button" onclick="validateQuizAndNext()" class="bg-brand-solid text-slate-900 font-bold py-4 px-12 rounded-full text-lg btn-animate shadow-md">
                        Continuar para Identificação <i class="fa-solid fa-chevron-right ml-2 text-sm"></i>
                    </button>
                </div>
            </form>
        </div>
    </main>

    <!-- PÁGINA 2: IDENTIFICAÇÃO -->
    <main id="landing-page" class="hidden-page py-12 px-4 flex items-center justify-center min-h-screen fade-in">
        <div class="max-w-xl w-full text-center">
            <img src="https://storage.googleapis.com/etp-bucket/Logos%20Xertica.ai%20%28.png%29/xertica.ai/Copy%20of%20Logo_XERTICA_white.png" alt="Xertica.ai" class="w-24 h-auto opacity-50 mx-auto mb-6">
            <h2 class="text-brand-lime text-xs font-bold uppercase tracking-[0.4em] mb-4">Quase concluído</h2>
            <h1 class="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">Identificação</h1>
            <p class="text-slate-400 text-lg font-light leading-relaxed mb-10">Preencha os campos abaixo para gerar o laudo técnico personalizado.</p>

            <div class="glass-panel p-8 md:p-10 rounded-[20px] text-left">
                <form id="leadForm" class="space-y-6" novalidate>
                    <div class="space-y-2">
                        <label class="text-[10px] uppercase tracking-[0.2em] text-slate-500 ml-1 font-bold">Nome Completo *</label>
                        <input type="text" id="client_name" required placeholder="Seu nome" class="input-field">
                    </div>
                    <div class="space-y-2">
                        <label class="text-[10px] uppercase tracking-[0.2em] text-slate-500 ml-1 font-bold">E-mail Institucional *</label>
                        <input type="email" id="client_email" required placeholder="seu@gov.br" class="input-field">
                    </div>
                    
                    <div class="pt-4 text-center">
                        <p id="lead-error" class="text-red-400 text-xs mb-4 hidden font-medium">Preencha os campos corretamente.</p>
                        <button type="submit" class="w-full bg-brand-solid text-slate-900 font-bold py-5 rounded-xl text-lg btn-animate shadow-md flex items-center justify-center gap-3">
                            Ver Diagnóstico Final <i class="fa-solid fa-check text-sm"></i>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </main>

    <!-- PÁGINA 3: RESULTADOS -->
    <main id="result-page" class="hidden-page py-12 px-4 fade-in">
        <div class="max-w-4xl mx-auto">
            <div class="text-center mb-8">
                <img src="https://storage.googleapis.com/etp-bucket/Logos%20Xertica.ai%20%28.png%29/xertica.ai/Copy%20of%20Logo_XERTICA_white.png" alt="Xertica.ai" class="w-24 opacity-60 mx-auto mb-4">
                <h2 class="text-lg font-bold uppercase tracking-widest text-slate-400">Laudo Técnico de Maturidade IA</h2>
            </div>

            <!-- Saudação Personalizada -->
            <div class="mb-8 text-center">
                <h3 id="personalized-greeting" class="text-xl md:text-2xl font-semibold text-white">...</h3>
            </div>

            <!-- Mapa de Maturidade -->
            <div class="glass-panel p-6 md:p-10 rounded-[20px] mb-8 text-center overflow-hidden">
                <p class="text-xs text-brand-lime font-bold uppercase tracking-[0.4em] mb-8">Mapa de Maturidade Institucional</p>
                <div id="radarChartContainer">
                    <canvas id="radarChart"></canvas>
                </div>
            </div>

            <!-- Score Geral -->
            <div class="glass-panel p-10 rounded-[20px] mb-8 text-center">
                <p class="text-xs text-brand-lime font-bold uppercase tracking-[0.4em] mb-4">Status de Prontidão IA</p>
                <h3 id="result-title" class="text-4xl font-bold text-white mb-6">...</h3>
                <div class="w-full max-w-md mx-auto bg-slate-800 h-3 rounded-full overflow-hidden mb-4 border border-slate-700">
                    <div id="result-bar" class="bg-brand-solid h-full transition-all duration-1000" style="width: 0%"></div>
                </div>
                <p class="text-lg text-slate-400 font-light">Pontuação Consolidada: <span id="result-score" class="text-white font-bold">0</span> / 50</p>
            </div>

            <!-- Análise por Domínio -->
            <div class="glass-panel p-8 md:p-12 rounded-[20px] mb-8 text-left">
                <h3 class="text-2xl font-bold text-white mb-10 flex items-center gap-4 border-b border-slate-800 pb-6">
                    <i class="fa-solid fa-microchip text-brand-cyan"></i> Eficiência Governamental
                </h3>
                <div id="topic-results" class="space-y-12"></div>
            </div>

            <!-- Seu Diagnóstico Profundo -->
            <div class="glass-panel p-10 md:p-16 rounded-[20px] mb-8 text-left">
                <h3 class="text-2xl font-bold text-white mb-6">Seu Diagnóstico Estratégico</h3>
                <div class="h-1.5 w-32 bg-brand-solid mb-10 rounded-full"></div>
                <div id="deep-analysis-content" class="text-slate-300 leading-relaxed space-y-8 text-lg font-light text-justify"></div>
            </div>

            <!-- Plano de Ação Imediato -->
            <div class="glass-panel p-10 md:p-16 rounded-[20px] mb-8 text-left border-l-8 border-brand-lime">
                <h3 class="text-2xl font-bold text-white mb-6">Plano de Ação Sugerido</h3>
                <div class="h-1.5 w-32 bg-brand-lime mb-10 rounded-full"></div>
                <div id="action-plan-content" class="text-slate-300 leading-relaxed space-y-6 text-lg font-light"></div>
            </div>

            <!-- ACELERAÇÃO XERTICA -->
            <div class="glass-panel p-10 rounded-[20px] mb-8 border-l-8 border-brand-cyan text-left">
                <h3 class="text-2xl font-bold text-white leading-tight mb-6">Como a Xertica.ai impulsiona sua gestão</h3>
                <div class="bg-slate-900 p-6 rounded-xl border border-slate-800 mb-8">
                    <p class="text-slate-300 leading-relaxed text-sm md:text-base font-light text-justify">
                        A solução <strong>Fair Decision Making (FDM)</strong> oferece uma camada de inteligência institucional para apoiar o trabalho governamental através de três eixos:
                    </p>
                </div>
                <div class="grid md:grid-cols-3 gap-6 mb-8">
                    <div class="p-5 rounded-xl bg-slate-800 border border-slate-700">
                        <h4 class="text-brand-lime font-bold mb-3">1. Agentes IA Especializados</h4>
                        <p class="text-xs text-slate-400 leading-relaxed italic">Possibilidade de triagem e análise ágil de solicitações para favorecer a resposta ao cidadão.</p>
                    </div>
                    <div class="p-5 rounded-xl bg-slate-800 border border-slate-700">
                        <h4 class="text-brand-cyan font-bold mb-3">2. Camada Ontológica</h4>
                        <p class="text-xs text-slate-400 leading-relaxed italic">Unificação das normas do órgão para auxiliar na padronização administrativa.</p>
                    </div>
                    <div class="p-5 rounded-xl bg-slate-800 border border-slate-700">
                        <h4 class="text-white font-bold mb-3">3. Governança Glass Box</h4>
                        <p class="text-xs text-slate-400 leading-relaxed italic">Justificativas fundamentadas para as ações da IA, facilitando prestações de contas.</p>
                    </div>
                </div>
                <div class="flex flex-col items-center gap-6 pt-6 border-t border-slate-800">
                    <a href="https://api.whatsapp.com/send/?phone=551150396912&text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20sess%C3%A3o%20estrat%C3%A9gica." target="_blank" class="w-full max-w-md bg-[#25D366] text-white font-bold py-5 rounded-xl flex items-center justify-center gap-3 btn-animate shadow-md">
                        <i class="fa-brands fa-whatsapp text-xl"></i> Agende sua sessão estratégica
                    </a>
                </div>
            </div>

            <div class="flex flex-col md:flex-row gap-5 justify-center items-center pb-12">
                <button id="export-btn" onclick="openPrintWindow()" class="bg-white text-slate-900 font-bold py-4 px-12 rounded-full text-sm btn-animate shadow-md">
                    <i class="fa-solid fa-file-pdf"></i> Exportar PDF
                </button>
            </div>
            <div class="text-center text-[10px] text-slate-700 mb-10 uppercase tracking-[0.4em]">Xertica.ai</div>
        </div>
    </main>

    <iframe name="hidden_iframe" id="hidden_iframe" style="display:none"></iframe>
    <form id="googleForm" action="https://docs.google.com/forms/u/0/d/1Qrl4Zi4wo0_Ozm4NVlUawmHcCPfOGfUiuhFzVIhFxsA/formResponse" method="POST" target="hidden_iframe" class="hidden">
        <input type="hidden" name="entry.435378479" id="g_name">
        <input type="hidden" name="entry.482089224" id="g_email">
        <input type="hidden" name="entry.147241097" id="g_q1">
        <input type="hidden" name="entry.4722391" id="g_q2">
        <input type="hidden" name="entry.942712749" id="g_q3">
        <input type="hidden" name="entry.1754662874" id="g_q4">
        <input type="hidden" name="entry.69041074" id="g_q5">
        <input type="hidden" name="entry.1514853983" id="g_q6">
        <input type="hidden" name="entry.428718773" id="g_q7">
        <input type="hidden" name="entry.69217504" id="g_q8">
        <input type="hidden" name="entry.1797258413" id="g_q9">
        <input type="hidden" name="entry.1819469499" id="g_q10">
    </form>

    <script>
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
                          low: "A tecnologia pode estar atuando apenas como um arquivo digital, sem reduzir o esforço mental do servidor nas tarefas complexas. Esse modelo pode limitar a produtividade do órgão à capacidade manual de cada equipe, podendo dificultar melhorias estruturais na gestão institucional.", 
                          med: "O suporte tecnológico ajuda a encontrar informações, mas a conclusão final das tarefas parece exigir atenção humana individual em cada etapa. Esse cenário pode tornar o trabalho demorado, pois a inteligência institucional pode não estar integrada ao sistema, dependendo sempre de uma revisão manual minuciosa.", 
                          high: "A adoção de IA como agente de resolução indica uma gestão moderna e focada em resolutividade. Esse modelo permite que o órgão processe grandes volumes de trabalho de forma automática e segura, o que poderia liberar os servidores para funções estratégicas e reduzir o tempo de espera da população." 
                      }
                    },
                    { id: 4, text: "A Inteligência Artificial é tratada como prioridade estratégica no orçamento do órgão?", 
                      options: [
                          { val: 1, label: "A) Não. O orçamento está concentrado na manutenção da operação atual, e iniciativas de IA dependem de recursos pontuais ou extraordinários." },
                          { val: 3, label: "B) Parcialmente. Existem recursos para modernização, mas IA ainda é tratada como iniciativa experimental ou adicional." },
                          { val: 5, label: "C) Sim. Há previsão orçamentária estruturada para projetos de IA, com metas claras de eficiência, produtividade e retorno institucional." }
                      ], analysis: { 
                          low: "A ausência de recursos planejados para inovação pode expor o órgão ao risco de obsolescência frente às novas exigências de governo digital. A dependência de verbas eventuais poderia tornar a modernização instável, dificultando a entrega de serviços ágeis e o cumprimento de metas de gestão de longo prazo.", 
                          med: "O investimento em IA ainda parece isolado, o que tem potencial para tornar a implementação demorada e pouco aproveitada pelo órgão. Para favorecer a economicidade, poderia ser vital tratar a inteligência artificial como uma infraestrutura de gestão e não apenas como um custo adicional isolado.", 
                          high: "O orçamento focado em eficiência demonstra compromisso com a boa gestão dos recursos públicos. Esse planejamento favorece a produtividade e tem potencial para garantir que o órgão tenha as ferramentas necessárias para atender a população com qualidade, mesmo diante de restrições orçamentárias." 
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
                          { val: 3, label: "B) Fácil: Busca por palavras-chave que mostra o arquivo, mas não explicam conteúdo." },
                          { val: 5, label: "C) Muito Fácil: IA entende perguntas simples e extrai a resposta exata na hora." }
                      ], analysis: { 
                          low: "As barreiras ao conhecimento técnico sugerem que a fundamentação das decisões pode ser demorada. A busca manual por normas pode consumir tempo precioso de especialistas, o que poderia favorecer interpretações diferentes para casos iguais, podendo gerar insegurança administrativa no órgão.", 
                          med: "A busca por palavras-chave localiza arquivos, mas a extração de inteligência do conteúdo parece exigir muito tempo de leitura. Esse processo pode ser demorado e poderia atrasar a elaboração de pareceres técnicos, impedindo que o conhecimento institucional fosse usado de forma ágil para apoiar a gestão.", 
                          high: "A facilidade em extrair respostas exatas de grandes volumes de documentos pode permitir que o órgão atenda demandas com muito mais segurança institucional, eliminando a necessidade de pesquisas manuais lentas." 
                      }
                    },
                    { id: 6, text: "Qual a clareza das informações públicas para quem não é especialista?", 
                      options: [
                          { val: 1, label: "A) Nada claro: Dados técnicos demais e inacessíveis." },
                          { val: 3, label: "B) Claro: dados disponíveis, mas exigem grande esforço de interpretação." },
                          { val: 5, label: "C) Muito Claro: IA traduz complexidade em respostas simples e claras." }
                      ], analysis: { 
                          low: "A baixa clareza das informações digitais pode estar gerando uma demanda excessiva por atendimentos diretos que seriam evitáveis. Isso pode representar um obstáculo para que o cidadão compreenda seus direitos, podendo dificultar a percepção de transparência real perante o órgão público.", 
                          med: "Os dados são públicos, mas sua interpretação pode ainda exigir esforço do cidadão, podendo tornar o atendimento demorado. Existe uma oportunidade de usar a tecnologia para traduzir a linguagem técnica em termos simples, o que poderia facilitar a vida das pessoas e reduzir a carga de trabalho interna.", 
                          high: "O uso de IA como tradutor da burocracia estatal aproxima o governo do cidadão e favorece a transparência institucional. Esse modelo tem potencial para elevar a satisfação popular e demonstra uma gestão moderna que utiliza a tecnologia para servir com clareza e eficiência comunicativa." 
                      }
                    }
                ]
            },
            {
                category: "Cultura e Pessoas",
                items: [
                    { id: 7, text: "O seu sistema de atendimento ao cidadão apenas 'abre protocolos' ou resolve de ponta a ponta?", 
                      options: [
                          { val: 1, label: "A) Registra protocolos e depende totalmente de análise humana posterior." },
                          { val: 3, label: "B) Encaminha para áreas responsáveis, mas sem acompanhamento automático." },
                          { val: 5, label: "C) Orquestra o fluxo ponta a ponta com automação/IA até a resolução." }
                      ], analysis: { 
                          low: "O foco apenas em registrar pedidos pode limitar a resolução real das demandas, tornando o fluxo de trabalho demorado. Sem um acompanhamento inteligente, a gestão pode perder a visão sobre o que foi resolvido, o que poderia gerar insatisfação no cidadão e acúmulo de trabalho pendente.", 
                          med: "O sistema controla o trâmite, mas a decisão final parece enfrentar esperas por análise humana manual. Esse modelo pode ser demorado e suscetível a falhas de acompanhamento, uma vez que a tecnologia pode não estar atuando de forma ativa para garantir o desfecho célere da demanda.", 
                          high: "A orquestração automática do atendimento pode favorecer o cumprimento de metas de gestão e permite que o órgão acompanhe o desempenho de cada área com total clareza sobre a resolutividade final." 
                      }
                    },
                    { id: 8, text: "Como o órgão protege seu capital intelectual para garantir que o saber técnico não se perca com a saída ou troca de servidores?", 
                      options: [
                          { val: 1, label: "A) O conhecimento reside de forma individual; a rotatividade de pessoal gera perda imediata de inteligência e atrasos críticos." },
                          { val: 3, label: "B) O conhecimento está consolidado, mas a aplicação prática ainda depende de experiência pessoal de servidores específicos." },
                          { val: 5, label: "C) O conhecimento está institucionalizado em uma camada de inteligência (ontologia) que orienta a execução de forma constante." }
                      ], analysis: { 
                          low: "A dependência do conhecimento individual traz um risco potencial para a continuidade administrativa. Quando servidores experientes saem, o órgão pode perder memória técnica, o que poderia tornar a retomada de processos lenta e favorecer a ocorrência de erros por falta de histórico.", 
                          med: "O órgão possui regras formalizadas, mas a aplicação correta ainda pode depender muito da experiência pessoal de cada um. Esse modelo poderia tornar o trabalho demorado para novos servidores, que talvez levem tempo para aprender a rotina técnica sem um suporte inteligente ativo.", 
                          high: "A institucionalização do conhecimento técnico em camadas inteligentes garante que o órgão preserve sua memória operacional de forma perene. Isso favorece a continuidade dos serviços e permite que a equipe entregue um trabalho de alta qualidade independente de trocas no quadro de pessoal." 
                      }
                    }
                ]
            },
            {
                category: "Governança Responsável",
                items: [
                    { id: 9, text: "Como sua gestão garante que as decisões automatizadas por IA sejam explicáveis e auditáveis?", 
                      options: [
                          { val: 1, label: "A) Baixa Explicabilidade: O sistema entrega o resultado, mas não explica os critérios utilizados, dificultando auditorias ou defesas técnicas." },
                          { val: 3, label: "B) Rastro Técnico: O sistema gera registros de uso (logs), mas a lógica da decisão não é traduzida para uma linguagem clara para o gestor ou cidadão." },
                          { val: 5, label: "C) Transparência Total (Glass Box): Cada ação da IA gera automaticamente uma justificativa em texto comum, detalhando os motivos e dados que sustentam aquela decisão." }
                      ], analysis: { 
                          low: "A falta de clareza sobre como o sistema chega a um resultado pode trazer insegurança administrativa. Sem justificativas fáceis de entender, poderia ser difícil prestar contas ou fundamentar decisões perante fiscalizadores, o que tem potencial para comprometer a transparência institucional.", 
                          med: "Existem registros técnicos, mas a tradução da lógica do sistema para uma linguagem de gestão pode ser demorada. Esse cenário talvez exija intervenção manual constante para explicar decisões, o que consome tempo e poderia dificultar auditorias rápidas de conformidade normativa.", 
                          high: "O modelo de transparência plena favorece a prestação de contas e busca garantir que cada ato automatizado tenha uma justificativa clara. Isso pode trazer segurança para a gestão, facilitando auditorias e assegurando que a tecnologia seja uma aliada estratégica da transparência pública." 
                      }
                    },
                    { id: 10, text: "Como o órgão garante que o atendimento e as decisões administrativas seguem as normas mais recentes (decretos, portarias e regulamentos)?", 
                      options: [
                          { val: 1, label: "A) O servidor precisa buscar atualizações por conta própria;" },
                          { val: 3, label: "B) Enviamos avisos e circulares por e-mail, mas não temos como garantir que a regra seja aplicada na ponta." },
                          { val: 5, label: "C) As novas normas são integradas à inteligência do sistema, que guia o servidor em tempo real, garantindo segurança." }
                      ], analysis: { 
                          low: "A atualização manual de normas pode ser um processo demorado e arriscado, podendo levar ao uso involuntário de regras defasadas. Isso poderia gerar insegurança na prestação do serviço e possíveis falhas na aplicação da lei, resultando em atos administrativos com fundamentação frágil.", 
                          med: "A comunicação de novas regras existe, mas pode não haver garantia de que elas sejam aplicadas de forma padrão por todos. Esse rito de conferência talvez seja demorado e exija fiscalização constante, elevando o custo de controle interno e o risco de decisões fora do regulamento atualizado.", 
                          high: "A integração automática de normas garante que os atendimentos sigam as regras mais recentes de forma nativa. Esse nível de segurança administrativa tem o potencial de eliminar erros por desconhecimento e garantir que o órgão atue sempre dentro da conformidade legal atualizada." 
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
                
                let ana = "";
                if (score <= 2) ana = sec.items[0].analysis.low;
                else if (score <= 4) ana = sec.items[0].analysis.med;
                else ana = sec.items[0].analysis.high;
                
                resultsData.topics.push({ cat: sec.category, score: score.toFixed(1), ana: ana });
                chartLabels.push(sec.category);
                chartData.push(score);

                topicsContainer.innerHTML += `
                    <div class="border-l border-slate-800 pl-6 pb-12">
                        <div class="flex justify-between mb-4 text-white font-bold text-lg">
                            <span>${sec.category}</span>
                            <span>${score.toFixed(1)}/5</span>
                        </div>
                        <div class="w-full bg-slate-800 h-2 mb-6 rounded-full overflow-hidden">
                            <div class="bg-brand-solid h-full" style="width:${pct}%"></div>
                        </div>
                        <p class="text-slate-300 text-sm leading-relaxed text-justify">
                            <span class="text-brand-lime font-bold uppercase text-[10px] tracking-widest block mb-2">Diagnóstico de Prontidão:</span>
                            "${ana}"
                        </p>
                    </div>`;
            });

            const capitalizedName = clientData.name
                .toLowerCase()
                .split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');

            document.getElementById('personalized-greeting').innerText = "Olá, " + capitalizedName + "! Aqui está o seu diagnóstico.";

            const ctx = document.getElementById('radarChart').getContext('2d');
            if (radarChart) radarChart.destroy();
            radarChart = new Chart(ctx, {
                type: 'radar',
                data: {
                    labels: chartLabels,
                    datasets: [{
                        label: 'Prontidão',
                        data: chartData,
                        backgroundColor: 'rgba(0, 190, 255, 0.2)',
                        borderColor: '#FF00FF', 
                        borderWidth: 2.5,
                        pointBackgroundColor: '#C0FF7D',
                        pointBorderColor: '#fff',
                        pointRadius: 4
                    }]
                },
                options: {
                    layout: { padding: { top: 40, bottom: 40, left: 60, right: 60 } },
                    scales: {
                        r: {
                            angleLines: { color: 'rgba(255, 255, 255, 0.1)' },
                            grid: { color: 'rgba(255, 255, 255, 0.1)' },
                            pointLabels: { color: '#e2e8f0', font: { size: 10, family: 'Poppins', weight: '600' }, padding: 15 },
                            ticks: { display: false, stepSize: 1 },
                            suggestedMin: 0,
                            suggestedMax: 5
                        }
                    },
                    plugins: { legend: { display: false } }
                }
            });

            resultsData.total = total;
            if (total <= 15) { 
                resultsData.title = "Gestão Analógica (Demanda Manual)"; 
                resultsData.deep = `<strong>Análise Técnica Sugerida:</strong> O diagnóstico indica que o órgão pode operar com processos fragmentados e dependência de fluxos manuais. A tecnologia atual talvez sirva primordialmente para registro, o que poderia favorecer o 'esquecimento institucional' de informações estratégicas.<br><br><strong>Potenciais riscos administrativos:</strong> Pode haver tendência de lentidão no tempo de resposta e risco de decisões administrativas divergentes. A possível ausência de uma memória técnica centralizada talvez exponha a gestão a falhas evitáveis, dificultando auditorias de conformidade.<br><br><strong>Oportunidade Estratégica:</strong> Organizar o conhecimento técnico e as normas do órgão em uma base digital inteligente pode tornar o atendimento mais ágil e oferecer maior segurança para as decisões da gestão.`;
                resultsData.plan = `<div class="p-4 bg-slate-800 rounded-lg border border-slate-700 mb-3"><strong>1. Mapeamento de Pontos Críticos:</strong> Identificar onde o fluxo de informações pode estar travando por depender de tarefas puramente manuais.</div><div class="p-4 bg-slate-800 rounded-lg border border-slate-700 mb-3"><strong>2. Fundação de Dados:</strong> Organizar as regras e procedimentos internos de forma digital para que a tecnologia possa apoiar as tarefas técnicas no futuro.</div><div class="p-4 bg-slate-800 rounded-lg border border-slate-700"><strong>3. Preservação de Memória:</strong> Criar regras para garantir que o conhecimento técnico permaneça no órgão, evitando que ele se perca quando houver troca de equipe.</div>`;
            }
            else if (total <= 30) { 
                resultsData.title = "Gestão Digital (Suporte Básico)"; 
                resultsData.deep = `<strong>Análise Técnica Sugerida:</strong> A instituição parece já utilizar sistemas digitais, mas a análise técnica de cada demanda pode ainda ser predominantemente manual. Isso talvez gere uma percepção interna de agilidade, mas o desfecho final para o cidadão ainda corre o risco de ser demorado devido a gargalos de revisão.<br><br><strong>Eficiência Operacional Potencial:</strong> Os dados existentes poderiam ser melhor aproveitados para gerar respostas mais ágeis. Esse modelo atual talvez sobrecarregue a equipe técnica com tarefas repetitivas, o que pode limitar a capacidade de foco em casos de alta complexidade estratégica.<br><br><strong>Valor de Modernização:</strong> O uso de agentes inteligentes para triagem tem potencial para organizar o fluxo e acelerar o tempo de resposta institucional de forma considerável.`;
                resultsData.plan = `<div class="p-4 bg-slate-800 rounded-lg border border-slate-700 mb-3"><strong>1. Triagem Assistida:</strong> Testar IA para classificar pedidos automaticamente, buscando reduzir o tempo de encaminhamento entre áreas.</div><div class="p-4 bg-slate-800 rounded-lg border border-slate-700 mb-3"><strong>2. Integração Administrativa:</strong> Buscar caminhos para unificar bases de dados para que a conferência de informações seja potencialmente automática.</div><div class="p-4 bg-slate-800 rounded-lg border border-slate-700"><strong>3. Visibilidade de Prazos:</strong> Utilizar tecnologia para monitorar tempos internos de resposta, favorecendo a resolutividade das demandas.</div>`;
            }
            else if (total <= 45) { 
                resultsData.title = "Gestão Estratética (Segurança Ativa)"; 
                resultsData.deep = `<strong>Análise Técnica Sugerida:</strong> O órgão demonstra uma maturidade avançada e talvez já utilize tecnologia para auxiliar a tomada de decisão. O maior ganho futuro pode residir na segurança administrativa e na garantia de que as áreas decidam seguindo critérios técnicos padronizados.<br><br><strong>Impacto na Governança:</strong> A unificação de normas em sistemas inteligentes tem potencial para garantir que os fluxos de trabalho sejam auditáveis. Isso favorece o princípio da impessoalidade e fortalece a transparência de cada ato administrativo governamental.<br><br><strong>Diferencial Consultivo:</strong> O modelo de justificativa automática (Glass Box) tem potencial para facilitar a prestação de contas e proteger o gestor através de fundamentações técnicas rastreáveis.`;
                resultsData.plan = `<div class="p-4 bg-slate-800 rounded-lg border border-slate-700 mb-3"><strong>1. Ontologia de Normas:</strong> Buscar integrar regulamentos e portarias à IA para orientar a execução de tarefas técnicas em tempo real.</div><div class="p-4 bg-slate-800 rounded-lg border border-slate-700 mb-3"><strong>2. Apoio à Elaboração:</strong> Automatizar a geração de minutas baseadas em dados, buscando reduzir o tempo dedicado à redação técnica.</div><div class="p-4 bg-slate-800 rounded-lg border border-slate-700"><strong>3. Auditoria Inteligente:</strong> Aplicar filtros de inteligência para identificar potenciais erros ou desvios de finalidade antes da conclusão do ato.</div>`;
            }
            else { 
                resultsData.title = "Liderança Agêntica (Governo Eficiente)"; 
                resultsData.deep = `<strong>Status de Excelência Potencial:</strong> Sua organização demonstra ser uma possível referência em gestão pública moderna. A tecnologia parece atuar de forma proativa, organizando o trabalho e resolvendo demandas complexas sob supervisão técnica qualificada.<br><br><strong>Visão Estratégica:</strong> O próximo passo poderia ser a auto-otimização constante, onde a IA prevê necessidades da população para auxiliar na alocação de recursos com alta precisão e economicidade máxima.<br><br><strong>Sustentabilidade da Gestão:</strong> O foco contínuo em transparência e fundamentação técnica pode garantir a manutenção da confiança institucional e o cumprimento pleno da missão do órgão público.`;
                resultsData.plan = `<div class="p-4 bg-slate-800 rounded-lg border border-slate-700 mb-3"><strong>1. Planejamento Preditivo:</strong> Usar modelos de IA para prever demandas futuras e ajustar o planejamento orçamentário com antecedência estratégica.</div><div class="p-4 bg-slate-800 rounded-lg border border-slate-700 mb-3"><strong>2. Ecossistema Transversal:</strong> Liderar a conexão tecnológica com outros órgãos para agilizar decisões compartilhadas de forma segura.</div><div class="p-4 bg-slate-800 rounded-lg border border-slate-700"><strong>3. Inovação na Gestão:</strong> Explorar novas aplicações de IA para as tarefas mais complexas e sensíveis da administração pública moderna.</div>`;
            }

            document.getElementById('result-title').innerText = resultsData.title;
            document.getElementById('result-score').innerText = total;
            document.getElementById('deep-analysis-content').innerHTML = `<p>${resultsData.deep}</p>`;
            document.getElementById('action-plan-content').innerHTML = resultsData.plan;

            document.getElementById('g_name').value = capitalizedName;
            document.getElementById('g_email').value = clientData.email;
            for(let i=1; i<=10; i++) { if(document.getElementById(`g_q${i}`)) document.getElementById(`g_q${i}`).value = responses[i].val; }
            document.getElementById('googleForm').submit();

            document.getElementById('landing-page').classList.add('hidden-page');
            document.getElementById('result-page').classList.remove('hidden-page');
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setTimeout(() => { document.getElementById('result-bar').style.width = (total*2) + "%"; }, 800);
        }

        function openPrintWindow() {
            const chartImage = document.getElementById('radarChart').toDataURL('image/png');
            const printWindow = window.open('', '_blank', 'width=900,height=1200');
            
            const accelerationHtml = `
                <div class="diagnosis-box" style="border-left: 6px solid #00BEFF; background: #0f172a; color: #e2e8f0; padding: 25px; border-radius: 10px; margin-top: 20px;">
                    <p style="margin-bottom: 20px; font-weight: bold; color: #00BEFF; font-size: 14px;">Pilares da Solução Xertica.ai (FDM):</p>
                    <div style="margin-bottom: 15px;">
                        <strong style="color: #C0FF7D;">1. Agentes IA Especializados:</strong><br>
                        <span style="font-size: 11px; color: #cbd5e1;">Possibilidade de triagem e análise ágil de solicitações para favorecer a resposta ao cidadão.</span>
                    </div>
                    <div style="margin-bottom: 15px;">
                        <strong style="color: #00BEFF;">2. Camada Ontológica:</strong><br>
                        <span style="font-size: 11px; color: #cbd5e1;">Unificação das normas do órgão para auxiliar na padronização administrativa.</span>
                    </div>
                    <div>
                        <strong style="color: #fff;">3. Governança Glass Box:</strong><br>
                        <span style="font-size: 11px; color: #cbd5e1;">Justificativas fundamentadas para as ações da IA, facilitando prestações de contas e auditorias.</span>
                    </div>
                </div>
            `;

            const pdfHtml = `
                <html>
                <head>
                    <title>Laudo Técnico - Xertica.ai</title>
                    <style>
                        body { font-family: Arial, sans-serif; padding: 0; margin: 0; background-color: #020617; color: #e2e8f0; }
                        .container { padding: 40px; }
                        .header { text-align: center; border-bottom: 4px solid #00BEFF; padding-bottom: 25px; margin-bottom: 30px; }
                        .logo { width: 180px; margin-bottom: 15px; }
                        h1 { color: #00BEFF; font-size: 22px; margin: 0; text-transform: uppercase; }
                        h2 { color: #00BEFF; font-size: 16px; margin-top: 30px; border-bottom: 1px solid #1e293b; padding-bottom: 8px; }
                        .info-box { background-color: #0f172a; padding: 30px; border-radius: 15px; margin-bottom: 30px; text-align: center; border: 1px solid #1e293b; }
                        table { width: 100%; border-collapse: collapse; margin-bottom: 30px; background: #0f172a; }
                        th, td { padding: 12px; border: 1px solid #1e293b; text-align: left; font-size: 10px; }
                        th { background-color: #1e293b; color: #00BEFF; font-weight: bold; }
                        .diagnosis-box { padding: 20px; background: #0f172a; border: 1px solid #1e293b; margin-bottom: 25px; text-align: justify; border-radius: 10px; font-size: 11px; line-height: 1.6; }
                        .chart-img { display: block; margin: 20px auto; max-width: 400px; background: #0f172a; border-radius: 15px; }
                        .footer { margin-top: 50px; text-align: center; font-size: 10px; color: #475569; border-top: 1px solid #1e293b; padding-top: 20px; }
                        @media print { body { -webkit-print-color-adjust: exact; } }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <img src="https://storage.googleapis.com/etp-bucket/Logos%20Xertica.ai%20%28.png%29/xertica.ai/Copy%20of%20Logo_XERTICA_white.png" class="logo">
                            <h1>Laudo Técnico de Maturidade IA</h1>
                        </div>
                        <div class="info-box">
                            <div style="font-size: 10px; text-transform: uppercase; color: #C0FF7D; letter-spacing: 2px;">Nível de Prontidão IA</div>
                            <div style="font-size: 28px; color: #00BEFF; font-weight: bold; margin: 10px 0;">${resultsData.title}</div>
                            <div style="font-size: 14px;">Pontuação Consolidada: <strong>${resultsData.total} / 50</strong></div>
                        </div>
                        <div style="text-align: center;"><img src="${chartImage}" class="chart-img"></div>
                        <h2>1. Eficiência Governamental (Análise Técnica)</h2>
                        <table>
                            <thead><tr><th>Eixo de Gestão</th><th style="text-align:center">Pontuação</th><th>Diagnóstico Consultivo</th></tr></thead>
                            <tbody>${resultsData.topics.map(t => `<tr><td style="width: 20%"><strong>${t.cat}</strong></td><td style="text-align:center; color:#C0FF7D; width: 10%"><strong>${t.score}/5</strong></td><td style="text-align: justify">${t.ana}</td></tr>`).join('')}</tbody>
                        </table>
                        <div style="page-break-before: always;"></div>
                        <h2>2. Seu Diagnóstico Estratégico Consolidado</h2>
                        <div class="diagnosis-box">${resultsData.deep}</div>
                        <h2>3. Plano de Ação Sugerido</h2>
                        <div class="diagnosis-box" style="border-left: 6px solid #C0FF7D;">${resultsData.plan}</div>
                        <h2>4. Aceleração Governamental Xertica.ai</h2>
                        ${accelerationHtml}
                        <div class="footer">Xertica.ai © 2026</div>
                    </div>
                    <script>window.onload = function() { setTimeout(() => { window.print(); }, 800); }<\/script>
                </body>
                </html>
            `;
            printWindow.document.open();
            printWindow.document.write(pdfHtml);
            printWindow.document.close();
        }
    </script>
</body>
</html>