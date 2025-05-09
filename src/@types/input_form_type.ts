import { ChangeEvent, HTMLInputTypeAttribute } from "react";

interface inputFormType {
    type: HTMLInputTypeAttribute;
    name: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string
    id?: string | undefined;
    className?: string | undefined;
    checked?: boolean;
    defaultValue?: string;
    autoFocus?: boolean;
    disabled?: boolean;
    min?: number;
    max?: number;
    multiple?: boolean;
    readOnly?: boolean;
    required?: boolean;
}

export type { inputFormType };