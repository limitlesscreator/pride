import React, {useState} from 'react';
import line from "../../img/line.svg"
import graphs from "../../img/graphs.svg"
import graphsMobile from "../../img/graphForMobile.svg"
import circle2 from "../../img/circle2.png"
import circle3 from "../../img/circle3.png"
import twoMainImg from "../../img/twoMainImg.png"
import doubleCircle from "../../img/doubleCircle.png"
import s from './Two.module.sass'
import {CustomHeader} from "../CustomHeader";
import {FooterLeaveRequest} from "../FooterLeaveRequest";
import secondFirstILmg from "../../img/secondFirstILmg.svg";
import mobileFiveFirst from "../../img/mobileFiveFirst.svg";
import fiveSecondGraph from "../../img/fiveSecondGraph.svg";
import mobileFiveSecond from "../../img/mobileFiveSecond.svg";
import twoSecondMain from "../../img/twoSecondMain.svg";
import forMobileTwoFirst from "../../img/forMobileTwoFirst.svg";
import forMobileTwoSecond from "../../img/forMobileTwoSecond.svg";
import {onButtonClick} from "../../index";
import scanDocuments from "../../img/scanDocuments.pdf";

export const Two = () => {

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
                        <div className={s.title}><img src={line} className={s.lineImgToHide} alt="line"/>Широкоформатное <br/> сканирование</div>
                        <div className={s.subTitle}>Оцифровка чертежей, проектов, карт и других документов размеров А2, А1, А0+ на наших широкоформатных сканерах
                            <br className={s.brHideOnMobile}/><br className={s.brHideOnMobile}/><br className={s.brHideOnMobile}/><br className={s.brHideOnMobile}/>
                        </div>
                        <button className={s.standartBtnWhite} onClick={() => onButtonClick(scanDocuments, 'Сканирование документов')}>Рассчитать ></button>
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
                            <div className={s.textStage}>Широкоформатное <br/> сканирование</div>
                            <div className={s.number}>3</div>
                        </div>
                        <div className={s.stage}>
                            <div className={s.squreBackground}></div>
                            <div className={s.textStage}>Контроль <br/> качества</div>
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
                        Мы предоставляем качественные услуги по оцифровке <span style={{color: '#F4DF24'}}>А2, А1, А0+</span> чертежей, проектной документации и карт на широкоформатных сканерах, предназначенные для коммерческих организаций различных отраслей, где требуется работа с крупноформатной документацией. Наша технология оцифровки позволяет получать детальные и ясные цифровые изображения документов большого размера, таких как инженерные схемы, архитектурные планы и карты.
                        <div className={s.line}></div>
                        <p className={s.additionalText}>
                            Ключевые клиенты, которым необходима оцифровка крупноформатных документов в коммерческих организациях:
<br/><br/>
                            1. Строительные компании и архитектурные бюро: необходимо обеспечить эффективное управление проектной документацией и удобный доступ к ней для всех участников процесса. <br/> <br/>
                            2. Инженерные фирмы: заинтересованы в сохранении и распространении технических чертежей с высоким уровнем детализации. <br/> <br/>
                            3. Картографические и геодезические службы: воспользуются цифровыми копиями карт и планов для анализа и планирования. <br/> <br/>
                            4. Организации, работающие с недвижимостью: для хранения и представления планировок, зонирования и прочих схематических документов. <br/> <br/>
                            5. Муниципальные службы: используют оцифрованные данные для учета и контроля градостроительной деятельности.
<br/><br/>

                            Наши услуги по оцифровке нацелены на обеспечение вашей компании передовыми решениями для работы с документами большого формата, позволяя вам оперативно реагировать на текущие задачи и эффективно планировать будущие проекты.
                        </p>
                    </div>
                </div>
            </div>
            <div className={s.cloudSaver}>
                <div style={{overflow: 'hidden'}} className={s.container}>
                    <h2  style={{textAlign:'center'}} className={s.titleLeft}>
                        Оцифровка таких документов <br/> осуществляется для:
                    </h2>
                    <img src={secondFirstILmg} className={s.graph} alt="graph"/>
                    <img className={s.graphShowOnMobile} src={forMobileTwoFirst} alt="graphs"/>
                </div>
            </div>
            <div className={s.cloudSaver}>
                <div style={{overflow: 'hidden'}} className={s.container}>
                    <h2 style={{textAlign:'center'}} className={s.titleLeft}>
                        Топ распространённых документов, которые могут подлежать оцифровке:
                    </h2>
                    <img src={twoSecondMain} className={s.graph} alt="graph"/>
                    <img className={s.graphShowOnMobileLocal} src={forMobileTwoSecond} alt="graphs"/>
                </div>
            </div>
            <FooterLeaveRequest theme={'white'}/>
        </>
    );
};
