import React from 'react';
import s from "./Main.module.sass";
import rightArrow from "../../img/rightArrow.svg";
import {Link} from "react-router-dom";

export const ElemScroll = ({title,subtitle,day, path}) => {
    return (
        <>
            <Link to={path} style={{textDecoration: 'none'}}>
                <div className={s.elemScroll}>
                    <div className={s.days}>{day}</div>
                    <div className={s.info}>
                        <div className={s.titleElemSc}>{title}</div>
                        <div className={s.subTitleElemSc}>{subtitle}</div>
                        <div className={s.aboutSc}>Подробнее <img src={rightArrow} alt="rightArrow"/></div>
                    </div>
                </div>
            </Link>
        </>
    );
};
