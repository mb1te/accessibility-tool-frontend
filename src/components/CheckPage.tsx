import Footer from "./Footer";
import React, {FC, Fragment, useState} from "react";
import Modal from "react-modal";
import HeaderCheck from "./HeaderCheck";
import Toolbar from "./Toolbar";
import data from "../assets/data.json";
import CheckButton from "./CheckButton";
import change_name_img from "../assets/Change-name.png";
import CheckSubbutton from "./CheckSubbutton";

const CheckPage: FC = () => {
    const [curDiv, setCurDiv] = useState(0);
    const [curSubDiv, setCurSubDiv] = useState(0);
    const [checkLists] = useState(JSON.parse(JSON.stringify(data)));
    const [resourceName, setResourceName] = useState("");

    const names = Object.keys(checkLists);
    const subnames = names.map(name => Object.keys(checkLists[name]));

    const [crit, setCrit] = useState(checkLists[names[curDiv]][subnames[curDiv][curSubDiv]]);

    const [per, setPer] = useState("");
    const [mist, setMist] = useState("");
    const [comm, setComm] = useState("");

    const defaultCritCompleted = () => {
        let res = {};
        for (let i = 0; i < names.length; i++) {
            for (let j = 0; j < subnames[i].length; j++) {
                let obj = checkLists[names[i]][subnames[i][j]];
                let curPer = localStorage.getItem(`${obj.number}/per`);
                let curMist = localStorage.getItem(`${obj.number}/mist`);
                res[obj.number] = !!curPer && !!curMist;
            }
        }
        return res;
    }
    const [critCompleted, setCritCompleted] = useState(defaultCritCompleted());

    const defaultGroupCompleted = () => {
        let res = {};
        for (let i = 0; i < names.length; i++) {
            let ans = true;
            for (let j = 0; j < subnames[i].length; j++) {
                let obj = checkLists[names[i]][subnames[i][j]];
                let curPer = localStorage.getItem(`${obj.number}/per`);
                let curMist = localStorage.getItem(`${obj.number}/mist`);
                ans = ans && !!curPer && !!curMist;
            }
            res[i] = ans;
        }
        return res;
    }
    const [groupCompleted, setGroupCompleted] = useState(defaultGroupCompleted());

    const onChange = (e) => {
        const name = e.target.name, value = e.target.value;
        localStorage.setItem(`${crit.number}/${name}`, value);
        if (name === "per") setPer(value);
        if (name === "mist") setMist(value);
        if (name === "comm") setComm(value);
        if (name === "resourceName") setResourceName(value);

        setGroupCompleted(defaultGroupCompleted());
        setCritCompleted(defaultCritCompleted());
    };

    const save = () => {
        let res = {};
        for (let i = 0; i < names.length; i++) {
            for (let j = 0; j < subnames[i].length; j++) {
                let obj = checkLists[names[i]][subnames[i][j]];
                res[obj.number] = [
                    localStorage.getItem(`${obj.number}/per`),
                    localStorage.getItem(`${obj.number}/mist`),
                    localStorage.getItem(`${obj.number}/comm`),
                ]
            }
        }
        let keys = Object.keys(res);
        let table = [];
        for (let key of keys) {
            table.push([key, ...res[key]]);
        }

        let csvContent =
            "data:text/csv;charset=utf-8,%EF%BB%BF" +
            encodeURI(table.map((e) => e.join(",")).join("\n"));
        window.open(csvContent);
    };

    const loadForm = (code) => {
        const per = localStorage.getItem(`${code}/per`);
        const mist = localStorage.getItem(`${code}/mist`);
        const comm = localStorage.getItem(`${code}/comm`);
        setPer(per || "");
        setMist(mist || "");
        setComm(comm || "");
    }

    const [isOpen, setIsOpen] = useState(false);
    const closeModal = () => setIsOpen(false);
    const openModal = () => setIsOpen(true);

    const [checklistCommon, setChecklistCommon] = useState(false);
    const [checklistMainContent, setChecklistMainContent] = useState(false);
    const [checklistMedia, setChecklistMedia] = useState(false);
    const [checklistTests, setChecklistTests] = useState(false);
    const [checklistSimulations, setChecklistSimulations] = useState(false);
    const [checklistMath, setChecklistMath] = useState(false);
    const [checklistProg, setChecklistProg] = useState(false);
    const [errorSource, setErrorSource] = useState(false);
    const [executedYes, setExecutedYes] = useState(false);
    const [executedFalse, setExecutedFalse] = useState(false);
    const [executedCant, setExecutedCant] = useState(false);
    const [wcagSuccess, setWcagSuccess] = useState(false);
    const [wcagLvl, setWcagLvl] = useState(false);
    const [wcagDesc, setWcagDesc] = useState(false);

    return (
        <Fragment>
            <HeaderCheck />
            <main className="check-main">
                <Toolbar save={() => save()} openModal={() => openModal()} />
                <div className="check-main__content">
                    <div className="check-main__check-lists">
                        {names.map((name, idx) => {
                            return <CheckButton
                                key={idx}
                                name={name}
                                isActive={curDiv === idx}
                                isCompleted={groupCompleted[idx]}
                                onClick={() => {
                                    setCurDiv(idx);
                                    setCurSubDiv(0);
                                    loadForm(checkLists[names[idx]][subnames[idx][0]].number);
                                    setCrit(checkLists[names[idx]][subnames[idx][0]]);
                                }}
                            />
                        })}
                    </div>
                    <div className="check-main__container">
                        <div className="check-main__named">
                            <input
                                type="text"
                                name="resourceName"
                                value={resourceName}
                                onChange={onChange}
                                className="check-main__name-check"
                                placeholder="Наименование ресурса"
                            />
                            <img
                                src={change_name_img}
                                alt="Изменить название"
                                id="check-name"
                            />
                        </div>
                        <div className="check-main__check">
                            <div className="check-main__section">
                                    <h1>
                                        <div className="check-main__title"> {crit.number} {crit.name} </div>
                                    </h1>
                                    <h2>
                                        <div className="check-main__per">
                                            <p>Выполнение * :</p>
                                            <select id="per" name="per" onChange={onChange} value={per}>
                                                <option value=""></option>
                                                <option value="Выполняется">Выполняется</option>
                                                <option value="Не выполняется">Не выполняется</option>
                                                <option value="Не применимо">Не применимо</option>
                                            </select>
                                        </div>
                                    </h2>

                                    <h2>
                                        <div className="check-main__mist"><p>Источник ошибки * :</p>
                                            <select id="mist" name="mist" value={mist} onChange={onChange}>
                                                <option value=""></option>
                                                <option value="Автор">Автор</option>
                                                <option value="Платформа">Платформа</option>
                                                <option value="Автор и платформа">Автор и платформа</option>
                                                <option value="Не идентифицируется">Не идентифицируется</option>
                                            </select>
                                        </div>
                                    </h2>

                                    <div className="check-main__comm">
                                        <h3><p>Комментарий:</p></h3>
                                        <textarea id="comm" name="comm" value={comm} onChange={onChange}></textarea>
                                    </div>

                                    <div className="check-main__wgac">
                                        <p className="check-main__title-wgac">Критерий WCAG 2.1:</p>
                                        <p>{crit.wcag} {crit.description}</p>
                                    </div>
                            </div>

                            <div className="check-main__crits">
                                {
                                    Object.keys(checkLists[names[curDiv]]).map((val, idx) => {
                                        return (
                                            <CheckSubbutton
                                                name={checkLists[names[curDiv]][val].number}
                                                isActive={idx === curSubDiv}
                                                isCompleted={critCompleted[checkLists[names[curDiv]][val].number]}
                                                key={idx}
                                                onClick={() => {
                                                    setCurSubDiv(idx);
                                                    loadForm(checkLists[names[curDiv]][val].number);
                                                    setCrit(checkLists[names[curDiv]][val]);
                                                }}
                                            />
                                        );
                                    })}
                            </div>
                        </div>
                    </div>
                </div>
                <Modal className="check-popup-fade" isOpen={isOpen} onRequestClose={closeModal} ariaHideApp={false}>
                    <div className="check-popup-fade__popup">
                        <button className="check-popup-fade__popup-close" onClick={closeModal}>
                            <svg width="3vw" height="3vw" viewBox="0 0 43 46" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <line x1="1.93934" y1="41.9393" x2="41.9393" y2="1.93934" stroke="black"
                                      strokeWidth="5"/>
                                <line x1="41.9393" y1="44.0607" x2="1.93934" y2="4.06066" stroke="black"
                                      strokeWidth="5"/>
                            </svg>
                        </button>
                        <div className="check-popup-fade__title">Выберите поля для отчёта</div>
                        <div className="check-popup-fade__content">
                            <div className="check-popup-fade__check-lists">
                                <p className="check-popup-fade__check-lists-title">Чек-листы</p>
                                <div className="check-popup-fade__check-container">
                                    <div className="cb-container">
                                        <input type="checkbox" id="cb-general" name="general" />
                                        <label htmlFor="general">Общая доступность</label>
                                    </div>
                                    <div className="cb-container">
                                        <input type="checkbox" id="cb-basic" name="basic" />
                                        <label htmlFor="basic">Доступность основного контента</label>
                                    </div>
                                    <div className="cb-container">
                                        <input type="checkbox" id="cb-media" name="media" />
                                        <label htmlFor="media">Медиа</label>
                                    </div>
                                    <div className="cb-container">
                                        <input type="checkbox" id="cb-tests" name="tests" />
                                        <label htmlFor="tests">Тесты</label>
                                    </div>
                                    <div className="cb-container">
                                        <input type="checkbox" id="cb-simul" name="simul" />
                                        <label htmlFor="simul">Симуляции</label>
                                    </div>
                                    <div className="cb-container">
                                        <input type="checkbox" id="cb-mathn" name="mathn" />
                                        <label htmlFor="mathn">Математическая нотация</label>
                                    </div>
                                    <div className="cb-container">
                                        <input type="checkbox" id="cb-progk" name="progk" />
                                        <label htmlFor="progk">Программный код</label>
                                    </div>
                                </div>
                            </div>
                            <div className="check-popup-fade__smist">
                                <label htmlFor="sourmist">Источник ошибки</label>
                                <input type="checkbox" id="cb-sourmist" name="sourmist" />
                            </div>
                            <div className="check-popup-fade__perform">
                                <p className="check-popup-fade__perform-title">Выполнение</p>
                                <div className="check-popup-fade__check-container">
                                    <div className="cb-container">
                                        <input type="checkbox" id="cb-nperform" name="nperform" />
                                        <label htmlFor="nperform">Невыполненные</label>
                                    </div>
                                    <div className="cb-container">
                                        <input type="checkbox" id="cb-perform" name="perform" />
                                        <label htmlFor="perform">Выполненные</label>
                                    </div>
                                    <div className="cb-container">
                                        <input type="checkbox" id="cb-applic" name="applic" />
                                        <label htmlFor="applic">Не применимые</label>
                                    </div>
                                </div>
                            </div>
                            <div className="check-popup-fade__wgac">
                                <p className="check-popup-fade__wgac-title">WGAC 2.1</p>
                                <div className="check-popup-fade__check-container">
                                    <div className="cb-container">
                                        <input type="checkbox" id="cb-crit" name="crit" />
                                        <label htmlFor="crit">Критерий успеха</label>
                                    </div>
                                    <div className="cb-container">
                                        <input type="checkbox" id="cb-confor" name="confor" />
                                        <label htmlFor="confor">Уровень соответствия</label>
                                    </div>
                                    <div className="cb-container">
                                        <input type="checkbox" id="cb-decod" name="decod" />
                                        <label htmlFor="decod">Расшифровка критерия</label>
                                    </div>
                                </div>
                            </div>
                            <div className="check-popup-fade__comm">
                                <label htmlFor="comm">Комментарии эксперта</label>
                                <input type="checkbox" id="cb-comm" name="comm" />
                            </div>
                            <div className="check-popup-fade__conclus">
                                <label htmlFor="conclus">Итоговое заключение эксперта</label>
                                <input type="checkbox" id="cb-conclus" name="conclus" />
                            </div>
                        </div>
                        <button className="check-popup-fade__ok">OK</button>
                    </div>
                </Modal>
            </main>
            <Footer />
        </Fragment>
    );
}

export default CheckPage;
