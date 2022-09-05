import { useContext } from "react";

/*==== Import Chart Components ====*/
import PieChartComp from "../../../layouts/charts/PieChart_Comp/PieChart_Comp";
import AreaChartComp from "../../../layouts/charts/AreaChart_Comp/AreaChart_Comp";


/*==== Import AppStoreContext HOC ====*/
import { AppStoreContext } from "../../../../contexts/AppContextProvider";

/*==== Import _Charts_Comp SCSS ====*/
import "./_Charts_Comp.scss";
import MapChartComp from "../../../layouts/charts/MapChart_Comp/MapChart_Comp";
import BarChartComp from "../../../layouts/charts/BarChart_Comp/BarChart_Comp";


const ChartsComp = () => {

  // Global State
  const { areaData, pieData, barData } = useContext(AppStoreContext);

  return (
    <section className="ChartsComp container-fluid p-0">
      <div className="row">
        <div className="col-12 col-lg-6">
          <PieChartComp data={ pieData } chartTitle="EMPLOYEE BY SALARY RANGE" />
        </div>
        <div className="col-12 col-lg-6">
          <AreaChartComp data={ areaData } chartTitle="ANNUAL EMPLOYEE PAYMENT" />
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-lg-6">
          <MapChartComp chartTitle="EMPLOYEE BY STATE  PERCENTAGE(%)" />
        </div>
        <div className="col-12 col-lg-6">
          <BarChartComp data={ barData } chartTitle="MONTHLY EMPLOYEE PAYMENT" />
        </div>
      </div>
    </section>
  )
}

export default ChartsComp