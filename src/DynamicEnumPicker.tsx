import { createElement, Fragment, ReactElement } from "react";
import { DropDown } from "./components/DropDown";
import { RadioButtonList } from "./components/RadioButtonList";
import { Alert } from "./components/Alert";

import { DynamicEnumPickerContainerProps } from "../typings/DynamicEnumPickerProps";

import "./ui/DynamicEnumPicker.css";

export function DynamicEnumPicker(props: DynamicEnumPickerContainerProps): ReactElement {
    // Convert Enumvalues to list with keys and values
    const createEnumList = () => {
        const options: Array<{ enumValue: string; enumKey: string }> = [];
        props.enumValues.forEach((elem: { enumValue: { value: any }; enumKey: any }) => {
            // Convert (translatable)value to string
            const value = typeof elem.enumValue.value === "undefined" ? "" : elem.enumValue.value;
            options.push({ enumValue: value, enumKey: elem.enumKey });
        });
        return options;
    };
    const onChange = (key: string): void => {
        // If an option is chosen, set the enumeration to the correct value
        // If the key is equal to the placeholder, the enumAttribute is set to undefined (the empty option)
        const placeholder = typeof props.placeholder === "undefined" ? "" : props.placeholder.value;
        if (key === placeholder) {
            props.enumAttribute.setValue(undefined);
        } else {
            props.enumAttribute.setValue(key);
        }
    };
    const placeholder = typeof props.placeholder === "undefined" ? "" : props.placeholder.value;
    const validationFeedback = props.enumAttribute.validation;
    const value = props.enumAttribute.value || "";
    if (props.dropdownRadio === "dropdownlist") {
        // if dropdown is chosen, create Dropdown component
        return (
            <Fragment>
                <DropDown
                    enumValues={createEnumList()}
                    onChange={key => onChange(key)}
                    disabled={props.enumAttribute.readOnly}
                    placeholder={placeholder}
                    value={value}
                />
                <Alert id={props.id + "-error"}>{validationFeedback}</Alert>
            </Fragment>
        );
    } else {
        // if no dropdown is chosen, create radiobuttonlist component
        return (
            <Fragment>
                <RadioButtonList
                    enumValues={createEnumList()}
                    onChange={onChange}
                    disabled={props.enumAttribute.readOnly}
                    direction={props.direction}
                    value={value}
                    id={props.id}
                />
                <Alert id={props.id + "-error"}>{validationFeedback}</Alert>
            </Fragment>
        );
    }
}
