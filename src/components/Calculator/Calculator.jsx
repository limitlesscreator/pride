import React, {useEffect, useState} from 'react';
import s from './Calculator.module.sass'
import {FooterLeaveRequest} from "../FooterLeaveRequest";
import {CustomHeader} from "../CustomHeader";

export const Calculator = () => {


    const [documentFirstInput, setDocumentFirstInput] = useState(0)
    const [documentSecondInput, setDocumentSecondInput] = useState(0)
    const [documentThirdInput, setDocumentThirdInput] = useState(0)
    const [documentFourthInput, setDocumentFourthInput] = useState(0)
    const [documentFifthInput, setDocumentFifthInput] = useState(0)
    const [documentSixthInput, setDocumentSixthInput] = useState(0)

    return (
        <>
            <CustomHeader/>

            <div className={s.section1}>
                <div className={s.container}>
                    <h2 className={s.titleGoldSecond}>
                        Расчет стоимости
                        <span>cost calculation </span>
                    </h2>
                    <h4>
                        Выберите формат услуги и примерное количество документов для получения предварительного расчета
                    </h4>

                    <div className={s.littleSubTitle}>
                        Формат услуги
                    </div>
                    <div className={s.twoCheckBox}>
                        <div>
                            <input type="checkbox"/>
                            Печать документов
                        </div>
                        <div>
                            <input type="checkbox"/>
                            Сканирование документов
                        </div>
                    </div>
                    <div className={s.calculateWindowPrintingDocuments}>
                        <div className={s.textOnTheRightSide}>
                            Печать документов
                        </div>
                        <div className={s.prevCalculation}>
                            <div className={s.titleCalculatW}>
                                Предварительный расчет
                            </div>
                            <div className={s.nameProduct}>
                                Сканирование документов
                            </div>
                            <div className={s.priceTotal}>
                                500 000 руб.
                            </div>
                            <div className={s.underPrice}>
                                Если объем ваших документов более 1 000 000 листов необходимо связаться с менеджером
                            </div>
                            <div className={s.phone}>
                                +7 (495) 970 97 45
                            </div>
                        </div>
                        <div className={s.part}>
                            <div className={s.leftLittleTitle}>
                                Количество документов
                                <div>
                                    <input value={documentFirstInput} onChange={e => {
                                        if (isFinite(e.currentTarget.value)) {
                                            setDocumentFirstInput(e.currentTarget.value)
                                        }
                                    }} className={s.inputText} type="text"/>
                                </div>
                                <div className={s.radioRelative}>
                                    <input className={s.radio}
                                           onChange={e => setDocumentFirstInput(e.currentTarget.value)}
                                           value={documentFirstInput} type="range" min={0} max={1000000}/>
                                    <div className={s.underRadio}>
                                        <div>0</div>
                                        <div> {'<'} 1000000</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br/><br/>
                        <div className={s.part}>
                            <div className={s.leftLittleTitle}>
                                A4
                                <div>
                                    <input value={documentSecondInput} onChange={e => {
                                        if (isFinite(e.currentTarget.value)) {
                                            setDocumentSecondInput(e.currentTarget.value)
                                        }
                                    }} className={s.inputText} type="text"/>
                                </div>
                                <div className={s.radioRelative}>
                                    <input className={s.radio}
                                           onChange={e => setDocumentSecondInput(e.currentTarget.value)}
                                           value={documentSecondInput} type="range" min={0} max={1000000}/>
                                    <div className={s.underRadio}>
                                        <div>0</div>
                                        <div> {'<'} 1000000</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br/><br/>
                        <div className={s.part}>
                            <div className={s.leftLittleTitle}>
                                A3
                                <div>
                                    <input value={documentThirdInput} onChange={e => {
                                        if (isFinite(e.currentTarget.value)) {
                                            setDocumentThirdInput(e.currentTarget.value)
                                        }
                                    }} className={s.inputText} type="text"/>
                                </div>
                                <div className={s.radioRelative}>
                                    <input className={s.radio}
                                           onChange={e => setDocumentThirdInput(e.currentTarget.value)}
                                           value={documentThirdInput} type="range" min={0} max={1000000}/>
                                    <div className={s.underRadio}>
                                        <div>0</div>
                                        <div> {'<'} 1000000</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br/><br/>
                        <div className={s.part}>
                            <div className={s.leftLittleTitle}>
                                A2
                                <div>
                                    <input value={documentFourthInput} onChange={e => {
                                        if (isFinite(e.currentTarget.value)) {
                                            setDocumentFourthInput(e.currentTarget.value)
                                        }
                                    }} className={s.inputText} type="text"/>
                                </div>
                                <div className={s.radioRelative}>
                                    <input className={s.radio}
                                           onChange={e => setDocumentFourthInput(e.currentTarget.value)}
                                           value={documentFourthInput} type="range" min={0} max={1000000}/>
                                    <div className={s.underRadio}>
                                        <div>0</div>
                                        <div> {'<'} 1000000</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br/><br/>
                        <div className={s.part}>
                            <div className={s.leftLittleTitle}>
                                A0
                                <div>
                                    <input value={documentFifthInput} onChange={e => {
                                        if (isFinite(e.currentTarget.value)) {
                                            setDocumentFifthInput(e.currentTarget.value)
                                        }
                                    }} className={s.inputText} type="text"/>
                                </div>
                                <div className={s.radioRelative}>
                                    <input className={s.radio}
                                           onChange={e => setDocumentFifthInput(e.currentTarget.value)}
                                           value={documentFifthInput} type="range" min={0} max={1000000}/>
                                    <div className={s.underRadio}>
                                        <div>0</div>
                                        <div> {'<'} 1000000</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br/><br/>
                        <div className={s.part}>
                            <div className={s.leftLittleTitle}>
                                A0+
                                <div>
                                    <input value={documentSixthInput} onChange={e => {
                                        if (isFinite(e.currentTarget.value)) {
                                            setDocumentSixthInput(e.currentTarget.value)
                                        }
                                    }} className={s.inputText} type="text"/>
                                </div>
                                <div className={s.radioRelative}>
                                    <input className={s.radio}
                                           onChange={e => setDocumentSixthInput(e.currentTarget.value)}
                                           value={documentSixthInput} type="range" min={0} max={1000000}/>
                                    <div className={s.underRadio}>
                                        <div>0</div>
                                        <div> {'<'} 1000000</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <FooterLeaveRequest theme={'white'}/>
        </>
    );
};
