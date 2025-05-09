import React from "react";
import style from "./style.module.sass";

interface customInputTypes {
    type: "button" | "input" | "submit";
    name: string;
    key?: string | undefined;
    value?: string;
    label?: string;
    className1: string;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export default function CustomInput({
    type, name, value, label, placeholder, className1, key, ...other
}: customInputTypes) {
    return (
        <div className={style.input_div_first}>
            <div className={style.input_label}>
                <label htmlFor={key}>{label}</label>
            </div>
            <div className={style.input_btn}>
                <input
                    type={type}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    className={className1}
                    {...other}
                />
            </div>
        </div>
    )
}