import React, {useState} from 'react';
import line from "../../img/line.svg"
import graphs from "../../img/graphs.svg"
import graphsMobile from "../../img/graphForMobile.svg"
import circle2 from "../../img/circle2.png"
import circle3 from "../../img/circle3.png"
import doubleCircle from "../../img/doubleCircle.png"
import s from './Three.module.sass'
import {CustomHeader} from "../CustomHeader";
import {FooterLeaveRequest} from "../FooterLeaveRequest";
import {onButtonClick} from "../../index";
import scanDocuments from "../../img/scanDocuments.pdf";

export const Three = () => {

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
                        <div className={s.title}><img src={line} className={s.lineImgToHide} alt="line"/>Опись, сверка <br/>и инвентаризация</div>
                        <div className={s.subTitle}>Производим опись и сверку документов, индексируя их по заданным параметрам и вводя атрибуты в ваш электронный архив или документооборот. Кроме того, мы составляем подробные Excel-реестры для удобного и эффективного управления вашими данными. </div>
                        <button onClick={() => onButtonClick(scanDocuments, 'Сканирование документов')} className={s.standartBtnWhite}>Скачать прайс ></button>
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
                            <div className={s.textStage}>Сверка и опись <br/> документов</div>
                            <div className={s.number}>3</div>
                        </div>
                        <div className={s.stage}>
                            <div className={s.squreBackground}></div>
                            <div className={s.textStage}>Инвентаризация <br/> документов</div>
                            <div className={s.number}>4</div>
                        </div>
                        <div className={s.stage}>
                            <div className={s.squreBackground}></div>
                            <div className={s.textStage}>Подготовка <br/> окончательного <br/> отчета</div>
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
                        Мы проводим  процесс регистрации и проверки документации. Сортируем её в соответствии с  критериями технического задания заказчика.
                        <div className={s.line}></div>
                        <p className={s.additionalText}>
                            Подготавливаем и предоставляем клиенту полный отчет о проделанной работе, включая описи, ведомости инвентаризации и рекомендации для дальнейшего обращения с документами. Проводим консультации и инструктажи для сотрудников клиента по использованию созданного электронного архива и системы документооборота. <br/> <br/>
                            Мы предлагаем также  услуги поддержки и консультаций после завершения проекта, чтобы помочь клиенту в поддержании порядка в документообороте и архивации.
                        </p>
                    </div>
                </div>
            </div>

            <FooterLeaveRequest theme={'white'}/>
        </>
    );
};
