import React, { FC } from "react";
import Image from 'react-bootstrap/Image'
import logo from '../../../../../../../../assets/img/logo.jpg'

const Logo: FC = () => {
    return (
        <a href="/" className="logo d-flex justify-content-center">
            <Image src={logo} alt="cinema logo" height="70" roundedCircle />
        </a>
    );
};

export { Logo };