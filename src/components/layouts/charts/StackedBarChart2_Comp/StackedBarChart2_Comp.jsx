import { Tooltip, Legend, ResponsiveContainer, XAxis, YAxis, BarChart, Bar, CartesianGrid } from "recharts";

/*=== Import _StackedBarChart2_Comp SCSS ===*/
import "./_StackedBarChart2_Comp.scss";

const StackedBarChart2Comp = (props) => {
    const { data, chartTitle } = props;

  return (
    <section className="StackedBarChart2Comp mCard">
        <h1 className="chart__title">{ chartTitle }</h1>
        <ResponsiveContainer height={330} width="100%">
          <BarChart width={500} height={400}
            data={data}
            margin={{ top: 20, right: 20, left: 0, bottom: 5, }}
          >
            <XAxis dataKey="ageRange" tick={{fontSize: 10}} />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="female" barSize={40} stackId="a" fill="#1ED6FF" />
            <Bar dataKey="male" barSize={40} stackId="a" fill="#3AACFF" />
          </BarChart>
        </ResponsiveContainer>
    </section>
  )
}

export default StackedBarChart2Comp;