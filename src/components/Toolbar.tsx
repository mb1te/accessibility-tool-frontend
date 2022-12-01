import back_img from "../assets/Back.png";
import btn_new_img from "../assets/Btn-new.png";
import btn_open_img from "../assets/Btn-open.png";
import btn_save_img from "../assets/Btn-save.png";
import React, {FC} from "react";

interface ToolbarProps {
  save: () => void;
  openModal: () => void;
}

const Toolbar: FC<ToolbarProps> = ({save, openModal}) => {
  return (
      <div className="check-main__buttons">
        <div className="check-main__div">
            <a href="/">
                <button className="check-main__back-btn">
                    <img src={back_img} className="btn-back-img" alt="кнопка назад" />
                </button>
            </a>
            <button id="btn-new">
                <div className="check-main__btn">
                    <img src={btn_new_img} className="btn-img" alt="начать проверку" />
                    <p>Начать проверку</p>
                </div>
            </button>
            <button id="btn-open">
                <div className="check-main__btn">
                    <img
                        src={btn_open_img}
                        className="btn-img"
                        alt="открыть проверку"
                    />
                    <p>Открыть проверку</p>
                </div>
            </button>
            <button id="btn-save" onClick={save}>
                <div className="check-main__btn">
                    <img
                        src={btn_save_img}
                        className="btn-img"
                        alt="сохранить проверку"
                    />
                    <p>Сохранить проверку</p>
                </div>
            </button>
        </div>

        <button className="check-main__btn-generation" id="btn-generation" onClick={openModal}>
          Сгенерировать отчёт
        </button>
      </div>
    );
}

export default Toolbar;
