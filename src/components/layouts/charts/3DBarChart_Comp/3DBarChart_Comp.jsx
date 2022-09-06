import { ResponsiveContainer } from "recharts";

/*=== Import _3DBarChart_Comp SCSS ===*/
import "./_3DBarChart_Comp.scss";


const ThreeDeeBarChartComp = (props) => {
    const { chartTitle } = props;

    return (
        <section className="ThreeDeeBarChartComp mCard">
            <h1 className="chart__title">{ chartTitle }</h1>
            <ResponsiveContainer height={330} width="100%">
                <></>
            </ResponsiveContainer>
        </section>
    );
}

export default ThreeDeeBarChartComp;