"use client";
import { FormInput } from "@/components/inputs/FormInputs"
import { LoginLayout } from "./layout"
import { ChangeEvent, useState } from "react";

export const Login = () => {
    const [state, setState] = useState<{ [name: string]: string }>({ name: "" });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setState(prev => ({
            ...prev,
            [name]: value
        }))
    }
    return (
        <LoginLayout Title={<Title />} Subtitle={<Subtitle />}>
            <FormInput type="text" name="name" placeholder="name" value={state.name} onChange={handleChange} />
            <FormInput type="text" name="lastName" placeholder="last name" value={state.name} onChange={handleChange} />
            <FormInput type="date" name="birth" placeholder="birth" value={state.name} onChange={handleChange} />
            <FormInput type="email" name="email" placeholder="email" value={state.name} onChange={handleChange} />
            <FormInput type="password" name="password" placeholder="password" value={state.name} onChange={handleChange} />
        </LoginLayout>
    )
}

const Title = () => {
    return (
        <>
            <p>Titolo</p>
        </>
    )
}

const Subtitle = () => {
    return (
        <>
            <p>Sottotitolo</p>
        </>
    )
}