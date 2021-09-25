import React from 'react';

const Footer = (props) => {
    return(
        <footer>
            <p>Todos los derechos reservados - {props.fecha}</p>
        </footer>
    );
};

export default Footer;