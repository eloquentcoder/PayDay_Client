import { useContext } from "react";

/*==== Import Chart Components ====*/
import PieChartComp from "../../../layouts/charts/PieChart_Comp/PieChart_Comp";
import AreaChartComp from "../../../layouts/charts/AreaChart_Comp/AreaChart_Comp";
import MapChartComp from "../../../layouts/charts/MapChart_Comp/MapChart_Comp";
import BarChartComp from "../../../layouts/charts/BarChart_Comp/BarChart_Comp";


/*==== Import AppStoreContext HOC ====*/
import { AppStoreContext } from "../../../../contexts/AppContextProvider";

/*==== Import _Charts_Comp SCSS ====*/
import "./_Charts_Comp.scss";
import StackedBarChartComp from "../../../layouts/charts/StackedBarChart_Comp/StackedBarChart_Comp";
import StackedBarChart2Comp from "../../../layouts/charts/StackedBarChart2_Comp/StackedBarChart2_Comp";
import PieChartWithInnerRadiusComp from "../../../layouts/charts/PieChartWithInnerRadius_Comp/PieChartWithInnerRadius_Comp";
import LineChartComp from "../../../layouts/charts/LineChart_Comp/LineChart_Comp";
import ThreeDeeBarChartComp from "../../../layouts/charts/3DBarChart_Comp/3DBarChart_Comp";


const ChartsComp = () => {

  // Global State
  const { areaData, pieData, barData, stackBarData, stackBarData2, pieRingData, lineData } = useContext(AppStoreContext);

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
          <MapChartComp chartTitle="EMPLOYEE BY STATE & PERCENTAGE(%)" />
        </div>
        <div className="col-12 col-lg-6">
          <BarChartComp data={ barData } chartTitle="MONTHLY EMPLOYEE PAYMENT" />
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-lg-6">
          <StackedBarChartComp data={ stackBarData } chartTitle="MDA BY ACTIVE & INACTIVE" />
        </div>
        <div className="col-12 col-lg-6">
          <StackedBarChart2Comp data={ stackBarData2 } chartTitle="EMPLOYEE BY AGE GROUP " />
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-lg-6">
          <PieChartWithInnerRadiusComp data={ pieRingData } chartTitle="STATUTORY" />
        </div>
        <div className="col-12 col-lg-6">
          <LineChartComp data={ lineData } chartTitle="AMOUNT DISBURSED BY BANKS" />
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-lg-6">
          <ThreeDeeBarChartComp chartTitle="STATUTORY" />
        </div>
        <div className="col-12 col-lg-6">
          <ThreeDeeBarChartComp chartTitle="EMPLOYEE PERCENTAGE BY MDA" />
        </div>
      </div>
    </section>
  )
}

export default ChartsComp