import React from 'react'
import { FaUser, FaLock } from 'react-icons/fa'
import { useState } from 'react'

const InputField = ({ placeholder, iconType }) => {
    const [ focused, setFocused ] = useState(false);
    const [ value, setValue ] = useState("");

    return (
        <div className="input-container">
            {iconType === 'user' ? <FaUser className={'icon' + (focused || value.length > 0 ? ' focused' : '')}/> : <FaLock className={'icon' + (focused || value.length > 0 ? ' focused' : '')}/>}
            <input className={value.length > 0 ? 'focused' : ''} type={(iconType === 'user' ? 'text' : 'password')} placeholder={placeholder} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} onChange={e => setValue(e.target.value)}/>
        </div>
    )
}

export default InputField
