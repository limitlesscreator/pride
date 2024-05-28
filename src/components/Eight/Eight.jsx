import React, {useState} from 'react';
import line from "../../img/line.svg"
import graphs from "../../img/graphs.svg"
import graphsMobile from "../../img/graphForMobile.svg"
import circle2 from "../../img/circle2.png"
import circle3 from "../../img/circle3.png"
import doubleCircle from "../../img/doubleCircle.png"
import s from './Eight.module.sass'
import {CustomHeader} from "../CustomHeader";
import {FooterLeaveRequest} from "../FooterLeaveRequest";

export const Eight = () => {

    return (
        <>
            <CustomHeader/>
            <div className={s.section1}>
                <div id={'rightStyle'} className={s.imgSection}></div>
                <div className={s.container}>
                    <div className={s.rightSection}>
                        <div className={s.goldenLineTop}></div>
                        <div className={s.goldenLineRight}></div>
                        <div className={s.goldenLineBottom}></div>
                        <div className={s.title}><img src={line} className={s.lineImgToHide} alt="line"/>Индексация документов</div>
                        <div className={s.subTitle}>Индексируем документы по заданным критериям, вводим атрибуты в ваш электронный архив или документооборот, создаем удобные Excel-реестры для более эффективного управления вашей информацией. <br className={s.brHideOnMobile}/> <br className={s.brHideOnMobile}/><br className={s.brHideOnMobile}/> </div>
                        <button className={s.standartBtnWhite}>Скачать прайс ></button>
                    </div>
                </div>
            </div>
            <div className={s.stageWork}>
                <div className={s.container}>
                    <h2 className={s.titleLeft}>
                        ЭТАПЫ работы
                        <span>stages of work</span>
                    </h2>

                    <div className={s.stages}>
                        <div className={s.stage}>
                            <div className={s.squreBackground}></div>
                            <div className={s.textStage}>Подписание  <br/> договора</div>
                            <div className={s.number}>1</div>
                        </div>
                        <div className={s.stage}>
                            <div className={s.squreBackground}></div>
                            <div className={s.textStage}>Приём и анализ <br/>документов</div>
                            <div className={s.number}>2</div>
                        </div>
                        <div className={s.stage}>
                            <div className={s.squreBackground}></div>
                            <div className={s.textStage}>Процесс индексации</div>
                            <div className={s.number}>3</div>
                        </div>
                        <div className={s.stage}>
                            <div className={s.squreBackground}></div>
                            <div className={s.textStage}>Создание <br/> реестра</div>
                            <div className={s.number}>4</div>
                        </div>
                        <div className={s.stage}>
                            <div className={s.squreBackground}></div>
                            <div className={s.textStage}>Передача <br/> результатов <br/>работы</div>
                            <div className={s.number}>5</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.detailsRightPic}>
                <div className={s.container}>
                    <h2 className={s.titleDetails}>
                        Подробности
                        <span>details</span>
                        <div className={s.circleImgShowOnMobile}></div>

                    </h2>
                    <div className={s.textDelails}>
                        <div className={s.circleImg}></div>
                        Мы осуществляем категоризацию документов в соответствии с определёнными параметрами, регистрируем характеристики в вашу электронную базу данных или систему управления документами.
                        <div className={s.line}></div>
                        <p className={s.additionalText}>
                            Созданные цифровые образы документов проходят процесс индексации – вводятся метаданные согласно выбранным критериям. Это позволяет разложить информацию в удобной
                            и логичной структуре. Применяется программное обеспечение
                            и автоматизированные инструменты для ускорения процесса
                            и исключения человеческих ошибок. <br/><br/>
                            Индексированные данные и реестры интегрируются в электронную систему управления документами клиента, обеспечивая удобный доступ и поиск.
                        </p>
                    </div>
                </div>
            </div>

            <FooterLeaveRequest theme={'white'}/>
        </>
    );
};
