import React from "react";

type InputElement = HTMLInputElement | HTMLTextAreaElement;
type InputChangeEvent = React.ChangeEvent<InputElement>;

interface TextFieldProps {
    value: string;
    onChange: (val: string) => void;
    placeholder?: string;
    autoFocus?: boolean;
    name?: string;
    type?: "email" | "password" | "text";
    textarea?: boolean;
    className?: string;
}

const TextField = React.forwardRef<InputElement, TextFieldProps>(
    ({ onChange, textarea = false, className, ...rest }, ref) => {
        const InputElement = textarea ? "textarea" : "input";
        return (
            <InputElement
                ref={ref as any}
                className={className}
                onChange={({ target: { value } }: InputChangeEvent) => onChange(value)}
                {...rest}
            />
        );
    }
);

export default TextField;
