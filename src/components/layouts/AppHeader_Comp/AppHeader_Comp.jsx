import { useContext } from "react";
import { Link } from "react-router-dom";
import { BiMoon, BiSun } from 'react-icons/bi';

/*==== Import AppStoreContext HOC ====*/
import { AppStoreContext } from "../../../contexts/AppContextProvider";

/*==== Import _AppHeader_Comp SCSS ====*/
import './_AppHeader_Comp.scss';

const AppHeaderComp = () => {

    const { isLightTheme, toggleTheme } = useContext(AppStoreContext);

    return (
        <div className="AppHeaderComp p-0">

            <nav className="navbar navbar-expand-lg navbar-light nav__wrapper">
                <div className="container-fluid p-0">

                    
                    <i className="bi bi-list hamburger__icon"></i>
                    <h3 className="dashboard__Text">Dashboard</h3>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <form className="search-box__wrapper" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <i className="bi bi-search"></i>
                        </form>
                        <Link to="#" onClick={ toggleTheme } className="nav-link">
                            <span className="theme__toggle">
                                {(isLightTheme) ? (<BiMoon/>) : (<BiSun/>)}
                            </span>
                        </Link>
                    </div>


                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Get Started</Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </div>
    );
};

export default AppHeaderComp;
