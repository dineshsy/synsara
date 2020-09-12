import React, { useRef } from 'react'
import styled, { keyframes } from 'styled-components'
import { connect } from 'react-redux'

const fadeIn = keyframes`
    from{
        top: 0; opacity: 0;
    }
    to{
        top: 30px; opacity: 1;
    }
`

const fadeOut = keyframes`
    from{
        top: 30px; opacity: 1;
    }
    to{
        top: 0; opacity: 0;
    }
`

const ToastWrapper = styled.div`
    min-width: 400px;
    max-width: 400px;
    margin-left: -200px;
    padding: 16px;
    font-size: 12px;
    font-weight: bold;
    justify-content: center;
    position: fixed;
    left: 50%;
    top: 30px;
    z-index: 100;
    background-color: #f3f9ff;
    color: #3563c1;
    visibility: hidden;
    filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.1));

    @media (max-width: 768px) {
        min-width: 250px;
        max-width: 250px;
        margin-left: -125px;
    }

    &.success {
        border-left: 6px solid #53db50;
    }

    &.error {
        border-left: 6px solid #c13535;
    }

    &.warning {
        border-left: 6px solid #ffc021;
    }

    &.show {
        visibility: visible;
        animation: ${fadeIn} 0.5s, ${fadeOut} 0.5s 3s;
    }
`

const CloseButton = styled.button`
    &:focus {
        box-shadow: none;
    }

    background: transparent;
    border: none;
    cursor: pointer;
`

const WarningIcon = () => (
    <svg
        width="30"
        height="30"
        viewBox="0 0 125 125"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <rect width="125" height="125" fill="url(#pattern4)" />
        <defs>
            <pattern
                id="pattern4"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
            >
                <use xlinkHref="#image4" transform="scale(0.0166667)" />
            </pattern>
            <image
                id="image4"
                width="60"
                height="60"
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABmJLR0QA/wD/AP+gvaeTAAAE6klEQVRYCe1ZW2wUVRj+/9ndpkJBmsUXCthbCKQxikQjlVCWPprwSDVUETUYfNGAidY3fTDECMZgEB80gtWEhgcTok/gcGlWEy1GgiFi20UxhiBiTasldGZ+v1lSsi09Z+e26w6ZzffNnNt/+c6ZObs7Q5R8khlIZiCZgWQGancGuJKpybGmLKXqcsTSScQdiLUKbABLMYHKefAcOZyn+hsmd/52DfWKIHLBcnp5I1lGDxncS0JrkbUB+oGDwXlMUj85dJhzF8dQjwyRCZbBZUvISu9CZtvB2auIpkCYIKYD5MgeCL8cyMMso9CCxWyuJzJexYq8At8o4xg9Jkn4LSJnN4RfD+M+lGAx29qJnQEksBqsAvgM2cZm7h4eCRrM7/11K46cbNkEsUNoqJJYRCJ5kFL2kHzV+phbC8JAgsVseRkb0ucIuBCsNu4mQ45iwt39wnds35e0nGjdQST7fUeK3kCwb+zgrosf+HHtS7CcbO7B5vEZAgS6MmAXNWxcaY9zrnDEq2PPgrEbP0DMX8NxpXZiuA6E6/i+foQ3Fn7wYu1ppeTHjjqIPQSHtSYWKVE9GXRQvluTcSvlaJQbUOy/MrkT5/vAsJjCLdFHNjUXKdwHh1NgWNxP49de9OKEyw2S40ubKJX5CePmg+EAgZwb3V3qBJtgHzbBN0vbApbHSWQFfphc1tmXX+FU5jU4CC8WTvAdetA9zaBhf0zRfBbgtsPk6Z1pBcup9ntgvg2MBjbLbY4Mh29rC97wnJgrFuvMtYLJtrbA+C4wIhhP0+yPldk6uylEfR7x1BM6+7SuE5fIU9p+v50sb4jZSpQyPiya2s6zuH9fL5ajOzwJV/vAOcFztqJRzPalxPYlFOOHtNXE6y79PlfixlyNN9vsDRTXj5XpUqWuFsz0kMqo5tuZHlblqBZMtEplVPPtIitVOeoEt6mMYtCuzF23Sy+qhDDeUJixUcqJFqlAnEaVT90KN6iMYtCufDChEzxjJWIgsjRF5VWjEzxe6iFmZWXuOsFjMRNZmu5fpZXSsk7whdKBsSozKXO/MwUT/6xaILVglrzKqObbbRpU5agWnE6ZMBIwbnDcN5CqpJWC+dGRKzD6FowZ5Bvd61al4KJKpkPFc5wOQp/o0jV0ncSpAfRPgnHBv0R1R3TJagXz+uE/YPw+GBPwe5y7cFWXrFZw0dCe2ovzP2CtA49pnXfKJenp93LxTZ3Q2+Wc/a/9LC/hxdq75XIov8Kuh8Xz9uF0FqxVfE/zs/u9JOdphV1HcrzlXkrREMpZsJZwldK8hteN/uolKcPLIHcMdxd+wXkbaIG1AguPkrd6Fesm7VmwOxhPK47i/AJYCxCIfZ67Rr/0kwz7GTw9VsyWXmL6CHVPrygxLmrcgNhnIPZTv44DCXaDYOfeRDd/1Sx061Xk3+TwFt44+kWQmIEFu8HEbGsndgZQXg1WAXyGbGMzdw+PBA0WSrAbVIQMOoVLXGgv6lmwEvgTt9BOWl/oZyYnTIDQgqeDy+CyJWSld6G+HWwAo8AEhB4gR/aUe9HtNVhkgqcDyunljWQZPWRwL+7xtWj39U2A8e4K5omlH2t5GEIjfbYWuWAkfAtyrClLqbocku8k4g50uK9vFuG8AHQxjsMYeB48h80o7/551/2fxbgEyQwkM5DMQDIDd+wM/AecRC+t2suu6wAAAABJRU5ErkJggg=="
            />
        </defs>
    </svg>
)

