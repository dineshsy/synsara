import React, { Component } from 'react'
import { FormWrapper } from '../../../../Reusables/FormWrapper'
import { InputWrapper } from '../../style'
import Textfield from '../../../../Reusables/inputs/text-field/text-field'
import { Button } from '../../../../Reusables/Button'
import GamingFormBg from './GamingFormBg'
import { withTheme } from 'styled-components'
import InputGroup from '../../../../Reusables/inputs/InputGroup/InputGroup'

class GamingForm extends Component {
    state = {
        textfields: [
            {
                id: 'gaming-form-0',
                inputType: 'text',
                state: 'normal',
                name: 'teamleader',
                label: 'Team Leader Name',
                placeholder: 'John',
                value: '',
                readOnly: false,
            },
            {
                id: 'gaming-form-1',
                inputType: 'text',
                state: 'normal',
                name: 'email1',
                label: '',
                placeholder: 'johndoe@gmail.com',
                value: '',
                readOnly: false,
            },
            {
                id: 'gaming-form-2',
                inputType: 'text',
                state: 'normal',
                name: 'email2',
                label: '',
                placeholder: 'johndoe@gmail.com',
                value: '',
                readOnly: false,
            },
            {
                id: 'gaming-form-3',
                inputType: 'text',
                state: 'normal',
                name: 'email3',
                label: '',
                placeholder: 'johndoe@gmail.com',
                value: '',
                readOnly: false,
            },
            {
                id: 'gaming-form-4',
                inputType: 'text',
                state: 'normal',
                name: 'email4',
                label: '',
                placeholder: 'johndoe@gmail.com',
                value: '',
                readOnly: false,
            },
            {
                id: 'gaming-form-5',
                inputType: 'text',
                state: 'normal',
                name: 'gameid1',
                label: '',
                placeholder: 'Game ID',
                value: '',
                readOnly: false,
            },
            {
                id: 'gaming-form-6',
                inputType: 'text',
                state: 'normal',
                name: 'gameid2',
                label: '',
                placeholder: 'Game ID',
                value: '',
                readOnly: false,
            },
            {
                id: 'gaming-form-7',
                inputType: 'text',
                state: 'normal',
                name: 'gameid3',
                label: '',
                placeholder: 'Game ID',
                value: '',
                readOnly: false,
            },
            {
                id: 'gaming-form-8',
                inputType: 'text',
                state: 'normal',
                name: 'gameid4',
                label: '',
                placeholder: 'Game ID',
                value: '',
                readOnly: false,
            },
            {
                id: 'gaming-form-3',
                inputType: 'text',
                state: 'normal',
                name: 'college name',
                label: 'College Name',
                placeholder: 'Sri Sairam Engineering College',
                value: '',
                readOnly: false,
            },
            {
                id: 'gaming-form-4',
                inputType: 'text',
                state: 'normal',
                name: 'department and year',
                label: 'Department and Year',
                placeholder: 'CSE IIIrd year',
                value: '',
                readOnly: false,
            },
            {
                id: 'gaming-form-5',
                inputType: 'integer',
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
                field.hint = `Please provide ${field.label}`
            } else {
                field.state = 'normal'
                field.hint = null
            }
            return null
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
        const { textfields } = this.state
        const { theme } = this.props
        return (
            <>
                <FormWrapper formName="Gaming">
                    <GamingFormBg />
                    <InputWrapper>
                        <Textfield
                            textfield={textfields[0]}
                            handleInputValueChange={this.handleInputValueChange}
                            maxWidth="250px"
                        />

                        <InputGroup
                            label="Email"
                            theme={theme}
                            textfields={[
                                textfields[1],
                                textfields[2],
                                textfields[3],
                                textfields[4],
                            ]}
                            onchangeHandler={this.handleInputValueChange}
                        />
                        <InputGroup
                            label="Game ID"
                            theme={theme}
                            textfields={[
                                textfields[5],
                                textfields[6],
                                textfields[7],
                                textfields[8],
                            ]}
                            onchangeHandler={this.handleInputValueChange}
                        />
                        <Textfield
                            textfield={textfields[9]}
                            handleInputValueChange={this.handleInputValueChange}
                            maxWidth="250px"
                        />
                        <Textfield
                            textfield={textfields[10]}
                            handleInputValueChange={this.handleInputValueChange}
                            maxWidth="250px"
                        />
                        <Textfield
                            textfield={textfields[11]}
                            handleInputValueChange={this.handleInputValueChange}
                            maxWidth="250px"
                        />
                    </InputWrapper>
                    <Button onClick={this.handleFormSubmit}>SUBMIT</Button>
                </FormWrapper>
            </>
        )
    }
}

export default withTheme(GamingForm)
