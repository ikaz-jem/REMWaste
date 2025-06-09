import * as React from 'react';
import '@progress/kendo-theme-default/dist/all.css';
import { Stepper } from '@progress/kendo-react-layout';
import {
    cartIcon,
    dollarIcon,
    eyeIcon,
    mapMarkerIcon,
    trackChangesAcceptIcon,calendarDateIcon
} from '@progress/kendo-svg-icons';

const items = [
    { label: 'Location', svgIcon: mapMarkerIcon },
    { label: 'Select Skip', svgIcon: eyeIcon},
    { label: 'Permit Check', svgIcon: trackChangesAcceptIcon },
    { label: 'Date', svgIcon: calendarDateIcon },
    { label: 'Payment Method', svgIcon: dollarIcon },
];

const DemoStepper = () => {
    const [value, setValue] = React.useState(1);

    const handleChange = (e) => {
        setValue(e.value);
    };

    return (
        <Stepper   value={value} orientation='horizontal'  items={items} className='opacity-70 my-0 !p-0'/>
    );
};

export default DemoStepper;
