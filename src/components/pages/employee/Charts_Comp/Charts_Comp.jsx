import { useContext } from "react";

/*==== Import Chart Components ====*/
import PieChartComp from "../../../layouts/charts/PieChart_Comp/PieChart_Comp";
import MapChartComp from "../../../layouts/charts/MapChart_Comp/MapChart_Comp";
import PieChartWithInnerRadiusComp from "../../../layouts/charts/PieChartWithInnerRadius_Comp/PieChartWithInnerRadius_Comp";
import LineChartComp from "../../../layouts/charts/LineChart_Comp/LineChart_Comp";
import EmployeeSalaryRangeTableComp from "../tables/EmployeeSalaryRangeTable_Comp/EmployeeSalaryRangeTable_Comp";
import EmployeePercentageMDAComp from "../tables/EmployeePercentageMDA_Comp/EmployeePercentageMDA_Comp";
import StackedBarChart2Comp from "../../../layouts/charts/StackedBarChart2_Comp/StackedBarChart2_Comp";
import EmployeeByAgeGroupComp from "../tables/EmployeeByAgeGroup_Comp/EmployeeByAgeGroup_Comp";
import EmployeeByStatePercentageComp from "../tables/EmployeeByStatePercentage_Comp/EmployeeByStatePercentage_Comp";


/*==== Import AppStoreContext HOC ====*/
import { AppStoreContext } from "../../../../contexts/AppContextProvider";

/*==== Import _Charts_Comp SCSS ====*/
import "./_Charts_Comp.scss";


const ChartsComp = () => {

  // Global State
  const { employeeGenderPieData, employeeSalaryRangePieData, employeeRecordsByStateTableData, employeeRecordsByStateMapData, 
    employeeDistributionPieRingData, employeeRecordsByMinistryLineData, employeeRecordsByAgeGroupStackBarData2 } = useContext(AppStoreContext);

  return (
    <section className="ChartsComp container-fluid p-0">
      
      <h3>Analysis</h3>
      
      <div className="row">
        <div className="col-12 col-lg-6">
          <PieChartComp data={ employeeGenderPieData } chartTitle="GENDER" />
        </div>
        <div className="col-12 col-lg-6">
          <PieChartWithInnerRadiusComp data={ employeeDistributionPieRingData } chartTitle="EMPLOYEE DISTRIBUTION" />
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-lg-7">
          <EmployeeSalaryRangeTableComp tableData={ employeeSalaryRangePieData } chartTitle="EMPLOYEE BY SALARY RANGE" />
        </div>
        <div className="col-12 col-lg-5">
          <PieChartComp data={ employeeSalaryRangePieData } chartTitle="EMPLOYEE BY SALARY RANGE" />
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-lg-6">
          <EmployeePercentageMDAComp tableData={ employeeRecordsByMinistryLineData } chartTitle="EMPLOYEE PERCENTAGE BY MDA" />
        </div>
        <div className="col-12 col-lg-6">
          <LineChartComp data={ employeeRecordsByMinistryLineData } chartTitle="EMPLOYEE PERCENTAGE BY MDA" />
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-lg-7">
          <EmployeeByStatePercentageComp tableData={ employeeRecordsByStateTableData } chartTitle="EMPLOYEE BY STATE & PERCENTAGE(%)" />
        </div>
        <div className="col-12 col-lg-5">
          <MapChartComp mapData={ employeeRecordsByStateMapData } chartTitle="EMPLOYEE BY STATE & PERCENTAGE(%)" />
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-lg-6">
          <EmployeeByAgeGroupComp tableData={ employeeRecordsByAgeGroupStackBarData2 } chartTitle="EMPLOYEE BY AGE GROUP" />
        </div>
        <div className="col-12 col-lg-6">
          <StackedBarChart2Comp data={ employeeRecordsByAgeGroupStackBarData2 } chartTitle="EMPLOYEE BY AGE GROUP" />
        </div>
      </div>
    </section>
  )
}

export default ChartsComp