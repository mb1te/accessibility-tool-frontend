import React from "react";

interface SectionProps {
  code: string;
  name: string;
  wcag: string;
  parentCallback: (
    code: string,
    name: string,
    per: string,
    mist: string,
    comm: string
  ) => void;
}

class CheckListSection extends React.Component<SectionProps, {}> {
  onTrigger = (event) => {
    event.preventDefault();
    this.props.parentCallback(
      this.props.code,
      this.props.name,
      event.target.per.value,
      event.target.mist.value,
      event.target.comm.value
    );
  };

  render() {
    return (
      <form className="check-main__section" onSubmit={this.onTrigger}>
        <div className="check-main__title">
          {this.props.code}. {this.props.name}
        </div>
        <div className="check-main__per">
          <p>Выполнение:</p>
          <select id="per" name="per">
            <option value="Выполняется">Выполняется</option>
            <option value="Не выполняется">Не выполняется</option>
            <option value="Не применимо">Не применимо</option>
          </select>
        </div>

        <div className="check-main__mist">
          <p>Источник ошибки:</p>
          <select id="mist" name="mist">
            <option value="Автор">Автор</option>
            <option value="Платформа">Платформа</option>
            <option value="Автор и платформа">Автор и платформа</option>
            <option value="Не идентифицируется">Не идентифицируется</option>
          </select>
        </div>

        <div className="check-main__comm">
          <p>Комментарий:</p>
          <textarea id="comm" name="comm"></textarea>
        </div>

        <div className="check-main__wgac">
          <p className="check-main__title-wgac">Критерий WCAG 2.1:</p>
          <p>{this.props.wcag}</p>
        </div>

        <button className="check-main__button" type="submit">
          OK
        </button>
      </form>
    );
  }
}

export default CheckListSection;
