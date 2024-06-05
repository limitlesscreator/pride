import React, {useState} from 'react';
import s from "./Main/Main.module.sass";
import goldArrowLeft from "../img/goldArrowLeft.svg";
import contactUs from "../img/contactUs.svg";
import {CustomModal} from "./Modal/CustomModal";
import logo from "../img/logo.svg";
import navImg from "../img/navImg.svg";
import {Link} from "react-router-dom";
import injener from '../img/injener.pdf'
import fullPrice from '../img/fullPrice.pdf'
import copyDocuments from '../img/copyDocuments.pdf'
import scanDocuments from '../img/scanDocuments.pdf'
import {onButtonClick} from "../index";
import '../App.css'



export const CustomHeader = () => {
    const [showNavBar, setShowNavBar] = useState(false)
    const [openModalLogin,setOpenModalLogin] = useState(false)
    return (
            <>
                <div className={s.sidebar}
                     style={showNavBar ? {right: '0'} : {right: '-100%'}}>
                    <div className={s.menuElems}>
                        <Link style={{textDecoration: 'none', color: 'white',}} to={'/scan-documents'} >
                            <div>Главная</div>
                        </Link>
                        <div className="dropstart">
                            <div data-bs-toggle="dropdown"
                                 aria-expanded="false">
                                <img className={s.goldArrow} src={goldArrowLeft} alt="icon"/>Услуги
                            </div>
                            <ul className="dropdown-menu hoverForMenu">
                                <Link className={s.hoverForMenu} id={'our'} to={'/scan-documents'} >Cканирование документов</Link>
                                <Link className={s.hoverForMenu} to={'/wide-format-scanning'} >Широкоформатное сканирование</Link>
                                <Link className={s.hoverForMenu} to={'/reconciliation-stocktaking'} >Опись, сверка и инвентаризация</Link>
                                <Link className={s.hoverForMenu} to={'/scanning-books'} >Сканирование книг</Link>
                                <Link className={s.hoverForMenu} to={'/non-contact-scanning'} >Бесконтактное сканирование</Link>
                                <Link className={s.hoverForMenu} to={'/electronic-archive'} >Электронный архив</Link>
                                <Link className={s.hoverForMenu} to={'/document-indexing'} >Индексация документов</Link>
                                <Link className={s.hoverForMenu} to={'/document-destruction'} >Уничтожение документов</Link>
                                <Link className={s.hoverForMenu} to={'/depositary-custody'} >Депозитарное хранение</Link>
                                <Link className={s.hoverForMenu} to={'/consulting-services'} >Консалтинговые услуги</Link>
                                <Link className={s.hoverForMenu} to={'/state-archives'} >Подготовка и сдача дел в госархив</Link>
                                <Link className={s.hoverForMenu} to={'/archive-transportation'} >Перевозка архива</Link>
                                <Link className={s.hoverForMenu} to={'/copy-documents'} >Копирование</Link>
                                <Link className={s.hoverForMenu} to={'/print-processing'} >Постпечатная обработка</Link>
                                <Link className={s.hoverForMenu} to={'/engineering-print'} >Инженерная печать</Link>
                            </ul>
                        </div>
                        <Link style={{color: 'white', textDecoration: 'none'}} to={'/range-services'}>
                            <div className="dropstart">
                                <div
                                    aria-expanded="false">
                                    Комплекс услуг
                                </div>
                            </div>
                        </Link>

                        <div className="dropstart">
                            <div data-bs-toggle="dropdown"
                                 aria-expanded="false">
                                <img className={s.goldArrow} src={goldArrowLeft} alt="icon"/>Электронный архив
                            </div>
                            <ul className="dropdown-menu">
                                <Link className={s.hoverForMenu} to={'/electronic-archive#cloudSaver'}>Облачное хранилище</Link>
                                <Link className={s.hoverForMenu} to={'/electronic-archive#localSaver'}>Локальное хранилище</Link>
                            </ul>
                        </div>
                        <div>Расчет стоимости</div>
                        <div className="dropstart">
                            <div data-bs-toggle="dropdown"
                                 aria-expanded="false">
                                <img className={s.goldArrow} src={goldArrowLeft} alt="icon"/>Скачать <br/> прайс
                            </div>
                            <ul className="dropdown-menu">
                                <a className={s.hoverForMenu} onClick={() => onButtonClick(scanDocuments, 'Сканирование документов')} href="#">Сканирование документов</a>
                                <a className={s.hoverForMenu} onClick={() => onButtonClick(injener, 'Инженерная печать')} href="#">Инженерная печать</a>
                                <a className={s.hoverForMenu} onClick={() => onButtonClick(copyDocuments, 'Копирование документов')} href="#">Копирование документов</a>
                                <a style={{width: '100%'}} className={s.hoverForMenu} onClick={() => onButtonClick(fullPrice, 'Полный прайс')} href="#">Полный прайс <br/></a>
                            </ul>
                        </div>
                    </div>
                    <div className={s.contactUs}>
                        <Link to={'#footer'} style={{textDecoration: 'none', color: 'white'}}>Оставить <br/> заявку</Link> <img className={s.imgContact} src={contactUs} alt="img"/>
                    </div>
                </div>
                <CustomModal isOpen={openModalLogin} onClose={() => {setOpenModalLogin(false)}}>
                </CustomModal>
                <div className={s.container}>
                    <header>
                        <div style={{display: "flex"}}>
                            <Link to={'/'} style={{display: 'flex', alignItems: 'center'}}><img src={logo} alt="logo"/></Link>
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
                    <nav style={{backgroundColor: 'rgba(255, 255, 255, 0.8)'}}  className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to="/">PRIDE</Link>
                            <div>
                                <button onClick={() => setOpenModalLogin(true)} className={s.login}>Войти</button>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                        aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                            </div>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <div className="navbar-nav">
                                    <li  className="nav-item">
                                        <Link to={'/'} className="nav-link" href="#">Главная</Link>
                                    </li>
                                    <li  className="nav-item">
                                        <button className={`${s.btnOwn}  dropdown-toggle`} data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                            Услуги
                                        </button>
                                        <ul  style={{height: '100%', filter: 'invert(100%)'}} className="dropdown-menu dropdown-menu-dark ">
                                            <Link style={{display: 'block'}} className={s.hoverForMenu} id={'our'} to={'/scan-documents'} >Cканирование документов</Link>
                                            <Link style={{display: 'block'}} className={s.hoverForMenu} to={'/wide-format-scanning'} >Широкоформатное сканирование</Link>
                                            <Link style={{display: 'block'}} className={s.hoverForMenu} to={'/reconciliation-stocktaking'} >Опись, сверка и инвентаризация</Link>
                                            <Link style={{display: 'block'}} className={s.hoverForMenu} to={'/scanning-books'} >Сканирование книг</Link>
                                            <Link style={{display: 'block'}} className={s.hoverForMenu} to={'/non-contact-scanning'} >Бесконтактное сканирование</Link>
                                            <Link style={{display: 'block'}} className={s.hoverForMenu} to={'/electronic-archive'} >Электронный архив</Link>
                                            <Link style={{display: 'block'}} className={s.hoverForMenu} to={'/document-indexing'} >Индексация документов</Link>
                                            <Link style={{display: 'block'}} className={s.hoverForMenu} to={'/document-destruction'} >Уничтожение документов</Link>
                                            <Link style={{display: 'block'}} className={s.hoverForMenu} to={'/depositary-custody'} >Депозитарное хранение</Link>
                                            <Link style={{display: 'block'}} className={s.hoverForMenu} to={'/consulting-services'} >Консалтинговые услуги</Link>
                                            <Link style={{display: 'block'}} className={s.hoverForMenu} to={'/state-archives'} >Подготовка и сдача дел в госархив</Link>
                                            <Link style={{display: 'block'}} className={s.hoverForMenu} to={'/archive-transportation'} >Перевозка архива</Link>
                                            <Link style={{display: 'block'}} className={s.hoverForMenu} to={'/copy-documents'} >Копирование</Link>
                                            <Link style={{display: 'block'}} className={s.hoverForMenu} to={'/print-processing'} >Постпечатная обработка</Link>
                                            <Link style={{display: 'block'}} className={s.hoverForMenu} to={'/engineering-print'} >Инженерная печать</Link>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={'/range-services'}>
                                            <button className={`${s.btnOwn} `}>
                                                Комплекс Услуг
                                            </button>
                                        </Link>

                                    </li>
                                    <li  className="nav-item">
                                        <button className={`${s.btnOwn}  dropdown-toggle`} data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                            Электронный архив
                                        </button>
                                        <ul  style={{height: '100%',filter: 'invert(100%)'}} className="dropdown-menu dropdown-menu-dark">


                                            <li><Link  style={{display: 'block'}} className={s.hoverForMenu} to={'/electronic-archive#cloudSaver'} >Облачное хранилище</Link></li>
                                            <li> <Link   style={{display: 'block'}} className={s.hoverForMenu} to={'/electronic-archive#localSaver'} >Локальное хранилище</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Рассчет стоимости</a>
                                    </li>
                                    <hr style={{height: '5px', width: '100%', background: '#000000'}}/>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Оставить заявку</a>
                                    </li>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </>
    );
};
