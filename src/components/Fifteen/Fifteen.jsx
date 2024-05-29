import React, {useState} from 'react';
import line from "../../img/line.svg"
import graphs from "../../img/graphs.svg"
import graphsMobile from "../../img/graphForMobile.svg"
import circle2 from "../../img/circle2.png"
import circle3 from "../../img/circle3.png"
import doubleCircle from "../../img/doubleCircle.png"
import s from './Fifteen.module.sass'
import {CustomHeader} from "../CustomHeader";
import {FooterLeaveRequest} from "../FooterLeaveRequest";
import {onButtonClick} from "../../index";
import injener from '../../img/injener.pdf'
export const Fifteen = () => {

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
                        <div className={s.title}><img src={line} className={s.lineImgToHide} alt="line"/>ИНЖЕНЕРНАЯ ПЕЧАТЬ</div>
                        <div className={s.subTitle}>Печать чертежей, конструкторских документов и проектной документации, предназначенных для использования в строительстве, архитектуре и проектировании.
                            В нашем ассортименте имеются все утвержденные форматы А4, А3, А2, А1, А0, а также индивидуальные размеры А3х3, А3х4, А2х3, А2х4, А1х3 и многие другие материалы.
                            </div>
                        <button onClick={() => onButtonClick(injener, 'ИНЖЕНЕРНАЯ ПЕЧАТЬ')} className={s.standartBtnWhite}>Скачать прайс ></button>
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
                            <div className={s.textStage}>Подготовка <br/> документов</div>
                            <div className={s.number}>2</div>
                        </div>
                        <div className={s.stage}>
                            <div className={s.squreBackground}></div>
                            <div className={s.textStage}>Инженерная печать</div>
                            <div className={s.number}>3</div>
                        </div>
                        <div className={s.stage}>
                            <div className={s.squreBackground}></div>
                            <div className={s.textStage}>Контроль <br/> качества</div>
                            <div className={s.number}>4</div>
                        </div>
                        <div className={s.stage}>
                            <div className={s.squreBackground}></div>
                            <div className={s.textStage}>Упаковка и доставка</div>
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
                        Мы гарантируем полный спектр услуг по печати специализированных документов, которые сопровождают весь жизненный цикл строительного проекта - от концепции до завершения строительства:
                        <div className={s.line}></div>
                        <p className={s.additionalText}>
                            - Широкий ассортимент форматов: Мы предлагаем печать в стандартных форматах: А4 для мелкой документации, А3 для чертежей повышенной детализации, А2, А1 и А0 для крупноформатных планов и схем, которые требуются для подробного рассмотрения на объекте или в процессе согласования.
<br/><br/>
                            - Индивидуальные размеры: Мы осознаём уникальность каждого проекта и готовы предоставить услуги печати в индивидуальных размерах, таких как А3х3, А3х4, А2х3, А2х4, А1х3 и другие, которые необходимы для точной и полной визуализации проектных идей.
<br/><br/>
                            - Качество материалов: Мы используем только качественные материалы, подходящие под специфику проектной документации, что обеспечивает долговечность и читаемость документов даже в полевых условиях на строительных площадках.
                            <br/><br/>
                            Кроме того, мы осуществляем проверку отпечатанных документов на соответствие оригиналам, четкость линий и текста, а также отсутствие дефектов печати.
                        </p>
                    </div>
                </div>
            </div>

            <FooterLeaveRequest theme={'white'}/>
        </>
    );
};
