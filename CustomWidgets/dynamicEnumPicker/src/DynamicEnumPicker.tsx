import { Component, ReactNode, createElement, Fragment } from "react";
import { DropDown } from "./components/DropDown";
import { hot } from "react-hot-loader/root";
import { DynamicEnumPickerContainerProps } from "../typings/DynamicEnumPickerProps";

import "./ui/DynamicEnumPicker.css";
import { Alert } from "./components/Alert";

class DynamicEnumPicker extends Component<DynamicEnumPickerContainerProps> {
    private readonly onChangeHandle = this.onChange.bind(this);
    createEnumList() {
        let options: {enumValue: string, enumKey:string}[] = [];
        this.props.enumValues.forEach((elem) => {
            let value = typeof elem.enumValue.value === 'undefined' ? "" : elem.enumValue.value;
            options.push({"enumValue": value, "enumKey": elem.enumKey})
        });
        return options;
    }
    
    render(): ReactNode {
        let placeholder = typeof this.props.placeholder === 'undefined' ? "" : this.props.placeholder.value;
        const validationFeedback = this.props.enumAttribute.validation;
        return <Fragment><DropDown
            enumValues = {this.createEnumList()}
            onChange= {this.onChangeHandle}
            disabled= {this.isReadOnly()}
            placeholder = {placeholder}
        />
        <Alert id={this.props.id + "-error"}>{validationFeedback}</Alert>
        </Fragment>; 
    }

    private isReadOnly(): boolean {
        return this.props.editable === "never" || this.props.enumAttribute.readOnly;
    }

    private onChange(key: string): void {
        let placeholder = typeof this.props.placeholder === 'undefined' ? "" : this.props.placeholder.value;
        if (key === placeholder) {
            this.props.enumAttribute.setValue(undefined);
        } else {
            this.props.enumAttribute.setValue(key);
        }
    }
}

export default hot(DynamicEnumPicker);
