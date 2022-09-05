

/*==== Import _Filter_Comp SCSS ====*/
import "./_Filter_Comp.scss";

const FilterComp = () => {
  return (
    <section className="FilterComp">

        <h3>Filter</h3>
        <form className="filter__form">
            <fieldset>
                {/* GGGGG */}
                <select defaultValue="" className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                    <option value="">MDA Ministry of Works</option>
                    <option value="abia">Option</option>
                    <option value="anambra">Option</option>
                    <option value="ebonyi">Option</option>
                </select>

                {/* GGGGG */}
                <select defaultValue="" className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                    <option value="">Select Local Government</option>
                    <option value="abia">Aninri</option>
                    <option value="anambra">Awgu</option>
                    <option value="ebonyi">Enugu East</option>
                    <option value="enugu">Oji River</option>
                    <option value="imo">Udi</option>
                </select>

                {/* GGGGG */}
                <select defaultValue="" className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                    <option value="">Status: Active</option>
                    <option value="abia">Option</option>
                    <option value="anambra">Option</option>
                    <option value="ebonyi">Option</option>
                </select>

                {/* GGGGG */}
                <select defaultValue="" className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                    <option value="">State: FCT</option>
                    <option value="abia">Option</option>
                    <option value="anambra">Option</option>
                    <option value="ebonyi">Option</option>
                </select>

                {/* GGGGG */}
                <select defaultValue="" className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                    <option value="">Service Provider: Soft Alliance</option>
                    <option value="abia">Option</option>
                    <option value="anambra">Option</option>
                    <option value="ebonyi">Option</option>
                </select>

                {/* GGGGG */}
                <select defaultValue="" className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                    <option value="">Payroll Period</option>
                    <option value="abia">Option</option>
                    <option value="anambra">Option</option>
                    <option value="ebonyi">Option</option>
                </select>

                <router-link to="/school_list">
                    <button type="submit" className="search__button">Search</button>
                </router-link>
            </fieldset>
        </form>
    </section>
  )
}

export default FilterComp;