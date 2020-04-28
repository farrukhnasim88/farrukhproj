import React from 'react';
import { AwesomeButton } from "react-awesome-button";
import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";


function Button() {





    return (
        <AwesomeButton
            className="btn-aws"
            cssModule={AwesomeButtonStyles}
            type="secondary"
            size="large"
          
            
            ripple
            onPress={() => {
                localStorage.clear();
            }}
        >
           Clear Storage
    </AwesomeButton>
    );
}

export default Button;