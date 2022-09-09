import { useContext } from "react";

/*==== Import AppStoreContext HOC ====*/
import { AppStoreContext } from "../contexts/AppContextProvider";

/*==== Import AppLayout HOC ====*/
import AppLayoutHOC from "../components/layouts/AppLayout_HOC/AppLayout_HOC";

/*==== Import Components ====*/
import TabComp from "../components/pages/financial/Tab_Comp/Tab_Comp";
import FilterComp from "../components/pages/financial/Filter_Comp/Filter_Comp";
import TableComp from "../components/pages/financial/Table_Comp/Table_Comp";
import CounterComp from "../components/pages/financial/Counter_Comp/Counter_Comp";
import ChartsComp from "../components/pages/financial/Charts_Comp/Charts_Comp";



const Financial = () => {

  // Global State
  const { financialSelectedTab } = useContext(AppStoreContext);
  const { tableTab } = financialSelectedTab;

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

export default Financial