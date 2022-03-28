import back_img from "../assets/Back.png";
import btn_new_img from "../assets/Btn-new.png";
import btn_open_img from "../assets/Btn-open.png";
import btn_save_img from "../assets/Btn-save.png";
import btn_stat_img from "../assets/Btn-stat.png";
import btn_info_img from "../assets/Btn-info.png";

function Toolbar() {
    return (
        <div className="check-main__buttons">
            <a href="/">
                <button className="check-main__back-btn">
                    <img src={back_img} className="btn-back-img" alt="кнопка назад"/>
                </button>
            </a>
            
            <button id="btn-new">
                <div className="check-main__btn">
                    <img src={btn_new_img} className="btn-img" alt="начать проверку"/>
                    <p>Начать проверку</p>
                </div>
            </button>
            
            <button id="btn-open">
                <div className="check-main__btn">
                    <img src={btn_open_img} className="btn-img" alt="открыть проверку"/>
                    <p>Открыть проверку</p>
                </div>
            </button>
            
            <button id="btn-save">
                <div className="check-main__btn">
                    <img src={btn_save_img} className="btn-img" alt="сохранить проверку"/>
                    <p>Сохранить проверку</p>
                </div>
            </button>
            
            <button id="btn-stat">
                <div className="check-main__btn">
                    <img src={btn_stat_img} className="btn-img" alt="статистика"/>
                    <p>Статистика</p>
                </div>
            </button>
            
            <button className="check-main__btn-generation" id="btn-generation">
                Сгенерировать <strong className="impo">отчёт</strong> 
            </button>
            
            <button id="btn-info">
                <div className="check-main__info">
                    <img src={btn_info_img} className="btn-img" alt="начать проверку"/>
                    <p>Справка</p>
                </div>
            </button>
        </div>
    )
}

export default Toolbar;