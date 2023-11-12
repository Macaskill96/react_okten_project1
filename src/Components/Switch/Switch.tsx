import React from 'react';

import './switch.styles.css';
import {useTheme} from "../../hooks";




const Switch:React.FC = () => {
    const {changeTrigger, theme} = useTheme()

    const handleToggle = () => {
        changeTrigger()
    };

    const body = document.body
    body.classList.toggle('dark-theme', !theme)
    body.classList.toggle('light-theme', theme)


    return (
        <div className={'divSwitch'}>
            <div className='toggle-switch'>
                <label className='labelSwitch'>
                    <input
                        type='checkbox'
                        className='inputSwitch'
                        checked={theme}
                        onChange={handleToggle}
                    />
                    <span className='slider'></span>
                </label>
            </div>
        </div>
    );
};

export { Switch };
