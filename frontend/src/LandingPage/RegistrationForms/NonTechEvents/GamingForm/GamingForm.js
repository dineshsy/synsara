import React, { Component } from 'react'
import { FormWrapper } from '../../../../Reusables/FormWrapper'
import { InputWrapper, Label, RadioButtonWrapper } from '../../style'
import Textfield from '../../../../Reusables/inputs/text-field/text-field'
import Dropdown from '../../../../Reusables/inputs/drop-down/drop-down'
import { Button } from '../../../../Reusables/Button'
import GamingFormBg from './GamingFormBg'
import { withTheme } from 'styled-components'
import InputGroup from '../../../../Reusables/inputs/InputGroup/InputGroup'
import arrowDownIcon from '../../../../Assets/Images/arrow-down.png'
import RadioButton from '../../../../Reusables/inputs/RadioButton/RadioButton'
import { DEPARTMENTS } from '../../../../utils/constants'
import { registerGamingEvent } from '../../../../redux/Events/NonTechEvents/Actions'
import { connect } from 'react-redux'
import {
    validateTextFields,
    validateDropdowns,
    validateRadioButtons,
} from '../../../../utils/FormValidator'
import { Loader } from '../../../../Reusables/ButtonLoader'
import { Helmet } from 'react-helmet'
import ScrollToTop from '../../../../utils/ScrollToTop'

class GamingForm extends Component {
    state = {
        textfields: [
            {
                id: 'gaming-form-0',
                inputType: 'text',
                state: 'normal',
                name: 'name1',
                label: '',
                placeholder: 'Player 1',
                value: '',
                readOnly: false,
            },
            {
                id: 'gaming-form-0',
                inputType: 'text',
                state: 'normal',
                name: 'name2',
                label: '',
                placeholder: 'Player 2',
                value: '',
                readOnly: false,
            },
            {
                id: 'gaming-form-0',
                inputType: 'text',
                state: 'normal',
                name: 'name3',
                label: '',
                placeholder: 'Player 3',
                value: '',
                readOnly: false,
            },
            {
                id: 'gaming-form-0',
                inputType: 'text',
                state: 'normal',
                name: 'name4',
                label: '',
                placeholder: 'Player 4',
                value: '',
                readOnly: false,
            },
            {
                id: 'gaming-form-1',
                inputType: 'email',
                state: 'normal',
                name: 'email1',
                label: '',
                placeholder: 'johndoe@gmail.com',
                value: '',
                readOnly: false,
            },
            {
                id: 'gaming-form-2',
                inputType: 'email',
                state: 'normal',
                name: 'email2',
                label: '',
                placeholder: 'johndoe@gmail.com',
                value: '',
                readOnly: false,
            },
            {
                id: 'gaming-form-3',
                inputType: 'email',
                state: 'normal',
                name: 'email3',
                label: '',
                placeholder: 'johndoe@gmail.com',
                value: '',
                readOnly: false,
            },
            {
                id: 'gaming-form-4',
                inputType: 'email',
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
                id: 'gaming-form-5',
                inputType: 'number',
                state: 'normal',
                name: 'phone number1',
                label: '',
                placeholder: '9632587412',
                value: '',
                readOnly: false,
            },
            {
                id: 'gaming-form-6',
                inputType: 'number',
                state: 'normal',
                name: 'phone number2',
                label: '',
                placeholder: '9632587412',
                value: '',
                readOnly: false,
            },
            {
                id: 'gaming-form-7',
                inputType: 'number',
                state: 'normal',
                name: 'phone number3',
                label: '',
                placeholder: '9632587412',
                value: '',
                readOnly: false,
            },
            {
                id: 'gaming-form-8',
                inputType: 'number',
                state: 'normal',
                name: 'phone number4',
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

        const [validatedTextfields, isTextFieldsValid] = validateTextFields(
            textfields
        )
        const [validatedDropdowns, isDropdownValid] = validateDropdowns(
            dropdowns
        )
        const [
            validatedRadioButtons,
            isRadioButtonValid,
        ] = validateRadioButtons(radioButtons)

        this.setState({
            validatedTextfields,
            validatedDropdowns,
            validatedRadioButtons,
        })
        if (isTextFieldsValid && isDropdownValid && isRadioButtonValid) {
            var year = null
            this.state.radioButtons[0].options.forEach((option) => {
                if (option.active) year = option.label
            })
            const data = {
                players: [],
            }
            for (let index = 0; index < 4; index++) {
                data.players.push({
                    name: this.state.textfields[0 + index].value,
                    emailId: this.state.textfields[4 + index].value,
                    gamingId: this.state.textfields[8 + index].value,
                    collegeName: this.state.textfields[12].value,
                    mobileNumber: this.state.textfields[13 + index].value,
                    dept: this.state.dropdowns[0].value,
                    year,
                })
            }
            this.props.registerGamingEvent(data)
        }
    }

    render() {
        const { textfields } = this.state
        const { theme } = this.props
        const field = this.state.textfields
        return (
            <>
                <ScrollToTop />
                <Helmet>
                    <title>Synsara'20 - Gaming Event</title>
                    <meta
                        name="description"
                        content="Registration form for gaming event"
                    />
                </Helmet>
                <FormWrapper formName="Gaming">
                    <GamingFormBg />
                    <InputWrapper>
                        <InputGroup
                            label="Participants Name"
                            onchangeHandler={this.handleInputValueChange}
                            textfields={[
                                textfields[0],
                                textfields[1],
                                textfields[2],
                                textfields[3],
                            ]}
                            theme={theme}
                        />
                        <InputGroup
                            label="Email"
                            onchangeHandler={this.handleInputValueChange}
                            textfields={[
                                textfields[4],
                                textfields[5],
                                textfields[6],
                                textfields[7],
                            ]}
                            theme={theme}
                        />
                        <InputGroup
                            label="Game ID"
                            onchangeHandler={this.handleInputValueChange}
                            textfields={[
                                textfields[8],
                                textfields[9],
                                textfields[10],
                                textfields[11],
                            ]}
                            theme={theme}
                        />
                        <InputGroup
                            label="Phone Number"
                            onchangeHandler={this.handleInputValueChange}
                            textfields={[
                                textfields[13],
                                textfields[14],
                                textfields[15],
                                textfields[16],
                            ]}
                            theme={theme}
                        />
                        <Textfield
                            textfield={textfields[12]}
                            handleInputValueChange={this.handleInputValueChange}
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
                        <div style={{ height: '11rem' }}>
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
                    </InputWrapper>
                    <Button
                        onClick={this.handleFormSubmit}
                        disabled={this.props.isLoading}
                    >
                        {this.props.isLoading ? <Loader /> : 'SUBMIT'}
                    </Button>
                </FormWrapper>
            </>
        )
    }
}

const mapStateToProps = ({ nonTechEvents }) => ({
    isLoading: nonTechEvents.isLoading,
    isError: nonTechEvents.isError,
    isGamingRegistered: nonTechEvents.isGamingRegistered,
})

const mapDispatchToProps = {
    registerGamingEvent,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withTheme(GamingForm))
