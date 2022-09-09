import { Pie, PieChart, Tooltip, Legend, ResponsiveContainer, Label } from "recharts";

/*=== Import _PieChartWithInnerRadius_Comp SCSS ===*/
import "./_PieChartWithInnerRadius_Comp.scss";


const PieChartWithInnerRadiusComp = (props) => {
    const { data, chartTitle } = props;

    const CustomLabel = ({viewBox, value1, value2}) => {
        const {cx, cy} = viewBox;
        return (
            <>
                <text x={cx} y={cy - 5} textAnchor="middle" dominantBaseline="central">
                    <tspan fontSize="32" fontWeight="bold">{value1}</tspan>
                </text>
                <text x={cx} y={cy + 20} textAnchor="middle" dominantBaseline="central">
                    <tspan fontSize="14">{value2}</tspan>
                </text>
            </>
        );
    };

    return (
        <section className="PieChartWithInnerRadiusComp mCard">
            <h1 className="chart__title">{ chartTitle }</h1>
            <ResponsiveContainer height={300} width="100%">
                <PieChart margin={{ top: 20, right: 20, left: 0, bottom: 5, }}>
                    <Pie
                        dataKey="count"
                        isAnimationActive={true}
                        data={ data }
                        cx="50%"
                        cy="50%"
                        innerRadius="70%"
                        outerRadius="90%"
                        fill="fill"
                        stroke="none"
                        label
                    >
                        <Label position="center"
                            content={<CustomLabel value1={ data[0].count + data[1].count + data[2].count } value2="TOTAL"/>}>
                        </Label>
                    </Pie>
                    <Legend layout="vertical" verticalAlign="middle" align="right" />
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </section>
    );
}

export default PieChartWithInnerRadiusComp;