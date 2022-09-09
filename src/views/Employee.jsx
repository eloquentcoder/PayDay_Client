import { useContext, useEffect } from 'react';

/*==== Import AppStoreContext HOC ====*/
import { AppStoreContext } from '../contexts/AppContextProvider';

/*==== Import AppLayout HOC ====*/
import AppLayoutHOC from '../components/layouts/AppLayout_HOC/AppLayout_HOC';

/*==== Import Components ====*/
import TabComp from '../components/pages/employee/Tab_Comp/Tab_Comp';
import FilterComp from '../components/pages/employee/Filter_Comp/Filter_Comp';
import TableComp from '../components/pages/employee/Table_Comp/Table_Comp';
import CounterComp from '../components/pages/employee/Counter_Comp/Counter_Comp';
import ChartsComp from '../components/pages/employee/Charts_Comp/Charts_Comp';


const Employee = () => {

  // Global State
  const { employeeSelectedTab, handleGetEmployeeData } = useContext(AppStoreContext);
  const { tableTab } = employeeSelectedTab;

  useEffect(() => {
    handleGetEmployeeData();
  });


  return (
    <AppLayoutHOC>

      {/*==== Tab Bar ====*/}
      <TabComp />

      {/*==== Sub-Container====*/}
      {(tableTab) ? (
        <>
          <FilterComp />
          <TableComp />
        </>
      ) : (
        <>
          <CounterComp />
          <ChartsComp />
          {/* <BakAndPFAsTableComp /> */}
        </>
      )}


    </AppLayoutHOC>
  )
}

export default Employee;