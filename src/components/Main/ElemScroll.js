import React from 'react';
import s from "./Main.module.sass";
import rightArrow from "../../img/rightArrow.svg";

export const ElemScroll = ({title,subtitle,day}) => {
    return (
        <>
            <div className={s.elemScroll}>
                <div className={s.days}>{day}</div>
                <div className={s.info}>
                    <div className={s.titleElemSc}>{title}</div>
                    <div className={s.subTitleElemSc}>{subtitle}</div>
                    <div className={s.aboutSc}>Подробнее <img src={rightArrow} alt="rightArrow"/></div>
                </div>
            </div>
        </>
    );
};
