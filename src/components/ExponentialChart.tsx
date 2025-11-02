import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export const ExponentialChart = () => {
  // Função exponencial: f(t) = 5000 * (1.08)^t
  const data = Array.from({ length: 13 }, (_, i) => ({
    mes: i,
    seguidores: Math.round(5000 * Math.pow(1.08, i)),
  }));

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-lg">Crescimento de Seguidores ao Longo do Tempo</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="mes" label={{ value: "Meses", position: "insideBottom", offset: -5 }} />
            <YAxis label={{ value: "Seguidores", angle: -90, position: "insideLeft" }} />
            <Tooltip />
            <Line type="monotone" dataKey="seguidores" stroke="hsl(var(--accent))" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
        <div className="mt-4 p-3 bg-muted/30 rounded">
          <p className="font-mono text-sm">f(t) = 5000 × (1.08)^t</p>
          <p className="text-xs text-muted-foreground mt-1">
            Taxa de crescimento: 8% ao mês
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
