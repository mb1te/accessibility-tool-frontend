import React from "react";

interface SectionProps {
  name: string;
  wcag: string;
}

interface SectionState {
  name: string;
  wcag: string;
}

class CheckListSection extends React.Component<SectionProps, SectionState> {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      wcag: this.props.wcag,
    };
  }

  render() {
    return (
      <div className="check-main__section">
        <div className="check-main__title">{this.state.name}</div>
        <div className="check-main__per">
          <p>Выполнение:</p>
          <select id="per" name="per">
            <option value="1">Выполняется</option>
            <option value="2">Не выполняется</option>
            <option value="3">Не применимо</option>
          </select>
        </div>

        <div className="check-main__mist">
          <p>Источник ошибки:</p>
          <select id="mist" name="mist">
            <option value="1">Автор</option>
            <option value="2">Платформа</option>
            <option value="3">Автор и платформа</option>
            <option value="4">Не идентифицируется</option>
          </select>
        </div>

        <div className="check-main__comm">
          <p>Комментарий:</p>
          <textarea id="comm"></textarea>
        </div>

        <div className="check-main__wgac">
          <p className="check-main__title-wgac">Критерий WCAG 2.1:</p>
          <p>{this.state.wcag}</p>
        </div>

        <button className="check-main__button">OK</button>
      </div>
    );
  }
}

export default CheckListSection;
