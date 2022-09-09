import { useContext } from "react";

/*==== Import Chart Components ====*/
import PieChartComp from "../../../layouts/charts/PieChart_Comp/PieChart_Comp";
import AreaChartComp from "../../../layouts/charts/AreaChart_Comp/AreaChart_Comp";
import MapChartComp from "../../../layouts/charts/MapChart_Comp/MapChart_Comp";
import BarChartComp from "../../../layouts/charts/BarChart_Comp/BarChart_Comp";
import StackedBarChartComp from "../../../layouts/charts/StackedBarChart_Comp/StackedBarChart_Comp";
import StackedBarChart2Comp from "../../../layouts/charts/StackedBarChart2_Comp/StackedBarChart2_Comp";
import PieChartWithInnerRadiusComp from "../../../layouts/charts/PieChartWithInnerRadius_Comp/PieChartWithInnerRadius_Comp";
import LineChartComp from "../../../layouts/charts/LineChart_Comp/LineChart_Comp";


/*==== Import AppStoreContext HOC ====*/
import { AppStoreContext } from "../../../../contexts/AppContextProvider";

/*==== Import _Charts_Comp SCSS ====*/
import "./_Charts_Comp.scss";


const ChartsComp = () => {

  // Global State
  const { areaData, genderPieData, barData, stackBarData, stackBarData2, pieRingData, dashboardLineData, dashboardMapData } = useContext(AppStoreContext);

  return (
    <section className="ChartsComp container-fluid p-0">
      <div className="row">
        <div className="col-12 col-lg-6">
          <BarChartComp data={ barData } chartTitle="MONTHLY EMPLOYEE PAYMENT" />
        </div>
        <div className="col-12 col-lg-6">
          <MapChartComp mapData={ dashboardMapData } chartTitle="EMPLOYEE BY STATE & PERCENTAGE(%)" />
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-lg-6">
          <PieChartComp data={ genderPieData } chartTitle="GENDER" />
        </div>
        <div className="col-12 col-lg-6">
          <StackedBarChart2Comp data={ stackBarData2 } chartTitle="EMPLOYEE BY AGE GROUP " />
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-lg-6">
          <AreaChartComp data={ areaData } chartTitle="ANNUAL EMPLOYEE PAYMENT" />
        </div>
        <div className="col-12 col-lg-6">
          <LineChartComp data={ dashboardLineData } chartTitle="AMOUNT RECIEVED BY PFAs" />
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-lg-6">
          <StackedBarChartComp data={ stackBarData } chartTitle="MDA BY ACTIVE & INACTIVE" />
        </div>
        <div className="col-12 col-lg-6">
          <PieChartWithInnerRadiusComp data={ pieRingData } chartTitle="EMPLOYEE DISTRIBUTION" />
        </div>
      </div>

      {/* <div className="row">
        <div className="col-12 col-lg-6">
          <ThreeDeeBarChartComp chartTitle="STATUTORY" />
        </div>
        <div className="col-12 col-lg-6">
          <ThreeDeeBarChartComp chartTitle="EMPLOYEE PERCENTAGE BY MDA" />
        </div>
      </div> */}
    </section>
  )
}

export default ChartsComp