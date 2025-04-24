import React from "react";
import style from './style.module.sass';

interface navbarTypes {
    home: React.ReactElement;
    aboutUs: React.ReactElement;
    contact: React.ReactElement;
}

export const NavbarTodo = () => {
    return (
        <div className={style.navbar_todo}>
            <div className={style.navbar_div_buttons}>
                <div className={style.navbar_div_home_btn}>
                    <button type="button" className={style.navbar_divs_btn}>Ciao</button>
                </div>
                <div className={style.navbar_div_other_btns}>
                    <div className={style.navbar_div_others}>
                        <button type="button"
                            className={style.navbar_divs_btn}
                        >
                            About us
                        </button>
                        <button type="button"
                            className={style.navbar_divs_btn}
                        >
                            Contact
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
