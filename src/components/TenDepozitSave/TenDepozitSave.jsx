import React, {useState} from 'react';
import line from "../../img/line.svg"
import graphs from "../../img/graphs.svg"
import graphsMobile from "../../img/graphForMobile.svg"
import circle2 from "../../img/circle2.png"
import circle3 from "../../img/circle3.png"
import doubleCircle from "../../img/doubleCircle.png"
import s from './TenDepozitSave.module.sass'
import {CustomHeader} from "../CustomHeader";
import {FooterLeaveRequest} from "../FooterLeaveRequest";

export const TenDepozitSave = () => {

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
                        <div className={s.title}><img src={line} className={s.lineImgToHide} alt="line"/>Депозитарное хранение</div>
                        <div className={s.subTitle}>Наше профессиональное архивохранилище обеспечивает максимальную конфиденциальность и надежность, соблюдая все требования и нормы к хранению документов. Освободим ваши площади и независимо от типа документации, мы предоставим высокий уровень защиты и контроля доступа к вашей информации.</div>
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
                            <div className={s.textStage}>инвентаризация <br/> документов</div>
                            <div className={s.number}>2</div>
                        </div>
                        <div className={s.stage}>
                            <div className={s.squreBackground}></div>
                            <div className={s.textStage}>Транспортировка <br/> документов</div>
                            <div className={s.number}>3</div>
                        </div>
                        <div className={s.stage}>
                            <div className={s.squreBackground}></div>
                            <div className={s.textStage}>Размещение <br/> документов</div>
                            <div className={s.number}>4</div>
                        </div>
                        <div className={s.stage}>
                            <div className={s.squreBackground}></div>
                            <div className={s.textStage}>Регулярный <br/> учет</div>
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
                        Мы предлагаем оптимальные условия для сохранения вашей документации в нашем специализированном хранилище архивов, таким образом, высокая степень безопасности гарантирована, с полным соблюдением всех необходимых стандартов и законодательных требований. Мы поможем вам эффективно использовать офисное пространство, предоставляя услуги по защите и регулированию доступа к вашим документам.
                        <div className={s.line}></div>
                        <p className={s.additionalText}>
                            Наши эксперты  проводят первичную оценку текущего состояния документации клиента. Они определяют, какие документы требуют хранения, и их юридическое значение. <br/><br/>
                            Кроме того, мы осуществляем регулярный учет, проверку состояния документов и управление хранилищем, чтобы гарантировать их сохранность.
                        </p>
                    </div>
                </div>
            </div>

            <FooterLeaveRequest theme={'white'}/>
        </>
    );
};
