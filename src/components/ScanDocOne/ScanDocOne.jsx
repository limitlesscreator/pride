import React, {useState} from 'react';
import line from "../../img/line.svg"
import graphs from "../../img/graphs.svg"
import graphsMobile from "../../img/graphForMobile.svg"
import circle2 from "../../img/circle2.png"
import circle3 from "../../img/circle3.png"
import doubleCircle from "../../img/doubleCircle.png"
import s from './ScanDocOne.module.sass'
import {CustomHeader} from "../CustomHeader";
import {FooterLeaveRequest} from "../FooterLeaveRequest";
import {onButtonClick} from "../../index";
import scanDocuments from "../../img/scanDocuments.pdf";

export const ScanDocOne = () => {

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
                        <div className={s.title}><img src={line} className={s.lineImgToHide} alt="line"/>Сканирование документов</div>
                        <div className={s.subTitle}>Быстрое сканирование бухгалтерской первичной документации, юридических и финансовых документов, анкет и бланков – сделайте свою работу быстрой и эффективной.</div>
                        <button className={s.standartBtnWhite}  onClick={() => onButtonClick(scanDocuments, 'Сканирование документов')}>Рассчитать ></button>
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
                            <div className={s.textStage}>Процесс <br/>  сканирования</div>
                            <div className={s.number}>2</div>
                        </div>
                        <div className={s.stage}>
                            <div className={s.squreBackground}></div>
                            <div className={s.textStage}>Контроль <br/> качества</div>
                            <div className={s.number}>3</div>
                        </div>
                        <div className={s.stage}>
                            <div className={s.squreBackground}></div>
                            <div className={s.textStage}>Именование <br/>
                                и организация <br/>
                                файлов</div>
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
                        Мы предоставляем специализированные услуги по цифровизации документов научного и проектного характера, включая чертежи, карты и печатные материалы.
                        Наши способности охватывают работу с документацией разных размеров: <span style={{color: '#F4DF24'}}>А2, А1, А0 и А0+.</span>
                        <div className={s.line}></div>
                        <p className={s.additionalText}>
                            Мы понимаем, что оцифровка документов в коммерческих организациях может быть востребована для различных целей, особенно в следующих случаях: <br/> <br/>

                            1. Бухгалтерия и финансовый отдел - для оперативного доступа к первичным бухгалтерским документам, отчётности, банковским выпискам и подготовки к аудитам. <br/>
                            2. Юридический отдел - для хранения и быстрого поиска всевозможных правовых документов, договоров, соглашений, юридических заключений. <br/>
                            3. Отдел кадров - для управления персональными данными сотрудников, трудовыми договорами, личными делами, отпусками и больничными листами. <br/>
                            4. Руководство компании - для анализа стратегических документов, отчётов, бизнес-планов, протоколов заседаний руководства и акционеров. <br/>
                            5. Отдел продаж и закупок - для быстрого доступа к коммерческим предложениям, заказам клиентов, договорам поставки и сопроводительным товарным накладным. <br/>

                        </p>
                    </div>
                </div>
            </div>

            <div className={s.topBuhDocs}>
                <div className={s.container}>
                    <h4>Топ самых распространённых бухгалтерских документов, которые обычно подлежат оцифровке
                    </h4>
                    <div className={s.groupImages}>
                        <img className={s.graph} src={graphs} alt="graphs"/>
                        <img className={s.graphShowOnMobile} src={graphsMobile} alt="graphs"/>
                        <img className={s.doubleCircle} src={doubleCircle} alt="img"/>
                        <img className={s.circle2} src={circle2} alt="img"/>
                        <img className={s.circle3} src={circle3} alt="img"/>
                    </div>
                </div>
            </div>
            <FooterLeaveRequest theme={'white'}/>
        </>
    );
};
