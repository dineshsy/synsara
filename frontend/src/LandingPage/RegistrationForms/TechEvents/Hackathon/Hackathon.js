import React, { Component } from 'react'
import { FormWrapper } from '../../../../Reusables/FormWrapper'
import { InputWrapper, Label, RadioButtonWrapper } from '../../style'
import Textfield from '../../../../Reusables/inputs/text-field/text-field'
import Dropdown from '../../../../Reusables/inputs/drop-down/drop-down'
import { Button } from '../../../../Reusables/Button'
import { withTheme } from 'styled-components'
import InputGroup from '../../../../Reusables/inputs/InputGroup/InputGroup'
import arrowDownIcon from '../../../../Assets/Images/arrow-down.png'
import RadioButton from '../../../../Reusables/inputs/RadioButton/RadioButton'
import { DEPARTMENTS } from '../../../../utils/constants'
import { registerHackathonEvent } from '../../../../redux/Events/TechEvents/Actions'
import { connect } from 'react-redux'
import {
    validateTextFields,
    validateDropdowns,
    validateRadioButtons,
} from '../../../../utils/FormValidator'
import { Loader } from '../../../../Reusables/ButtonLoader'
import { sizeMaxH } from '../../../../utils/MediaQueires'

class HackathonForm extends Component {
    state = {
        people: 0,
        textfields: [
            {
                id: 'gaming-form-0',
                inputType: 'text',
                state: 'normal',
                name: 'teamname',
                label: 'Team Name',
                placeholder: 'Mavericks',
                value: '',
                readOnly: false,
            },
            {
                id: 'gaming-form-1',
                inputType: 'text',
                state: 'normal',
                name: 'collegename',
                label: 'College Name',
                placeholder: 'Sri Sairam Engineering College',
                value: '',
                readOnly: false,
            },
            {
                id: 'gaming-form-2',
                inputType: 'text',
                state: 'normal',
                name: 'name1',
                label: '',
                placeholder: 'John',
                value: '',
                readOnly: false,
            },
            {
                id: 'gaming-form-3',
                inputType: 'text',
                state: 'normal',
                name: 'name2',
                label: '',
                placeholder: 'John',
                value: '',
                readOnly: false,
            },
            {
                id: 'gaming-form-4',
                inputType: 'text',
                state: 'normal',
                name: 'name3',
                label: '',
                placeholder: 'John',
                value: '',
                readOnly: false,
            },
            {
                id: 'gaming-form-5',
                inputType: 'text',
                state: 'normal',
                name: 'name4',
                label: '',
                placeholder: 'John',
                value: '',
                readOnly: false,
            },
            {
                id: 'gaming-form-6',
                inputType: 'email',
                state: 'normal',
                name: 'email1',
                label: '',
                placeholder: 'johndoe@gmail.com',
                value: '',
                readOnly: false,
            },
            {
                id: 'gaming-form-7',
                inputType: 'email',
                state: 'normal',
                name: 'email2',
                label: '',
                placeholder: 'johndoe@gmail.com',
                value: '',
                readOnly: false,
            },
            {
                id: 'gaming-form-8',
                inputType: 'email',
                state: 'normal',
                name: 'email3',
                label: '',
                placeholder: 'johndoe@gmail.com',
                value: '',
                readOnly: false,
            },
            {
                id: 'gaming-form-9',
                inputType: 'email',
                state: 'normal',
                name: 'email4',
                label: '',
                placeholder: 'johndoe@gmail.com',
                value: '',
                readOnly: false,
            },
            {
                id: 'gaming-form-10',
                inputType: 'number',
                state: 'normal',
                name: 'phonenumber1',
                label: '',
                placeholder: '9632587412',
                value: '',
                readOnly: false,
            },
            {
                id: 'gaming-form-11',
                inputType: 'number',
                state: 'normal',
                name: 'phonenumber2',
                label: '',
                placeholder: '9632587412',
                value: '',
                readOnly: false,
            },
            {
                id: 'gaming-form-12',
                inputType: 'number',
                state: 'normal',
                name: 'phonenumber3',
                label: '',
                placeholder: '9632587412',
                value: '',
                readOnly: false,
            },
            {
                id: 'gaming-form-13',
                inputType: 'number',
                state: 'normal',
                name: 'phonenumber4',
                label: '',
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

        const [
            validatedTextfields,
            isTextFieldsValid,
            texts,
            emails,
            numbers,
        ] = validateTextFields(textfields, true)
        this.setState({
            validatedTextfields,
            people: Math.max(emails, texts, numbers),
        })
        if (emails === texts && emails === numbers && emails > 0) {
            const data = {
                players: [],
            }
            for (let index = 0; index < 4; index++) {
                if (this.state.textfields[2 + index].value.trim().length) {
                    data.players.push({
                        teamName: this.state.textfields[0].value,
                        name: this.state.textfields[2 + index].value,
                        emailId: this.state.textfields[6 + index].value,
                        collegeName: this.state.textfields[1].value,
                        mobileNumber: this.state.textfields[10].value,
                    })
                }
            }
            console.log(data)
            this.props.registerHackathonEvent(data)
        }
    }

    render() {
        const { textfields, people } = this.state
        const { theme } = this.props
        const field = this.state.textfields
        return (
            <>
                <FormWrapper formName="Hackathon">
                    <InputWrapper>
                        <Textfield
                            textfield={field[0]}
                            handleInputValueChange={this.handleInputValueChange}
                        />
                        <Textfield
                            textfield={field[1]}
                            handleInputValueChange={this.handleInputValueChange}
                        />
                        <InputGroup
                            label="Participants Name"
                            onchangeHandler={this.handleInputValueChange}
                            textfields={[
                                textfields[2],
                                textfields[3],
                                textfields[4],
                                textfields[5],
                            ]}
                            theme={theme}
                            numberOfPeople={people}
                        />
                        <InputGroup
                            label="Email ID"
                            onchangeHandler={this.handleInputValueChange}
                            textfields={[
                                textfields[6],
                                textfields[7],
                                textfields[8],
                                textfields[9],
                            ]}
                            theme={theme}
                            numberOfPeople={people}
                        />
                        <InputGroup
                            label="Phone Number"
                            onchangeHandler={this.handleInputValueChange}
                            textfields={[
                                textfields[10],
                                textfields[11],
                                textfields[12],
                                textfields[13],
                            ]}
                            theme={theme}
                            numberOfPeople={people}
                        />
                        <Button
                            onClick={this.handleFormSubmit}
                            disabled={this.props.isLoading}
                        >
                            {this.props.isLoading ? <Loader /> : 'SUBMIT'}
                        </Button>
                    </InputWrapper>
                </FormWrapper>
            </>
        )
    }
}

const mapStateToProps = ({ nonTechEvents }) => ({
    isLoading: nonTechEvents.isLoading,
    isError: nonTechEvents.isError,
    isHackathonRegistered: nonTechEvents.isHackathonRegistered,
})

const mapDispatchToProps = {
    registerHackathonEvent,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withTheme(HackathonForm))
