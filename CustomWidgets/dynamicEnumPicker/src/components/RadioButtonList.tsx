import { Component, ReactNode, createElement, ChangeEvent } from "react";

export interface RadioButtonListProps {
    enumValues: {enumValue: string, enumKey:string}[];
    onChange: (key: string) => void;
    disabled: boolean;
    direction: string;
    value: string;
    id: string;
}


export class RadioButtonList extends Component<RadioButtonListProps> {
    private readonly onChangeHandle = this.onChange.bind(this);

    createRadioButtonList() {
        let options: JSX.Element[] = []
        let index = 0;
        //create dropdown option for all enum values given
        this.props.enumValues.forEach((elem) => {
        options.push(
            <div className = "radio">
                <input type = "radio" id = {this.props.id + "_" + index} name = {this.props.id} value = {elem.enumKey} checked = {elem.enumKey === this.props.value}></input>
                <label htmlFor = {this.props.id + "_" + index}>{elem.enumValue}</label>
            </div>)
        index += 1;
        });
        return options;
    }

    private onChange(event: ChangeEvent<HTMLSelectElement>): void {
        this.props.onChange(event.target.value);
    }
    
    
    render(): ReactNode {
        if (this.props.direction === "horizontal") {
            return <div className = "mx-radiogroup mx-radiobuttons inline form-group">
            {this.createRadioButtonList()}
            </div>;  
        } else {
            return <div className = "mx-radiogroup mx-radiobuttons">
            {this.createRadioButtonList()}
            </div>;  
        }
        
    }
}
