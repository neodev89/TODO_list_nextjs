"use client";
import { useState } from "react";
import CustomInput from "../inputs/GenericInput";
import { DynamicBodyLayout } from "./layout";
import style from "./style.module.sass";

export const DynamicBody = () => {
    const [state, setState] = useState<{ [key: string]: string } | null>(null)
    return (
        <DynamicBodyLayout>
            <div className={style.dynamic_body_div}>
                <CustomInput
                    type="button"
                    name="email"
                    placeholder="email"
                    value=""
                    className1={style.button_custom}
                    label="bottone"
                />
            </div>
        </DynamicBodyLayout>
    )
}