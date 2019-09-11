import { Component, ReactNode, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";
import { DynamicEnumPickerPreviewProps } from "../typings/DynamicEnumPickerProps";

declare function require(name: string): string;

export class preview extends Component<DynamicEnumPickerPreviewProps> {
    render(): ReactNode {
        return <HelloWorldSample sampleText={this.props.sampleText} />;
    }
}

export function getPreviewCss(): string {
    return require("./ui/DynamicEnumPicker.css");
}
