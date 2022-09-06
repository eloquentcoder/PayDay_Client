import { Tooltip, Legend, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, } from "recharts";

/*=== Import _LineChart_Comp SCSS ===*/
import "./_LineChart_Comp.scss";


const LineChartComp = (props) => {
    const { data, chartTitle } = props;

    return (
        <section className="LineChartComp mCard">
            <h1 className="chart__title">{ chartTitle }</h1>
            <ResponsiveContainer height={330} width="100%">
                <LineChart
                    data={data}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="bank" tick={{fontSize: 12}} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line dataKey="number" stroke="#36F097" />
                </LineChart>
            </ResponsiveContainer>
        </section>
    );
}

export default LineChartComp;