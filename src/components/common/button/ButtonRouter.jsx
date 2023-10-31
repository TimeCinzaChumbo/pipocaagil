import styles from "./ButtonRouter.module.css";

import { Link as RouterLink } from "react-router-dom";

function ButtonRouter({ to, size, color, text }) {

    const ButtonRouterClass = `${styles.to} ${styles.button} ${styles[size]} ${styles[color]} ${styles.text} || '' `;

    return (
        <RouterLink to={to}>
            <button className={ButtonRouterClass} type="button">{text}</button>
        </RouterLink>
        
    );
};

export default ButtonRouter;