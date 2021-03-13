import React, {useEffect, useState} from 'react';
import {UncontrolledAlert} from "reactstrap";

const Alert = (props) => {
    const [alertProps, setAlertProps] = useState({
        title: props.title,
        message: props.message,
        color: props.color
    });

    useEffect(() => {
        setAlertProps({
            title: props.title,
            message: props.message,
            color: props.color
        })
    }, [props]);

    return(
        <UncontrolledAlert color={props.color} fade={true}>
          <span className="alert-inner--icon">
            <i className="ni ni-support-16" />
          </span>
            <span className="alert-inner--text ml-1">
            <strong>{alertProps.title}</strong> {alertProps.message}
          </span>
        </UncontrolledAlert>
    );
}

export default Alert;

