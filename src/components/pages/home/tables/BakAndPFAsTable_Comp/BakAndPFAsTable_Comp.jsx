import React, { useContext } from 'react';


/*==== Import AppStoreContext HOC ====*/
import { AppStoreContext } from '../../../../../contexts/AppContextProvider';

/*==== Import Chart Components ====*/
import TopTenBanksComp from '../TopTenBanks_Comp/TopTenBanks_Comp';

const BakAndPFAsTableComp = () => {

    // Global State
    const { topTenBanksTableData } = useContext(AppStoreContext);
  
  return (
    <section className="BakAndPFAsTableComp container-fluid mt-5 p-0">
        <div className="row">
            <div className="col-12 col-lg-6">
                <TopTenBanksComp tableData={ topTenBanksTableData } chartTitle="Top 10 Banks" />
            </div>
            <div className="col-12 col-lg-6">
                <TopTenBanksComp tableData={ topTenBanksTableData } chartTitle="Top 10 PFAs" />
            </div>
        </div>
    </section>
  )
}

export default BakAndPFAsTableComp