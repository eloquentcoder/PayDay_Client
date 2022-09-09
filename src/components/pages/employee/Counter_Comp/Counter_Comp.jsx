import { useContext } from "react";

/*==== Import AppStoreContext HOC ====*/
import { AppStoreContext } from "../../../../contexts/AppContextProvider";

/*==== Import _Counter_Comp SCSS ====*/
import "./_Counter_Comp.scss";

const CounterComp = () => {

  const { employeeCounterCardData } = useContext(AppStoreContext);

  return (
    <section className="CounterComp container-fluid p-0">
      
      <h3>Counter</h3>

      <div className="counter-card__wrapper row row-cols-2 row-cols-sm-1 row-cols-md-2 row-cols-lg-4 gx-lg-3 gy-lg-0">
        {employeeCounterCardData.map((eachCounter, index) => (
          <div className="col pb-4 pb-lg-3" key={ index }>
            <div className={`mCard counter-card__item item__${index} col`}>
              <div>
                <p>{ eachCounter.title }</p>
                <h1>{ eachCounter.number }</h1>
              </div>
              <eachCounter.icon className={`counter-card__icon item${index}__icon`} />
            </div>
          </div>     
        ))}
      </div>
      
    </section>
  )
}

export default CounterComp;