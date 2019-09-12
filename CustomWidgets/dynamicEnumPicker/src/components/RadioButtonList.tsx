import { Component, ReactNode, createElement, MouseEvent } from "react";

export interface RadioButtonListProps {
    enumValues: {enumValue: string, enumKey:string}[];
    onClick: (key: string) => void;
    disabled: boolean;
    direction: string;
    value: string;
    id: string;
}


export class RadioButtonList extends Component<RadioButtonListProps> {
    private readonly onClickHandle = this.onClick.bind(this);

    createRadioButtonList() {
        let options: JSX.Element[] = []
        let index = 0;
        //create dropdown option for all enum values given
        this.props.enumValues.forEach((elem) => {
        options.push(
            <div className = "radio">
                <input type = "radio" id = {this.props.id + "_" + index} name = {this.props.id} value = {elem.enumKey} 
                onClick = {this.onClickHandle} checked = {elem.enumKey === this.props.value} disabled = {this.props.disabled}></input>
                <label htmlFor = {this.props.id + "_" + index}>{elem.enumValue}</label>
            </div>)
        index += 1;
        });
        return options;
    }

    private onClick(event: MouseEvent): void {
        this.props.onClick(event.target.value);
    }
    
    
    render(): ReactNode {
        if (this.props.direction === "horizontal") {
            return <div className = "mx-radiogroup mx-radiobuttons inline form-group spacing-outer-left-none">
            {this.createRadioButtonList()}
            </div>;  
        } else {
            return <div className = "mx-radiogroup mx-radiobuttons">
            {this.createRadioButtonList()}
            </div>;  
        }
        
    }
}
