import { Link } from "react-router-dom";

//  Import _AppLayout_HOC scss.
import './_AppFooter_Comp.scss';


const AppFooterComp = () => {

    const year = new Date().getFullYear();

    return (
        <section className={"AppFooterComp"}>
            <div className="container">
                <div className="row">

                    <div className="col-12">
                        <div className="footer-copyright">
                            &copy; Copyright &nbsp;
                            <Link to="https://lms_4core.com">PayDay</Link> { year }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppFooterComp;
