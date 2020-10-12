import React from 'react'
import { Gaming } from './Gaming/Gaming'
import { Photography } from './Photography/Photography'
import { Treasurehunt } from './Treasurehunt/Treasurehunt'
import { Connections } from './Connections/Connections'
import { Dubsmash } from './Dubsmash/Dubsmash'
import { Memecontest } from './Memecontest/Memecontest'
import { Dream11IPL } from './Dream11IPL/Dream11IPL'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { registrationFailed } from '../../../redux/Events/Toast/Actions'

const SliderWrapper = styled.section`
    width: 100%;
    height: 100%;
`

const mapDispatchToProps = {
    registrationFailed: (event) => (dispatch) => {
        dispatch(
            registrationFailed({
                err_type: 'REG_CLOSED',
                event,
            })
        )
    },
}

export const Index = connect(
    null,
    mapDispatchToProps
)(({ pageNumber, slideInfo, registrationFailed }) => {
    return (
        <>
            <div className="slide">
                <SliderWrapper>
                    <Gaming
                        callMeWhenRegClosed={() =>
                            registrationFailed('Aadukalam')
                        }
                        pageNumber={pageNumber}
                        slideInfo={slideInfo}
                    />
                </SliderWrapper>
            </div>
            <div className="slide">
                <SliderWrapper>
                    <Photography
                        callMeWhenRegClosed={() =>
                            registrationFailed('Nizhaloviyam')
                        }
                        pageNumber={pageNumber}
                        slideInfo={slideInfo}
                    />
                </SliderWrapper>
            </div>
            <div className="slide">
                <SliderWrapper>
                    <Treasurehunt
                        callMeWhenRegClosed={() =>
                            registrationFailed('Diraviyam Tedu')
                        }
                        pageNumber={pageNumber}
                        slideInfo={slideInfo}
                    />
                </SliderWrapper>
            </div>
            <div className="slide">
                <SliderWrapper>
                    <Connections
                        callMeWhenRegClosed={() => registrationFailed('Oppu')}
                        pageNumber={pageNumber}
                        slideInfo={slideInfo}
                    />
                </SliderWrapper>
            </div>
            <div className="slide">
                <SliderWrapper>
                    <Dubsmash
                        callMeWhenRegClosed={() =>
                            registrationFailed('Paatum Nane Paavamum Naane')
                        }
                        pageNumber={pageNumber}
                        slideInfo={slideInfo}
                    />
                </SliderWrapper>
            </div>
            <div className="slide">
                <SliderWrapper>
                    <Memecontest
                        callMeWhenRegClosed={() =>
                            registrationFailed('Chithiram Pesudhadee')
                        }
                        pageNumber={pageNumber}
                        slideInfo={slideInfo}
                    />
                </SliderWrapper>
            </div>
            <div className="slide">
                <SliderWrapper>
                    <Dream11IPL
                        callMeWhenRegClosed={() => registrationFailed('Tegidi')}
                        pageNumber={pageNumber}
                        slideInfo={slideInfo}
                    />
                </SliderWrapper>
            </div>
        </>
    )
})
