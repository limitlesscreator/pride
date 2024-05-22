import React from 'react';
import s from "./Main/Main.module.sass";
import logo from "../img/logo.svg";

export const FooterLeaveRequest = ({theme}) => {
    return (
        <footer>
            <div style={theme === 'white' ? {background: "white", color: 'black'} : {}} className={s.leaveRequest}>
                <div className={s.container}>
                    <h2 style={theme === 'white' ? {color: 'black'} : {}}  className={s.titleGoldScond}>
                        <div style={theme === 'white' ? {color: 'black'} : {}}  className={s.specialTextRight}>
                            Не стесняйтесь оставлять контакты, мы свяжемся и поможем выбрать услугу и рассчитать цену
                        </div>
                        Оставить заявку
                        <span>leave a request</span>
                    </h2>
                    <div  className={theme === 'white' ? s.contactFieldsBlack : s.contactFields}>
                        <div>Контактное лицо<input type="text"/></div>
                        <div>Электронная почта<input type="email"/></div>
                        <div>Телефон<input type="text"/></div>
                        <div>Организация
                            <select className={s.select}
                                    name="org" id="org">
                                <option disabled={true} value="qr"></option>
                                <option value="fiz">Физическое лицо</option>
                                <option value="yur">Юридическое лицо без НДС</option>
                                <option value="yurwithHDC">Юридическое лицо С НДС</option>
                            </select>
                        </div>
                    </div>
                    <button className={theme === 'white' ? s.standardBtnBlack : s.standardBtn} >Отправить ></button>
                </div>
            </div>
            <img src={logo} alt="logo"/>
            <div className={s.footerElems}>
                <a href="#">Услуги</a>
                <a href="#">Комплекс</a>
                <a href="#">Электронный архив</a>
            </div>
            <div className={s.hr}>
                <div className={s.contactsNumber}>
                    <p>Контакты</p>
                    <div>+7 (495) 970 97 45</div>
                    <div>info@pride-archive.ru</div>
                </div>
            </div>
            <div className={s.footerElems}>
                <a href="#">Скачать прайс</a>
                <a href="#">Расчет стоимости</a>
                <a href="#">Оставить заявку</a>
            </div>
            <div className={s.copyRight}>
                All Rights Reserved © 2024
            </div>

        </footer>
    );
};
