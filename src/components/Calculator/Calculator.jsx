import React, {useEffect, useState} from 'react';
import s from './Calculator.module.sass'
import {FooterLeaveRequest} from "../FooterLeaveRequest";
import {CustomHeader} from "../CustomHeader";

export const Calculator = () => {

    const [showDocumentsWindow, setShowDocumentsWindow] = useState(true)
    const [scanDocumentsWindow, setScanDocumentsWindow] = useState(false)



    const [preliminaryCalculationScanDoc, setPreliminaryCalculationScanDoc] = useState(0)
    const [preliminaryCalculationPechat, setPreliminaryCalculationPechat] = useState(0)



    const [scanDocSecondInput, setScanDocumentSecondInput] = useState(0)
    const [scanDocThirdInput, setScanDocumentThirdInput] = useState(0)
    const [scanDocFourthInput, setScanDocumentFourthInput] = useState(0)
    const [scanDocFifthInput, setScanDocumentFifthInput] = useState(0)
    const [scanDocSixthInput, setScanDocumentSixthInput] = useState(0)
    const [scanDocSeventhInput, setScanDocumentSeventhInput] = useState(0)
    const [scanDocEighthInput, setScanDocumentEighthInput] = useState(0)


    // pechat
    const [document1Input, setDocument1Input] = useState(0)
    const [document2Input, setDocument2Input] = useState(0)
    const [document3Input, setDocument3Input] = useState(0)
    const [document4Input, setDocument4Input] = useState(0)
    const [document5Input, setDocument5Input] = useState(0)
    const [document6Input, setDocument6Input] = useState(0)
    const [document7Input, setDocument7Input] = useState(0)
    const [document8Input, setDocument8Input] = useState(0)
    const [document9Input, setDocument9Input] = useState(0)
    const [document10Input, setDocument10Input] = useState(0)
    const [document11Input, setDocument11Input] = useState(0)
    const [document12Input, setDocument12Input] = useState(0)
    const [document13Input, setDocument13Input] = useState(0)
    const [document14Input, setDocument14Input] = useState(0)

    useEffect(() => {
        let total = 0
        if(scanDocSecondInput < 100){
            total += scanDocSecondInput * 7
        } else {
            total +=scanDocSecondInput * 2.5
        }

        if(scanDocThirdInput < 100){
            total += scanDocThirdInput * 10
        } else {
            total +=scanDocThirdInput * 6.5
        }

        if(scanDocFourthInput < 100){
            total += scanDocFourthInput * 10
        } else {
            total +=scanDocFourthInput * 4.5
        }

        if(scanDocFifthInput < 100){
            total += scanDocFifthInput * 15
        } else {
            total +=scanDocFifthInput * 12
        }

        if(scanDocSixthInput < 100){
            total += scanDocSixthInput * 35
        } else {
            total +=scanDocSixthInput * 120
        }

        if(scanDocSeventhInput < 100){
            total += scanDocSeventhInput * 60
        } else {
            total +=scanDocSeventhInput * 180
        }

        if(scanDocEighthInput < 100){
            total += scanDocEighthInput * 90
        } else {
            total +=scanDocEighthInput * 200
        }

        setPreliminaryCalculationScanDoc(total)
    },[scanDocSecondInput,scanDocThirdInput,scanDocFourthInput,scanDocFifthInput,scanDocSixthInput,scanDocSeventhInput,scanDocEighthInput])

    useEffect(() => {

        let total = 0

        total +=document1Input * 5
        total +=document2Input * 10
        total +=document3Input * 17.5
        total +=document4Input * 35
        total +=document5Input * 70
        total +=document6Input * 70
        total +=document7Input * 60
        total +=document8Input * 1.8
        total +=document9Input * 4
        total +=document10Input * 15
        total +=document11Input * 30
        total +=document12Input * 60
        total +=document13Input * 8
        total +=document14Input * 16


        setPreliminaryCalculationPechat(total)

    },[document1Input,
        document2Input,
        document3Input,
        document4Input,
        document5Input,
        document6Input,
        document7Input,
        document8Input,
        document9Input,
        document10Input,
        document11Input,
        document12Input,
        document13Input,
        document14Input,
    ])


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
                            <input checked={showDocumentsWindow}  onChange={() => setShowDocumentsWindow(!showDocumentsWindow)} type="checkbox"/>
                            Печать документов
                        </div>
                        <div>
                            <input  checked={scanDocumentsWindow}  onChange={() => setScanDocumentsWindow(!scanDocumentsWindow)} type="checkbox"/>
                            Сканирование документов
                        </div>
                    </div>
                    {showDocumentsWindow &&  <div className={s.calculateWindowPrintingDocuments}>
                        <div className={s.prevCalculationShowOnMobile}>
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
                                Если объем ваших документов более одного миллиона листов необходимо связаться с менеджером
                            </div>
                            <div className={s.phone}>
                                +7 (495) 970 97 45
                            </div>
                        </div>
                        <hr/>
                        <div className={s.textOnTheRightSide}>
                            Печать документов
                        </div>
                        <div className={s.prevCalculationPechatDoc}>
                            <div className={s.titleCalculatW}>
                                Предварительный расчет
                            </div>
                            <div className={s.nameProduct}>
                                Печать документов
                            </div>
                            <div className={s.priceTotal}>
                                {preliminaryCalculationPechat} руб.
                            </div>
                            <div className={s.underPrice}>
                                Если объем ваших документов более одного миллиона листов необходимо связаться с менеджером
                            </div>
                            <div className={s.phone}>
                                +7 (495) 970 97 45
                            </div>
                        </div>
                        <br/><br/>
                        <div className={s.part}>
                            <div className={s.leftLittleTitle}>
                                Цветная печать, А4 (210х297 мм) 1 от 5,00 руб
                                <div>
                                    <input value={document1Input} onChange={e => {
                                        if (isFinite(e.currentTarget.value)) {
                                            setDocument1Input(e.currentTarget.value)
                                        }
                                    }} className={s.inputText} type="text"/>
                                </div>
                                <div className={s.radioRelative}>
                                    <input className={s.radio}
                                           onChange={e => setDocument1Input(e.currentTarget.value)}
                                           value={document1Input} type="range" min={0} max={1000000}/>
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
                                Цветная печать, А3 (297х420 мм) 1 от 10,00 руб
                                <div>
                                    <input value={document2Input} onChange={e => {
                                        if (isFinite(e.currentTarget.value)) {
                                            setDocument2Input(e.currentTarget.value)
                                        }
                                    }} className={s.inputText} type="text"/>
                                </div>
                                <div className={s.radioRelative}>
                                    <input className={s.radio}
                                           onChange={e => setDocument2Input(e.currentTarget.value)}
                                           value={document2Input} type="range" min={0} max={1000000}/>
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
                                Цветная печать, А2 (420х594 мм) 1 от 17,50 руб

                                <div>
                                    <input value={document3Input} onChange={e => {
                                        if (isFinite(e.currentTarget.value)) {
                                            setDocument3Input(e.currentTarget.value)
                                        }
                                    }} className={s.inputText} type="text"/>
                                </div>
                                <div className={s.radioRelative}>
                                    <input className={s.radio}
                                           onChange={e => setDocument3Input(e.currentTarget.value)}
                                           value={document3Input} type="range" min={0} max={1000000}/>
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
                                Цветная печать, А1 (594х841 мм) 1 от 35,00 руб

                                <div>
                                    <input value={document4Input} onChange={e => {
                                        if (isFinite(e.currentTarget.value)) {
                                            setDocument4Input(e.currentTarget.value)
                                        }
                                    }} className={s.inputText} type="text"/>
                                </div>
                                <div className={s.radioRelative}>
                                    <input className={s.radio}
                                           onChange={e => setDocument4Input(e.currentTarget.value)}
                                           value={document4Input} type="range" min={0} max={1000000}/>
                                    <div className={s.underRadio}>
                                        <div>0</div>
                                        <div> {'<'} 1000000</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br/><br/>

                        {/*fifth 5*/}
                        <div className={s.part}>
                            <div className={s.leftLittleTitle}>
                                Цветная печать, А0 (841х1189 мм) 1 от 70,00 руб

                                <div>
                                    <input value={document5Input} onChange={e => {
                                        if (isFinite(e.currentTarget.value)) {
                                            setDocument5Input(e.currentTarget.value)
                                        }
                                    }} className={s.inputText} type="text"/>
                                </div>
                                <div className={s.radioRelative}>
                                    <input className={s.radio}
                                           onChange={e => setDocument5Input(e.currentTarget.value)}
                                           value={document5Input} type="range" min={0} max={1000000}/>
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
                                Цветная печать, 1м² (кв.м) 1 от 70,00 руб

                                <div>
                                    <input value={document6Input} onChange={e => {
                                        if (isFinite(e.currentTarget.value)) {
                                            setDocument6Input(e.currentTarget.value)
                                        }
                                    }} className={s.inputText} type="text"/>
                                </div>
                                <div className={s.radioRelative}>
                                    <input className={s.radio}
                                           onChange={e => setDocument6Input(e.currentTarget.value)}
                                           value={document6Input} type="range" min={0} max={1000000}/>
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
                                Черно белая печать, 1м² (кв.м) 1 от 60,00 руб

                                <div>
                                    <input value={document7Input} onChange={e => {
                                        if (isFinite(e.currentTarget.value)) {
                                            setDocument7Input(e.currentTarget.value)
                                        }
                                    }} className={s.inputText} type="text"/>
                                </div>
                                <div className={s.radioRelative}>
                                    <input className={s.radio}
                                           onChange={e => setDocument7Input(e.currentTarget.value)}
                                           value={document7Input} type="range" min={0} max={1000000}/>
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
                                Черно белая печать, А4 (210х297 мм) 1 от 1,80 руб

                                <div>
                                    <input value={document8Input} onChange={e => {
                                        if (isFinite(e.currentTarget.value)) {
                                            setDocument8Input(e.currentTarget.value)
                                        }
                                    }} className={s.inputText} type="text"/>
                                </div>
                                <div className={s.radioRelative}>
                                    <input className={s.radio}
                                           onChange={e => setDocument8Input(e.currentTarget.value)}
                                           value={document8Input} type="range" min={0} max={1000000}/>
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
                                Черно белая печать, А3 (297х420 мм) 1 от 4,00 руб

                                <div>
                                    <input value={document9Input} onChange={e => {
                                        if (isFinite(e.currentTarget.value)) {
                                            setDocument9Input(e.currentTarget.value)
                                        }
                                    }} className={s.inputText} type="text"/>
                                </div>
                                <div className={s.radioRelative}>
                                    <input className={s.radio}
                                           onChange={e => setDocument9Input(e.currentTarget.value)}
                                           value={document9Input} type="range" min={0} max={1000000}/>
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
                                Черно белая печать, А2 (420х594 мм) 1 от 15,00 руб

                                <div>
                                    <input value={document10Input} onChange={e => {
                                        if (isFinite(e.currentTarget.value)) {
                                            setDocument10Input(e.currentTarget.value)
                                        }
                                    }} className={s.inputText} type="text"/>
                                </div>
                                <div className={s.radioRelative}>
                                    <input className={s.radio}
                                           onChange={e => setDocument10Input(e.currentTarget.value)}
                                           value={document10Input} type="range" min={0} max={1000000}/>
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
                                Черно белая печать, А1 (594х841 мм) 1 от 30,00 руб

                                <div>
                                    <input value={document11Input} onChange={e => {
                                        if (isFinite(e.currentTarget.value)) {
                                            setDocument11Input(e.currentTarget.value)
                                        }
                                    }} className={s.inputText} type="text"/>
                                </div>
                                <div className={s.radioRelative}>
                                    <input className={s.radio}
                                           onChange={e => setDocument11Input(e.currentTarget.value)}
                                           value={document11Input} type="range" min={0} max={1000000}/>
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
                                Черно белая печать, А0 (841х1189 мм) 1 от 60,00 руб

                                <div>
                                    <input value={document12Input} onChange={e => {
                                        if (isFinite(e.currentTarget.value)) {
                                            setDocument12Input(e.currentTarget.value)
                                        }
                                    }} className={s.inputText} type="text"/>
                                </div>
                                <div className={s.radioRelative}>
                                    <input className={s.radio}
                                           onChange={e => setDocument12Input(e.currentTarget.value)}
                                           value={document12Input} type="range" min={0} max={1000000}/>
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
                                Цветная печать, А4 (210х297 мм) 1 от 8,00 руб
                                <div>
                                    <input value={document13Input} onChange={e => {
                                        if (isFinite(e.currentTarget.value)) {
                                            setDocument13Input(e.currentTarget.value)
                                        }
                                    }} className={s.inputText} type="text"/>
                                </div>
                                <div className={s.radioRelative}>
                                    <input className={s.radio}
                                           onChange={e => setDocument13Input(e.currentTarget.value)}
                                           value={document13Input} type="range" min={0} max={1000000}/>
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
                                Цветная печать, А3 (297х420 мм) 1 от 16,00 руб

                                <div>
                                    <input value={document14Input} onChange={e => {
                                        if (isFinite(e.currentTarget.value)) {
                                            setDocument14Input(e.currentTarget.value)
                                        }
                                    }} className={s.inputText} type="text"/>
                                </div>
                                <div className={s.radioRelative}>
                                    <input className={s.radio}
                                           onChange={e => setDocument14Input(e.currentTarget.value)}
                                           value={document14Input} type="range" min={0} max={1000000}/>
                                    <div className={s.underRadio}>
                                        <div>0</div>
                                        <div> {'<'} 1000000</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>}
                    {scanDocumentsWindow &&  <div className={s.calculateWindowScanDocuments}>
                        <div className={s.prevCalculationShowOnMobile}>
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
                                Если объем ваших документов более одного миллиона листов необходимо связаться с менеджером
                            </div>
                            <div className={s.phone}>
                                +7 (495) 970 97 45
                            </div>
                        </div>
                        <div style={{right: '-721px'}} className={s.textOnTheRightSide}>
                            Сканирование документов
                        </div>
                        <hr/>
                        <div className={s.prevCalculationScanDoc}>
                            <div className={s.titleCalculatW}>
                                Предварительный расчет
                            </div>
                            <div className={s.nameProduct}>
                                Сканирование документов
                            </div>
                            <div className={s.priceTotal}>
                                {preliminaryCalculationScanDoc} руб.
                            </div>
                            <div className={s.underPrice}>
                                Если объем ваших документов более одного миллиона листов необходимо связаться с менеджером
                            </div>
                            <div className={s.phone}>
                                +7 (495) 970 97 45
                            </div>
                        </div>
                        <br/><br/>
                        <div className={s.part}>
                            <div className={s.leftLittleTitle}>
                                Сканирование автоподача А4 цвет, 300dpi, PDF.
                                <div>
                                    <input value={scanDocSecondInput} onChange={e => {
                                        if (isFinite(e.currentTarget.value)) {
                                            setScanDocumentSecondInput(e.currentTarget.value)
                                        }
                                    }} className={s.inputText} type="text"/>
                                </div>
                                <div className={s.radioRelative}>
                                    <input className={s.radio}
                                           onChange={e => setScanDocumentSecondInput(e.currentTarget.value)}
                                           value={scanDocSecondInput} type="range" min={0} max={1000000}/>
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
                                Сканирование планшет А4 цвет, 300dpi, PDF.
                                <div>
                                    <input value={scanDocThirdInput} onChange={e => {
                                        if (isFinite(e.currentTarget.value)) {
                                            setScanDocumentThirdInput(e.currentTarget.value)
                                        }
                                    }} className={s.inputText} type="text"/>
                                </div>
                                <div className={s.radioRelative}>
                                    <input className={s.radio}
                                           onChange={e => setScanDocumentThirdInput(e.currentTarget.value)}
                                           value={scanDocThirdInput} type="range" min={0} max={1000000}/>
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
                                Сканирование автоподача А3 цвет, 300dpi, PDF.
                                <div>
                                    <input value={scanDocFourthInput} onChange={e => {
                                        if (isFinite(e.currentTarget.value)) {
                                            setScanDocumentFourthInput(e.currentTarget.value)
                                        }
                                    }} className={s.inputText} type="text"/>
                                </div>
                                <div className={s.radioRelative}>
                                    <input className={s.radio}
                                           onChange={e => setScanDocumentFourthInput(e.currentTarget.value)}
                                           value={scanDocFourthInput} type="range" min={0} max={1000000}/>
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
                                Сканирование планшнет А3 цвет, 300dpi, PDF.
                                <div>
                                    <input value={scanDocFifthInput} onChange={e => {
                                        if (isFinite(e.currentTarget.value)) {
                                            setScanDocumentFifthInput(e.currentTarget.value)
                                        }
                                    }} className={s.inputText} type="text"/>
                                </div>
                                <div className={s.radioRelative}>
                                    <input className={s.radio}
                                           onChange={e => setScanDocumentFifthInput(e.currentTarget.value)}
                                           value={scanDocFifthInput} type="range" min={0} max={1000000}/>
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
                                Сканирование документов формата А2, 300dpi PDF.
                                <div>
                                    <input value={scanDocSixthInput} onChange={e => {
                                        if (isFinite(e.currentTarget.value)) {
                                            setScanDocumentSixthInput(e.currentTarget.value)
                                        }
                                    }} className={s.inputText} type="text"/>
                                </div>
                                <div className={s.radioRelative}>
                                    <input className={s.radio}
                                           onChange={e => setScanDocumentSixthInput(e.currentTarget.value)}
                                           value={scanDocSixthInput} type="range" min={0} max={1000000}/>
                                    <div className={s.underRadio}>
                                        <div>0</div>
                                        <div> {'<'} 1000000</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/**/}
                        <br/><br/>
                        <div className={s.part}>
                            <div className={s.leftLittleTitle}>
                                Сканирование документов формата А1, 300dpi, PDF.
                                <div>
                                    <input value={scanDocSeventhInput} onChange={e => {
                                        if (isFinite(e.currentTarget.value)) {
                                            setScanDocumentSeventhInput(e.currentTarget.value)
                                        }
                                    }} className={s.inputText} type="text"/>
                                </div>
                                <div className={s.radioRelative}>
                                    <input className={s.radio}
                                           onChange={e => setScanDocumentSeventhInput(e.currentTarget.value)}
                                           value={scanDocSeventhInput} type="range" min={0} max={1000000}/>
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
                                Сканирование документов формата А0, 300dpi, PDF.
                                <div>
                                    <input value={scanDocEighthInput} onChange={e => {
                                        if (isFinite(e.currentTarget.value)) {
                                            setScanDocumentEighthInput(e.currentTarget.value)
                                        }
                                    }} className={s.inputText} type="text"/>
                                </div>
                                <div className={s.radioRelative}>
                                    <input className={s.radio}
                                           onChange={e => setScanDocumentEighthInput(e.currentTarget.value)}
                                           value={scanDocEighthInput} type="range" min={0} max={1000000}/>
                                    <div className={s.underRadio}>
                                        <div>0</div>
                                        <div> {'<'} 1000000</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>}

                </div>

            </div>

            <FooterLeaveRequest theme={'white'}/>
        </>
    );
};
