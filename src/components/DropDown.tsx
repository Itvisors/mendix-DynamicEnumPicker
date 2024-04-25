import { createElement, ChangeEvent } from "react";

export interface DropDownProps {
    enumValues: { enumValue: string; enumKey: string }[];
    onChange: (key: string) => void;
    disabled: boolean;
    placeholder?: string;
    value: string;
}

export function DropDown(props: DropDownProps) {
    const createDropdownOptions = () => {
        // initialize array to store the dropdown options
        let options: JSX.Element[] = [];
        //create empty dropdown option
        options.push(<option value={props.placeholder}>{props.placeholder}</option>);
        //create dropdown option for all enum values given
        props.enumValues.forEach(elem => {
            options.push(<option value={elem.enumKey}>{elem.enumValue}</option>);
        });
        return options;
    };

    const onChange = (event: ChangeEvent<HTMLSelectElement>): void => {
        //When item is click, call onclick method and pass the enum key
        props.onChange(event.target.value);
    };

    return (
        <select className="form-control" onChange={onChange} disabled={props.disabled} value={props.value}>
            {createDropdownOptions()}
        </select>
    );
}
