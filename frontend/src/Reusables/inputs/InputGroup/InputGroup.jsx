import React from 'react'
import './InputGroup.css'
import TextField from '../text-field/text-field'

export default function InputGroup({
    label,
    children,
    theme,
    textfields,
    onchangeHandler,
}) {
    let valid = true
    textfields.map((Textfield) => {
        valid = valid && Textfield.state === 'normal'
    })

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
            }}
            className="input-group-container"
        >
            <label
                style={{
                    color: theme.textdark,
                }}
                className="field-name"
                htmlFor={label}
            >
                <div>{label}</div>
            </label>
            <div id={label} className="input-group">
                {textfields.map((textfield, idx) => (
                    <TextField
                        key={idx}
                        textfield={textfield}
                        maxWidth="100px"
                        handleInputValueChange={onchangeHandler}
                        noHelper={true}
                    />
                ))}
            </div>
            {valid ? null : (
                <div className="input-group-error">
                    {`Please provide All ${label}s`}
                </div>
            )}
        </div>
    )
}
