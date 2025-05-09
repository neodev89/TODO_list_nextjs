import { DynamicBody } from "../dynamic_body/page"
import { Footer } from "../footer/page"
import { NavbarTodo } from "../navbar/NavbarTodo"
import { DivSkullLayout } from "./layout"

export const DivSkull = () => {

    return (
        <DivSkullLayout>
            <NavbarTodo />
            <DynamicBody />
            <Footer />
        </DivSkullLayout>
    )
}