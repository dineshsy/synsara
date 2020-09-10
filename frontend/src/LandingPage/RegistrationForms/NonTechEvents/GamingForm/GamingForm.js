import React, { Component } from 'react'
import { FormWrapper } from '../../../../Reusables/FormWrapper'
import { InputWrapper } from '../../style'
import Textfield from '../../../../Reusables/inputs/text-field/text-field'
import Dropdown from '../../../../Reusables/inputs/drop-down/drop-down'
import { Button } from '../../../../Reusables/Button'
import GamingFormBg from './GamingFormBg'
import arrowDownIcon from '../../../../Assets/Images/arrow-down.png'

class GamingForm extends Component {
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
                name: 'email',
                label: 'Email ID',
                placeholder: 'johndoe@gmail.com',
                value: '',
                readOnly: false,
            },
            {
                id: 'gaming-form-2',
                inputType: 'text',
                state: 'normal',
                name: 'game ID',
                label: 'Game ID',
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
                inputType: 'text',
                state: 'normal',
                name: 'phone number',
                label: 'Phone Number',
                placeholder: '9632587412',
                value: '',
                readOnly: false,
            },
        ],
        dropdowns: [
            {
                toggle: false,
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
                dropdown: [
                    {
                        id: 'dropdown-1',
                        name: 'Computer Science and Engineering',
                        state: 'not selected',
                    },
                    {
                        id: 'dropdown-2',
                        name: 'Instrumentation Engineering',
                        state: 'not selected',
                    },
                    {
                        id: 'dropdown-3',
                        name: 'Mechanical Engineering',
                        state: 'not selected',
                    },
                    {
                        id: 'dropdown-4',
                        name: 'Information Technology',
                        state: 'not selected',
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
        dropdownMenu.dropdown.map((dropdown) => {
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

    render() {
        const field = this.state.textfields
        return (
            <>
                <FormWrapper formName="Gaming">
                    <GamingFormBg />
                    <InputWrapper>
                        <Textfield
                            textfield={field[0]}
                            key={field[0].id}
                            handleInputValueChange={this.handleInputValueChange}
                        />
                        <Textfield
                            textfield={field[1]}
                            key={field[1].id}
                            handleInputValueChange={this.handleInputValueChange}
                        />
                        <Textfield
                            textfield={field[2]}
                            key={field[2].id}
                            handleInputValueChange={this.handleInputValueChange}
                        />
                        <Textfield
                            textfield={field[3]}
                            key={field[3].id}
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
                        <Textfield
                            textfield={field[4]}
                            key={field[4].id}
                            handleInputValueChange={this.handleInputValueChange}
                        />
                    </InputWrapper>
                    <Button onClick={this.handleFormSubmit}>SUBMIT</Button>
                </FormWrapper>
            </>
        )
    }
}

export default GamingForm
