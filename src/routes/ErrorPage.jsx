import { useRouteError } from "react-router-dom";
import style from "../routes/ErrorPage.module.css";

const ErrorPage = () => {

    const error = useRouteError();
    return (
        <div className={style.errorPage}>
            <h1>Página em construção</h1>
        </div>
    );
}

export default ErrorPage;