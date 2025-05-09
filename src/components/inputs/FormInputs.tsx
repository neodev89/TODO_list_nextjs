import { inputFormType } from "@/@types/input_form_type";

export const FormInput = ({
    type,
    name,
    value,
    onChange,
    ...other
}: inputFormType) => {

    return (
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            {...other}
        />
    )
}