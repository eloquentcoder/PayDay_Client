import DataTable from 'react-data-table-component';

/*==== Import Icons ====*/
import { HiArrowUp } from 'react-icons/hi';


/*=== Import _EmployeeByAgeGroup_Comp SCSS ===*/
import "./_EmployeeByAgeGroup_Comp.scss";


const EmployeeByAgeGroupComp = (props) => {
    const { tableData, chartTitle } = props;

    const columns = [
        {
            name: 'Age Group',
            selector: row => row.ageRange,
        },
        {
            name: 'Male',
            selector: row => row.male,
            sortable: true,
        },
        {
            name: 'Female',
            selector: row => row.female,
            sortable: true,
            // hide: "sm",
        },
    ];

    const data = tableData;



    return (
        <section className="EmployeeByAgeGroupComp mCard">
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

export default EmployeeByAgeGroupComp;