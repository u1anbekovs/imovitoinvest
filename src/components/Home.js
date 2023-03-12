import React from 'react';
import homeImg from "../img/Rectangle 61.svg"
import homeImg1 from "../img/Rectangle 61 (1).svg"
import homeImg2 from "../img/Rectangle 61 (2).svg"
import homeImg3 from "../img/Rectangle 61 (3).svg"
import {useState} from "react";
import {ImArrowDown} from "react-icons/im"
import {ImArrowUp} from "react-icons/im"

const Home = () => {
    const [click, setClick] = useState(false)
    return (
        <div id="home">
            <div className="container">
                <div className="home">
                    <h1>Наши лучшие инвестиционные предложения</h1>
                    <p>Мы отобрали, проверили и рассчитали прибыльность каждого объекта</p>
                    <div className="home-group">

                        <div className="home-item">
                            <img src={homeImg} alt=""/>
                            <h3>ЖК «Atlantis Deluxe»</h3>
                            <div className="home-para">
                                <div className="home-p">
                                    <p>Доходность</p>
                                    <h3>65,25%</h3>
                                </div>
                                <div className="home-p">
                                    <p>Сроки</p>
                                    <h3>22 года</h3>
                                </div>
                                <div className="home-p">
                                    <p>Риски</p>
                                    <h3>29%</h3>
                                </div>
                            </div>
                            <h2>от 33 000 000 руб.</h2>
                            <p>от 1 500 000 руб. за м2</p>
                        </div>


                        <div className="home-item">
                            <img src={homeImg1} alt=""/>
                            <h3>ЖК «Алые Паруса»</h3>
                            <div className="home-para">
                                <div className="home-p">
                                    <p>Доходность</p>
                                    <h3>65,25%</h3>
                                </div>
                                <div className="home-p">
                                    <p>Сроки</p>
                                    <h3>22 года</h3>
                                </div>
                                <div className="home-p">
                                    <p>Риски</p>
                                    <h3>29%</h3>
                                </div>
                            </div>
                            <h2>от 33 000 000 руб.</h2>
                            <p>от 1 500 000 руб. за м2</p>
                        </div>


                        <div className="home-item">
                            <img src={homeImg2} alt=""/>
                            <h3>ЖК «Снегири Эко»</h3>
                            <div className="home-para">
                                <div className="home-p">
                                    <p>Доходность</p>
                                    <h3>65,25%</h3>
                                </div>
                                <div className="home-p">
                                    <p>Сроки</p>
                                    <h3>22 года</h3>
                                </div>
                                <div className="home-p">
                                    <p>Риски</p>
                                    <h3>29%</h3>
                                </div>
                            </div>
                            <h2>от 33 000 000 руб.</h2>
                            <p>от 1 500 000 руб. за м2</p>
                        </div>


                        <div className="home-item">
                            <img src={homeImg3} alt=""/>
                            <h3>ЖК «ART-Сити»</h3>
                            <div className="home-para">
                                <div className="home-p">
                                    <p>Доходность</p>
                                    <h3>65,25%</h3>
                                </div>
                                <div className="home-p">
                                    <p>Сроки</p>
                                    <h3>22 года</h3>
                                </div>
                                <div className="home-p">
                                    <p>Риски</p>
                                    <h3>29%</h3>
                                </div>
                            </div>
                            <h2>от 33 000 000 руб.</h2>
                            <p>от 1 500 000 руб. за м2</p>
                        </div>

                    </div>





                    <div className="home-group">

                        <div className="home-item" style={{
                            display: click ? "block" : "none"
                        }}>
                            <img src={homeImg} alt=""/>
                            <h3>ЖК «Atlantis Deluxe»</h3>
                            <div className="home-para">
                                <div className="home-p">
                                    <p>Доходность</p>
                                    <h3>65,25%</h3>
                                </div>
                                <div className="home-p">
                                    <p>Сроки</p>
                                    <h3>22 года</h3>
                                </div>
                                <div className="home-p">
                                    <p>Риски</p>
                                    <h3>29%</h3>
                                </div>
                            </div>
                            <h2>от 33 000 000 руб.</h2>
                            <p>от 1 500 000 руб. за м2</p>
                        </div>


                        <div className="home-item" style={{
                            display: click ? "block" : "none"
                        }}>
                            <img src={homeImg1} alt=""/>
                            <h3>ЖК «Алые Паруса»</h3>
                            <div className="home-para">
                                <div className="home-p">
                                    <p>Доходность</p>
                                    <h3>65,25%</h3>
                                </div>
                                <div className="home-p">
                                    <p>Сроки</p>
                                    <h3>22 года</h3>
                                </div>
                                <div className="home-p">
                                    <p>Риски</p>
                                    <h3>29%</h3>
                                </div>
                            </div>
                            <h2>от 33 000 000 руб.</h2>
                            <p>от 1 500 000 руб. за м2</p>
                        </div>


                        <div className="home-item" style={{
                            display: click ? "block" : "none"
                        }}>
                            <img src={homeImg2} alt=""/>
                            <h3>ЖК «Снегири Эко»</h3>
                            <div className="home-para">
                                <div className="home-p">
                                    <p>Доходность</p>
                                    <h3>65,25%</h3>
                                </div>
                                <div className="home-p">
                                    <p>Сроки</p>
                                    <h3>22 года</h3>
                                </div>
                                <div className="home-p">
                                    <p>Риски</p>
                                    <h3>29%</h3>
                                </div>
                            </div>
                            <h2>от 33 000 000 руб.</h2>
                            <p>от 1 500 000 руб. за м2</p>
                        </div>


                        <div className="home-item" style={{
                            display: click ? "block" : "none"
                        }}>
                            <img src={homeImg3} alt=""/>
                            <h3>ЖК «ART-Сити»</h3>
                            <div className="home-para">
                                <div className="home-p">
                                    <p>Доходность</p>
                                    <h3>65,25%</h3>
                                </div>
                                <div className="home-p">
                                    <p>Сроки</p>
                                    <h3>22 года</h3>
                                </div>
                                <div className="home-p">
                                    <p>Риски</p>
                                    <h3>29%</h3>
                                </div>
                            </div>
                            <h2>от 33 000 000 руб.</h2>
                            <p>от 1 500 000 руб. за м2</p>
                        </div>

                    </div>



                    <div className="home-group">

                        <div className="home-item" style={{
                            display: click ? "block" : "none"
                        }}>
                            <img src={homeImg} alt=""/>
                            <h3>ЖК «Atlantis Deluxe»</h3>
                            <div className="home-para">
                                <div className="home-p">
                                    <p>Доходность</p>
                                    <h3>65,25%</h3>
                                </div>
                                <div className="home-p">
                                    <p>Сроки</p>
                                    <h3>22 года</h3>
                                </div>
                                <div className="home-p">
                                    <p>Риски</p>
                                    <h3>29%</h3>
                                </div>
                            </div>
                            <h2>от 33 000 000 руб.</h2>
                            <p>от 1 500 000 руб. за м2</p>
                        </div>


                        <div className="home-item" style={{
                            display: click ? "block" : "none"
                        }}>
                            <img src={homeImg1} alt=""/>
                            <h3>ЖК «Алые Паруса»</h3>
                            <div className="home-para">
                                <div className="home-p">
                                    <p>Доходность</p>
                                    <h3>65,25%</h3>
                                </div>
                                <div className="home-p">
                                    <p>Сроки</p>
                                    <h3>22 года</h3>
                                </div>
                                <div className="home-p">
                                    <p>Риски</p>
                                    <h3>29%</h3>
                                </div>
                            </div>
                            <h2>от 33 000 000 руб.</h2>
                            <p>от 1 500 000 руб. за м2</p>
                        </div>


                        <div className="home-item" style={{
                            display: click ? "block" : "none"
                        }}>
                            <img src={homeImg2} alt=""/>
                            <h3>ЖК «Снегири Эко»</h3>
                            <div className="home-para">
                                <div className="home-p">
                                    <p>Доходность</p>
                                    <h3>65,25%</h3>
                                </div>
                                <div className="home-p">
                                    <p>Сроки</p>
                                    <h3>22 года</h3>
                                </div>
                                <div className="home-p">
                                    <p>Риски</p>
                                    <h3>29%</h3>
                                </div>
                            </div>
                            <h2>от 33 000 000 руб.</h2>
                            <p>от 1 500 000 руб. за м2</p>
                        </div>


                        <div className="home-item" style={{
                            display: click ? "block" : "none"
                        }}>
                            <img src={homeImg3} alt=""/>
                            <h3>ЖК «ART-Сити»</h3>
                            <div className="home-para">
                                <div className="home-p">
                                    <p>Доходность</p>
                                    <h3>65,25%</h3>
                                </div>
                                <div className="home-p">
                                    <p>Сроки</p>
                                    <h3>22 года</h3>
                                </div>
                                <div className="home-p">
                                    <p>Риски</p>
                                    <h3>29%</h3>
                                </div>
                            </div>
                            <h2>от 33 000 000 руб.</h2>
                            <p>от 1 500 000 руб. за м2</p>
                        </div>

                    </div>
                    <div className="home-button">
                        <button className="btn-home" onClick={() => setClick(!click)} style={{
                            display: click ? "none" : "block"
                        }}>Смотреть все объекты <ImArrowDown/></button>
                        <button className="btn-home" onClick={() => setClick(!click)} style={{
                            display: click ? "block" : "none"
                        }}>Закрыть все объекты<ImArrowUp/></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;