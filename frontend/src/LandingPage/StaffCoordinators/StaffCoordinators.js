import React from 'react'
import styled, { withTheme } from 'styled-components'
import HodImage from '../../Assets/Images/hod.png'
import PrincipalImage from '../../Assets/Images/principal.jpg'
import CeoImage from '../../Assets/Images/ceo.jpg'
import StaffImage1 from '../../Assets/Images/staff1.jpg'
import StaffImage2 from '../../Assets/Images/staff2.jpg'
import StaffImage3 from '../../Assets/Images/staff3.jpg'
import StaffImage4 from '../../Assets/Images/staff4.jpg'

const StaffCoordWrapper = styled.div`
    height: 100%;
    padding: 4rem 6rem;
    border: 15px solid rgba(59, 147, 247, 0.58);

    h3 {
        font-size: 1.75rem;
        color: ${(props) => props.theme.primary};
    }

    p {
        font-size: 1.25rem;
    }

    @media (max-width: 768px) {
        padding: 4rem;
        h3 {
            font-size: 1.5rem;
        }

        p {
            font-size: 1rem;
        }
    }
`

const Staff = styled.div`
    text-align: center;
    img {
        border-radius: 50%;
        width: 100px;
        height: auto;
    }

    @media (max-width: 768px) {
        img {
            width: 50px;
        }
    }
`
const StaffContacts = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 5rem;

    img {
        border-radius: 5%;
        width: 200px;
        height: auto;
        margin: 1rem;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 2rem;
        img {
            width: 100px;
        }
    }
`

function StaffCoordinators(props) {
    return (
        <StaffCoordWrapper>
            <h1
                style={{
                    fontSize: '4rem',
                    color: props.theme.secondary,
                    textAlign: 'center',
                }}
            >
                Special Thanks to
            </h1>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: '1rem',
                    alignItems: 'center',
                }}
            >
                <Staff>
                    <img src={HodImage} alt="" />
                    <h3 style={{ color: props.theme.primary }}>Dr.B.Latha</h3>
                    <p>Head of the Department</p>
                </Staff>
                <Staff>
                    <img src={CeoImage} alt="" />
                    <h3 style={{ color: props.theme.primary }}>
                        Mr. Sai Prakash Leo Muthu
                    </h3>
                    <p>CEO - Sairam Institutions</p>
                </Staff>
                <Staff>
                    <img src={PrincipalImage} alt="" />
                    <h3 style={{ color: props.theme.primary }}>
                        Dr. A. Rajendra Prasad
                    </h3>
                    <p>Principal</p>
                </Staff>
            </div>
            <h1
                style={{
                    fontSize: '4rem',
                    color: props.theme.secondary,
                    textAlign: 'center',
                }}
            >
                Staff Coordinators
            </h1>
            <StaffContacts>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                    }}
                >
                    <div style={{ textAlign: 'center' }}>
                        <img src={StaffImage1} alt="" />
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <img src={StaffImage2} alt="" />
                    </div>
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                    }}
                >
                    <div style={{ textAlign: 'center' }}>
                        <img src={StaffImage3} alt="" />
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <img src={StaffImage4} alt="" />
                    </div>
                </div>
            </StaffContacts>
        </StaffCoordWrapper>
    )
}

export default withTheme(StaffCoordinators)
