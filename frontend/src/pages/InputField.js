import React from 'react'
import { FaUser, FaLock } from 'react-icons/fa'
import { useState } from 'react'

const InputField = ({ placeholder, iconType, onInputChange }) => {
    const [ focused, setFocused ] = useState(false);
    const [ value, setValue ] = useState("");

    const onValueChanged = (e) => {
        var newValue = e.target.value;
        setValue(newValue);
        onInputChange(newValue)
    }

    return (
        <div className="input-container">
            {iconType === 'user' ? <FaUser className={'icon' + (focused || value.length > 0 ? ' focused' : '')}/> : <FaLock className={'icon' + (focused || value.length > 0 ? ' focused' : '')}/>}
            <input className={value.length > 0 ? 'focused' : ''} type={(iconType === 'user' ? 'text' : 'password')} placeholder={placeholder} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} onChange={e => onValueChanged(e)}/>
        </div>
    )
}

export default InputField
