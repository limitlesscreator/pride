import React, {useState} from 'react';
import line from "../../img/line.svg"
import graphs from "../../img/graphs.svg"
import graphsMobile from "../../img/graphForMobile.svg"
import circle2 from "../../img/circle2.png"
import circle3 from "../../img/circle3.png"
import doubleCircle from "../../img/doubleCircle.png"
import s from './FourPerevozka.module.sass'
import {CustomHeader} from "../CustomHeader";
import {FooterLeaveRequest} from "../FooterLeaveRequest";

export const FourPerevozka = () => {

    return (
        <>
            <CustomHeader/>
            <div className={s.section1}>
                <div id={'leftStyle'} className={s.imgSection}></div>
                <div className={s.container}>
                    <div className={s.rightSection}>
                        <div className={s.goldenLineTop}></div>
                        <div className={s.goldenLineRight}></div>
                        <div className={s.goldenLineBottom}></div>
                        <div className={s.title}><img src={line} className={s.lineImgToHide} alt="line"/>Перевозка архива</div>
                        <div className={s.subTitle}>Перевозка архивной документации, независимо от размера и объема, ваш архив будет доставлен в нужное место своевременно и без повреждений. <br/><br/></div>
                        <button className={s.standartBtnWhite}>Рассчитать ></button>
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
                            <div className={s.textStage}>Загрузка и <br/> транспортировка <br/> документов</div>
                            <div className={s.number}>3</div>
                        </div>
                        <div className={s.stage}>
                            <div className={s.squreBackground}></div>
                            <div className={s.textStage}>Сопровождение <br/> и мониторинг</div>
                            <div className={s.number}>4</div>
                        </div>
                        <div className={s.stage}>
                            <div className={s.squreBackground}></div>
                            <div className={s.textStage}>Разгрузка <br/>и приемка</div>
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
                        Мы предоставляем специализированные услуги по транспортировка архивных материалов без опозданий и с гарантией сохранности, независимо от их габаритов и количества, ваш архив прибудет в указанное вами место в целостности и сохранности.
                        <div className={s.line}></div>
                        <p className={s.additionalText}>
                            Мы упаковываем документы с использованием защитных материалов, таких как влагостойкие и пыленепроницаемые коробки. Загрузка упакованных документов в транспортные средства, оснащенные системами отслеживания и контроля. Организовываем безопасную и аккуратную транспортировки документов до места назначения. <br/><br/>
                            Проводим мониторинг местоположения груза в реальном времени для обеспечения безопасности и своевременного реагирования на любые изменения.

                        </p>
                    </div>
                </div>
            </div>

            <FooterLeaveRequest theme={'white'}/>
        </>
    );
};
