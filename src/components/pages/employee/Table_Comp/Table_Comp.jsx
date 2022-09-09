import { useContext, useEffect } from 'react';
import DataTable from 'react-data-table-component';

/*==== Import Icons ====*/
import { HiArrowUp } from 'react-icons/hi';

/*==== Import AppStoreContext HOC ====*/
import { AppStoreContext } from '../../../../contexts/AppContextProvider';


/*==== Import _Table_Comp SCSS ====*/
import "./_Table_Comp.scss";

const TableComp = () => {

    // Global State
    const { employeeTableData, handleGetData } = useContext(AppStoreContext);

    const columns = [
        {
            name: 'S/N',
            selector: row => row.serialNumber,
            width: "80px",
            sortable: true,
        },
        {
            name: 'IPPIS',
            selector: row => row.ippis,
            minWidth: "100px",
            maxWidth: "150px",
            sortable: true,
        },
        {
            name: 'Full Name',
            selector: row => (row.firstName === null) ? 
            `${row.middleName} ${row.lastName}` :
            (row.middleName === null) ?
            `${row.firstName} ${row.lastName}` :
            `${row.firstName} ${row.middleName}`,
            minWidth: "220px",
            maxWidth: "300px",
            sortable: true,
        },
        {
            name: 'MDA',
            selector: row => row.mda,
            minWidth: "400px",
            // maxWidth: "300px",
            // wrap: true
        },
        {
            name: 'Grade Level',
            selector: row => row.gradeLevel,
            minWidth: "160px",
            maxWidth: "200px",
        },
        {
            name: 'Enrollment Date',
            selector: row => row.enrollmentDate.split("T")[0].split("-").join("/"),
            minWidth: "150px",
            maxWidth: "200px",
        },
    ];

    const data = employeeTableData;


    useEffect(() => {
        handleGetData();
    }, [handleGetData]);


  return (
    <section className="TableComp container-fluid p-0">
      
        <h3>Overview Table</h3>

        <div className="table__wrapper">
            <DataTable
                columns = { columns }
                data = { data }
                pagination
                fixedHeader = { true }
                striped = { true }
                highlightOnHover = { true }
                sortIcon = { <HiArrowUp size="32" color="black" /> }
                defaultSortField = "createdAt"
                responsive
                dense
                // selectableRows
                // defaultSortAsc={false}
            />
        </div>

    </section>
  )
}

export default TableComp;