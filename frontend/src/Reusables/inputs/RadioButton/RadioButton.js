import React from "react";
import { Wrapper, Radio, Label } from "./Style";

export default function RadioButton(props) {

    /*
        state = {
            radioBtn : {
                id: 1 ==> required ==> number
                active: false  => required => boolean
                label: "Label" => required => string
            }
            value: ""      => to store the radio btn value
        }
        
        handlerRadioBtnClick = (value) => {
            this.setState({value})
        }

        Example : <RadioButton 
                   radioBtnClick = {this.handlerRadioBtnCLick}
                   active = {this.state.radioBtn.active}
                   label = {this.state.radioBtn.label}
                   />
    */


    return (
        <Wrapper label={props.label}>
            <Radio
                onClick={() => {
                    props.radioBtnClick && props.radioBtnClick(props.id);
                }}
                active={props.active}
                label={props.label}
            />
            {props.label ? <Label>{props.label}</Label> : null}
        </Wrapper>
    );
}
