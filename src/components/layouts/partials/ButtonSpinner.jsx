import React, {useEffect, useState} from 'react';

const ButtonSpinner = ({ imageUrl, size }) => {

    return (
        <>
           <img width={size ? size : '28px'} src={imageUrl ? imageUrl : '../../../images/assets/spinner-white.svg'} alt="button spinner"/>
        </>
    )

}

export default ButtonSpinner;