import { createElement, ChangeEvent } from "react";

export interface RadioButtonListProps {
    enumValues: Array<{ enumValue: string; enumKey: string }>;
    onChange: (key: string) => void;
    disabled: boolean;
    direction: string;
    value: string;
    id: string;
}

export function RadioButtonList(props: RadioButtonListProps) {
    const createRadioButtonList = () => {
        // initialize array to store the radiobuttons
        const options: JSX.Element[] = [];
        let index = 0;
        // create radiobutton for all enum values given
        props.enumValues.forEach(elem => {
            options.push(
                <div className="radio">
                    <input
                        type="radio"
                        id={props.id + "_" + index}
                        name={props.id}
                        value={elem.enumKey}
                        onChange={onChange}
                        checked={elem.enumKey === props.value}
                        disabled={props.disabled}
                    ></input>
                    <label htmlFor={props.id + "_" + index}>{elem.enumValue}</label>
                </div>
            );
            index += 1;
        });
        return options;
    };

    // OnChange event is triggered onClick
    const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
        // When item is clicked, call onclick method and pass the enum key
        props.onChange(event.target.value);
    };

    // For horizontal direction, different classes are needed
    // Spacing-outer-left-none is needed to align the radiobuttons correctly
    if (props.direction === "horizontal") {
        return (
            <div className="mx-radiobuttons inline form-group spacing-outer-left-none">{createRadioButtonList()}</div>
        );
    } else {
        return <div className="mx-radiobuttons">{createRadioButtonList()}</div>;
    }
}
