import React from "react";
import style from "./style.module.sass";

interface dynamicBodyTypes {
    children: Array<React.ReactNode> | React.ReactNode;
}

export const DynamicBodyLayout = ({
    children
}: dynamicBodyTypes) => {
    return (
        <div className={style.dynamic_body_principal_div}>
            <>
                {
                    Array.isArray(children) ? 
                    (
                        children.map((child, index: number) => {
                            return (
                                <span key={index}>
                                    {child}
                                </span>
                            )
                        })
                    ) : (
                        children
                    )
                }
            </>
        </div>
    )
}