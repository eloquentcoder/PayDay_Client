import DataTable from 'react-data-table-component';

/*==== Import Icons ====*/
import { HiArrowUp } from 'react-icons/hi';


/*=== Import _EmployeePercentageMDA_Comp SCSS ===*/
import "./_EmployeePercentageMDA_Comp.scss";


const EmployeePercentageMDAComp = (props) => {
    const { tableData, chartTitle } = props;

    const columns = [
        {
            name: 'MDA',
            selector: row => row.name,
            maxWidth: "400px"
        },
        {
            name: 'Employee Count',
            selector: row => row.count,
            maxWidth: "180px",
            sortable: true,
        },
        {
            name: '% Employee',
            selector: row => `${ row.percentage }%`,
            maxWidth: "150px",
            sortable: true,
            // hide: "sm",
        },
    ];

    const data = tableData;



    return (
        <section className="EmployeePercentageMDAComp mCard">
            <h1 className="table__title">{ chartTitle }</h1>

            <div className="table__wrapper">
                <DataTable
                    columns = { columns }
                    data = { data }
                    fixedHeader = { false }
                    striped = { true }
                    highlightOnHover = { true }
                    sortIcon = { <HiArrowUp size="32" color="black" /> }
                    defaultSortField = "name"
                    responsive
                    dense
                    // defaultSortAsc={false}
                />
            </div>
        </section>
    )
}

export default EmployeePercentageMDAComp;