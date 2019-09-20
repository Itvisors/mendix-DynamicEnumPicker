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
    //bind onchange method
    private readonly onChangeHandle = this.onChange.bind(this);

    createRadioButtonList() {
        // initialize array to store the radiobuttons
        let options: JSX.Element[] = []
        let index = 0;
        //create radiobutton for all enum values given
        this.props.enumValues.forEach((elem) => {
        options.push(
            <div className = "radio">
                <input type = "radio" id = {this.props.id + "_" + index} name = {this.props.id} value = {elem.enumKey} 
                onChange = {this.onChangeHandle} checked = {elem.enumKey === this.props.value} disabled = {this.props.disabled}></input>
                <label htmlFor = {this.props.id + "_" + index}>{elem.enumValue}</label>
            </div>)
        index += 1;
        });
        return options;
    }

    //OnChange event is triggered onClick
    private onChange(event: ChangeEvent<HTMLInputElement>): void {
        //When item is clicked, call onclick method and pass the enum key
        this.props.onChange(event.target.value);
    }
    
    
    render(): ReactNode {
        // For horizontal direction, different classes are needed 
        // Spacing-outer-left-none is needed to align the radiobuttons correctly
        if (this.props.direction === "horizontal") {
            return <div className = "mx-radiobuttons inline form-group spacing-outer-left-none">
            {this.createRadioButtonList()}
            </div>;  
        } else {
            return <div className = "mx-radiobuttons">
            {this.createRadioButtonList()}
            </div>;  
        }
        
    }
}
