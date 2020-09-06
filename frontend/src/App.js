import React from 'react'
import { index as LandingPage } from './LandingPage'
import { ThemeProvider } from 'styled-components'
import { theme, ResponsiveBoilerPlate } from './utils/globalStyles'
function App() {
    return (
        <ThemeProvider theme={theme}>
            <ResponsiveBoilerPlate />
            <LandingPage />
        </ThemeProvider>
    )
}

export default App
