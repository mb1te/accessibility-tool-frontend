import React, { Fragment } from "react";
import change_name_img from "../assets/Change-name.png";
import data from "../assets/data.json";

interface CheckButtonProps {
    name: string,
    isActive: boolean,
    onClick: () => void
}

interface CheckButtonState {
    name: string,
    isActive: boolean,
    onClick: () => void
}

class CheckButton extends React.Component<CheckButtonProps, CheckButtonState> {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            isActive: props.isActive,
            onClick: props.onClick,
        };
    }

    render() {
        let button;
        if (this.props.isActive) {
            button = <button onClick={this.state.onClick} className="check-main__check-list check-list-active">{this.state.name}</button>
        }
        else {
            button = <button onClick={this.state.onClick} className="check-main__check-list">{this.state.name}</button>
        }

        return (
            <Fragment>{button}</Fragment>
        )
    }
}

interface CheckSubbuttonProps {
    name: string,
    isActive: boolean,
    onClick: () => void
}

interface CheckSubbuttonState {
    name: string,
    isActive: boolean,
    onClick: () => void,
}

class CheckSubbutton extends React.Component<CheckSubbuttonProps, CheckSubbuttonState> {
    constructor(props) {
        super(props);
    }

    render() {
        let subbutton;
        if (this.props.isActive) {
            subbutton = <button onClick={this.props.onClick} className="check-main__check-crit check-crit-active">{this.props.name}</button>
        }
        else {
            subbutton = <button onClick={this.props.onClick} className="check-main__check-crit">{this.props.name}</button>
        }

        return (
            <Fragment>
                {subbutton}
            </Fragment>
        )
    }
}

interface SectionProps {
    name: string,
    wcag: string,
}

interface SectionState {
    name: string,
    wcag: string,
}

class CheckListSection extends React.Component<SectionProps, SectionProps> {
    constructor (props){
        super(props);
        this.state = {
            name: this.props.name,
            wcag: this.props.wcag,
        }
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
        )
    }
}

interface CheckListsState {
    CheckListsDiv: Object,
    curDiv: number,
    curSubDiv: number,
}

class CheckLists extends React.Component<{}, CheckListsState> {
    constructor(props) {
        super(props);

        this.state = {
            CheckListsDiv: JSON.parse(JSON.stringify(data)),
            curDiv: 0,
            curSubDiv: 0,
        }
    }


    render() {
        const names = Object.keys(this.state.CheckListsDiv);
        const subnames = [];
        for (let i = 0; i < names.length; i++) {
            subnames.push(Object.keys(this.state.CheckListsDiv[names[i]]));
        }

        const curS

        console.log(this.state.CheckListsDiv[names[this.state.curDiv]], subnames[this.state.curSubDiv]);

        let buttons = names.map(
            (name, index) => {
                return <CheckButton name={name} isActive={this.state.curDiv === index} 
                key={index} onClick={() => this.setState({curDiv: index})} />
            }
        )

        return (
            <div className="check-main__content">
                <div className="check-main__check-lists">
                    {buttons}       
                </div>
                
                <div className="check-main__container">
                    <div className="check-main__named">
                        <input type="text" className="check-main__name-check" placeholder="Название чек-листа"/>
                        <img src={change_name_img} alt="Изменить название" id="check-name"/>
                    </div>
                    
                    <div className="check-main__check">
                        
                        <CheckListSection 
                            name={this.state.CheckListsDiv[names[this.state.curDiv]][subnames[this.state.curSubDiv]].name}
                            wcag={this.state.CheckListsDiv[names[this.state.curDiv]][subnames[this.state.curSubDiv]].wcag}
                        />
                    
                        <div className="check-main__crits">
                            {
                                subnames[this.state.curDiv].map(
                                    (name, index) => {
                                        return <CheckSubbutton name={name} isActive={index === this.state.curSubDiv} 
                                            key={index} onClick={() => {this.setState({curSubDiv: index})}} />
                                    }
                                )
                            }
                        </div>
                    </div>      
                </div>        
            
                <div className="check-main__info-page">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                </div>
            </div>
        )
    }
}

export default CheckLists; 