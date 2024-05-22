import React, {useState} from 'react';
import s from "./Main/Main.module.sass";
import goldArrowLeft from "../img/goldArrowLeft.svg";
import contactUs from "../img/contactUs.svg";
import {CustomModal} from "./Modal/CustomModal";
import logo from "../img/logo.svg";
import navImg from "../img/navImg.svg";

export const CustomHeader = () => {
    const [showNavBar, setShowNavBar] = useState(false)
    const [openModalLogin,setOpenModalLogin] = useState(false)
    return (
            <>
                <div className={s.sidebar}
                     style={showNavBar ? {right: '0'} : {right: '-100%'}}>
                    <div className={s.menuElems}>
                        <div>Главная</div>
                        <div className="dropstart">
                            <div data-bs-toggle="dropdown"
                                 aria-expanded="false">
                                <img className={s.goldArrow} src={goldArrowLeft} alt="icon"/>Услуги
                            </div>
                            <ul className="dropdown-menu">
                                <a href="">Cканирование документов</a>
                                <a href="">Широкоформатное сканирование</a>
                                <a href="">Опись, сверка и инвентаризация</a>
                                <a href="">Сканирование книг</a>
                                <a href="">Бесконтактное сканирование</a>
                                <a href="">Электронный архив</a>
                                <a href="">Индексация документов</a>
                                <a href="">Уничтожение документов</a>
                                <a href="">Депозитарное хранение</a>
                                <a href="">Консалтинговые услуги</a>
                                <a href="">Подготовка и сдача дел в госархив</a>
                                <a href="">Перевозка архива</a>
                                <a href="">Копирование</a>
                                <a href="">Постпечатная обработка</a>
                                <a href="">Инженерная печать</a>
                            </ul>
                        </div>
                        <div className="dropstart">
                            <div data-bs-toggle="dropdown"
                                 aria-expanded="false">
                                <img className={s.goldArrow} src={goldArrowLeft} alt="icon"/>Комплекс услуг
                            </div>
                            <ul className="dropdown-menu">
                                <a href="">Базовый</a>
                                <a href="">Оцифровка</a>
                                <a href="">Ликвидация</a>
                                <a href="">Переезд</a>

                            </ul>
                        </div>
                        <div className="dropstart">
                            <div data-bs-toggle="dropdown"
                                 aria-expanded="false">
                                <img className={s.goldArrow} src={goldArrowLeft} alt="icon"/>Электронный архив
                            </div>
                            <ul className="dropdown-menu">
                                <a href="">Облачное хранилище</a>
                                <a href="">Локальное хранилище</a>

                            </ul>
                        </div>
                        <div>Расчет стоимости</div>
                        <div className="dropstart">
                            <div data-bs-toggle="dropdown"
                                 aria-expanded="false">
                                <img className={s.goldArrow} src={goldArrowLeft} alt="icon"/>Скачать <br/> прайс
                            </div>
                            <ul className="dropdown-menu">
                                <a href="">Сканирование документов</a>
                                <a href="">Инженерная печать</a>
                                <a href="">Копирование документов</a>

                            </ul>
                        </div>
                    </div>
                    <div className={s.contactUs}>
                        Оставить <br/> заявку <img className={s.imgContact} src={contactUs} alt="img"/>
                    </div>
                </div>
                <CustomModal isOpen={openModalLogin} onClose={() => {setOpenModalLogin(false)}}>
                </CustomModal>
                <div className={s.container}>
                    <header>
                        <div style={{display: "flex"}}>
                            <img src={logo} alt="logo"/>
                            <div className={s.flexElems}>
                                <div style={{textAlign: 'center'}}>
                                    <a className={s.number} href="tel:+84959709745">+7 (495) 970 97 45</a> <br/>
                                    <a className={s.number}
                                       href="mailto:info@pride-archive.ru">info@pride-archive.ru</a>
                                </div>
                                <button onClick={() => setOpenModalLogin(true)} className={s.login}>Войти</button>

                            </div>
                        </div>
                        <img
                            style={showNavBar ? {transform: 'rotateZ(90deg)'} : {transform: 'rotateZ(0)'}}
                            className={s.navImg} onClick={() => setShowNavBar(prev => !prev)} src={navImg}
                            alt="nav"/>
                    </header>
                </div>
            </>
    );
};
