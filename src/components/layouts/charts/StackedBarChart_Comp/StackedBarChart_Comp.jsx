import { Tooltip, Legend, ResponsiveContainer, XAxis, YAxis, BarChart, Bar, CartesianGrid } from "recharts";

/*=== Import _StackedBarChart_Comp SCSS ===*/
import "./_StackedBarChart_Comp.scss";

const StackedBarChartComp = (props) => {
    const { data, chartTitle } = props;

  return (
    <section className="StackedBarChartComp mCard">
        <h1 className="chart__title">{ chartTitle }</h1>
        <ResponsiveContainer height={330} width="100%">
          <BarChart width={500} height={300}
            data={data}
            margin={{ top: 20, right: 30, left: 0, bottom: 5, }}
          >
            <XAxis dataKey="name" tick={{fontSize: 10}} />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="total" barSize={22} stackId="a" fill="#3DFFDC" />
            <Bar dataKey="active" barSize={22} stackId="a" fill="#268AFF" />
            <Bar dataKey="inactive" barSize={22} stackId="a" fill="#1ED6FF" />
          </BarChart>
        </ResponsiveContainer>
    </section>
  )
}

export default StackedBarChartComp;