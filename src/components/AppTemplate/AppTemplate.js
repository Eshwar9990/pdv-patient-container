import React from 'react';
import ReactNotification from "react-notifications-component";

import PdvPatientList from 'pdv-patient-list/lib/containers/App/App';
import PdvPatientData from 'pdv-patient-data/lib/Routes';
import Logo from "../../assets/cerner_logo.png";
import './AppTemplate.css';

// Dumb View component for App in container -> Wrapper for PatientList and PatientForm components.
export const AppTemplate = (props) => {
    return (
        <div>
            <div className="header">
                <center>
                    <img src={Logo} height="45" className="logo" alt="Cerner_Logo" />
                    <span className="app-heading">Patient Dashboard</span>
                </center>
            </div>
            <div className="row contentBox">
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12" style={{padding: "4px"}}>
                    <PdvPatientList notification={props.showNotification} />
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 patientDataContainer">
                    <PdvPatientData />
                </div>
            </div>
            <div className="app-content">
                <ReactNotification ref={props.notificationDOMRef} />
            </div>
        </div>
    );
};