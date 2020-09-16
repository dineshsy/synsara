import React from 'react'
import './InputGroup.css'
import TextField from '../text-field/text-field'

export default function InputGroup({
    label,
    theme,
    textfields,
    onchangeHandler,
    rows,
    numberOfPeople,
}) {
    let valid = true
    let validFields = 0
    textfields.forEach((Textfield) => {
        valid = valid && Textfield.state === 'normal'
        validFields += Textfield.state === 'normal'
    })

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: rows === 1 ? '7.5rem' : '14rem',
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
                        maxWidth="12.5rem"
                        handleInputValueChange={onchangeHandler}
                        noHelper={true}
                    />
                ))}
            </div>
            {numberOfPeople !== validFields && numberOfPeople > 0 ? (
                <div className="input-group-error">
                    Please provide all the details for each participant
                </div>
            ) : numberOfPeople > 0 ? null : !valid ? (
                <div className="input-group-error">
                    {`Please provide All valid ${label}s`}
                </div>
            ) : null}
        </div>
    )
}
