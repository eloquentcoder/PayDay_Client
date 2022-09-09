import React, { useContext, useEffect } from 'react';
import DataTable from 'react-data-table-component';

/*==== Import Icons ====*/
import { HiArrowUp } from 'react-icons/hi';

/*==== Import AppStoreContext HOC ====*/
import { AppStoreContext } from '../../../../contexts/AppContextProvider';


/*==== Import _Table_Comp SCSS ====*/
import "./_Table_Comp.scss";

const TableComp = () => {

    // Global State
    const { dashboardTableData, handleGetData } = useContext(AppStoreContext);

    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Email',
            selector: row => row.email,
        },
        {
            name: 'Phone',
            selector: row => row.phone,
            // hide: "sm",
        },
        {
            name: 'State',
            selector: row => row.state,
            sortable: true,
        },
        {
            name: 'LGA',
            selector: row => row.localGov,
        },
        {
            name: 'Option1',
            selector: row => row.option1,
        },
        {
            name: 'Option2',
            selector: row => row.option2,
        },
    ];

    const data = dashboardTableData;


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