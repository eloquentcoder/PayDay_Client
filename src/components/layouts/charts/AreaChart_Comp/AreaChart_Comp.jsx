import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

/*=== Import _AreaChart_Comp SCSS ===*/
import "./_AreaChart_Comp.scss";


const AreaChartComp = (props) => {
    const { data, chartTitle } = props;

    return (
        <section className="AreaChartComp mCard">
            <h1 className="chart__title">{ chartTitle }</h1>
            <ResponsiveContainer height={300} width="100%">
                <AreaChart height={400} width={500} 
                    data={data} 
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#36F097" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#4A52FF" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Area type="monotone" dataKey="number" stroke="#8884d8" fill="url(#colorUv)" fillOpacity={0.9} />
                </AreaChart>
            </ResponsiveContainer>
            
        </section>
    );
}

export default AreaChartComp;