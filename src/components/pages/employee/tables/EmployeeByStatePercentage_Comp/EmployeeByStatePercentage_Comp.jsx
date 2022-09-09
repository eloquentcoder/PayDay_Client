import DataTable from 'react-data-table-component';

/*==== Import Icons ====*/
import { HiArrowUp } from 'react-icons/hi';


/*=== Import _EmployeeByStatePercentage_Comp SCSS ===*/
import "./_EmployeeByStatePercentage_Comp.scss";


const EmployeeByStatePercentageComp = (props) => {
    const { tableData, chartTitle } = props;

    const columns = [
        {
            name: 'State',
            selector: row => row.state,
            // maxWidth: "180px"
        },
        {
            name: 'Employee',
            selector: row => row.count,
            sortable: true,
            // maxWidth: "130px"
        },
        {
            name: '% Employee',
            selector: row => `${ row.percentage }%`,
            sortable: true,
            // hide: "sm",
        },
    ];

    const data = tableData;



    return (
        <section className="EmployeeByStatePercentageComp mCard">
            <h1 className="table__title">{ chartTitle }</h1>

            <div className="table__wrapper">
                <DataTable
                    columns = { columns }
                    data = { data }
                    fixedHeader = { false }
                    striped = { true }
                    highlightOnHover = { true }
                    sortIcon = { <HiArrowUp size="32" color="black" /> }
                    defaultSortField = "state"
                    responsive
                    dense
                    // defaultSortAsc={false}
                />
            </div>
        </section>
    )
}

export default EmployeeByStatePercentageComp;