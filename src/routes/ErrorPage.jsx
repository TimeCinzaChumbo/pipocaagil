import { Link, useRouteError } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import style from "../routes/ErrorPage.module.css";

const ErrorPage = () => {

    const error = useRouteError();
    return (
        <div className={style.errorPage}>
            <div className={style.containerErrorPage}>
                <h1>Página em construção</h1>
                <RouterLink to="pipocaagil" className={style.btnReturn}>
                    <button>Voltar para Home</button>
                </RouterLink>
            </div>
        </div>
    );
}

export default ErrorPage;