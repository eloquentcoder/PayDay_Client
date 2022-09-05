import { useContext } from "react";

/*==== Import AppStoreContext HOC ====*/
import { AppStoreContext } from "../../../../contexts/AppContextProvider";

/*==== Import _Counter_Comp SCSS ====*/
import "./_Counter_Comp.scss";

const CounterComp = () => {

  const { counterCardData } = useContext(AppStoreContext);

  return (
    <section className="CounterComp container-fluid p-0">
      
      <h3>Counter</h3>

      <div className="counter-card__wrapper row row-cols-2 row-cols-sm-1 row-cols-md-2 row-cols-lg-4 g-2 gx-lg-3 gy-lg-4">
        {counterCardData.map((eachCounter, index) => (
          <div className="col" key={ index }>
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