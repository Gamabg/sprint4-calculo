import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts";

export const LimitChart = () => {
  // Função de engajamento com saturação: f(t) = 100000 * (1 - e^(-0.1*t))
  const L = 100000; // Limite de saturação
  const data = Array.from({ length: 25 }, (_, i) => ({
    mes: i,
    engajamento: Math.round(L * (1 - Math.exp(-0.1 * i))),
  }));

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-lg">Saturação do Engajamento Digital</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="mes" label={{ value: "Meses", position: "insideBottom", offset: -5 }} />
            <YAxis label={{ value: "Interações", angle: -90, position: "insideLeft" }} />
            <Tooltip />
            <ReferenceLine y={L} stroke="hsl(var(--destructive))" strokeDasharray="5 5" label="Limite L" />
            <Line type="monotone" dataKey="engajamento" stroke="hsl(var(--accent))" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
        <div className="mt-4 p-3 bg-muted/30 rounded">
          <p className="font-mono text-sm">lim(t → ∞) f(t) = L = 100.000</p>
          <p className="text-xs text-muted-foreground mt-1">
            O engajamento tende ao limite L conforme t aumenta
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