const SuccessIcon = () => (
    <svg
        width="30"
        height="30"
        viewBox="0 0 125 125"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <rect width="125" height="125" fill="url(#pattern1)" />
        <defs>
            <pattern
                id="pattern1"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
            >
                <use xlinkHref="#image1" transform="scale(0.0166667)" />
            </pattern>
            <image
                id="image1"
                width="60"
                height="60"
                xlinkHref="data:image/png;base64,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"
            />
        </defs>
    </svg>
)

const ErrorIcon = () => (
    <svg
        width="30"
        height="30"
        viewBox="0 0 125 125"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <rect width="125" height="125" fill="url(#pattern3)" />
        <defs>
            <pattern
                id="pattern3"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
            >
                <use xlinkHref="#image3" transform="scale(0.0208333)" />
            </pattern>
            <image
                id="image3"
                width="48"
                height="48"
                xlinkHref="data:image/png;base64,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"
            />
        </defs>
    </svg>
)

const CloseIcon = () => (
    <svg
        width="15"
        height="15"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <rect width="60" height="60" fill="url(#pattern2)" />
        <defs>
            <pattern
                id="pattern2"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
            >
                <use xlinkHref="#image2" transform="scale(0.0166667)" />
            </pattern>
            <image
                id="image2"
                width="60"
                height="60"
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABmJLR0QA/wD/AP+gvaeTAAADhUlEQVRYCe2ZQWvUQBTHJ1uk66EJXcGL4OcpXqSs0oqCvRYP+mW8iMgKinjwm3hS3F4sHurJQ6V7sUtZ4v+f7kC7bHbeTN7Mokx5L9k0b957vzfJZJIxJv/lCuQK5ArkCuQK5Ar8MxUYVNVwUJbHt8ryO3+nTpwxu8Tf8El4u6oOi7oeGWMGc33Y7/d/nU+nn3EcXTTii4HnwV6CqoBaKXBwLwW0VnwRcEuwZNCa8Z3AuGce4DJ+A7oetE3Y0zv9zc1jXN5f24xC/r9dlk9wFb1CW2f8m/3+tz/T6RFsWwW+Ws81JwD809T1nebAvZnVxjz9PZm8d5u6LeawI2OMs2NgQzk5nUzu8kebrqraZZu6dhbl0rDZbsD4LRJ93Bx12MAHe3Zk5LAGHYPwaLFC3MBF8RztZ1CpdIYOgjVmZnq9F64knZcK7okx7w042oU67WFD6aHUuyGjdzNAGfMaTtydAaO5XJii2D89O/s0P27diQAAfQToMbz4QHMg83pkNbB1vfjoQ9iVQthHElh6EQHTMDZ0ClhyiIFpHAs6FSwZvIDZQBs6JSzz9wZmIy3o1LDMHYMpd2GKSckQz74PaH0DKhU82YtnNMYMLuoAxRiL2gmYzkKh2RbqE99rNIbvpRJ0SV/1FHp5w0dyWMQUz1Fp26qB0K3+Fk6o9Kz12bmHraNI0KqwzFUNmM6UodVhmaMqMB0qQUeBZX7qwHR6BXqIY5+XAJjjrUf4IkBjX/VNRuwfHwJuwzjEf2/eFs31JUoPB86gLJ33W5ZtKNmrA3eEtTlHg1YFVoKNCq0GrAwbDVoFOBJsFOjOwIGw/CiIwdhIR3G1e1oa0Fb72j4QlpOKPXx024OzC6hUCr5OMqa0wTK74B5mYCYAp0FvPVcmJ1E/DCK/axIE3BXWZrAOaG9gLdh1QXsBa8OuA1oMHAs2NbQIODZsSmgnMD7SSdaHbc52z2XTAyybfrT/kO45kGGd+QeG/vtoI31s8jm9g+Wg5OvDyNEQtvMaceAKYvL1YRVYVg1XxztMxQ4Ml0GxEQm+eLvs3JeMfH1YDdYm7QmddH2Y08V9JOh9z1q4tv35dPqF9ybOr5qRNfElS6bOQQuBDAcSBB3j97KgDCZen4UPb9GMLwJmhi1Bo8MyNnVt8fGYGg62tk4arSp+lWQ+yXTd8ZOB5kC5ArkCuQK5ArkC/2EF/gK/O0ZLvII6HgAAAABJRU5ErkJggg=="
            />
        </defs>
    </svg>
)

