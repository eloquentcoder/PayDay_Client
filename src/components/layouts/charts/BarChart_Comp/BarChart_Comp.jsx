import { Tooltip, Legend, ResponsiveContainer, XAxis, YAxis, BarChart, Bar, CartesianGrid } from "recharts";

/*=== Import _BarChart_Comp SCSS ===*/
import "./_BarChart_Comp.scss";


const BarChartComp = (props) => {
    const { data, chartTitle } = props;

    return (
        <section className="BarChartComp mCard">
            <h1 className="chart__title">{ chartTitle }</h1>
            <ResponsiveContainer height={300} width="100%">
                <BarChart width={500} height={300}
                    data={data}
                    margin={{ top: 5, right: 30, left: 20,  bottom: 5,
                    }}
                >
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="number" barSize={22} fill="#8884d8" />
                    <CartesianGrid strokeDasharray="3 3" />
                </BarChart>
            </ResponsiveContainer>
        </section>
    );
}

export default BarChartComp;