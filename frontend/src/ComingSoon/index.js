import React from 'react'
import { ComingSoonWrapper } from './style'
import { ResponsiveBoilerPlate } from '../utils/globalStyles'
import { index as Components } from './components'
export const index = () => {
    return (
        <ComingSoonWrapper>
            <ResponsiveBoilerPlate />
            <Components />
        </ComingSoonWrapper>
    )
}
