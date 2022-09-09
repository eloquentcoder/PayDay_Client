import React, { useContext } from 'react';
import Select from 'react-select';

// /*==== Import AppStoreContext HOC ====*/
import { AppStoreContext } from '../../../../contexts/AppContextProvider';

const FilterComp = () => {

    // Global State
    const { dashBoardFilters, ministriesFilterOptions, serviceProviderFilterOptions,
        stateFilterOptions, pfaFilterOptions, statusFilterOptions } = useContext(AppStoreContext);

    const handleChange = (event) => {
        console.log(event);
    };

    const selectSearchStyle = {
        control: (base) => ({
          ...base,
          height: 40,
          width: "auto",
          border: 0,
          boxShadow: "none",
        }),
        indicatorSeparator: () => null
    };

    return (
        <section className="FilterComp">
    
            <h3>Filters</h3>
            <form className="filter__form">
                <fieldset className="row">
                    {/* Ministry of Works */}
                    <div className="col">
                        <Select
                            styles={ selectSearchStyle }
                            value={ dashBoardFilters["selectedMinistries"] }
                            placeholder={ "Ministries..." }
                            onChange={handleChange}
                            options={ ministriesFilterOptions }
                        />
                    </div>
    
                    {/* Service Provider */}
                    <div className="col">
                        <Select
                            styles={ selectSearchStyle }
                            value={ dashBoardFilters["selectedServiceProvider"] }
                            placeholder={ "Service provider..." }
                            onChange={handleChange}
                            options={ serviceProviderFilterOptions }
                        />
                    </div>
    
                    {/* PFA */}
                    <div className="col">
                        <Select
                            styles={ selectSearchStyle }
                            value={ dashBoardFilters["selectedPFA"] }
                            placeholder={ "PFA..." }
                            onChange={handleChange}
                            options={ pfaFilterOptions }
                        />
                    </div>
    
                    {/* State */}
                    <div className="col">
                        <Select
                            styles={ selectSearchStyle }
                            value={ dashBoardFilters["selectedState"] }
                            placeholder={ "State..." }
                            onChange={handleChange}
                            options={ stateFilterOptions }
                        />
                    </div>
    
                    {/* Payroll Period */}
                    <div className="col">
                        <Select
                            styles={ selectSearchStyle }
                            value={ dashBoardFilters["selectedStatus"] }
                            placeholder={ "Status..." }
                            onChange={handleChange}
                            options={ statusFilterOptions }
                        />
                    </div>
                </fieldset>
            </form>
        </section>
    );
}

export default FilterComp;