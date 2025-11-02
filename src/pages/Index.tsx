import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-[hsl(var(--header-bg))] text-white py-6 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-center">
            Cálculo Aplicado ao Futebol Feminino
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
            Projeto Acadêmico
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Matemática no Futebol Feminino
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Transformando o protótipo em uma versão funcional simples, validando as ideias com dados reais ou simulados
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 space-y-12">
        
        {/* Section 1: Funções e Modelagem */}
        <Card className="shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-2xl md:text-3xl mb-2">1. Funções e Modelagem</CardTitle>
                <CardDescription className="text-base">
                  Modelagem matemática aplicada ao crescimento digital e desempenho físico
                </CardDescription>
              </div>
              <Badge variant="outline" className="border-accent text-accent">Análise</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Análise do crescimento:</strong> Número de seguidores de uma jogadora ao longo do tempo usando funções exponenciais
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Evolução da audiência:</strong> Modelagem do engajamento em um campeonato ao longo dos anos
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Comparação de desempenho:</strong> Análise do desempenho físico de duas atletas usando funções matemáticas
                </p>
              </div>
            </div>
            <Separator />
            <div className="bg-muted/30 p-4 rounded-lg">
              <p className="font-mono text-sm">
                <strong>Função Exponencial:</strong> f(t) = 5000 · (1.08)^t
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Crescimento de 8% ao mês no número de seguidores
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Section 2: Limites */}
        <Card className="shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-2xl md:text-3xl mb-2">2. Limites</CardTitle>
                <CardDescription className="text-base">
                  Análise de pontos de saturação e comportamento assintótico
                </CardDescription>
              </div>
              <Badge variant="outline" className="border-accent text-accent">Saturação</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Reavaliar modelos de crescimento:</strong> Indicar limites para t → ∞ nos modelos propostos
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Gráficos e interpretação:</strong> Análise visual do comportamento assintótico das funções
                </p>
              </div>
            </div>
            <Separator />
            <div className="bg-muted/30 p-4 rounded-lg">
              <p className="font-mono text-sm">
                <strong>Limite de Saturação:</strong> lim(t → ∞) f(t) = L
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Ponto máximo de engajamento digital da jogadora
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Section 3: Derivadas */}
        <Card className="shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-2xl md:text-3xl mb-2">3. Derivadas</CardTitle>
                <CardDescription className="text-base">
                  Taxas de variação e análise de velocidade instantânea
                </CardDescription>
              </div>
              <Badge variant="outline" className="border-accent text-accent">Variação</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Taxas de variação:</strong> Velocidade de uma jogadora em um sprint de 100m
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Crescimento de engajamento:</strong> Taxa de variação em uma campanha digital
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Máximos e mínimos:</strong> Identificar pontos críticos e interpretar no contexto esportivo
                </p>
              </div>
            </div>
            <Separator />
            <div className="bg-muted/30 p-4 rounded-lg">
              <p className="font-mono text-sm">
                <strong>Velocidade Instantânea:</strong> v(t) = ds/dt
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Análise da aceleração e desempenho em campo
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Section 4: Integrais */}
        <Card className="shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-2xl md:text-3xl mb-2">4. Integrais</CardTitle>
                <CardDescription className="text-base">
                  Cálculo de acumulações e totalizações
                </CardDescription>
              </div>
              <Badge variant="outline" className="border-accent text-accent">Acumulação</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Distância total percorrida:</strong> Cálculo da distância total em uma partida
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Interações acumuladas:</strong> Total de interações em uma campanha de divulgação
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Área sob a curva:</strong> Representação gráfica de acumulações
                </p>
              </div>
            </div>
            <Separator />
            <div className="bg-muted/30 p-4 rounded-lg">
              <p className="font-mono text-sm">
                <strong>Integral Definida:</strong> ∫[a,b] v(t) dt
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Distância total percorrida no intervalo de tempo
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Section 5: Validação com Dados */}
        <Card className="shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-2xl md:text-3xl mb-2">5. Validação com Dados</CardTitle>
                <CardDescription className="text-base">
                  Aplicação de dados reais e construção de modelos verificáveis
                </CardDescription>
              </div>
              <Badge variant="outline" className="border-accent text-accent">Validação</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Dados estatísticos:</strong> Uso de estatísticas reais ou dados fictícios construídos de forma consistente
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Gráficos e tabelas:</strong> Representação visual dos resultados aplicando cada conceito matemático
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Expected Product */}
        <Card className="shadow-lg bg-gradient-to-br from-accent/5 to-background border-accent/20">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl mb-2">📄 Produto Esperado</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-lg">
                <strong>Relatório final em PDF</strong> (máximo 6 páginas) contendo:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Cabeçalho simples com título e identificação do projeto</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Conteúdo teórico explicado de forma clara e acessível</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Modelos matemáticos aplicados ao contexto do futebol feminino</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Gráficos e fórmulas demonstrando a contribuição da Matemática</span>
                </li>
              </ul>
            </div>
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
              <div className="p-4 bg-muted/30 rounded-lg">
                <p className="font-semibold">Bruno Gama Masseiras</p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <p className="font-semibold">Kauai Rosa</p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <p className="font-semibold">Lucas Pedro</p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
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
