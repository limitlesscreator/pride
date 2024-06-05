import React, {useState} from 'react';
import line from "../../img/line.svg"
import  s from './ElectroArchiveSeven.module.sass'
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
import ScrollToAnchor from "../AnchorComponent";

export const ElectroArchiveSeven = () => {

    return (
        <>
            <ScrollToAnchor/>

           <CustomHeader/>
            <div className={s.section1}>
                <div id={'leftStyle'} className={s.imgSection}></div>
                <div className={s.container}>
                    <div className={s.rightSection}>
                        <div className={s.goldenLineTop}></div>
                        <div className={s.goldenLineRight}></div>
                        <div className={s.goldenLineBottom}></div>
                        <div className={s.title}><img src={line} className={s.lineImgToHide} alt="line"/>Электронный архив</div>
                        <div className={s.subTitle}>Виртуальное хранилище ценной информации. Создаем его на основе сканированных образов документов вашего бумажного архива, предоставляя вам возможность удаленного доступа, быстрого поиска и выгрузки данных.</div>
                        <button className={s.standartBtnWhite}>Рассчитать ></button>
                    </div>
                </div>
            </div>
            <div className={y.digitalArchive}>
                <div className={y.container}>
                    <h2 style={{color: '#000810'}} className={y.titleRight}>
                        Электронный архив
                        <span>digital archive</span>
                    </h2>

                    <div  className={y.cloudSavers}>

                        <a   style={{cursor: 'pointer', textDecoration: 'none'}} href="#cloudSaver">
                            <div className={y.cloud}>
                                <img className={y.cloudText} src={cloudText1} alt="cloud"/>
                                <img src={cloud1} alt="img"/>
                                <div>Облачное хранение документов обеспечивает доступ к данным с любого устройства, и
                                    повышает их защиту с помощью резервных копий на удаленных серверах.
                                </div>
                            </div>
                        </a>
                        <a style={{cursor: 'pointer', textDecoration: 'none'}} href="#localSaver">
                            <div className={y.cloud}>
                                <img className={y.cloudText} src={cloudText2} alt="cloud"/>
                                <img src={cloud2} alt="img"/>
                                <div>Локальное хранилище обеспечивает безопасное хранение данных
                                    с ограниченным доступом, защищая документы от внешних угроз.
                                </div>
                            </div>
                        </a>
                    </div>


                </div>
            </div>

            <div id={'cloudSaver'}  className={s.cloudSaver}>
               <div style={{overflow: 'hidden'}} className={s.container}>
                   <h2 className={s.titleLeft}>
                       Облачное хранилище
                       <span>cloud storage</span>
                   </h2>
                   <img src={graphFirstCloud} className={s.graph} alt="graph"/>
                   <img className={s.graphShowOnMobile} src={graphsMobile} alt="graphs"/>
               </div>
            </div>
            <div  id={'localSaver'} className={s.cloudSaver}>
               <div style={{overflow: 'hidden'}} className={s.container}>
                   <h2 style={{textAlign:'center'}} className={s.titleLeft}>
                       ЛОКАЛЬНОЕ хранилище
                       <span style={{textAlign:'center', display: 'block',width: '100%'}}>LOCAL storage</span>
                   </h2>
                   <img src={localseven} className={s.graph} alt="graph"/>
                   <img className={s.graphShowOnMobileLocal} src={sevenMobileLocal} alt="graphs"/>
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
                            <div className={s.textStage}>Технические <br/> подготовительные <br/> работы</div>
                            <div className={s.number}>2</div>
                        </div>
                        <div className={s.stage}>
                            <div className={s.squreBackground}></div>
                            <div className={s.textStage}>Установка и <br/> настройка</div>
                            <div className={s.number}>3</div>
                        </div>
                        <div className={s.stage}>
                            <div className={s.squreBackground}></div>
                            <div className={s.textStage}>Тестирование  <br/> системы</div>
                            <div className={s.number}>4</div>
                        </div>
                        <div className={s.stage}>
                            <div className={s.squreBackground}></div>
                            <div className={s.textStage}> Регулярное <br/> обслуживание</div>
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
                        Мы оказываем услуги по установке и настройке цифрового архива из отсканированных копий документов вашего физического архива, позволяя вам получать удаленный доступ, эффективно осуществлять поиск необходимой информации и легко экспортировать данные. <div className={s.line}></div>
                        <p className={s.additionalText}>
                            Мы делаем акцент на индивидуальный подходе к каждому клиенту, безопасности данных и простоту дальнейшего доступа к документам.<br/><br/>
                            Специалисты нашей компании встречаются с вами для понимания ваших потребностей, обсуждаем особенности документооборота и требования к электронному архивированию. Проводится аудит имеющейся системы управления документами, если таковая существует, чтобы выявить возможные векторы улучшения и интеграции.
                        </p>
                    </div>
                </div>
            </div>
            <FooterLeaveRequest theme={'white'}/>
        </>
    );
};
