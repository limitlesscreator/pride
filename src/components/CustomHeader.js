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

                <div className={s.mobileHeader}>
                    <nav className="navbar navbar-expand-lg bg-body-tertiary">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">PRIDE</a>
                            <div>
                                <button onClick={() => setOpenModalLogin(true)} className={s.login}>Войти</button>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                        aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                            </div>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Главная</a>
                                    </li>
                                    <li className="nav-item">
                                        <button className={`${s.btnOwn}  dropdown-toggle`} data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                            Услуги
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-dark">
                                            <li><a href="">Cканирование документов</a></li>
                                            <li><a href="">Широкоформатное сканирование</a></li>
                                            <li><a href="">Опись, сверка и инвентаризация</a></li>
                                            <li><a href="">Сканирование книг</a></li>
                                            <li><a href="">Бесконтактное сканирование</a></li>
                                            <li><a href="">Электронный архив</a></li>
                                            <li><a href="">Индексация документов</a></li>
                                            <li><a href="">Уничтожение документов</a></li>
                                            <li><a href="">Депозитарное хранение</a></li>
                                            <li><a href="">Консалтинговые услуги</a></li>
                                            <li><a href="">Подготовка и сдача дел в госархив</a></li>
                                            <li><a href="">Перевозка архива</a></li>
                                            <li><a href="">Копирование</a></li>
                                            <li><a href="">Постпечатная обработка</a></li>
                                            <li><a href="">Инженерная печать</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <button className={`${s.btnOwn}  dropdown-toggle`} data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                            Комплекс Услуг
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-dark">
                                            <li><a href="">Базовый</a></li>
                                            <li><a href="">Оцифровка</a></li>
                                            <li> <a href="">Ликвидация</a></li>
                                            <li> <a href="">Переезд</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <button className={`${s.btnOwn}  dropdown-toggle`} data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                            Электронный архив
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-dark">


                                            <li><a href="">Облачное хранилище</a></li>
                                            <li> <a href="">Локальное хранилище</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Рассчет стоимости</a>
                                    </li>
                                    <hr style={{height: '5px', width: '100%', background: '#000000'}}/>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Оставить заявку</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </>
    );
};
