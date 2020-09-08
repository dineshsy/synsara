import React, { Component } from 'react'
import { FormWrapper } from '../../../../Reusables/FormWrapper'
import { InputWrapper } from '../../style'
import Textfield from '../../../../Reusables/inputs/text-field/text-field'
import { Button } from '../../../../Reusables/Button'
class CodingForm extends Component {
    state = {
        textfields: [
            {
                id: 'gaming-form-0',
                inputType: 'text',
                state: 'normal',
                name: 'fullname',
                label: 'Full Name',
                placeholder: 'John Doe',
                value: '',
                readOnly: false,
            },
            {
                id: 'gaming-form-1',
                inputType: 'text',
                state: 'normal',
                name: 'hackerrank username',
                label: 'Hackerrank Username (Create if unavailable)',
                placeholder: 'john_30',
                value: '',
                readOnly: false,
            },
            {
                id: 'gaming-form-2',
                inputType: 'text',
                state: 'normal',
                name: 'email',
                label: 'Email ID',
                placeholder: 'johndoe@gmail.com',
                value: '',
                readOnly: false,
            },
            {
                id: 'gaming-form-4',
                inputType: 'text',
                state: 'normal',
                name: 'college name',
                label: 'College Name',
                placeholder: 'Sri Sairam Engineering College',
                value: '',
                readOnly: false,
            },
            {
                id: 'gaming-form-5',
                inputType: 'text',
                state: 'normal',
                name: 'department and year',
                label: 'Department and Year',
                placeholder: 'CSE IIIrd year',
                value: '',
                readOnly: false,
            },
            {
                id: 'gaming-form-6',
                inputType: 'text',
                state: 'normal',
                name: 'phone number',
                label: 'Phone Number',
                placeholder: '9632587412',
                value: '',
                readOnly: false,
            },
        ],
    }

    handleInputValueChange = (event) => {
        let textfields = this.state.textfields.concat()
        textfields.map((field) => {
            if (field.name === event.target.name) {
                field.value = event.target.value
            }
            return field
        })

        this.setState({
            textfields,
        })
    }

    handleFormSubmit = (event) => {
        event.preventDefault()

        let textfields = this.state.textfields.concat()
        let isValid = true

        textfields.map((field) => {
            if (!field.value.trim().length) {
                isValid = false
                field.state = 'error'
                field.hint = `Please provide ${field.name}`
            } else {
                field.state = 'normal'
                field.hint = null
            }
        })

        this.setState({ textfields })
        if (isValid) {
            const data = {
                fullName: this.state.textfields[0].value,
                email: this.state.textfields[1].value,
                gameID: this.state.textfields[2].value,
                collegeName: this.state.textfields[3].value,
                phoneNumber: this.state.textfields[4].value,
            }

            console.log(data)
            // API call to backend
        }
    }
    render() {
        return (
            <FormWrapper formName="Coding">
                <InputWrapper>
                    {this.state.textfields.map((field) => (
                        <Textfield
                            textfield={field}
                            key={field.id}
                            handleInputValueChange={this.handleInputValueChange}
                        />
                    ))}
                </InputWrapper>
                <Button onClick={this.handleFormSubmit}>SUBMIT</Button>
            </FormWrapper>
        )
    }
}

export default CodingForm
