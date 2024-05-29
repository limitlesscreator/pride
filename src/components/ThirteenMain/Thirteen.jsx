import React, {useState} from 'react';
import line from "../../img/line.svg"
import graphs from "../../img/graphs.svg"
import graphsMobile from "../../img/graphForMobile.svg"
import circle2 from "../../img/circle2.png"
import circle3 from "../../img/circle3.png"
import doubleCircle from "../../img/doubleCircle.png"
import s from './Thirteen.module.sass'
import {CustomHeader} from "../CustomHeader";
import {FooterLeaveRequest} from "../FooterLeaveRequest";
import {onButtonClick} from "../../index";
import copyDocuments from "../../img/copyDocuments.pdf";

export const Thirteen = () => {

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
                        <div className={s.title}><img src={line} className={s.lineImgToHide} alt="line"/>кОПИРОВАНИЕ Документов</div>
                        <div className={s.subTitle}>Осуществляем копирование документов всех стандартных размеров (А4, А3, А2, А1, А0) и нестандартных (А3х3, А3х4, А2х3, А2х4, А1х3 и так далее). Мы производим высококачественное копированием с использованием материалов от ведущих производителей, обеспечивающих долгосрочную сохранность вашей продукции. </div>
                        <button className={s.standartBtnWhite}  onClick={() => onButtonClick(copyDocuments, 'КОПИРОВАНИЕ Документов')}>Скачать прайс ></button>
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
                            <div className={s.textStage}>Прием и оценка <br/>документов</div>
                            <div className={s.number}>2</div>
                        </div>
                        <div className={s.stage}>
                            <div className={s.squreBackground}></div>
                            <div className={s.textStage}>Копирование</div>
                            <div className={s.number}>3</div>
                        </div>
                        <div className={s.stage}>
                            <div className={s.squreBackground}></div>
                            <div className={s.textStage}>Проверка <br/> качества</div>
                            <div className={s.number}>4</div>
                        </div>
                        <div className={s.stage}>
                            <div className={s.squreBackground}></div>
                            <div className={s.textStage}>Доставка <br/>
                                цифровых<br/>
                                копий</div>
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
                        Специализированный сервис копирования документов, особенно важен для надлежащего ведения строительных, архитектурных и проектировочных работ. Мы понимаем, что каждый печатный экземпляр несет в себе значение и играет роль в целостности и выполнении проекта.
                        <div className={s.line}></div>
                        <p className={s.additionalText}>
                            Мы предлагаем следующий комплекс услуг копирования: <br/> <br/>

                            - Стандартные и нестандартные размеры: Наше современное оборудование позволяет выполнять копирование документации всех необходимых размеров, от стандартных А4, А3, А2, А1, А0 до нестандартных форматов как А3х3, А3х4, А2х3, А2х4, А1х3 и другие, что даёт возможность полного соответствия потребностям клиентов.
                            <br/> <br/>
                            - Высококачественные материалы: Мы используем только лучшие материалы от признанных производителей, что гарантирует ясность изображений и продолжительную сохранность копий.
                            <br/> <br/>
                            - Точность и четкость: Наши копировальные аппараты настроены на поддержание высокой точности деталей, что является критически важным для технических и строительных чертежей.

                            - Долгосрочная сохранность: Специальные чернила и бумага обеспечивают долговечность документов, которые могут противостоять внешним условиям на строительных площадках или в проектных бюро.
                            <br/> <br/> <br/>
                            Мы стремимся предоставить вам сервис, который станет залогом успешной реализации ваших проектов, с уверенностью в качестве каждой копии. Наша миссия – поддерживать высочайший стандарт работы с документами, и мы постоянно совершенствуем процессы, чтобы поддержать ваш бизнес наилучшим образом.
                        </p>
                    </div>
                </div>
            </div>

            <FooterLeaveRequest theme={'white'}/>
        </>
    );
};
