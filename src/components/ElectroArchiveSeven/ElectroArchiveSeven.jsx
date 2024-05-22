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

export const ElectroArchiveSeven = () => {

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
                        <div className={s.title}><img src={line} alt="line"/>Электронный архив</div>
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

                    <div className={y.cloudSavers}>

                        <div className={y.cloud}>
                            <img className={y.cloudText} src={cloudText1} alt="cloud"/>
                            <img src={cloud1} alt="img"/>
                            <div>Облачное хранение документов обеспечивает доступ к данным с любого устройства, и
                                повышает их защиту с помощью резервных копий на удаленных серверах.
                            </div>
                        </div>
                        <div className={y.cloud}>
                            <img className={y.cloudText} src={cloudText2} alt="cloud"/>
                            <img src={cloud2} alt="img"/>
                            <div>Локальное хранилище обеспечивает безопасное хранение данных
                                с ограниченным доступом, защищая документы от внешних угроз.
                            </div>
                        </div>
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
            <FooterLeaveRequest theme={'white'}/>
        </>
    );
};
