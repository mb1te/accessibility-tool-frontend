import React, {FC} from "react";
import Modal from "react-modal";
import {Path} from "../constants/path";

const StartForm: FC = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
      <div>
          <main className="main">
            <h1>
              <div className="main__title">
                Экспертиза <strong className="colorize">цифровой доступности</strong> электронных образовательных ресурсов
              </div>
            </h1>

            <div className="main__cards">
              <button className="main__button-new" onClick={openModal}>Начать проверку</button>
              <button className="main__button-cont">Продолжить проверку</button>
            </div>
          </main>

        <Modal
            className="popup-fade"
            isOpen={modalIsOpen}
            ariaHideApp={false}
            onRequestClose={closeModal}
        >
            <div className="popup-fade__popup">
                <button className="popup-fade__popup-close" onClick={closeModal}>
                    <svg width="3vw" height="3vw" viewBox="0 0 23 26" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.89014 23.991L21.8901 1.991M21.8901 24.009L1.89014 2.00902" stroke="black"
                              stroke-width="3"/>
                    </svg>
                </button>
        <div className="popup-fade__inputs">
                    <label htmlFor="name" className="popup-fade__input">Название ресурса *</label>
                    <input type="text" id="name" className="modal-input"
                           placeholder="Короткое название  (до 100 символов)" maxLength={100} />
                    <label htmlFor="url" className="popup-fade__input">URL ресурса</label>
                    <input type="url" id="url" className="modal-input" placeholder="http://" />
                    <label htmlFor="plt" className="popup-fade__input">Платформа</label>
                    <input type="text" id="plt" className="modal-input"
                           placeholder="Наименование (до 50 символов)" maxLength={50} />
                    <label htmlFor="auth" className="popup-fade__input">Автор</label>
                    <input type="text" id="auth" className="modal-input" placeholder="Фамилия И.О." />
                    <label htmlFor="char" className="popup-fade__input">Краткая характеристика ресурса</label>
                    <textarea id="char" className="modal-input"
                              placeholder="Описание ресурса. Дополнительная информация (до 200 символов)"
                              maxLength={200} />
                </div>
                <a href={Path.check}><button className="popup-fade__start">Начать</button></a>
                <p className="popup-fade__ps">* - Обязательное поле </p>
            </div>
        </Modal>
      </div>
  )
};

export default StartForm;
