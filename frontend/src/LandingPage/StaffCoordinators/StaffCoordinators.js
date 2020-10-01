import React from 'react'
import styled, { withTheme } from 'styled-components'
import HodImage from '../../Assets/Images/hod.png'
import PrincipalImage from '../../Assets/Images/principal.jpg'
import CeoImage from '../../Assets/Images/ceo.jpg'
import StaffImage from '../../Assets/Images/staff.png'

const StaffCoordWrapper = styled.div`
    height: 100%;
    padding: 6rem;
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
        border-radius: 50%;
        width: 100px;
        height: auto;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 2rem;
        img {
            display: none;
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
                Staff Coordinators
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
            <StaffContacts>
                <div style={{ textAlign: 'center' }}>
                    <img src={StaffImage} alt="" />
                    <h3>Mrs. M. Padmapriya</h3>
                    <p>98407 08360</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <img src={StaffImage} alt="" />
                    <h3>Mrs. M. Kiruthiga Devi</h3>
                    <p>97911 28792</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <img src={StaffImage} alt="" />
                    <h3>Mr. N. Gopinath</h3>
                    <p>99523 27939</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <img src={StaffImage} alt="" />
                    <h3>Dr. A. Chinnasamy</h3>
                    <p>99940 85043</p>
                </div>
            </StaffContacts>
        </StaffCoordWrapper>
    )
}

export default withTheme(StaffCoordinators)
