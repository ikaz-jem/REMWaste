import * as React from 'react';
import '@progress/kendo-theme-default/dist/all.css';
import { Stepper } from '@progress/kendo-react-layout';
import {
    dollarIcon,
    eyeIcon,
    mapMarkerIcon,
    trackChangesAcceptIcon,calendarDateIcon,
    cartIcon
} from '@progress/kendo-svg-icons';

const items = [
    { label: 'Location', svgIcon: mapMarkerIcon },
    { label: 'Skips', svgIcon: eyeIcon},
    { label: 'Permit', svgIcon: trackChangesAcceptIcon },
    { label: 'Date', svgIcon: calendarDateIcon },
    { label: 'Checkout', svgIcon: cartIcon },
];

const DemoStepper = () => {
    const [value, setValue] = React.useState(1);


    return (
        <Stepper   value={value} orientation='horizontal'  items={items} className='opacity-70 my-0 !p-0'/>
    );
};

export default DemoStepper;
