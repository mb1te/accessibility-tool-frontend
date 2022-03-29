import React, { Fragment } from "react";
import change_name_img from "../assets/Change-name.png";
import data from "../assets/data.json";
import CheckButton from "./CheckButton";
import CheckListSection from "./CheckListSection";
import CheckSubbutton from "./CheckSubbutton";
import Toolbar from "./Toolbar";

interface CheckListsState {
  CheckListsDiv: Object;
  curDiv: number;
  curSubDiv: number;
  result: Object;
}

class CheckLists extends React.Component<{}, CheckListsState> {
  constructor(props) {
    super(props);

    this.state = {
      CheckListsDiv: JSON.parse(JSON.stringify(data)),
      curDiv: 0,
      curSubDiv: 0,
      result: {},
    };
  }

  handleSubmit(code, name, per, mist, comm) {
    let curResult = this.state.result;
    curResult[code] = [name, per, mist, comm];

    this.setState({ result: curResult });
  }

  save() {
    let keys = Object.keys(this.state.result);
    let table = [];
    for (let key of keys) {
      table.push([key, ...this.state.result[key]]);
    }

    let csvContent =
      "data:text/csv;charset=utf-8,%EF%BB%BF" +
      encodeURI(table.map((e) => e.join(",")).join("\n"));
    window.open(csvContent);
  }

  render() {
    const names = Object.keys(this.state.CheckListsDiv);
    const subnames = [];
    for (let i = 0; i < names.length; i++) {
      subnames.push(Object.keys(this.state.CheckListsDiv[names[i]]));
    }

    let buttons = names.map((buttonName, index) => {
      return (
        <CheckButton
          name={buttonName}
          isActive={this.state.curDiv === index}
          key={index}
          onClick={() => this.setState({ curDiv: index, curSubDiv: 0 })}
        />
      );
    });

    return (
      <main className="check-main">
        <Toolbar save={this.save.bind(this)} />
        <div className="check-main__content">
          <div className="check-main__check-lists">{buttons}</div>

          <div className="check-main__container">
            <div className="check-main__named">
              <input
                type="text"
                className="check-main__name-check"
                placeholder="Название чек-листа"
              />
              <img
                src={change_name_img}
                alt="Изменить название"
                id="check-name"
              />
            </div>

            <div className="check-main__check">
              <CheckListSection
                code={
                  this.state.CheckListsDiv[names[this.state.curDiv]][
                    subnames[this.state.curDiv][this.state.curSubDiv]
                  ].number
                }
                name={
                  this.state.CheckListsDiv[names[this.state.curDiv]][
                    subnames[this.state.curDiv][this.state.curSubDiv]
                  ].name
                }
                wcag={
                  this.state.CheckListsDiv[names[this.state.curDiv]][
                    subnames[this.state.curDiv][this.state.curSubDiv]
                  ].wcag
                }
                parentCallback={this.handleSubmit.bind(this)}
              />

              <div className="check-main__crits">
                {Object.keys(
                  this.state.CheckListsDiv[names[this.state.curDiv]]
                ).map((item, index) => {
                  return (
                    <CheckSubbutton
                      name={
                        this.state.CheckListsDiv[names[this.state.curDiv]][item]
                          .number
                      }
                      isActive={index === this.state.curSubDiv}
                      key={index}
                      onClick={() => {
                        this.setState({ curSubDiv: index });
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>

          <div className="check-main__info-page">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor.
          </div>
        </div>
      </main>
    );
  }
}

export default CheckLists;
