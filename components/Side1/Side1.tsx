import React from 'react';
import Download from './components/Download/Download';
import Selfie from './components/Selfie/Selfie';
import Text from './components/Text/Text';
import './Side1.scss';

const Side1 = () => {
    return ( <aside className="side1Container">
    <Selfie />
    <Text />
    <Download />
</aside>);
};

export default Side1;
