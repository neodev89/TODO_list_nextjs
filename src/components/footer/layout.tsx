import React from "react";
import style from "./style.module.sass";

interface footerLayoutTypes {
    children: React.ReactElement;
}

export const FooterLayout = ({
    children
}: footerLayoutTypes) => {
    return (
        <div className={style.footer_principal_div}>
            {children}
        </div>
    )
}