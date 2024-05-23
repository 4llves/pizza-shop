// import { Link } from 'react-router-dom'

// export function NotFound() {
//   return (
//     <div className="flex h-screen flex-col items-center justify-center gap-2">
//       <h1 className="text-4xl font-bold">Página não encontrada</h1>
// <p className="text-accent-foreground">
//   Voltar para o{' '}
//   <Link to="/" className="text-sky-500 dark:text-sky-400">
//     Dashboard
//   </Link>
//       </p>
//     </div>
//   )
// }

import { Link } from 'react-router-dom'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'
import colors from 'tailwindcss/colors'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const data = [{ product: 'Página não encontrada', amount: 404 }]

const COLORS = [colors.red[500]]

export function NotFound() {
  return (
    <Card className="h-screen overflow-hidden">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium">
            <p className="text-accent-foreground">
              Voltar para o{' '}
              <Link to="/" className="text-sky-500 dark:text-sky-400">
                Dashboard
              </Link>
            </p>
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="h-screen flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart data={data} style={{ fontSize: 12 }}>
            <Pie
              data={data}
              dataKey="amount"
              nameKey="product"
              cx="50%"
              cy="50%"
              outerRadius={86}
              innerRadius={65}
              strokeWidth={8}
              labelLine={false}
              label={({
                cx,
                cy,
                midAngle,
                innerRadius,
                outerRadius,
                value,
                index,
              }) => {
                const RADIAN = Math.PI / 180
                const radius = 12 + innerRadius + (outerRadius - innerRadius)
                const x = cx + radius * Math.cos(-midAngle * RADIAN)
                const y = cy + radius * Math.sin(-midAngle * RADIAN)

                return (
                  <text
                    x={x}
                    y={y}
                    className="fill-muted-foreground text-2xl"
                    textAnchor={x > cx ? 'start' : 'end'}
                    dominantBaseline="central"
                  >
                    Error {value} - {data[index].product}
                  </text>
                )
              }}
            >
              {data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index]}
                  className="stroke-background hover:opacity-80"
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