class Toast extends React.Component {
    state = {
        className: [''],
        msg: 'Oops, Something went wrong. Try again',
        timeoutId: null,
    }

    componentDidUpdate(prevProps) {
        const { toast } = this.props
        if (toast !== prevProps.toast) {
            if (toast.isError) {
                const { error_details } = toast
                if (error_details.err_type === 409) {
                    this.setState({
                        className: ['show', 'warning'],
                        msg: 'You have already registered for this event',
                    })
                } else {
                    this.setState({
                        className: ['show', 'error'],
                        msg: 'Oops, Something went wrong. Please try again',
                    })
                }
                this.setState({
                    timeoutId: setTimeout(
                        () => this.setState({ className: [''] }),
                        3500
                    ),
                })
            } else {
                const { registration_details } = toast
                this.setState({
                    className: ['show', 'success'],
                    msg: `${registration_details.name}, Registration done successfully. Check your mailbox!`,
                })
                this.setState({
                    timeoutId: setTimeout(
                        () => this.setState({ className: [''] }),
                        3500
                    ),
                })
            }
        }
    }

    onClose = () => {
        console.log(this.state.timeoutId)
        this.setState({
            className: [''],
        })
        clearTimeout(this.state.timeoutId)
    }

    render() {
        const { msg, className } = this.state
        return (
            <ToastWrapper className={className.join(' ')}>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        columnGap: '1rem',
                        textAlign: 'center',
                    }}
                >
                    {className[1] === 'success' ? (
                        <SuccessIcon />
                    ) : className[1] === 'error' ? (
                        <ErrorIcon />
                    ) : (
                        <WarningIcon />
                    )}
                    {msg}
                    {
                        <CloseButton onClick={this.onClose}>
                            <CloseIcon />
                        </CloseButton>
                    }
                </div>
            </ToastWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    toast: state.toast,
})

export default connect(mapStateToProps)(Toast)
