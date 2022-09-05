import { Pie, PieChart, Tooltip, Legend, ResponsiveContainer } from "recharts";

/*=== Import _PieChart_Comp SCSS ===*/
import "./_PieChart_Comp.scss";


const PieChartComp = (props) => {
    const { data, chartTitle } = props;

    return (
        <section className="PieChartComp mCard">
            <h1 className="chart__title">{ chartTitle }</h1>
            <ResponsiveContainer height={300} width="100%">
                <PieChart>
                    <Pie
                        dataKey="value"
                        isAnimationActive={false}
                        data={ data }
                        cx="50%"
                        cy="50%"
                        outerRadius="90%"
                        fill="fill"
                        stroke="none"
                        label
                    />
                    <Legend layout="vertical" verticalAlign="middle" align="right" />
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </section>
    );
}

export default PieChartComp;