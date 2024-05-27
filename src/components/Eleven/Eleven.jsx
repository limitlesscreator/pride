import React, {useState} from 'react';
import line from "../../img/line.svg"
import graphs from "../../img/graphs.svg"
import graphsMobile from "../../img/graphForMobile.svg"
import circle2 from "../../img/circle2.png"
import circle3 from "../../img/circle3.png"
import doubleCircle from "../../img/doubleCircle.png"
import s from './Eleven.module.sass'
import {CustomHeader} from "../CustomHeader";
import {FooterLeaveRequest} from "../FooterLeaveRequest";

export const Eleven = () => {

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
                        <div className={s.title}><img src={line} className={s.lineImgToHide} alt="line"/>Консалтинговые услуги </div>
                        <div className={s.subTitle}>Мы поможем вам оптимизировать процессы обмена данными, автоматизировать документооборот и повысить эффективность вашей работы. Наши консультанты специализируются на создании связей между вашим электронным архивом и юридически значимым документооборотом, через API или Коннектор Диадок.</div>
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
                            <div className={s.textStage}>Предварительный <br/> анализ</div>
                            <div className={s.number}>2</div>
                        </div>
                        <div className={s.stage}>
                            <div className={s.squreBackground}></div>
                            <div className={s.textStage}>Детальный аудит <br/> и анализ</div>
                            <div className={s.number}>3</div>
                        </div>
                        <div className={s.stage}>
                            <div className={s.squreBackground}></div>
                            <div className={s.textStage}>Разработка <br/> решений</div>
                            <div className={s.number}>4</div>
                        </div>
                        <div className={s.stage}>
                            <div className={s.squreBackground}></div>
                            <div className={s.textStage}>Презентация <br/> решений <br/> клиенту</div>
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
                        Мы предоставим поддержку в усовершенствовании механизмов передачи данных, внедрении автоматизации управления документами и улучшении общей производительности вашей организации. <div className={s.line}></div>
                        <p className={s.additionalText}>
                            Наши эксперты обладают знаниями в интеграции вашей электронной документации с системами, имеющими юридическую силу, путем использования API или через Коннектор Диадок. <br/><br/>
                            Кроме того, мы оказываем поддержку в реализации предложенных решений, включая обучение персонала, мониторинг и контроль.
                        </p>
                    </div>
                </div>
            </div>

            <FooterLeaveRequest theme={'white'}/>
        </>
    );
};
