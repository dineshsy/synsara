function isEmail(email) {
    return /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/.test(
        email
    )
}

export const validateTextFields = (textfields, counts = false) => {
    let isValid = true
    let texts = 0
    let numbers = 0
    let emails = 0
    textfields.forEach((field) => {
        if (!field.value.trim().length) {
            isValid = false
            field.state = 'error'
            field.hint = `Please provide ${field.label}`
        } else if (field.inputType === 'email' && !isEmail(field.value)) {
            isValid = false
            field.state = 'error'
            field.hint = `Please provide a valid Email address`
        } else if (
            field.inputType === 'number' &&
            field.value.trim().length < 6
        ) {
            isValid = false
            field.state = 'error'
            field.hint = `Please provide a valid Phone number`
        } else {
            if (field.inputType === 'email') emails++
            else if (field.inputType === 'number') numbers++
            else if (field.name !== 'teamname' && field.name !== 'collegename')
                texts++
            field.state = 'normal'
            field.hint = null
        }
    })

    return counts
        ? [textfields, isValid, texts, emails, numbers]
        : [textfields, isValid]
}

export const validateDropdowns = (dropdowns) => {
    let isValid = true
    dropdowns.forEach((dropdown) => {
        if (!dropdown.value.trim().length) {
            isValid = false
            dropdown.field.state = 'error'
            dropdown.field.hint = `Please provide ${dropdown.field.name}`
        } else {
            dropdown.field.state = 'normal'
            dropdown.field.hint = ''
        }
    })

    return [dropdowns, isValid]
}

export const validateRadioButtons = (radioButtons) => {
    let isValid = true
    radioButtons.forEach((button) => {
        let isRadioButtonValid = false
        button.options.forEach((option) => {
            if (option.active) {
                isRadioButtonValid = true
            }
        })
        if (!isRadioButtonValid) {
            isValid = false
            button.error = `Please provide ${button.name}`
        } else {
            button.error = ``
        }
    })

    return [radioButtons, isValid]
}
