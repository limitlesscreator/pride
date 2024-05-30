import React, {useRef} from 'react';
import s from "./Main/Main.module.sass";
import logo from "../img/logo.svg";
import * as emailjs from "@emailjs/browser";
import {Link} from "react-router-dom";

export const FooterLeaveRequest = ({theme}) => {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_ff85wgb',"template_adphihs",form.current,'RQ4ZFzIiCnX0kau8c').then(
            (result) => {
                alert('Письмо отправлено!')
            }
        )
    }


    return (
        <footer >
            <div style={theme === 'white' ? {background: "white", color: 'black'} : {}} className={s.leaveRequest}>
                <form ref={form} onSubmit={sendEmail}>
                    <div className={s.container}>
                        <h2 style={theme === 'white' ? {color: 'black'} : {}}  className={s.titleGoldSecond}>
                            <div style={theme === 'white' ? {color: 'black'} : {}}  className={s.specialTextRight}>
                                Мы свяжемся и поможем выбрать услугу и рассчитать цену
                            </div>
                            Оставить заявку
                            <span>leave a request</span>
                        </h2>
                        <div  className={theme === 'white' ? s.contactFieldsBlack : s.contactFields}>
                            <div>Контактное лицо<input type="text" name={'contactName'}/></div>
                            <div>Электронная почта<input type="email" name={'email'}/></div>
                            <div>Телефон<input type="text" name={'phone'}/></div>
                            <div>Организация
                                <select  className={s.select}
                                        name="organization" id="org">
                                    <option disabled={true} value="qr"></option>
                                    <option value="Физическое лицо">Физическое лицо</option>
                                    <option value="Юридическое лицо без НДС">Юридическое лицо без НДС</option>
                                    <option value="Юридическое лицо С НДС">Юридическое лицо С НДС</option>
                                </select>
                            </div>
                        </div>
                        <div style={{display: "block"}} className={theme === 'white' ? s.contactFieldsBlack : s.contactFields}>
                            <div style={{margin: '0 auto'}}>Комментарий</div>
                            <textarea name="comment" id="" cols="30" rows="10"></textarea>
                        </div>


                        <button className={theme === 'white' ? s.standardBtnBlack : s.standardBtn} >Отправить ></button>
                    </div>
                </form>
            </div>
            <img src={logo} alt="logo"/>
            <div className={s.footerElems}>
                <Link to="/#services">Услуги</Link>
                <a href="#">Комплекс</a>
                <a href="#">Электронный архив</a>
            </div>
            <div className={s.hr}>
                <div className={s.contactsNumber}>
                    <p className={s.forAdapt}>Контакты</p>
                    <div>+7 (495) 970 97 45</div>
                    <div>info@pride-archive.ru</div>
                </div>
            </div>
            <div id={'footer'} className={s.footerElems}>
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
