import DataTable from 'react-data-table-component';

/*==== Import Icons ====*/
import { HiArrowUp } from 'react-icons/hi';


/*=== Import _TopTenBanks_Comp SCSS ===*/
import "./_TopTenBanks_Comp.scss";


const TopTenBanksComp = (props) => {
    const { tableData, chartTitle } = props;

    const columns = [
        {
            name: 'S/N',
            selector: row => row.serialNumber,
        },
        {
            name: 'Banks',
            selector: row => row.bank,
            sortable: true,
        },
        {
            name: 'Amount',
            selector: row => row.amount,
            sortable: true,
            // hide: "sm",
        },
        {
            name: 'Total(%)',
            selector: row => row.total,
            sortable: true,
        },
    ];

    const data = tableData;



    return (
        <section className="TopTenBanksComp">
            <h1 className="table__title">{ chartTitle }</h1>

            <div className="table__wrapper">
                <DataTable
                    columns = { columns }
                    data = { data }
                    fixedHeader = { true }
                    striped = { true }
                    highlightOnHover = { true }
                    sortIcon = { <HiArrowUp size="32" color="black" /> }
                    defaultSortField = "bank"
                    responsive
                    dense
                    // defaultSortAsc={false}
                />
            </div>
        </section>
    )
}

export default TopTenBanksComp;