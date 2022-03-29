import React from "react";
import Modal from "react-modal";

function Main() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <main className="main">
      <div className="main__title">
        Экспертиза <strong className="colorize">цифровой доступности</strong>
        электронных образовательных ресурсов
      </div>

      <div className="main__cards">
        <div className="main__card">
          <button className="main__button-new" onClick={openModal}>
            Начать проверку
          </button>

          <Modal
            className="popup-fade"
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
          >
            <div className="popup-fade__popup">
              <button className="popup-fade__popup-close" onClick={closeModal}>
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 43 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="1.93934"
                    y1="41.9393"
                    x2="41.9393"
                    y2="1.93934"
                    stroke="black"
                    stroke-width="3"
                  />
                  <line
                    x1="41.9393"
                    y1="44.0607"
                    x2="1.93934"
                    y2="4.06066"
                    stroke="black"
                    stroke-width="3"
                  />
                </svg>
              </button>
              <div className="popup-fade__inputs">
                <label htmlFor="name" className="popup-fade__input">
                  Название ресурса *
                </label>
                <input
                  type="text"
                  id="name"
                  className="modal-input"
                  placeholder="Короткое название  (до 100 символов)"
                />
                <label htmlFor="url" className="popup-fade__input">
                  URL ресурса
                </label>
                <input
                  type="url"
                  id="url"
                  className="modal-input"
                  placeholder="http://"
                />
                <label htmlFor="plt" className="popup-fade__input">
                  Платформа
                </label>
                <input
                  type="text"
                  id="plt"
                  className="modal-input"
                  placeholder="Наименование (до 50 символов)"
                />
                <label htmlFor="auth" className="popup-fade__input">
                  Автор
                </label>
                <input
                  type="text"
                  id="auth"
                  className="modal-input"
                  placeholder="Фамилия И.О."
                />
                <label htmlFor="char" className="popup-fade__input">
                  Краткая характеристика ресурса
                </label>
                <textarea
                  id="char"
                  className="modal-input"
                  placeholder="Описание ресурса. Дополнительная информация (до 200 символов)"
                ></textarea>
              </div>
              <button className="popup-fade__start">Начать</button>
              <p className="popup-fade__ps">* - Обязательное поле </p>
            </div>
          </Modal>

          <svg
            width="144"
            height="2"
            viewBox="0 0 144 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 1L144 1" stroke="#17252A" stroke-width="2" />
          </svg>
          <div className="main__card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
            odit?
          </div>
        </div>
        <div className="main__card">
          <a href="/check-page">
            <button className="main__button-cont">Продолжить проверку </button>
          </a>
          <div className="main__card-name">Название чек-листа</div>
        </div>
      </div>
    </main>
  );
}

export default Main;
