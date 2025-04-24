import { Metadata } from "next";
import React from "react";
import style from './style.module.sass';

interface layoutType {
    children: React.ReactNode;
    // I will change this interface in :
    // 1. NavBarTodo
    // 2. DynamicBody
    // 3. Footer
}

export const metadata: Metadata = {
    title: "Create a base for Interface",
    description: "Create a new layout to use to wrap dynamic components"
}

export const DivSkullLayout = ({
    children,
}: layoutType) => {
    return (
        <div className={style.layout_div}>
            {children}
        </div>
    );
}


// In the layout component I will add all the
// static elements.