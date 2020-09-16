import React from 'react'
import {
    EventWrapper,
    ContentWrapper,
    MainContentWrapper,
    RegisterWrapper,
} from './style'
import { Label } from '../style'
import { useTheme } from 'styled-components'
import { Button } from '../../../../Reusables/Button'
import { FORM_ROUTES } from '../../../../utils/constants'
import { useHistory } from 'react-router-dom'
export const Photography = () => {
    const theme = useTheme()
    const history = useHistory()
    return (
        <EventWrapper>
            <MainContentWrapper>
                <ContentWrapper gap="1rem">
                    <ContentWrapper gap="0rem">
                        <Label bold size="4.1rem" color={theme.secondary}>
                            Nizhaloviyam
                        </Label>
                    </ContentWrapper>
                    <Label size="2rem" color={theme.textdark}>
                        Cameras, a tool to some, a medium to many. Your
                        photograph can tell a story without ever putting pen on
                        paper. It can describe who you are and how you look at
                        the world. Synsara’s Nizhaloviyam is looking to discover
                        how you look at “Culture in Tamil Nadu”.
                    </Label>
                    <ContentWrapper gap="1rem">
                        <Label bold size="2.5rem" color={theme.secondary}>
                            Rules:
                        </Label>
                        <ContentWrapper gap="1rem">
                            <Label size="2rem" color={theme.textdark}>
                                1. The picture should be theme based.
                            </Label>
                            <Label size="2rem" color={theme.textdark}>
                                2. Short crispy caption that suits the
                                photograph taken.
                            </Label>
                            <Label size="2rem" color={theme.textdark}>
                                So get ready with ur cameras and lenses! Lets
                                click the entire universe🔥 and do not forget to
                                register for this fun filled event before 4th
                                October 2020.
                            </Label>
                            <Label bold size="1.5rem" color={theme.primary}>
                                Come, show us how you tell stories
                            </Label>
                        </ContentWrapper>
                    </ContentWrapper>
                </ContentWrapper>
                <RegisterWrapper>
                    <svg
                        width="422"
                        height="431"
                        viewBox="0 0 422 431"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M278.794 173.786C278.401 173.786 278.024 173.943 277.746 174.221C277.468 174.499 277.312 174.877 277.312 175.27V277.18C277.312 277.574 277.468 277.951 277.746 278.23C278.024 278.508 278.401 278.664 278.794 278.665H420.518C420.911 278.664 421.288 278.508 421.565 278.23C421.843 277.951 422 277.574 422 277.18V175.27C422 174.877 421.843 174.499 421.565 174.221C421.288 173.943 420.911 173.786 420.518 173.786H278.794Z"
                            fill="#E6E6E6"
                        />
                        <path
                            d="M412.692 182.901V255.326C412.691 255.809 412.5 256.273 412.159 256.614C411.818 256.956 411.355 257.148 410.873 257.148H288.147C288.061 257.149 287.975 257.141 287.891 257.125C287.458 257.064 287.061 256.848 286.774 256.518C286.487 256.187 286.329 255.764 286.329 255.326V182.901C286.329 182.417 286.52 181.954 286.861 181.612C287.202 181.271 287.665 181.079 288.147 181.079H410.873C411.355 181.079 411.818 181.271 412.159 181.612C412.5 181.954 412.691 182.417 412.692 182.901Z"
                            fill="white"
                        />
                        <path
                            d="M387.254 214.222C390.895 214.222 393.847 211.265 393.847 207.618C393.847 203.97 390.895 201.013 387.254 201.013C383.613 201.013 380.661 203.97 380.661 207.618C380.661 211.265 383.613 214.222 387.254 214.222Z"
                            fill="#FF6584"
                        />
                        <path
                            d="M281.547 179.625C282.747 179.625 283.72 178.651 283.72 177.448C283.72 176.245 282.747 175.27 281.547 175.27C280.346 175.27 279.373 176.245 279.373 177.448C279.373 178.651 280.346 179.625 281.547 179.625Z"
                            fill="#3F3D56"
                        />
                        <path
                            d="M417.475 179.625C418.675 179.625 419.648 178.651 419.648 177.448C419.648 176.245 418.675 175.27 417.475 175.27C416.274 175.27 415.301 176.245 415.301 177.448C415.301 178.651 416.274 179.625 417.475 179.625Z"
                            fill="#3F3D56"
                        />
                        <path
                            d="M281.547 277.18C282.747 277.18 283.72 276.205 283.72 275.003C283.72 273.8 282.747 272.825 281.547 272.825C280.346 272.825 279.373 273.8 279.373 275.003C279.373 276.205 280.346 277.18 281.547 277.18Z"
                            fill="#3F3D56"
                        />
                        <path
                            d="M417.475 277.18C418.675 277.18 419.648 276.205 419.648 275.003C419.648 273.8 418.675 272.825 417.475 272.825C416.274 272.825 415.301 273.8 415.301 275.003C415.301 276.205 416.274 277.18 417.475 277.18Z"
                            fill="#3F3D56"
                        />
                        <path
                            d="M326.763 233.546C331.132 233.546 334.673 229.998 334.673 225.622C334.673 221.245 331.132 217.697 326.763 217.697C322.394 217.697 318.853 221.245 318.853 225.622C318.853 229.998 322.394 233.546 326.763 233.546Z"
                            fill="#6C63FF"
                        />
                        <path
                            d="M327.526 249.49H325.906L326.644 224.428L327.526 249.49Z"
                            fill="#3F3D56"
                        />
                        <path
                            d="M326.787 229.178L328.526 226.767L326.763 229.775L326.573 229.441L326.787 229.178Z"
                            fill="#3F3D56"
                        />
                        <path
                            d="M326.596 231.613L324.857 229.202L326.62 232.209L326.811 231.875L326.596 231.613Z"
                            fill="#3F3D56"
                        />
                        <path
                            d="M399.325 233.546C403.694 233.546 407.236 229.998 407.236 225.622C407.236 221.245 403.694 217.697 399.325 217.697C394.957 217.697 391.415 221.245 391.415 225.622C391.415 229.998 394.957 233.546 399.325 233.546Z"
                            fill="#6C63FF"
                        />
                        <path
                            d="M400.088 249.49H398.468L399.206 224.428L400.088 249.49Z"
                            fill="#3F3D56"
                        />
                        <path
                            d="M399.349 229.178L401.088 226.767L399.326 229.775L399.135 229.441L399.349 229.178Z"
                            fill="#3F3D56"
                        />
                        <path
                            d="M399.159 231.613L397.419 229.202L399.182 232.209L399.373 231.875L399.159 231.613Z"
                            fill="#3F3D56"
                        />
                        <path
                            d="M349.678 230.413C356.13 230.413 361.361 225.173 361.361 218.709C361.361 212.245 356.13 207.005 349.678 207.005C343.226 207.005 337.995 212.245 337.995 218.709C337.995 225.173 343.226 230.413 349.678 230.413Z"
                            fill="#6C63FF"
                        />
                        <path
                            d="M350.804 253.961H348.411L349.502 216.946L350.804 253.961Z"
                            fill="#3F3D56"
                        />
                        <path
                            d="M349.713 223.961L352.282 220.401L349.678 224.842L349.396 224.349L349.713 223.961Z"
                            fill="#3F3D56"
                        />
                        <path
                            d="M349.431 227.557L346.863 223.997L349.467 228.439L349.748 227.945L349.431 227.557Z"
                            fill="#3F3D56"
                        />
                        <path
                            d="M378.168 225.942C384.621 225.942 389.851 220.702 389.851 214.238C389.851 207.774 384.621 202.535 378.168 202.535C371.716 202.535 366.486 207.774 366.486 214.238C366.486 220.702 371.716 225.942 378.168 225.942Z"
                            fill="#6C63FF"
                        />
                        <path
                            d="M379.295 249.49H376.902L377.993 212.475L379.295 249.49Z"
                            fill="#3F3D56"
                        />
                        <path
                            d="M378.204 219.49L380.772 215.93L378.168 220.372L377.887 219.878L378.204 219.49Z"
                            fill="#3F3D56"
                        />
                        <path
                            d="M377.922 223.087L375.353 219.526L377.957 223.968L378.239 223.475L377.922 223.087Z"
                            fill="#3F3D56"
                        />
                        <path
                            d="M304.271 225.942C310.723 225.942 315.954 220.702 315.954 214.238C315.954 207.774 310.723 202.535 304.271 202.535C297.818 202.535 292.588 207.774 292.588 214.238C292.588 220.702 297.818 225.942 304.271 225.942Z"
                            fill="#6C63FF"
                        />
                        <path
                            d="M305.397 249.49H303.004L304.095 212.475L305.397 249.49Z"
                            fill="#3F3D56"
                        />
                        <path
                            d="M304.306 219.49L306.875 215.93L304.271 220.372L303.989 219.878L304.306 219.49Z"
                            fill="#3F3D56"
                        />
                        <path
                            d="M304.025 223.087L301.456 219.526L304.06 223.968L304.341 223.475L304.025 223.087Z"
                            fill="#3F3D56"
                        />
                        <path
                            d="M350.33 257.148H288.147C288.061 257.149 287.975 257.141 287.891 257.125C287.458 257.064 287.061 256.848 286.774 256.518C286.487 256.187 286.329 255.764 286.329 255.326V239.774C292.18 238.797 298.103 238.314 304.035 238.332C326.109 238.332 344.573 244.669 349.203 253.152C349.902 254.371 350.289 255.743 350.33 257.148Z"
                            fill="#3F3D56"
                        />
                        <path
                            d="M412.691 251.8V255.326C412.691 255.809 412.5 256.273 412.158 256.614C411.817 256.956 411.355 257.148 410.873 257.148H342.074C344.287 255.542 346.679 254.201 349.203 253.152C357.632 249.531 369.52 247.273 382.69 247.273C394.137 247.273 404.608 248.972 412.691 251.8Z"
                            fill="#3F3D56"
                        />
                        <path
                            d="M357.647 0C357.405 0.000335372 357.167 0.0603081 356.953 0.174637L231.829 66.8502C231.482 67.0357 231.224 67.3511 231.109 67.7275C230.994 68.1038 231.033 68.5104 231.217 68.858L278.991 158.831C279.176 159.178 279.491 159.438 279.866 159.553C280.242 159.668 280.648 159.629 280.995 159.445L406.119 92.7691C406.466 92.5838 406.725 92.2684 406.84 91.892C406.955 91.5156 406.916 91.109 406.732 90.7613L358.957 0.788318C358.867 0.615803 358.742 0.463082 358.592 0.339003C358.442 0.214924 358.268 0.121955 358.082 0.0654846C357.941 0.0222266 357.795 0.000157922 357.647 0Z"
                            fill="#E6E6E6"
                        />
                        <path
                            d="M354.317 11.9032L388.268 75.843C388.381 76.0544 388.45 76.2859 388.473 76.5243C388.496 76.7626 388.472 77.0032 388.402 77.2322C388.332 77.4612 388.218 77.6742 388.066 77.859C387.914 78.0438 387.727 78.1967 387.516 78.3091L279.167 136.046C279.091 136.087 279.01 136.122 278.928 136.15C278.516 136.299 278.065 136.294 277.657 136.136C277.249 135.979 276.911 135.679 276.706 135.292L242.755 71.3522C242.643 71.1409 242.573 70.9094 242.55 70.671C242.527 70.4327 242.551 70.1921 242.621 69.9631C242.691 69.7341 242.805 69.5211 242.957 69.3363C243.109 69.1515 243.296 68.9986 243.507 68.8862L351.856 11.1497C352.067 11.0372 352.298 10.9674 352.536 10.9444C352.774 10.9214 353.014 10.9455 353.242 11.0155C353.471 11.0855 353.684 11.1999 353.868 11.3522C354.053 11.5045 354.205 11.6918 354.317 11.9032Z"
                            fill="white"
                        />
                        <path
                            d="M281.9 95.0797C290.719 95.0797 297.868 87.9179 297.868 79.0833C297.868 70.2487 290.719 63.0869 281.9 63.0869C273.081 63.0869 265.932 70.2487 265.932 79.0833C265.932 87.9179 273.081 95.0797 281.9 95.0797Z"
                            fill="#FF6584"
                        />
                        <path
                            d="M349.217 99.0467L280.058 135.9C279.972 135.947 279.882 135.986 279.789 136.017L282.361 61.8297C282.373 61.3699 282.506 60.9214 282.748 60.5302C282.989 60.139 283.33 59.8191 283.736 59.603C284.141 59.387 284.596 59.2826 285.055 59.3006C285.514 59.3186 285.96 59.4583 286.347 59.7054L328.523 86.0964L330.543 87.3586L349.217 99.0467Z"
                            fill="#3F3D56"
                        />
                        <path
                            opacity="0.2"
                            d="M349.217 99.0469L325.605 111.629L328.24 88.586L328.429 86.9262L328.524 86.0963L330.543 87.3588L349.217 99.0469Z"
                            fill="black"
                        />
                        <path
                            d="M387.724 78.5273L327.907 110.402L330.543 87.3586L330.732 85.699L334.165 55.6697C334.39 53.7014 336.725 52.3423 338.557 52.9805C338.681 53.0246 338.802 53.0767 338.919 53.1363L387.724 78.5273Z"
                            fill="#3F3D56"
                        />
                        <path
                            d="M235.977 70.9657C237.177 70.9657 238.151 69.9907 238.151 68.7881C238.151 67.5855 237.177 66.6105 235.977 66.6105C234.776 66.6105 233.803 67.5855 233.803 68.7881C233.803 69.9907 234.776 70.9657 235.977 70.9657Z"
                            fill="#3F3D56"
                        />
                        <path
                            d="M355.984 7.01703C357.184 7.01703 358.157 6.0421 358.157 4.83946C358.157 3.63682 357.184 2.6619 355.984 2.6619C354.783 2.6619 353.81 3.63682 353.81 4.83946C353.81 6.0421 354.783 7.01703 355.984 7.01703Z"
                            fill="#3F3D56"
                        />
                        <path
                            d="M281.71 157.094C282.91 157.094 283.883 156.119 283.883 154.916C283.883 153.714 282.91 152.739 281.71 152.739C280.509 152.739 279.536 153.714 279.536 154.916C279.536 156.119 280.509 157.094 281.71 157.094Z"
                            fill="#3F3D56"
                        />
                        <path
                            d="M401.716 93.1451C402.916 93.1451 403.889 92.1702 403.889 90.9675C403.889 89.7649 402.916 88.79 401.716 88.79C400.515 88.79 399.542 89.7649 399.542 90.9675C399.542 92.1702 400.515 93.1451 401.716 93.1451Z"
                            fill="#3F3D56"
                        />
                        <path
                            d="M387.944 430.95C388.324 431.05 388.728 430.996 389.068 430.799C389.408 430.601 389.656 430.277 389.757 429.897L415.91 331.412C416.011 331.031 415.957 330.626 415.759 330.285C415.562 329.945 415.238 329.697 414.858 329.595L277.897 293.096C277.517 292.995 277.112 293.05 276.772 293.247C276.433 293.445 276.185 293.769 276.084 294.15L249.932 392.634C249.882 392.823 249.869 393.019 249.895 393.213C249.921 393.406 249.984 393.592 250.082 393.761C250.18 393.929 250.31 394.077 250.464 394.196C250.619 394.314 250.795 394.401 250.983 394.451L387.944 430.95Z"
                            fill="#E6E6E6"
                        />
                        <path
                            d="M404.955 336.388L386.37 406.379C386.246 406.846 385.942 407.245 385.524 407.487C385.107 407.729 384.611 407.796 384.145 407.672L265.544 376.066C265.46 376.045 265.379 376.015 265.301 375.978C264.899 375.807 264.571 375.497 264.378 375.103C264.186 374.71 264.142 374.26 264.254 373.837L282.839 303.845C282.963 303.379 283.267 302.98 283.685 302.738C284.102 302.495 284.598 302.429 285.064 302.553L403.665 334.159C404.131 334.283 404.529 334.588 404.771 335.006C405.013 335.424 405.079 335.921 404.955 336.388Z"
                            fill="white"
                        />
                        <path
                            d="M389.01 396.437L386.37 406.38C386.246 406.846 385.942 407.245 385.524 407.487C385.107 407.729 384.611 407.796 384.145 407.672L265.544 376.066C265.46 376.045 265.379 376.015 265.301 375.978C264.899 375.807 264.571 375.497 264.378 375.103C264.186 374.71 264.142 374.26 264.254 373.837L266.894 363.894L389.01 396.437Z"
                            fill="#3F3D56"
                        />
                        <path
                            d="M336.607 388.833L317.738 383.805L317.165 385.965L336.033 390.993L336.607 388.833Z"
                            fill="#CCCCCC"
                        />
                        <path
                            d="M293.209 377.268L274.341 372.24L273.767 374.4L292.636 379.428L293.209 377.268Z"
                            fill="#CCCCCC"
                        />
                        <path
                            d="M380.004 400.398L361.135 395.37L360.562 397.53L379.43 402.558L380.004 400.398Z"
                            fill="#CCCCCC"
                        />
                        <path
                            d="M279.618 299.522C280.818 299.522 281.791 298.547 281.791 297.345C281.791 296.142 280.818 295.167 279.618 295.167C278.417 295.167 277.444 296.142 277.444 297.345C277.444 298.547 278.417 299.522 279.618 299.522Z"
                            fill="#3F3D56"
                        />
                        <path
                            d="M410.977 334.528C412.178 334.528 413.151 333.553 413.151 332.351C413.151 331.148 412.178 330.173 410.977 330.173C409.777 330.173 408.804 331.148 408.804 332.351C408.804 333.553 409.777 334.528 410.977 334.528Z"
                            fill="#3F3D56"
                        />
                        <path
                            d="M254.583 393.798C255.784 393.798 256.757 392.823 256.757 391.621C256.757 390.418 255.784 389.443 254.583 389.443C253.383 389.443 252.41 390.418 252.41 391.621C252.41 392.823 253.383 393.798 254.583 393.798Z"
                            fill="#3F3D56"
                        />
                        <path
                            d="M385.943 428.804C387.143 428.804 388.117 427.83 388.117 426.627C388.117 425.424 387.143 424.449 385.943 424.449C384.742 424.449 383.769 425.424 383.769 426.627C383.769 427.83 384.742 428.804 385.943 428.804Z"
                            fill="#3F3D56"
                        />
                        <path
                            d="M359.844 391.902L370.33 394.702L370.773 393.035L360.288 390.234L359.844 391.902Z"
                            fill="#3F3D56"
                        />
                        <path
                            d="M284.365 370.402L286.396 371.48L368.614 393.438L369.812 391.909C371.888 389.292 373.197 386.149 373.592 382.83C373.871 380.352 373.612 377.747 371.87 376.181L374.686 350.861L329.214 338.656L307.836 348.187C307.836 348.187 299.573 345.825 293.569 350.248C291.386 351.907 289.752 354.185 288.88 356.786L287.925 359.665L284.365 370.402Z"
                            fill="#6C63FF"
                        />
                        <path
                            d="M302.534 385.334C308.337 385.334 313.041 380.621 313.041 374.808C313.041 368.995 308.337 364.282 302.534 364.282C296.731 364.282 292.027 368.995 292.027 374.808C292.027 380.621 296.731 385.334 302.534 385.334Z"
                            fill="#3F3D56"
                        />
                        <path
                            d="M302.534 380.348C305.588 380.348 308.064 377.868 308.064 374.808C308.064 371.749 305.588 369.268 302.534 369.268C299.48 369.268 297.004 371.749 297.004 374.808C297.004 377.868 299.48 380.348 302.534 380.348Z"
                            fill="#CCCCCC"
                        />
                        <path
                            d="M352.631 398.713C358.434 398.713 363.138 394 363.138 388.187C363.138 382.374 358.434 377.661 352.631 377.661C346.828 377.661 342.124 382.374 342.124 388.187C342.124 394 346.828 398.713 352.631 398.713Z"
                            fill="#3F3D56"
                        />
                        <path
                            d="M352.631 393.727C355.685 393.727 358.161 391.247 358.161 388.187C358.161 385.128 355.685 382.647 352.631 382.647C349.577 382.647 347.101 385.128 347.101 388.187C347.101 391.247 349.577 393.727 352.631 393.727Z"
                            fill="#CCCCCC"
                        />
                        <path
                            d="M315.271 348.388L339.83 354.945L342.829 355.744L347.891 357.097L347.989 356.726L349.177 352.268L350.51 347.261L347.142 346.364L344.144 345.561L338.834 344.142L335.836 343.343L329.705 341.706L315.271 348.388Z"
                            fill="white"
                        />
                        <path
                            d="M351.886 358.165L364.866 361.632L365.547 359.081L366.731 354.622L367.485 351.797L365.584 351.29L362.587 350.487L354.502 348.329L351.886 358.165Z"
                            fill="white"
                        />
                        <path
                            d="M343.433 367.16L345.097 367.605L345.94 364.437L344.276 363.992L343.433 367.16Z"
                            fill="#3F3D56"
                        />
                        <path
                            d="M320.729 354.666L321.173 352.999L318.011 352.154L317.567 353.822L320.729 354.666Z"
                            fill="#3F3D56"
                        />
                        <path
                            d="M319.812 353.421L319.629 353.372C318.707 353.126 317.92 352.523 317.441 351.695C316.963 350.867 316.832 349.883 317.078 348.959C317.324 348.035 317.927 347.246 318.753 346.767C319.579 346.288 320.561 346.157 321.484 346.403L321.667 346.452L319.812 353.421Z"
                            fill="#3F3D56"
                        />
                        <path
                            d="M287.925 359.665C289.147 360.138 290.497 360.163 291.736 359.736C292.975 359.31 294.024 358.459 294.699 357.334C295.373 356.208 295.63 354.881 295.423 353.585C295.216 352.289 294.559 351.107 293.568 350.248C291.385 351.907 289.752 354.185 288.88 356.786L287.925 359.665Z"
                            fill="#3F3D56"
                        />
                        <path
                            d="M344.144 345.561L347.989 356.726L349.177 352.268L347.142 346.364L344.144 345.561Z"
                            fill="#F2F2F2"
                        />
                        <path
                            d="M362.586 350.487L365.547 359.081L366.731 354.622L365.584 351.29L362.586 350.487Z"
                            fill="#F2F2F2"
                        />
                        <path
                            d="M335.835 343.343L339.83 354.945L342.829 355.744L338.834 344.142L335.835 343.343Z"
                            fill="#F2F2F2"
                        />
                        <path
                            d="M22.323 173.415C26.0201 173.415 29.0172 170.413 29.0172 166.709C29.0172 163.005 26.0201 160.003 22.323 160.003C18.626 160.003 15.6289 163.005 15.6289 166.709C15.6289 170.413 18.626 173.415 22.323 173.415Z"
                            fill="#6C63FF"
                        />
                        <path
                            opacity="0.2"
                            d="M25.1487 160.636C26.3357 161.713 27.0974 163.181 27.2953 164.773C27.4932 166.364 27.1142 167.975 26.2271 169.31C25.3401 170.646 24.0039 171.618 22.4618 172.05C20.9196 172.482 19.2739 172.345 17.824 171.664C18.5364 172.315 19.3808 172.803 20.2992 173.096C21.2177 173.389 22.1885 173.48 23.1452 173.362C24.1019 173.244 25.0218 172.921 25.842 172.413C26.6623 171.906 27.3634 171.227 27.8973 170.423C28.4313 169.62 28.7855 168.709 28.9356 167.756C29.0858 166.802 29.0284 165.827 28.7674 164.897C28.5063 163.968 28.0478 163.106 27.4232 162.37C26.7987 161.635 26.0228 161.043 25.1487 160.636Z"
                            fill="black"
                        />
                        <path
                            d="M194.418 180.68C203.507 180.68 210.874 177.678 210.874 173.974C210.874 170.27 203.507 167.268 194.418 167.268C185.329 167.268 177.962 170.27 177.962 173.974C177.962 177.678 185.329 180.68 194.418 180.68Z"
                            fill="#3F3D56"
                        />
                        <path
                            opacity="0.2"
                            d="M194.418 167.268C193.853 167.268 193.295 167.279 192.745 167.302C201.047 167.644 207.528 170.5 207.528 173.974C207.528 177.447 201.047 180.304 192.745 180.646C193.295 180.668 193.853 180.68 194.418 180.68C203.507 180.68 210.875 177.678 210.875 173.974C210.875 170.27 203.507 167.268 194.418 167.268Z"
                            fill="black"
                        />
                        <path
                            d="M215.895 173.974H133.334V165.033C133.334 164.588 133.158 164.161 132.844 163.847C132.53 163.533 132.104 163.356 131.661 163.356H85.9173C85.4735 163.356 85.0478 163.533 84.7339 163.847C84.4201 164.161 84.2438 164.588 84.2438 165.033V173.974H36.2692V168.386C36.2692 167.941 36.0928 167.514 35.779 167.2C35.4652 166.886 35.0395 166.709 34.5956 166.709H10.0505C9.60663 166.709 9.18097 166.886 8.86712 167.2C8.55327 167.514 8.37694 167.941 8.37694 168.386V173.974H1.68281C1.46296 173.974 1.24521 174.017 1.04203 174.101C0.83886 174.185 0.654258 174.309 0.498797 174.464C0.343337 174.62 0.220073 174.805 0.136074 175.009C0.0520752 175.212 0.00898511 175.43 0.00927884 175.65V285.742C0.00898511 285.962 0.0520752 286.18 0.136074 286.384C0.220073 286.587 0.343337 286.772 0.498797 286.928C0.654258 287.083 0.83886 287.207 1.04203 287.291C1.24521 287.375 1.46296 287.418 1.68281 287.418H215.895C216.115 287.418 216.333 287.375 216.536 287.291C216.739 287.207 216.924 287.083 217.079 286.928C217.235 286.772 217.358 286.587 217.442 286.384C217.526 286.18 217.569 285.962 217.569 285.742V175.65C217.569 175.43 217.526 175.212 217.442 175.009C217.358 174.805 217.235 174.62 217.079 174.464C216.924 174.309 216.739 174.185 216.536 174.101C216.333 174.017 216.115 173.974 215.895 173.974Z"
                            fill="#3F3D56"
                        />
                        <path
                            opacity="0.2"
                            d="M215.886 279.208H1.67353C1.45368 279.208 1.23593 279.165 1.03276 279.081C0.829583 278.997 0.644972 278.873 0.489511 278.717C0.334051 278.562 0.210796 278.377 0.126797 278.173C0.0427978 277.97 -0.000292235 277.751 1.49159e-06 277.531V285.355C-0.000292235 285.575 0.0427978 285.793 0.126797 285.997C0.210796 286.2 0.334051 286.385 0.489511 286.541C0.644972 286.697 0.829583 286.82 1.03276 286.905C1.23593 286.989 1.45368 287.032 1.67353 287.032H215.886C216.106 287.032 216.323 286.989 216.527 286.905C216.73 286.82 216.914 286.697 217.07 286.541C217.225 286.385 217.349 286.2 217.433 285.997C217.517 285.793 217.56 285.575 217.559 285.355V277.531C217.56 277.751 217.517 277.97 217.433 278.173C217.349 278.377 217.225 278.562 217.07 278.717C216.914 278.873 216.73 278.997 216.527 279.081C216.323 279.165 216.106 279.208 215.886 279.208Z"
                            fill="black"
                        />
                        <path
                            opacity="0.2"
                            d="M217.569 225.387H0.00927734V246.623H217.569V225.387Z"
                            fill="black"
                        />
                        <path
                            opacity="0.2"
                            d="M217.569 214.769H0.00927734V236.005H217.569V214.769Z"
                            fill="black"
                        />
                        <path
                            d="M217.569 219.799H0.00927734V241.035H217.569V219.799Z"
                            fill="#6C63FF"
                        />
                        <path
                            d="M108.789 272.888C132.204 272.888 151.185 253.873 151.185 230.417C151.185 206.96 132.204 187.945 108.789 187.945C85.3742 187.945 66.3928 206.96 66.3928 230.417C66.3928 253.873 85.3742 272.888 108.789 272.888Z"
                            fill="#6C63FF"
                        />
                        <path
                            opacity="0.2"
                            d="M141.445 203.333C146.839 212.538 148.574 223.44 146.307 233.869C144.039 244.298 137.935 253.489 129.209 259.613C120.483 265.738 109.775 268.346 99.2157 266.919C88.6568 265.492 79.0216 260.134 72.2275 251.912C75.1905 256.97 79.1672 261.359 83.9069 264.801C88.6466 268.244 94.0467 270.665 99.7669 271.914C105.487 273.162 111.403 273.21 117.143 272.055C122.883 270.899 128.321 268.565 133.116 265.2C137.911 261.835 141.958 257.512 145.002 252.502C148.046 247.493 150.022 241.906 150.805 236.094C151.587 230.282 151.16 224.37 149.549 218.732C147.938 213.093 145.179 207.85 141.445 203.333Z"
                            fill="black"
                        />
                        <path
                            d="M108.789 262.023C126.214 262.023 140.339 247.873 140.339 230.417C140.339 212.961 126.214 198.81 108.789 198.81C91.3637 198.81 77.238 212.961 77.238 230.417C77.238 247.873 91.3637 262.023 108.789 262.023Z"
                            fill="#3F3D56"
                        />
                        <path
                            d="M133.334 230.417C133.339 233.755 132.661 237.058 131.342 240.124C130.636 241.777 129.747 243.346 128.693 244.801C126.614 247.691 123.933 250.093 120.835 251.843C117.738 253.592 114.298 254.646 110.754 254.932C107.209 255.218 103.645 254.73 100.308 253.5C96.9712 252.27 93.9407 250.329 91.4264 247.81C88.9121 245.291 86.9742 242.255 85.7466 238.912C84.5191 235.569 84.0312 231.999 84.3169 228.448C84.6025 224.898 85.6548 221.452 87.401 218.349C89.1471 215.246 91.5455 212.56 94.4299 210.477C95.8826 209.421 97.4487 208.53 99.0991 207.823C102.833 206.216 106.907 205.564 110.954 205.923C115.002 206.283 118.897 207.643 122.291 209.883C125.684 212.122 128.47 215.171 130.397 218.755C132.324 222.339 133.334 226.346 133.334 230.417Z"
                            fill="white"
                        />
                        <path
                            opacity="0.2"
                            d="M133.072 226.834C132.157 220.583 128.87 214.925 123.896 211.039C126.052 214.419 127.349 218.277 127.674 222.275C128 226.273 127.344 230.291 125.764 233.976C125.058 235.63 124.169 237.199 123.114 238.654C121.183 241.338 118.731 243.604 115.904 245.315C113.078 247.026 109.935 248.149 106.666 248.614C103.396 249.079 100.066 248.879 96.8754 248.024C93.6849 247.168 90.6997 245.677 88.0986 243.638C90.2513 247.023 93.1986 249.828 96.6831 251.808C100.168 253.789 104.083 254.884 108.088 254.999C112.092 255.114 116.064 254.244 119.656 252.467C123.248 250.689 126.35 248.057 128.693 244.801C129.747 243.346 130.636 241.777 131.342 240.124C133.135 235.94 133.734 231.339 133.072 226.835V226.834Z"
                            fill="black"
                        />
                    </svg>
                    <Button
                        onClick={() =>
                            history.push(
                                `/register/${FORM_ROUTES.nonTechEvents.photography}`
                            )
                        }
                    >
                        Register
                    </Button>
                </RegisterWrapper>
            </MainContentWrapper>
        </EventWrapper>
    )
}