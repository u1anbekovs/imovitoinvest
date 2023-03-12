import React from 'react';
import {NavLink} from "react-router-dom";
import {FiPhoneCall} from "react-icons/fi"
import {BsPersonCircle} from "react-icons/bs"
import {FcSearch} from "react-icons/fc"
import {MdClose} from "react-icons/md"
import {BiMenu} from "react-icons/bi"
import {CgClose} from "react-icons/cg"
import menuImg from "../img/Rectangle 50.svg"
import {useState} from "react";


const Header = () => {
    const [modal, setModal] = useState(false)
    const [click, setClick] = useState(false)
    return (
        <div id="header">

            <h1 className="menu"><BiMenu onClick={() => setClick(!click)} style={{
                display: click ? "none" : "block"
            }}/>
            </h1>

            <h1 className="menuA"><CgClose onClick={() => setClick(!click)} style={{
                display: click ? "block" : "none"
            }}/>
            </h1>

            <div className="menu-group" style={{
                display: click ? "block" : "none"
            }}>
                <div className="menu-header">
                    <h1>Инвестируй в недвижимость</h1>
                    <ul>
                        <li><a href="">Главная</a></li>
                        <li><a href="">Купить</a></li>
                        <li><a href="">О нас</a></li>
                        <li><a href="">Контакты</a></li>
                        <li><a href="">Риски</a></li>
                        <li><a href="">Сроки</a></li>
                        <li><a href="">Доходность</a></li>
                        <li><a href="">FAQ</a></li>
                    </ul>
                </div>
                <img src={menuImg} alt=""/>
            </div>
            <div className="container">
                <div className="header">

                    <h1>imovito</h1>

                    <div className="header-menu">

                        <div>
                            <input type="text" style={{
                                display: modal ? 'block' : "none",
                            }} placeholder="search"/>
                        </div>

                        <MdClose onClick={() => setModal(!modal)} style={{
                            display: modal ? "block" : "none",
                            cursor: "pointer",
                            transition: '0.5s all',
                            zIndex: '10'
                        }}/>

                        <FcSearch onClick={() => setModal(!modal)} style={{
                            display: modal ? "none" : "block",
                            cursor: "pointer",
                            transition: '0.5s all',
                        }}/>

                        <NavLink to={'/'}>Главная</NavLink>
                        <NavLink to={'/Buy'}>Купить</NavLink>
                        <NavLink to={'/About'}>О нас</NavLink>
                        <NavLink to={'/Contact'}>Контакты</NavLink>
                        <FiPhoneCall/>
                        <select name="" id="">
                            <option value="">+7 (981) 199 20 20</option>
                            <option value="">+7 (981) 199 20 20</option>
                            <option value="">+7 (981) 199 20 20</option>
                            <option value="">+7 (981) 199 20 20</option>
                            <option value="">+7 (981) 199 20 20</option>
                        </select>
                        <BsPersonCircle/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;