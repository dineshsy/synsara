import React, { Component, createRef } from 'react'
import './drop-down.css'
import TextField from '../text-field/text-field'
import styled, { withTheme } from 'styled-components'
import { setLightness, rgba, lighten } from 'polished'
import {
    ENTER_KEY_CODE,
    DOWN_ARROW_KEY_CODE,
    UP_ARROW_KEY_CODE,
    ESCAPE_KEY_CODE,
    SPACEBAR_KEY_CODE,
    TAB_KEY_CODE,
} from '../../../utils/constants'

const DropdownContainer = styled.div`
    width: fit-content;
    .dropdown-container {
        scrollbar-width: thin;
        scrollbar-color: ${(props) => setLightness(0.25, props.theme.textdark)};
    }

    .dropdown-container::-webkit-scrollbar {
        width: 6px;
    }

    .dropdown-container::-webkit-scrollbar-track {
        background: transparent;
    }

    .dropdown-container::-webkit-scrollbar-thumb {
        background-color: ${(props) => rgba(props.theme.grey, 0.25)};
        border-radius: 20px;
        border: 2px solid transparent;
    }
    .dropdown:hover {
        color: ${(props) => props.theme.textlight} !important;
        background-color: ${(props) => rgba(props.theme.textdark, 1)};
    }

    .dropdown-selected {
        color: #0050a7;
        background-color: ${(props) => lighten(0.25, props.theme.grey)};
    }
`
class Dropdown extends Component {
    constructor() {
        super()
        this.listItemIds = []
        this.dropdownRef = createRef()
        document.addEventListener('mousedown', this.handleClickOutside)
        // document.addEventListener('focusin', this.handleFocusOutside)
    }

    handleClickOutside = (event) => {
        if (
            this.dropdownRef.current &&
            !this.dropdownRef.current.contains(event.target)
        ) {
            this.props.dropdownMenu.toggle && this.props.handleDropdowntoggle()
        }
    }
    componentDidMount() {
        const listItems = document.querySelectorAll('.dropdown-container > li')

        listItems.forEach((items) => this.listItemIds.push(items.id))
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside)
    }

    handleListKeyDown = (e, dropdown) => {
        if (SPACEBAR_KEY_CODE.includes(e.keyCode)) e.preventDefault()
        switch (e.keyCode) {
            case ENTER_KEY_CODE:
                this.props.handleDropdownClick(dropdown.name)
                return

            case DOWN_ARROW_KEY_CODE:
                // this.focusNextListItem(DOWN_ARROW_KEY_CODE)
                return

            case UP_ARROW_KEY_CODE:
                // this.focusNextListItem(UP_ARROW_KEY_CODE)
                return

            case ESCAPE_KEY_CODE:
                this.props.handleDropdowntoggle()
                return

            default:
                return
        }
    }

    //TODO: functionality to focus nextItem or previousItem onPressing UP or DOWN arrow
    // focusNextListItem = (direction) => {
    //     const activeElementId = document.activeElement.id
    //     console.log(activeElementId)
    //     console.log(activeElementId)
    //     if (activeElementId === 'dropdown__selected') {
    //         document.querySelector(`#${this.listItemIds[0]}`).focus()
    //     } else {
    //         const currentActiveElementIndex = this.listItemIds.indexOf(
    //             activeElementId
    //         )
    //         if (direction === DOWN_ARROW_KEY_CODE) {
    //             const currentActiveElementIsNotLastItem =
    //                 currentActiveElementIndex < this.listItemIds.length - 1
    //             if (currentActiveElementIsNotLastItem) {
    //                 const nextListItemId = this.listItemIds[
    //                     currentActiveElementIndex + 1
    //                 ]
    //                 document.querySelector(`#${nextListItemId}`).focus()
    //             }
    //         } else if (direction === UP_ARROW_KEY_CODE) {
    //             const currentActiveElementIsNotFirstItem =
    //                 currentActiveElementIndex > 0
    //             if (currentActiveElementIsNotFirstItem) {
    //                 const nextListItemId = this.listItemIds[
    //                     currentActiveElementIndex - 1
    //                 ]
    //                 document.querySelector(`#${nextListItemId}`).focus()
    //             }
    //         }
    //     }
    // }

    render() {
        const dropdownMenu = this.props.dropdownMenu
        return (
            <DropdownContainer>
                <div
                    style={{ width: this.props.maxWidth }}
                    className="dropdown-menu"
                    ref={this.dropdownRef}
                >
                    <div
                        style={{ width: this.props.maxWidth }}
                        className="dropdown-field"
                        onClick={(e) => {
                            e.preventDefault()
                            this.props.handleDropdowntoggle()
                        }}
                    >
                        <TextField
                            doFocus={
                                dropdownMenu.field.readOnly
                                    ? dropdownMenu.toggle
                                    : false
                            }
                            textfield={dropdownMenu.field}
                            handleFieldBtnClick={() => {}}
                            handleInputValueChange={
                                this.props.handleInputValueChange
                            }
                            handleOnFocus={() => {
                                if (!dropdownMenu.field.readOnly)
                                    !dropdownMenu.toggle &&
                                        this.props.handleDropdowntoggle()
                            }}
                            maxWidth={this.props.maxWidth}
                            toggleInputTipsbox={this.props.toggleInputTipsbox}
                            handleKeyDown={(e) => {
                                if (
                                    SPACEBAR_KEY_CODE.includes(e.keyCode) &&
                                    !dropdownMenu.toggle
                                )
                                    e.preventDefault()
                                return e.keyCode === ESCAPE_KEY_CODE
                                    ? dropdownMenu.toggle
                                        ? this.props.handleDropdowntoggle()
                                        : null
                                    : e.keyCode === ENTER_KEY_CODE ||
                                      SPACEBAR_KEY_CODE.includes(e.keyCode)
                                    ? !dropdownMenu.toggle
                                        ? this.props.handleDropdowntoggle()
                                        : null
                                    : null
                            }}
                            // handleBlur={this.props.handleDropdowntoggle()}
                        />
                    </div>
                    {dropdownMenu.toggle ? (
                        <ul
                            aria-expanded="false"
                            style={{
                                backgroundColor: lighten(
                                    0.5,
                                    this.props.theme.grey
                                ),
                            }}
                            className="dropdown-container"
                        >
                            {dropdownMenu.dropdown.map((dropdown) => (
                                <li
                                    tabIndex={
                                        dropdown.state === 'selected'
                                            ? '-1'
                                            : '0'
                                    }
                                    onKeyDown={(e) =>
                                        this.handleListKeyDown(e, dropdown)
                                    }
                                    key={'option-' + dropdown.id}
                                    id={'option-' + dropdown.id}
                                    style={{
                                        color: this.props.theme.textdark,
                                    }}
                                    className={
                                        dropdown.state === 'selected'
                                            ? 'dropdown-selected'
                                            : 'dropdown'
                                    }
                                    onClick={() =>
                                        this.props.handleDropdownClick(
                                            dropdown.name
                                        )
                                    }
                                >
                                    {dropdown.name}
                                </li>
                            ))}
                        </ul>
                    ) : null}
                </div>
            </DropdownContainer>
        )
    }
}

export default withTheme(Dropdown)
