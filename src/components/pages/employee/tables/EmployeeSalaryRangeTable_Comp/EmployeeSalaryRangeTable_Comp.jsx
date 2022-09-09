import DataTable from 'react-data-table-component';

/*==== Import Icons ====*/
import { HiArrowUp } from 'react-icons/hi';


/*=== Import _EmployeeSalaryRangeTable_Comp SCSS ===*/
import "./_EmployeeSalaryRangeTable_Comp.scss";


const EmployeeSalaryRangeTableComp = (props) => {
    const { tableData, chartTitle } = props;

    const columns = [
        {
            name: 'Salary range',
            selector: row => row.amount,
        },
        {
            name: 'Employee Count',
            selector: row => row.count,
            sortable: true,
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
        <section className="EmployeeSalaryRangeTableComp mCard">
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

export default EmployeeSalaryRangeTableComp;