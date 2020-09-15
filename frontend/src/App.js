import React from 'react'
import LandingPage from './LandingPage'
import { ThemeProvider } from 'styled-components'
import { theme, ResponsiveBoilerPlate } from './utils/globalStyles'
import Toast from './Reusables/Toast'
function App() {
    return (
        <ThemeProvider theme={theme}>
            <Toast />
            <ResponsiveBoilerPlate />
            <LandingPage />
        </ThemeProvider>
    )
}

export default App
