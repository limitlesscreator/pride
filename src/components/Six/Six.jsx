import React, {useState} from 'react';
import line from "../../img/line.svg"
import graphs from "../../img/graphs.svg"
import graphsMobile from "../../img/graphForMobile.svg"
import circle2 from "../../img/circle2.png"
import circle3 from "../../img/circle3.png"
import doubleCircle from "../../img/doubleCircle.png"
import s from './Six.module.sass'
import {CustomHeader} from "../CustomHeader";
import {FooterLeaveRequest} from "../FooterLeaveRequest";
import {onButtonClick} from "../../index";
import scanDocuments from "../../img/scanDocuments.pdf";

export const Six = () => {

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
                        <div className={s.title}><img src={line} className={s.lineImgToHide} alt="line"/>Бесконтактное сканирование</div>
                        <div className={s.subTitle}>Мы оцифровываем уникальные старинные книги, карты, газеты и журналы с особой тщательностью и точностью, чтобы сохранить их для будущих поколений <br className={s.brHideOnMobile}/> <br className={s.brHideOnMobile}/><br className={s.brHideOnMobile}/> <br className={s.brHideOnMobile}/> </div>
                        <button onClick={() => onButtonClick(scanDocuments, 'Сканирование документов')}  className={s.standartBtnWhite}>Скачать прайс ></button>
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
                            <div className={s.textStage}>Подготовка <br/>документов</div>
                            <div className={s.number}>2</div>
                        </div>
                        <div className={s.stage}>
                            <div className={s.squreBackground}></div>
                            <div className={s.textStage}>Бесконтактное <br/> сканирование</div>
                            <div className={s.number}>3</div>
                        </div>
                        <div className={s.stage}>
                            <div className={s.squreBackground}></div>
                            <div className={s.textStage}>Обработка <br/> изображений</div>
                            <div className={s.number}>4</div>
                        </div>
                        <div className={s.stage}>
                            <div className={s.squreBackground}></div>
                            <div className={s.textStage}>Доставка <br/>
                                цифровых <br/>
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
                        Мы внимательно и аккуратно превращаем в цифровой формат редкие и древние книги, картографические издания, периодические публикации и журналы, гарантируя их сохранность для последующих поколений.
                        <div className={s.line}></div>
                        <p className={s.additionalText}>
                            Клиенты могут обратиться к нам для консультации, в ходе которой обговариваются детали проекта, включая объём, тип документов и специфические требования. Документы принимаются от клиента с соблюдением всех мер предосторожности для их сохранности <br/> <br/>
                            Используются специализированные бесконтактные сканеры, которые позволяют сканировать документы без непосредственного касания, что особенно важно для хрупких и ценных объектов.
                        </p>
                    </div>
                </div>
            </div>

            <FooterLeaveRequest theme={'white'}/>
        </>
    );
};
