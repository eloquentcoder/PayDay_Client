
/*==== Import AppLayout HOC ====*/
import AppLayoutHOC from '../components/layouts/AppLayout_HOC/AppLayout_HOC';

/*==== Import Components ====*/
import FilterComp from '../components/pages/home/Filter_Comp/Filter_Comp';
import CounterComp from '../components/pages/home/Counter_Comp/Counter_Comp';
import TableComp from '../components/pages/home/Table_Comp/Table_Comp';
import ChartsComp from '../components/pages/home/Charts_Comp/Charts_Comp';


const Home = () => {
  return (
    <AppLayoutHOC>
      <FilterComp />
      <CounterComp />
      <ChartsComp />
      <TableComp />
    </AppLayoutHOC>
  )
}

export default Home;