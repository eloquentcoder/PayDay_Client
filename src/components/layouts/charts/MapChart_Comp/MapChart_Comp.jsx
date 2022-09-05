import { ResponsiveContainer } from "recharts";

/*=== Import _MapChart_Comp SCSS ===*/
import "./_MapChart_Comp.scss";

import NigeriaMap from "../../../../assets/images/nigeria_map.png";

const MapChartComp = (props) => {
    const { chartTitle } = props;

  return (
    <section className="MapChartComp mCard">
        <h1 className="chart__title">{ chartTitle }</h1>
        <ResponsiveContainer height={200} width={260}>
            <img src={ NigeriaMap } alt="NigeriaMap" />
        </ResponsiveContainer>
    </section>
  )
}

export default MapChartComp;