import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ExponentialChart } from "@/components/ExponentialChart";
import { LimitChart } from "@/components/LimitChart";
import { DerivativeChart } from "@/components/DerivativeChart";
import { IntegralChart } from "@/components/IntegralChart";
import { DataTable } from "@/components/DataTable";

const Index = () => {
  // Dados para tabelas
  const exponentialData = [
    { mes: 0, seguidores: 5000, crescimento: "-" },
    { mes: 3, seguidores: 6298, crescimento: "25.96%" },
    { mes: 6, seguidores: 7934, crescimento: "58.68%" },
    { mes: 9, seguidores: 9995, crescimento: "99.90%" },
    { mes: 12, seguidores: 12591, crescimento: "151.82%" },
  ];

  const limitData = [
    { mes: 0, engajamento: 0, percentual: "0%" },
    { mes: 6, engajamento: 45119, percentual: "45.12%" },
    { mes: 12, engajamento: 69881, percentual: "69.88%" },
    { mes: 18, engajamento: 83470, percentual: "83.47%" },
    { mes: 24, engajamento: 90928, percentual: "90.93%" },
  ];

  const derivativeData = [
    { tempo: 0, velocidade: "0.00 m/s", aceleracao: "4 m/s²" },
    { tempo: 2.5, velocidade: "10.00 m/s", aceleracao: "4 m/s²" },
    { tempo: 5, velocidade: "20.00 m/s", aceleracao: "4 m/s²" },
    { tempo: 7.5, velocidade: "30.00 m/s", aceleracao: "4 m/s²" },
    { tempo: 10, velocidade: "40.00 m/s", aceleracao: "4 m/s²" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-[hsl(var(--header-bg))] text-white py-6 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-center">
            Sprint 4 - Calculo Diferencial e Integral Aplicado ao Futebol Feminino
          </h1>
          <p className="text-center text-muted-foreground mt-2 text-sm md:text-base">
            Funções, Limites, Derivadas e Integrais - Sprint 3
          </p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent/10 via-background to-background py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-accent text-accent-foreground hover:bg-accent/90 text-base px-4 py-2">
            Relatório Matemático
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Matemática no Futebol Feminino
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Análise matemática completa aplicando funções exponenciais, limites, derivadas e integrais ao contexto esportivo e digital
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 space-y-16">
        
        {/* Introduction */}
        <Card className="shadow-lg border-accent/20">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl mb-2">📊 Introdução</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Este relatório demonstra a aplicação prática de conceitos de Cálculo Diferencial e Integral 
              no contexto do futebol feminino. Analisamos tanto aspectos esportivos (velocidade, distância) 
              quanto aspectos digitais (crescimento de seguidores, engajamento em redes sociais).
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Através de modelos matemáticos, gráficos e tabelas, mostramos como a matemática pode 
              quantificar e prever comportamentos que normalmente são apenas percebidos intuitivamente.
            </p>
          </CardContent>
        </Card>

        {/* Section 1: Funções Exponenciais */}
        <div className="space-y-6">
          <Card className="shadow-lg border-l-4 border-l-accent">
            <CardHeader>
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div>
                  <CardTitle className="text-2xl md:text-3xl mb-2">1. Funções e Modelagem</CardTitle>
                  <CardDescription className="text-base">
                    Crescimento exponencial de seguidores nas redes sociais
                  </CardDescription>
                </div>
                <Badge variant="outline" className="border-accent text-accent">Função Exponencial</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Modelo Matemático</h3>
                <div className="bg-muted/50 p-4 rounded-lg border-l-4 border-accent">
                  <p className="font-mono text-lg mb-2">f(t) = 5000 × (1.08)^t</p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p><strong>Onde:</strong></p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li><strong>f(t)</strong> = número de seguidores no mês t</li>
                      <li><strong>5000</strong> = número inicial de seguidores (t = 0)</li>
                      <li><strong>1.08</strong> = fator de crescimento (8% ao mês)</li>
                      <li><strong>t</strong> = tempo em meses</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mt-6">Análise Gráfica</h3>
                <ExponentialChart />

                <h3 className="text-xl font-semibold mt-6">Dados Numéricos</h3>
                <DataTable 
                  title="Crescimento de Seguidores"
                  description="Evolução trimestral do número de seguidores"
                  data={exponentialData}
                  headers={["Mês", "Seguidores", "Crescimento Acumulado"]}
                />

                <h3 className="text-xl font-semibold mt-6">Interpretação dos Resultados</h3>
                <div className="bg-accent/5 p-4 rounded-lg space-y-3">
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Crescimento acelerado:</strong> Nos primeiros 12 meses, 
                    o número de seguidores mais que dobrou, passando de 5.000 para 12.591 seguidores. 
                    Este crescimento exponencial é típico de perfis em ascensão nas redes sociais.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Taxa constante:</strong> O crescimento de 8% ao mês 
                    representa uma taxa consistente, sugerindo estratégias de marketing digital eficazes e 
                    conteúdo de qualidade que atrai novos seguidores continuamente.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Aplicação prática:</strong> Este modelo pode ser usado 
                    para prever o alcance futuro da jogadora e planejar campanhas publicitárias, parcerias 
                    e oportunidades de patrocínio baseadas em audiência projetada.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Section 2: Limites */}
        <div className="space-y-6">
          <Card className="shadow-lg border-l-4 border-l-accent">
            <CardHeader>
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div>
                  <CardTitle className="text-2xl md:text-3xl mb-2">2. Limites</CardTitle>
                  <CardDescription className="text-base">
                    Análise do ponto de saturação do engajamento digital
                  </CardDescription>
                </div>
                <Badge variant="outline" className="border-accent text-accent">Limite</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Modelo Matemático</h3>
                <div className="bg-muted/50 p-4 rounded-lg border-l-4 border-accent">
                  <p className="font-mono text-lg mb-2">f(t) = 100000 × (1 - e^(-0.1t))</p>
                  <p className="font-mono text-lg mb-4">lim(t → ∞) f(t) = 100.000</p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p><strong>Onde:</strong></p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li><strong>f(t)</strong> = engajamento (interações) no mês t</li>
                      <li><strong>100.000</strong> = limite de saturação (L)</li>
                      <li><strong>e</strong> = número de Euler (~2.718)</li>
                      <li><strong>0.1</strong> = taxa de aproximação ao limite</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mt-6">Análise Gráfica</h3>
                <LimitChart />

                <h3 className="text-xl font-semibold mt-6">Dados Numéricos</h3>
                <DataTable 
                  title="Saturação do Engajamento"
                  description="Aproximação ao limite L ao longo do tempo"
                  data={limitData}
                  headers={["Mês", "Engajamento", "% do Limite"]}
                />

                <h3 className="text-xl font-semibold mt-6">Interpretação dos Resultados</h3>
                <div className="bg-accent/5 p-4 rounded-lg space-y-3">
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Saturação gradual:</strong> O engajamento cresce 
                    rapidamente no início, mas desacelera conforme se aproxima do limite de 100.000 interações. 
                    Aos 24 meses, já atingiu 90.93% da capacidade máxima.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Limite físico:</strong> O valor L = 100.000 representa 
                    o máximo engajamento possível dado o tamanho da audiência, a frequência de publicação e 
                    o algoritmo da plataforma. Nenhum perfil cresce indefinidamente.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Estratégia de conteúdo:</strong> Conhecer o limite 
                    ajuda a estabelecer metas realistas e a identificar quando é necessário expandir para 
                    novas plataformas ou mudar a estratégia de conteúdo para alcançar novos públicos.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Section 3: Derivadas */}
        <div className="space-y-6">
          <Card className="shadow-lg border-l-4 border-l-accent">
            <CardHeader>
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div>
                  <CardTitle className="text-2xl md:text-3xl mb-2">3. Derivadas</CardTitle>
                  <CardDescription className="text-base">
                    Velocidade instantânea e aceleração de uma jogadora
                  </CardDescription>
                </div>
                <Badge variant="outline" className="border-accent text-accent">Derivada</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Modelo Matemático</h3>
                <div className="bg-muted/50 p-4 rounded-lg border-l-4 border-accent">
                  <p className="font-mono text-lg mb-2">s(t) = 2t²</p>
                  <p className="font-mono text-lg mb-2">v(t) = ds/dt = 4t</p>
                  <p className="font-mono text-lg mb-4">a(t) = dv/dt = 4</p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p><strong>Onde:</strong></p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li><strong>s(t)</strong> = posição da jogadora no tempo t (em metros)</li>
                      <li><strong>v(t)</strong> = velocidade instantânea (primeira derivada)</li>
                      <li><strong>a(t)</strong> = aceleração (segunda derivada)</li>
                      <li><strong>t</strong> = tempo em segundos</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mt-6">Análise Gráfica</h3>
                <DerivativeChart />

                <h3 className="text-xl font-semibold mt-6">Dados Numéricos</h3>
                <DataTable 
                  title="Velocidade e Aceleração"
                  description="Análise do movimento da jogadora em diferentes instantes"
                  data={derivativeData}
                  headers={["Tempo (s)", "Velocidade", "Aceleração"]}
                />

                <h3 className="text-xl font-semibold mt-6">Interpretação dos Resultados</h3>
                <div className="bg-accent/5 p-4 rounded-lg space-y-3">
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Aceleração constante:</strong> A derivada segunda 
                    mostra que a jogadora mantém uma aceleração constante de 4 m/s², típica de um sprint 
                    em linha reta sem interferências.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Crescimento linear da velocidade:</strong> A velocidade 
                    aumenta de forma linear, o que indica que a jogadora está acelerando uniformemente. 
                    Em 5 segundos, atinge 20 m/s (72 km/h).
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Análise de desempenho:</strong> Este modelo permite 
                    avaliar a capacidade de aceleração da atleta, importante para contra-ataques rápidos 
                    e escapadas da marcação. Taxas de aceleração maiores indicam melhor explosão muscular.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Aplicação no treinamento:</strong> Identificar pontos 
                    de máxima velocidade (derivada máxima) ajuda a otimizar programas de condicionamento físico 
                    e prevenir lesões por sobrecarga.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Section 4: Integrais */}
        <div className="space-y-6">
          <Card className="shadow-lg border-l-4 border-l-accent">
            <CardHeader>
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div>
                  <CardTitle className="text-2xl md:text-3xl mb-2">4. Integrais</CardTitle>
                  <CardDescription className="text-base">
                    Distância total percorrida pela jogadora
                  </CardDescription>
                </div>
                <Badge variant="outline" className="border-accent text-accent">Integral</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Modelo Matemático</h3>
                <div className="bg-muted/50 p-4 rounded-lg border-l-4 border-accent">
                  <p className="font-mono text-lg mb-2">v(t) = 4t</p>
                  <p className="font-mono text-lg mb-2">s = ∫₀¹⁰ v(t) dt = ∫₀¹⁰ 4t dt</p>
                  <p className="font-mono text-lg mb-4">s = [2t²]₀¹⁰ = 2(10)² - 2(0)² = 200 metros</p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p><strong>Onde:</strong></p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li><strong>v(t)</strong> = função velocidade</li>
                      <li><strong>s</strong> = distância total (área sob a curva)</li>
                      <li><strong>∫₀¹⁰</strong> = integral definida de 0 a 10 segundos</li>
                      <li><strong>200m</strong> = distância percorrida no intervalo</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mt-6">Análise Gráfica</h3>
                <IntegralChart />

                <div className="bg-muted/30 p-4 rounded-lg mt-6">
                  <h4 className="font-semibold mb-3">Cálculo Passo a Passo:</h4>
                  <div className="space-y-2 font-mono text-sm">
                    <p>1. Integral: ∫ 4t dt = 2t² + C</p>
                    <p>2. Aplicando limites: [2t²]₀¹⁰</p>
                    <p>3. Limite superior: 2(10)² = 2 × 100 = 200</p>
                    <p>4. Limite inferior: 2(0)² = 0</p>
                    <p>5. Resultado: 200 - 0 = 200 metros</p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mt-6">Interpretação dos Resultados</h3>
                <div className="bg-accent/5 p-4 rounded-lg space-y-3">
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Área sob a curva:</strong> A área sombreada no gráfico 
                    representa geometricamente a distância total percorrida. Este conceito visual facilita 
                    a compreensão da relação entre velocidade e distância.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Distância acumulada:</strong> Em 10 segundos de corrida 
                    com aceleração constante, a jogadora percorre 200 metros. Esta é uma distância significativa 
                    em um campo de futebol (que tem ~100m de comprimento).
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Monitoramento de desempenho:</strong> Integrar a velocidade 
                    ao longo de uma partida completa permite calcular a distância total percorrida pela atleta, 
                    métrica crucial para avaliar condicionamento físico e intensidade de jogo.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Aplicação em GPS esportivo:</strong> Dispositivos modernos 
                    usam este princípio: medem velocidade continuamente e integram ao longo do tempo para 
                    calcular distância total, mapas de calor e zonas de intensidade.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Conclusion */}
        <Card className="shadow-lg bg-gradient-to-br from-accent/5 to-background border-accent/20">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl mb-2">📈 Conclusão</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Este relatório demonstrou como conceitos fundamentais de Cálculo — funções exponenciais, 
              limites, derivadas e integrais — podem ser aplicados de forma prática e relevante ao 
              contexto do futebol feminino.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold mb-2 text-accent">Crescimento Digital</h4>
                <p className="text-sm text-muted-foreground">
                  Funções exponenciais modelam o crescimento de seguidores, enquanto limites 
                  identificam pontos de saturação no engajamento.
                </p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold mb-2 text-accent">Desempenho Físico</h4>
                <p className="text-sm text-muted-foreground">
                  Derivadas calculam velocidade e aceleração instantâneas, e integrais determinam 
                  distâncias totais percorridas.
                </p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mt-6">
              A matemática transforma observações qualitativas em análises quantitativas precisas, 
              permitindo tomadas de decisão baseadas em dados tanto para estratégias de marketing 
              digital quanto para otimização de treinamento físico das atletas.
            </p>
          </CardContent>
        </Card>

        {/* Team Members */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl mb-2">👥 Integrantes</CardTitle>
            <CardDescription>Equipe responsável pelo desenvolvimento do projeto</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                <p className="font-semibold">Bruno Gama Masseiras</p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                <p className="font-semibold">Kauai Rosa</p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                <p className="font-semibold">Lucas Pedro</p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                <p className="font-semibold">Murilo Bastos</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="bg-[hsl(var(--header-bg))] text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            Sprint 3 - Cálculo Aplicado ao Futebol Feminino
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Matemática • Análise • Modelagem • Validação
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
