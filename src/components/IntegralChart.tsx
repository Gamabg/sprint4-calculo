import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export const IntegralChart = () => {
  // Velocidade: v(t) = 4t
  // Distância (integral): s(t) = ∫v(t)dt = 2t^2
  const data = Array.from({ length: 11 }, (_, i) => ({
    tempo: i,
    velocidade: 4 * i,
    distancia: 2 * i * i,
  }));

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-lg">Distância Total Percorrida (Área sob a curva)</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="tempo" label={{ value: "Tempo (s)", position: "insideBottom", offset: -5 }} />
            <YAxis label={{ value: "Velocidade (m/s)", angle: -90, position: "insideLeft" }} />
            <Tooltip />
            <Area 
              type="monotone" 
              dataKey="velocidade" 
              stroke="hsl(var(--accent))" 
              fill="hsl(var(--accent))" 
              fillOpacity={0.3}
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
        <div className="mt-4 p-3 bg-muted/30 rounded">
          <p className="font-mono text-sm">s = ∫₀¹⁰ v(t) dt = ∫₀¹⁰ 4t dt = 2t² |₀¹⁰ = 200 metros</p>
          <p className="text-xs text-muted-foreground mt-1">
            A área sob a curva representa a distância total percorrida
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
