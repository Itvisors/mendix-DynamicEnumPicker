import { Component, ReactNode, createElement, ChangeEvent, Fragment } from "react";

export interface DropDownProps {
    enumValues: {enumValue: string, enumKey:string}[];
    onChange: (key: string) => void;
    disabled: boolean;
    placeholder?: string;
}


export class DropDown extends Component<DropDownProps> {
    private readonly onChangeHandle = this.onChange.bind(this);

    createDropdownOptions() {
        let options: JSX.Element[] = []
        //create empty dropdown option
    options.push(<option value = {this.props.placeholder}>{this.props.placeholder}</option>)
        //create dropdown option for all enum values given
        this.props.enumValues.forEach((elem) => {
            options.push(<option value = {elem.enumKey}>{elem.enumValue}</option>)
        });
        return options;
    }

    private onChange(event: ChangeEvent<HTMLSelectElement>): void {
        this.props.onChange(event.target.value);
    }
    
    
    render(): ReactNode {
        return <Fragment><select 
            className="form-control"
            onChange={this.onChangeHandle}
            disabled={this.props.disabled}
            >
            {this.createDropdownOptions()}
        </select>
    </Fragment>; 
    }
}
