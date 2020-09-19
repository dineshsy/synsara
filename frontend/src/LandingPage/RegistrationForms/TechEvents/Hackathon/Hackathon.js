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
import HackathonBg from './HackathonBg'
import { connect } from 'react-redux'
import {
    validateTextFields,
    validateDropdowns,
    validateRadioButtons,
} from '../../../../utils/FormValidator'
import { Loader } from '../../../../Reusables/ButtonLoader'
import { Helmet } from 'react-helmet'
import ScrollToTop from '../../../../utils/ScrollToTop'

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
                placeholder: 'Team member 1',
                value: '',
                readOnly: false,
            },
            {
                id: 'gaming-form-3',
                inputType: 'text',
                state: 'normal',
                name: 'name2',
                label: '',
                placeholder: 'Team member 2',
                value: '',
                readOnly: false,
            },
            {
                id: 'gaming-form-4',
                inputType: 'text',
                state: 'normal',
                name: 'name3',
                label: '',
                placeholder: 'Team member 3',
                value: '',
                readOnly: false,
            },
            {
                id: 'gaming-form-5',
                inputType: 'text',
                state: 'normal',
                name: 'name4',
                label: '',
                placeholder: 'Team member 4',
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
        dropdowns: [
            {
                toggle: false,
                value: '',
                field: {
                    id: 'gaming-form-6',
                    inputType: 'text',
                    state: 'normal',
                    name: 'department',
                    label: 'Department',
                    placeholder: 'Select your Department',
                    value: '',
                    imgBtn: arrowDownIcon,
                    readOnly: true,
                },
                dropdown: DEPARTMENTS.map((department, idx) => ({
                    id: `dropdown-${idx + 1}`,
                    name: department,
                    state: 'not selected',
                })),
            },
        ],
        radioButtons: [
            {
                label: 'Year',
                name: 'year',
                error: '',
                options: [
                    {
                        id: 'gaming-form-rb-0',
                        active: false,
                        label: 'I',
                    },
                    {
                        id: 'gaming-form-rb-1',
                        active: false,
                        label: 'II',
                    },
                    {
                        id: 'gaming-form-rb-2',
                        active: false,
                        label: 'III',
                    },
                    {
                        id: 'gaming-form-rb-3',
                        active: false,
                        label: 'IV',
                    },
                ],
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

    handleDropdowntoggle = (index) => {
        let dropdowns = this.state.dropdowns.concat()
        let dropdownMenu = dropdowns[index]
        dropdownMenu.toggle = !dropdownMenu.toggle

        this.setState({
            dropdowns,
        })
    }

    handleDropdownClick = (index, clickDropdown) => {
        let dropdowns = this.state.dropdowns.concat()
        let dropdownMenu = dropdowns[index]
        dropdownMenu.dropdown.forEach((dropdown) => {
            if (
                dropdown.name === clickDropdown &&
                dropdown.state !== 'selected'
            ) {
                dropdown.state = 'selected'
                dropdownMenu.value = clickDropdown
                dropdownMenu.field.value = clickDropdown
            } else {
                dropdown.state = 'not selected'
            }
        })

        this.setState({
            dropdowns,
        })

        const scope = this
        setTimeout(() => {
            scope.handleDropdowntoggle(index)
        }, 150)
    }

    handleRadioButtonClick = (index, id) => {
        const radioButtons = this.state.radioButtons.concat()
        radioButtons[index].options.forEach((option) => {
            if (option.id === id) {
                option.active = true
            } else {
                option.active = false
            }
        })

        this.setState({ radioButtons })
    }

    handleFormSubmit = (event) => {
        event.preventDefault()

        let textfields = this.state.textfields.concat()
        let dropdowns = this.state.dropdowns.concat()
        let radioButtons = this.state.radioButtons.concat()

        const [validatedDropdowns, isDropdownValid] = validateDropdowns(
            dropdowns
        )
        const [
            validatedRadioButtons,
            isRadioButtonValid,
        ] = validateRadioButtons(radioButtons)

        const [
            validatedTextfields,
            isTextFieldsValid,
            texts,
            emails,
            numbers,
            nonGrouptexts,
        ] = validateTextFields(textfields, true)
        this.setState({
            validatedTextfields,
            validatedRadioButtons,
            validatedDropdowns,
            people: Math.max(emails, texts, numbers),
        })
        if (
            emails === texts &&
            emails === numbers &&
            emails > 0 &&
            nonGrouptexts === 2 &&
            isRadioButtonValid &&
            isDropdownValid
        ) {
            var year = null
            this.state.radioButtons[0].options.forEach((option) => {
                if (option.active) year = option.label
            })
            const data = {
                teamName: this.state.textfields[0].value,
                members: [],
            }
            for (let index = 0; index < emails; index++) {
                data.members.push({
                    collegeName: this.state.textfields[1].value,
                    dept: this.state.dropdowns[0].value,
                    year,
                })
            }
            for (let index = 0, member = 0; index < 4; index++) {
                if (this.state.textfields[2 + index].value.trim().length) {
                    data.members[member] = {
                        ...data.members[member],
                        name: this.state.textfields[2 + index].value,
                    }
                    member++
                }
            }
            for (let index = 0, member = 0; index < 4; index++) {
                if (this.state.textfields[6 + index].value.trim().length) {
                    data.members[member] = {
                        ...data.members[member],
                        emailId: this.state.textfields[6 + index].value,
                    }
                    member++
                }
            }
            for (let index = 0, member = 0; index < 4; index++) {
                if (this.state.textfields[10 + index].value.trim().length) {
                    data.members[member] = {
                        ...data.members[member],
                        mobileNumber: this.state.textfields[10 + index].value,
                    }
                    member++
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
                <ScrollToTop />
                <Helmet>
                    <title>Synsara'20 - Hackathon Event</title>
                    <meta
                        name="description"
                        content="Registration form for hackathon event"
                    />
                </Helmet>
                <FormWrapper formName="Hackathon">
                    <HackathonBg />
                    <InputWrapper>
                        <em style={{ fontSize: '1.5rem', color: 'red' }}>
                            * A team must contain atleast 1 participant and a
                            maximum of 4.
                        </em>
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
                        <Dropdown
                            dropdownMenu={this.state.dropdowns[0]}
                            handleDropdowntoggle={() =>
                                this.handleDropdowntoggle(0)
                            }
                            handleDropdownClick={(name) =>
                                this.handleDropdownClick(0, name)
                            }
                        />
                        <div style={{ height: '9rem' }}>
                            <Label state="normal" size="1.5rem">
                                {this.state.radioButtons[0].label}
                            </Label>
                            <RadioButtonWrapper>
                                {this.state.radioButtons[0].options.map(
                                    (button) => (
                                        <RadioButton
                                            key={button.id}
                                            {...button}
                                            radioBtnClick={(id) =>
                                                this.handleRadioButtonClick(
                                                    0,
                                                    id
                                                )
                                            }
                                        />
                                    )
                                )}
                            </RadioButtonWrapper>
                            <Label state="error" size="1.25rem">
                                {this.state.radioButtons[0].error}
                            </Label>
                        </div>
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

const mapStateToProps = ({ techEvents }) => ({
    isLoading: techEvents.isLoading,
    isError: techEvents.isError,
    isHackathonRegistered: techEvents.isHackathonRegistered,
})

const mapDispatchToProps = {
    registerHackathonEvent,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withTheme(HackathonForm))
