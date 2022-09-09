import { useContext } from 'react';

/*==== Import AppStoreContext HOC ====*/
import { AppStoreContext } from '../contexts/AppContextProvider';

/*==== Import AppLayout HOC ====*/
import AppLayoutHOC from '../components/layouts/AppLayout_HOC/AppLayout_HOC';

/*==== Import Components ====*/
import FilterComp from '../components/pages/home/Filter_Comp/Filter_Comp';
import CounterComp from '../components/pages/home/Counter_Comp/Counter_Comp';
import TableComp from '../components/pages/home/Table_Comp/Table_Comp';
import ChartsComp from '../components/pages/home/Charts_Comp/Charts_Comp';
import TabComp from '../components/pages/home/Tab_Comp/Tab_Comp';
import BakAndPFAsTableComp from '../components/pages/home/tables/BakAndPFAsTable_Comp/BakAndPFAsTable_Comp';



const Home = () => {

    // Global State
    const { dashboardSelectedTab } = useContext(AppStoreContext);
    const { tableTab } = dashboardSelectedTab;

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
          <BakAndPFAsTableComp />
        </>
      )}
      
    </AppLayoutHOC>
  )
}

export default Home;