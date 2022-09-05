import { NavLink } from "react-router-dom";

/*==== Import _AppSideDrawer_Comp SCSS ====*/
import './_AppSideDrawer_Comp.scss';


/*==== Import Images ====*/

const AppSideDrawerComp = () => {

  return (
    <section className={"AppSideDrawerComp"}>

        {/*==== Drawer Header ====*/}
        <div className="drawer-header__wrapper">
            <NavLink to="/">
                <div className="app_logo"></div>
            </NavLink>
        </div>


        <ul className="menu__items">
            <NavLink to="/dashboard" className={({ isActive }) => isActive ? "selected" : "" }>
                <li className="menu__item">
                    <div className="indicator"></div>
                    <div className="menu__name">Dashboard</div>
                </li>
            </NavLink>
            <NavLink to="/employee" className={({ isActive }) => isActive ? "selected" : "" }>
                <li className="menu__item">
                    <div className="indicator"></div>
                    <div className="menu__name">Employee</div>
                </li>
            </NavLink>
            <NavLink to="/financials" className={({ isActive }) => isActive ? "selected" : "" }>
                <li className="menu__item">
                    <div className="indicator"></div>
                    <div className="menu__name">Financials</div>
                </li>
            </NavLink>
            <NavLink to="/service_roviders" className={({ isActive }) => isActive ? "selected" : "" }>
                <li className="menu__item">
                    <div className="indicator"></div>
                    <div className="menu__name">Service Providers</div>
                </li>
            </NavLink>
        </ul>
    </section>
  )
}

export default AppSideDrawerComp