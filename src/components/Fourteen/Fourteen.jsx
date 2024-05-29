import React, {useState} from 'react';
import line from "../../img/line.svg"
import graphs from "../../img/graphs.svg"
import graphsMobile from "../../img/graphForMobile.svg"
import circle2 from "../../img/circle2.png"
import circle3 from "../../img/circle3.png"
import doubleCircle from "../../img/doubleCircle.png"
import s from './Fourteen.module.sass'
import {CustomHeader} from "../CustomHeader";
import {FooterLeaveRequest} from "../FooterLeaveRequest";
import {onButtonClick} from "../../index";
import fullPrice from "../../img/fullPrice.pdf";

export const Fourteen = () => {

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
                        <div className={s.title}><img src={line} className={s.lineImgToHide} alt="line"/>пОСТПЕЧАТНАЯ ОБРАБОТКА</div>
                        <div className={s.subTitle}>Постпечатная обработка — критически важный этап в создании высококачественной печатной продукции, который определяет её конечный вид и пользовательские качества.  <br className={s.brHideOnMobile}/><br className={s.brHideOnMobile}/><br className={s.brHideOnMobile}/><br className={s.brHideOnMobile}/> </div>
                        <button className={s.standartBtnWhite}  onClick={() => onButtonClick(fullPrice, 'ПОЛНЫЙ ПРАЙС')}>Скачать прайс ></button>
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
                            <div className={s.textStage}>Сшивание или склеивание</div>
                            <div className={s.number}>3</div>
                        </div>
                        <div className={s.stage}>
                            <div className={s.squreBackground}></div>
                            <div className={s.textStage}>Финальная <br/>обрезка</div>
                            <div className={s.number}>4</div>
                        </div>
                        <div className={s.stage}>
                            <div className={s.squreBackground}></div>
                            <div className={s.textStage}>Упаковка</div>
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
                        Готовые печатные листы из печатного станка, подлежат дальнейшей обработке, чтобы придать им нужный формат и защитить от внешних факторов
                        <div className={s.line}></div>
                        <p className={s.additionalText}>
                            Вот ключевые аспекты постпечатной обработки: <br/><br/>

                            - Фальцовка: Это процесс складывания печатных листов в определённой последовательности и формате, что часто применяется при изготовлении брошюр, журналов, и листовок. Фальцовка делает продукцию компактной и удобной для чтения.
<br/><br/>
                            - Брошюровка (переплет): Заключается в соединении отдельных листов или сгибов с помощью скрепления или клея. В зависимости от того, сколько страниц и какой уровень прочности требуется, может использоваться скоба, клей, термоклей, или в твердый или мягкий переплет.
<br/><br/>
                            - Обрезка: С помощью этого процесса края собранных в брошюру листов выравниваются, придавая изданию аккуратный вид.
<br/><br/>
                            - Ламинирование: Нанесение защитной полимерной пленки на печатные материалы может не только улучшить внешний вид, но и значительно продлить срок службы продукции, защищая от влаги, грязи и изнашивания.
<br/><br/>
                            - Тиснение и высечка: Создание рельефных элементов на поверхности бумаги с целью придания объёмности и оригинальности печатному изданию.<br/><br/><br/>
                            Добавление этих видов обработки в комплекс услуг по печати позволяет не только обогатить физические характеристики продукции, но и придать ей уникальные потребительские свойства, повышая её восприятие и ценность в глазах  пользователя.
 </p>
                    </div>
                </div>
            </div>

            <FooterLeaveRequest theme={'white'}/>
        </>
    );
};
