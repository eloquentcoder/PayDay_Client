
/*=== Import the _SectionHeader_Comp SCSS ===*/
import './_SectionHeader_Comp.scss';

const SectionHeaderComp = (props) => {
  return (
    <div className="SectionHeaderComp">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <p className="sub__title">{ props.subTitle }</p>
                    <h1 className="title">{ props.title }</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SectionHeaderComp