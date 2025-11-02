import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export const DerivativeChart = () => {
  // Posição: s(t) = 2*t^2 (função quadrática)
  // Velocidade: v(t) = ds/dt = 4*t (derivada)
  const data = Array.from({ length: 11 }, (_, i) => ({
    tempo: i,
    posicao: 2 * i * i,
    velocidade: 4 * i,
  }));

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-lg">Velocidade Instantânea em Campo</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="tempo" label={{ value: "Tempo (s)", position: "insideBottom", offset: -5 }} />
            <YAxis label={{ value: "Velocidade (m/s)", angle: -90, position: "insideLeft" }} />
            <Tooltip />
            <Line type="monotone" dataKey="velocidade" stroke="hsl(var(--accent))" strokeWidth={3} name="Velocidade" />
          </LineChart>
        </ResponsiveContainer>
        <div className="mt-4 p-3 bg-muted/30 rounded">
          <p className="font-mono text-sm">v(t) = ds/dt = 4t</p>
          <p className="text-xs text-muted-foreground mt-1">
            Velocidade aumenta linearmente com aceleração constante
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
