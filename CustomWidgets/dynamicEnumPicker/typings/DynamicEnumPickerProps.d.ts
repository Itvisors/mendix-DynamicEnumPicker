/**
 * This file was generated from DynamicEnumPicker.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Team
 */
import { CSSProperties } from "react";
import { ActionPreview } from "@mendix/pluggable-widgets-typing-generator/dist/typings";
import { ActionValue, DynamicValue, EditableValue } from "mendix";

interface CommonProps {
    id: string;
    class: string;
    style?: CSSProperties;
    tabIndex: number;
}

export interface EnumValuesType {
    enumKey: string;
    enumValue: DynamicValue<string>;
}

export type EditableEnum = "default" | "never";

export type DropdownRadioEnum = "dropdownlist" | "radiobuttonlist";

export type DirectionEnum = "horizontal" | "vertical";

export interface EnumValuesPreviewType {
    enumKey: string;
    enumValue: string;
}

export interface EnumValuesVisibilityType {
    enumKey: boolean;
    enumValue: boolean;
}

export interface DynamicEnumPickerContainerProps extends CommonProps {
    enumAttribute: EditableValue<string>;
    enumValues: EnumValuesType[];
    editable: EditableEnum;
    dropdownRadio: DropdownRadioEnum;
    direction: DirectionEnum;
    placeholder?: DynamicValue<string>;
    onChangeAction?: ActionValue;
}

export interface DynamicEnumPickerPreviewProps extends CommonProps {
    enumAttribute: string;
    enumValues: EnumValuesPreviewType[];
    editable: EditableEnum;
    dropdownRadio: DropdownRadioEnum;
    direction: DirectionEnum;
    placeholder?: string;
    onChangeAction?: ActionPreview;
}

export interface VisibilityMap {
    enumAttribute: boolean;
    enumValues: EnumValuesVisibilityType[] | boolean;
    editable: boolean;
    dropdownRadio: boolean;
    direction: boolean;
    placeholder: boolean;
    onChangeAction: boolean;
}
