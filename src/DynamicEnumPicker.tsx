import { Component, ReactNode, createElement, Fragment } from "react";
import { DropDown } from "./components/DropDown";
import { RadioButtonList } from "./components/RadioButtonList";
import { DynamicEnumPickerContainerProps } from "../typings/DynamicEnumPickerProps";

import "./ui/DynamicEnumPicker.css";
import { Alert } from "./components/Alert";

class DynamicEnumPicker extends Component<DynamicEnumPickerContainerProps> {
    private readonly onChangeHandle = this.onChange.bind(this);
    //Convert Enumvalues to list with keys and values
    private createEnumList() {
        let options: {enumValue: string, enumKey:string}[] = [];
        this.props.enumValues.forEach((elem) => {
            // Convert (translatable)value to string
            let value = typeof elem.enumValue.value === 'undefined' ? "" : elem.enumValue.value;
            options.push({"enumValue": value, "enumKey": elem.enumKey})
        });
        return options;
    }
    
    render(): ReactNode {
        // Convert (translatable)placeholder to string
        let placeholder = typeof this.props.placeholder === 'undefined' ? "" : this.props.placeholder.value;
        const validationFeedback = this.props.enumAttribute.validation;
        const value = this.props.enumAttribute.value || "";
        if (this.props.dropdownRadio === "dropdownlist") {
            //if dropdown is chosen, create Dropdown component
            return <Fragment><DropDown
                enumValues = {this.createEnumList()}
                onChange= {this.onChangeHandle}
                disabled= {this.props.enumAttribute.readOnly}
                placeholder = {placeholder}
                value = {value}
            />
            <Alert id={this.props.id + "-error"}>{validationFeedback}</Alert>
            </Fragment>; 
        } else {
            //if no dropdown is chosen, create radiobuttonlist component
            return <Fragment>
                <RadioButtonList
                enumValues = {this.createEnumList()}
                onChange= {this.onChangeHandle}
                disabled= {this.props.enumAttribute.readOnly}
                direction = {this.props.direction}
                value = {value}
                id = {this.props.id}
            />
            <Alert id={this.props.id + "-error"}>{validationFeedback}</Alert>
            </Fragment>; 
        }
    }

    private onChange(key: string): void {
        //If an option is chosen, set the enumeration to the correct value
        //If the key is equal to the placeholder, the enumAttribute is set to undefined (the empty option)
        let placeholder = typeof this.props.placeholder === 'undefined' ? "" : this.props.placeholder.value;
        if (key === placeholder) {
            this.props.enumAttribute.setValue(undefined);
        } else {
            this.props.enumAttribute.setValue(key);
        }
    }
}

export default DynamicEnumPicker;
