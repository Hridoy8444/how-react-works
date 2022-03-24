import React from 'react';
import DeviceDettail from '../DeviceDetail/DeviceDettail';

const Device = (props) => {
    return (
        <div>
            <h2>I Have: {props.name}</h2>
            <DeviceDettail price={props.price}></DeviceDettail>
        </div>
    );
};

export default Device;