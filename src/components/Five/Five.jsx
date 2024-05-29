import React, {useState} from 'react';
import line from "../../img/line.svg"
import  s from './Five.module.sass'
import  y from '../Main/Main.module.sass'
import {CustomHeader} from "../CustomHeader";
import {FooterLeaveRequest} from "../FooterLeaveRequest";
import cloudText1 from "../../img/cloudSaveText.svg";
import cloud1 from "../../img/cloud1.png";
import cloudText2 from "../../img/cloudSaveText2.svg";
import cloud2 from "../../img/cloud2.png";
import graphFirstCloud from "../../img/cloudSaverGraph.svg";
import localseven from "../../img/localseven.svg";
import graphsMobile from "../../img/sevenGraphOnMobile.svg";
import sevenMobileLocal from "../../img/sevenMobileLocal.svg";
import pcvirsionfive from "../../img/pcvirsionfive.svg";
import fiveSecondGraph from "../../img/fiveSecondGraph.svg";
import mobileFiveFirst from "../../img/mobileFiveFirst.svg";
import mobileFiveSecond from "../../img/mobileFiveSecond.svg";

export const Five = () => {

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
                        <div className={s.title}><img src={line} className={s.lineImgToHide} alt="line"/>Сканирование книг</div>
                        <div className={s.subTitle}>Безопасно и точно оцифруем бумажные книги с помощью профессиональных сканеров формата A2, сохраняя высокое качество текста и изображений.</div>
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
                            <div className={s.textStage}>Подготовка <br/>
                                книг</div>
                            <div className={s.number}>2</div>
                        </div>
                        <div className={s.stage}>
                            <div className={s.squreBackground}></div>
                            <div className={s.textStage}>Сканирование <br/> книг</div>
                            <div className={s.number}>3</div>
                        </div>
                        <div className={s.stage}>
                            <div className={s.squreBackground}></div>
                            <div className={s.textStage}>Форматирование <br/> и верстка</div>
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
                        В нашу эпоху быстро развивающихся технологий, оцифровка книг и документации становится необходимым инструментом для ряда организаций,отраслей и частных коллекций, позволяя не только увеличить доступность информации, но и значительно продлить срок службы знаний. Среди ключевых структур и отраслей, для которых актуальна оцифровка, выделяются: <div className={s.line}></div>
                        <p className={s.additionalText}>
                            1. Образовательные и научные учреждения: для формирования цифровых библиотек, облегчения доступа к обширной базе знаний и методических материалов.
                            2. Библиотеки и архивы: для бережного хранения и расширения доступа к уникальным и ценным коллекциям.
                            3. Юридические сферы: для упрощения ведения и оперативного поиска в массивах законодательных и нормативных материалов.
                            4. Аудит и консультации: для простоты доступа к регламентам, стандартам и наставлениям в области финансовой и корпоративной отчетности.
                            5. Компании с разветвленной внутрикорпоративной документацией: для эффективностти работы с политиками компании, инструкциями и процессами.
                            6.Владельцами коллекций: для сохранения редких и ценных изданий.
                            7. Исследователями: для оперативного доступа к материалам для исследований.
                            8. Образовательными сотрудниками: для создания учебных баз и выполнения научных исследований.
                            9. Творческой работы: для поиска и анализа необходимой информации в их работе.
                        </p>
                    </div>
                </div>
            </div>

            <div className={s.cloudSaver}>
                <div style={{overflow: 'hidden'}} className={s.container}>
                    <h2  style={{textAlign:'center'}} className={s.titleLeft}>
                        Оцифровка таких документов осуществляется для:
                    </h2>
                    <img src={pcvirsionfive} className={s.graph} alt="graph"/>
                    <img className={s.graphShowOnMobile} src={mobileFiveFirst} alt="graphs"/>
                </div>
            </div>
            <div className={s.cloudSaver}>
                <div style={{overflow: 'hidden'}} className={s.container}>
                    <h2 style={{textAlign:'center'}} className={s.titleLeft}>
                        Топ распространённых документов, которые могут подлежать оцифровке:
                    </h2>
                    <img src={fiveSecondGraph} className={s.graph} alt="graph"/>
                    <img className={s.graphShowOnMobileLocal} src={mobileFiveSecond} alt="graphs"/>
                </div>
            </div>

            <FooterLeaveRequest theme={'white'}/>
        </>
    );
};
