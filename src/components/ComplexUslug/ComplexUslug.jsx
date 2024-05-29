import React, {useState} from 'react';
import line from "../../img/line.svg"

import uslug1 from "../../img/uslug1.png"
import uslug2 from "../../img/uslug2.png"
import uslug3 from "../../img/uslug3.png"
import uslug4 from "../../img/uslug4.png"
import arrowTopYellow from "../../img/arrowTopYellow.svg"

import s from './ComplexUslug.module.sass'
import {CustomHeader} from "../CustomHeader";
import {FooterLeaveRequest} from "../FooterLeaveRequest";

export const ComplexUslug = () => {

    return (
        <>
            <CustomHeader/>
            <div className={s.complexFirsBlock}>
                <div className={s.container}>
                    <h2 className={s.titleLeft}>
                        КОМПЛЕКС УСЛУГ
                        <span>complex of services</span>
                    </h2>
                    <div className={s.cardsSection}>
                            <div className={s.card}>
                                <a href="#"><img src={uslug1} alt="img"/></a>
                            </div>
                            <div className={s.card}>
                                <a href="#"><img src={uslug2} alt="img"/></a>
                            </div>
                            <div className={s.card}>
                                <a href="#"><img src={uslug3} alt="img"/></a>
                            </div>
                            <div className={s.card}>
                                <a href="#"><img src={uslug4} alt="img"/></a>
                            </div>
                    </div>
                </div>
            </div>
            <div className={s.section1}>
                <div id={'rightStyle'} className={s.imgSection}></div>
                <div className={s.container}>
                    <div className={s.rightSection}>
                        <div className={s.goldenLineTop}></div>
                        <div className={s.goldenLineRight}></div>
                        <div className={s.title}><img src={line} className={s.lineImgToHide} alt="line"/>базовый </div>
                        <div className={s.subTitle}>

                            <ul className={s.specialLi}>
                                <li>  Выделение документов для униятожения</li>
                                <li>          Уничтожение документов</li>
                                <li>Оцифровка массива архивных документов</li>
                                <li>Создание описи</li>
                                <li> Систематизация</li>
                                <li> Установка и настройка электронного архива</li>
                                <li>Техническое сопровождение</li>
                                <li> Архивное хранение</li>
                            </ul>
                        </div>
                        <button className={s.standartBtnWhite}>Рассчитать ></button>
                    </div>
                </div>
            </div>
            {/*integration RightSide*/}
            <div className={s.special_section1}>
                <div id={'leftStyle'} className={s.special_imgSection1}></div>
                <div className={s.container}>
                    <div className={s.actual_rightSection}>
                        <div className={s.goldenLineTopRightSide}></div>
                        <div className={s.goldenLineRightRightSide}></div>
                        <div className={s.title}><img src={line} className={s.lineImgToHide} alt="line"/>оцифровка</div>
                        <div className={s.subTitle}>

                            <ul className={s.specialLi}>
                                <li>Оцифровка массива архивных документов</li>
                                <li>Создание описи</li>
                                <li>Установка и настройка электронного архива</li>
                                <li>Техническое сопровождение</li>

                            </ul>
                         </div>
                        <button className={s.standartBtnWhite}>Рассчитать ></button>
                    </div>
                </div>
            </div>
            <div className={s.section1}>
                <div id={'rightStyle'} className={s.imgSection3}></div>
                <div className={s.container}>
                    <div className={s.rightSection}>
                        <div className={s.goldenLineTop}></div>
                        <div className={s.goldenLineRight}></div>
                        <div className={s.title}><img src={line} className={s.lineImgToHide} alt="line"/>базовый </div>
                        <div className={s.subTitle}>

                            <ul className={s.specialLi}>
                                <li>Выделение документов для униятожения</li>
                                <li>Уничтожение документов</li>
                                <li>Оцифровка массива архивных документов</li>
                                <li> Создание описи</li>
                                <li>    Систематизация</li>
                                <li>  Установка и настройка электронного архива</li>
                                <li>Техническое сопровождение</li>
                                <li>  Архивное хранение</li>
                                <li>Подготовка и передача дел по личному составу в ГАРФ</li>











                            </ul>
                          </div>
                        <button className={s.standartBtnWhite}>Рассчитать ></button>
                    </div>
                </div>
            </div>
            <div className={s.special_section4}>
                <div id={'leftStyle'} className={s.special_imgSection4}></div>
                <div className={s.container}>
                    <div className={s.actual_rightSection}>
                        <div className={s.goldenLineTopRightSide}></div>
                        <div className={s.goldenLineRightRightSide}></div>
                        <div className={s.title}><img src={line} className={s.lineImgToHide} alt="line"/>Переезд</div>
                        <div className={s.subTitle}>

                            <ul className={s.specialLi}>
                                <li>Архивная обработка документов</li>
                                <li>Систематизация</li>
                                <li>Логистические услуги</li>

                            </ul>
                         </div>
                        <button className={s.standartBtnWhite}>Рассчитать ></button>
                    </div>
                </div>
            </div>
            <FooterLeaveRequest theme={'white'}/>
        </>
    );
};
