import React from 'react'
import { index as LandingPage } from './LandingPage'
import { index as ComingSoon } from './ComingSoon'
import { ThemeProvider } from 'styled-components'
import { theme } from './utils/globalStyles'

function App() {
    return <LandingPage /> && <ComingSoon />
}

export default App
