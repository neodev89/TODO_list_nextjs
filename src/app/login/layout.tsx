import style from './style.module.sass';
import { ReactElement, ReactNode } from 'react';

interface loginLayoutProps {
    Title: ReactNode;
    Subtitle: ReactNode;
    children: ReactElement | ReactElement[];
}

export const LoginLayout = ({
    Title,
    Subtitle,
    children
}: loginLayoutProps) => {
    
    return (
        <div className={style.layout_div_login}>
            <div className={style.layout_div_internal}>
                <div className={style.layout_div_description}>
                    <div className={style.layout_div_title}>
                        {Title}
                        {Subtitle}
                    </div>
                </div>
                <div className={style.layout_div_inputs}>
                    <form action="/login" method="post">
                        <fieldset>
                            {children}
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    )
}
