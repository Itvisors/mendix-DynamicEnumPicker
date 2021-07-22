/**
 * This file was generated from DynamicEnumPicker.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { ActionValue, DynamicValue, EditableValue } from "mendix";

export interface EnumValuesType {
    enumKey: string;
    enumValue: DynamicValue<string>;
}

export type DropdownRadioEnum = "dropdownlist" | "radiobuttonlist";

export type DirectionEnum = "horizontal" | "vertical";

export interface EnumValuesPreviewType {
    enumKey: string;
    enumValue: string;
}

export interface DynamicEnumPickerContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    id: string;
    enumAttribute: EditableValue<string>;
    enumValues: EnumValuesType[];
    dropdownRadio: DropdownRadioEnum;
    direction: DirectionEnum;
    placeholder?: DynamicValue<string>;
    onChangeAction?: ActionValue;
}

export interface DynamicEnumPickerPreviewProps {
    class: string;
    style: string;
    enumAttribute: string;
    enumValues: EnumValuesPreviewType[];
    dropdownRadio: DropdownRadioEnum;
    direction: DirectionEnum;
    placeholder: string;
    onChangeAction: {} | null;
}
